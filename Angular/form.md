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
