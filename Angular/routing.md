## Basic routing

## `<router-outlet>`

## `routerLink` client routing
- 🚫 Full reload
```html
<a href="/elements">Elements</a>
```
- ✔️ Client side work
```html
<a routerLink="/elements">Elements</a>
```

## Active link
![image](https://user-images.githubusercontent.com/28957748/126058066-123869c6-a607-481d-b26d-2b036edc3cfe.png)

```html
<a class="item" routerLink="/elements" routerLinkActive="active">Elements</a>7
```

## Order of importing modules matters
```js
@NgModule({
  imports: [
    BrowserModule,
    CollectionsModule,
    ElementsModule,
    AppRoutingModule,
  ],
})
export class AppModule { }
```

![image](https://user-images.githubusercontent.com/28957748/126058295-14cf4b4f-db9b-4141-a2f4-e7fe6b36c9ef.png)

