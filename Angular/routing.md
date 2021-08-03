## Basic routing
```js
const routes: Routes = [
  { path: 'collections', component: CollectionsHomeComponent }
];
```

## `<router-outlet>`
- Where routing logic happens, to decices what content to render based on url

## 2 ways to trigger client-routing
* Click link with `routerLink` prop
* In code, when something happens:
```js
import { Router } from '@angular/router';
// ...
this.router.navigateByUrl('/somewhere');
```

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

## Get param in url (:star: using `ActivatedRoute`)
* Assuming we're browsing below url
```js
{ path: "members/:id", component: MemberDetailComponent }
```
* How to extract id from url in any component
```js
// Inject ActivatedRoute obj at runtime
constructor(private route: ActivatedRoute) { }

// Get it
const id = this.route.snapshot.paramMap.get('id');
```

## Inject && Retrieve Query Params
* In html view
```html
<button routerLink="/members/{{ member.username }}" [queryParams]="{tab: 3}"></button>
```
* In destination component
```js
ngOnInit(): void {
  this.route.queryParamMap.subscribe(params => {
    console.log(params.get('tab'));
  });
}
```

## Route resolver
- Common sense: Fetch async data in `ngOnInit`
- Alternative: get data before navigating to the new route using `resolver`

##### :one: Fetch data in resolver first
```js
export class NewsResolver implements Resolve<any> {
  constructor(private newsService: NewsService) {}

  resolve(): Observable<any> {
    return this.newsService.getTopPosts();
  }
}
```

##### :two: Access data in component through `route`
```js
@Component({ ... })
export class TopComponent implements OnInit {
  data: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.data = this.route.snapshot.data;
  }
}
```

## ⚠️ Problem with router (navigate to same route)
* By defaut, when navigating to same route => Angular does nothing
* Quick fix: No reuse route -> reload it again
```
this.router.routeReuseStrategy.shouldReuseRoute = () => false;
```
