## :star: Usecase 1: Frontend Authorization
### 💡 Idea: Put a guard 💂 that checks if current user is authorized to enter the route ⛔
#### :one: Generate `CanActivate` guard
```console
ng g guard _guards/auth
```
#### :two: Implement guard
```js
export class AuthGuard implements CanActivate {

  constructor(private accountService: AccountService, private toastr: ToastrService) { }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.accountService.currentUser$.pipe(
      map((user) => {
        if (user) return true;
        this.toastr.error('You are not authorized');
        return false;
      })
    )
  }
  
}
```
#### :three: Register guard to route
```js
// src/app/app-routing.module.js
const routes: Routes = [
  { path: "/profile/edit", component: EditProfile, canActivate: [AuthGuard] }
];
```

## :star: Usecase 2: Prevent unsaved changes
### 💡 Idea: Put a guard 💂 when user leaving current route, navigating to another route
#### :one: Generate `CanDeactivate` guard
#### :two: Implement guard
```js
export class PreventUnsavedChangesGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: MemberEditComponent
  ): boolean {
    if (component.editForm.dirty) {
      return confirm('Unsaved changes will be lost. Do you want to continue?')
    }
    return true;
  }
}
```
#### :three: Register guard
```js
// src/app/app-routing.module.js
const routes: Routes = [
  { path: "member/edit", component: MemberEditComponent, canDeactivate: [PreventUnsavedChangesGuard] }
];
```
