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

## Use case 1: AccountService (handle login and register)
```js
export class AccountService {

  baseUrl = 'https://localhost:5001/api/account'
  
  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post(`${this.baseUrl}/login`, model);
  }
}
```
