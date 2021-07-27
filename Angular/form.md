## 2 types of form:
#### :one: Template form
* 2 ways binding
#### :two: Reactive form 
* best for handling events, form validations

## 2 way binding (🍌 box)

## Use case 1: Login form
* Register `FormsModule`
* Define object `creds` in component that holds credentials (username, password)
```js
creds: any = {};
```
* Add 2-ways binding for each input in template
```html
<input name="username" [(ngModel)]="creds.username" type="text">
```
* Add submit event binding 
```html
<form #loginForm="ngForm" (ngSubmit)="login()">
```
* Add submit event handler in component
```js
login() {
  console.log('login: ', this.creds);
}
```

## HowTo: Check if form has been modified
```html
<div *ngIf="editForm.dirty" class="alert alert-warning">
    <strong>Warning: </strong>
    You have made changes. Any unsaved changes will be lost.
</div>
<!--  -->
<form #editForm="ngForm">
```

## HowTo: Get a ref to form inside component
```js
export class MemberEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
}
```

## HowTo: Reset form's values
```js
updateInfo() {
  // update to server
  // ...
  this.editForm.reset(this.member);
}
```

## HowTo: Reactive Form
* Register module in `app.module.ts`
```js
imports: [
    ReactiveFormsModule
],
```
* Init form in component
```js
registerForm: FormGroup;

ngOnInit(): void {
  this.initializeForm();
}

initializeForm() {
  this.registerForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    passwordConfirm: new FormControl('')
  });
}
```
* Make it reactive in html
```html
<form [formGroup]="registerForm" (submit)="register()" autocomplete="off">
  <div class="form-group">
    <input formControlName="username" type="text" class="form-control" placeholder="Username" />    
  </div>
<!--  ...  -->
</form>
```

## HowTo: Validate reactive form
* On component side
```js
this.registerForm = new FormGroup({
  username: new FormControl('', Validators.required),
  password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
});
```

* On html side
```html
<div class="form-group">
    <input 
        formControlName="username" 
        type="text" 
        class="form-control" 
        placeholder="Username" 
        [class.is-invalid]="registerForm.get('username').errors && registerForm.get('username').touched"
    />    
    <div *ngIf="registerForm.get('username').hasError('required')" class="invalid-feedback">Please provide an username</div>  
</div>
```

## HowTo: Customize validation in reactive form
* On component side
```js
this.registerForm = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
    confirmPassword: new FormControl('', [Validators.required, this.matchValues('password')])
  });
  this.registerForm.controls.password.valueChanges.subscribe(() => {
    this.registerForm.controls.confirmPassword.updateValueAndValidity();
  });
}

matchValues(matchTo: string): ValidatorFn {
  return (control: AbstractControl) => {
    // @ts-ignore
    return control?.value === control?.parent?.controls[matchTo].value ? null : { isMatching: true };
  }
}
```
* On html side
```html
<div class="form-group">
    <input 
        formControlName="confirmPassword" 
        type="password" 
        class="form-control" 
        placeholder="Password"
        [class.is-invalid]="registerForm.get('confirmPassword').errors && registerForm.get('confirmPassword').touched"
    />    
    <div *ngIf="registerForm.get('confirmPassword').hasError('required')" class="invalid-feedback">Please provide a confirm password</div>  
    <div *ngIf="registerForm.get('confirmPassword').hasError('isMatching')" class="invalid-feedback">Confirm password must match password</div>  
</div>
```
