## What && Why?
- Load what is needed first, don't load everything
- Improve performance

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
