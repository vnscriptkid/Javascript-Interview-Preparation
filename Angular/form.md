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
