## Memorize 🧠
* Services are injectable
* Services are singleton: once initialized, stays for the lifetime of app

## Register services
* Preferable way
```js
@Injectable({
  providedIn: 'root',
})
export class UserService {
}
```
* Old way (If this NgModule were the root AppModule, the UserService would be a singleton)
```js
@NgModule({
  ...
  providers: [UserService],
  ...
})
```
