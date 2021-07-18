## What && Why?
- Load what is needed first, don't load everything
- Improve performance

![image](https://user-images.githubusercontent.com/28957748/126061925-f0160921-3568-441f-8af6-6c879e89ca9d.png)

## How?
#### :one: Prevent `ElementsModule` being imported from `AppModule`
```js
@NgModule({
  // ...
  imports: [
    BrowserModule,
    CollectionsModule,
    // ElementsModule,
    AppRoutingModule,
  ],
  // ...
})
export class AppModule { }
```

#### :two: Determine when to load `ElementsModule` in `AppRoutingModule`
```js
const routes: Routes = [
  { path: 'elements', loadChildren: () => import('./elements/elements.module').then(m => m.ElementsModule) },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];
```

#### :three: Fix `routes` in `ElementsRoutingModule`
```js
const routes: Routes = [
  // { path: 'elements', component: ElementsHomeComponent }
  { path: '', component: ElementsHomeComponent }
];
```
