## Create new module 
```console
ng g m Elements --routing
```

## How to use component from other module
![image](https://user-images.githubusercontent.com/28957748/126055756-2bf9d34a-1f0c-46b0-ba84-8a2c182a6cda.png)

#### :one: Expose component with `export`
```js
@NgModule({
  // ...
  exports: [ElementsHomeComponent]
})
export class ElementsModule { }
```

#### :two: Import module from other module
```js
@NgModule({
  // ...
  imports: [
    ElementsModule
  ],
  // ...
})
export class AppModule { }
```
