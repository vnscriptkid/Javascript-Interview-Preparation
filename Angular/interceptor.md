## Use case 1: Error handling (after getting response)
* Idea: Intercept errors coming from server
  * Process in some ways
  * Throw out notifications
  * Redirect somewhere
* Generate new one
```console
ng g interceptor _interceptors/error
```
* Intercept response coming in
```js
// src/app/_interceptors/error.interceptor.ts
intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        catchError(error => {
          if (error) {
            switch (error.status) {
              case 400:
                if (error.error.errors) {
                  const modelStateErrors: any = [];

                  for (const errors of Object.values(error.error.errors)) {
                    modelStateErrors.push(errors);
                  }
                  
                  throw modelStateErrors.flat();
                } else {
                  this.toastr.error(error.error, error.status);
                }
                break;
              case 401:
                this.toastr.error("Unauthenticated", error.status);
                break;
              case 404:
                this.router.navigateByUrl("/not-found");
                break;
              case 500:
                this.router.navigateByUrl("/server-error");
                break;
              default:
                console.log('Something unexpected happens');
            }
          }
          throw error;
        })
      )
  }
```
* Register in app module
```js
providers: [
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
],
```

## Use case 2: Inject jwt token to headers of request (before sending request)
```js
// src/app/_interceptors/jwt.interceptor.ts
@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private accountService: AccountService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let currentUser: User;

    this.accountService.currentUser$.pipe(take(1)).subscribe(user => currentUser = user);
    
    if (currentUser) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`
        }
      })
    }
    
    return next.handle(request);
  }
}
```

## Use case 3: Show loading spinner ( 🚀 start when launching request, 🛑 stop after receiving response)

```js
// src/app/_interceptors/loading.interceptor.ts
@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private busyService: BusyService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.busyService.busy();
    
    return next.handle(request).pipe(
      delay(500),
      finalize(() => {
        this.busyService.idle();
      })
    );
  }
}
```
