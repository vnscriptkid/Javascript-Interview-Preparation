## Basic routing
```js
const routes: Routes = [
  { path: 'collections', component: CollectionsHomeComponent }
];
```

## `<router-outlet>`
- Where routing logic happens, to decices what content to render based on url

## `routerLink` client routing
* 🚫 Full reload
```html
<a href="/elements">Elements</a>
```
* ✔️ Client side work
```html
<a routerLink="/elements">Elements</a>
```

* :star: `routerLink` is relative path
#### `/currentPath` ➕ `./` 👉 `/currentPath`
```html
<a class="item" routerLink="./" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
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

## Nested routing
![image](https://user-images.githubusercontent.com/28957748/126116104-a50e0e4a-1238-4ff3-b551-888e26a34a84.png)

```js
const routes: Routes = [
  { path: '', component: CollectionsHomeComponent, children: [
    { path: '', component: BiographyComponent },
    { path: 'companies', component: CompaniesComponent },
    { path: 'partners', component: PartnersComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
```

```html
<!-- src/app/collections-home/collections-home.component.html -->
<router-outlet></router-outlet> 
```

