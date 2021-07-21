## Use case 1: Error handling
* Idea: Intercept errors coming from server
  * Process in some ways
  * Throw out notifications
  * Redirect somewhere
* Generate new one
```console
ng g interceptor _interceptors/error
```
* intercept
```js
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
