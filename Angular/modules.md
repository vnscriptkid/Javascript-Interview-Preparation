## Create new module 
```console
ng g m Elements --routing
```

## How to use component from other module
![image](https://user-images.githubusercontent.com/28957748/126055994-f27f735e-5354-438c-b540-7fb61e4ad214.png)

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

## Module property definitions
![image](https://user-images.githubusercontent.com/28957748/126056010-9a5ae586-92ec-436e-8f51-c2de0b8146f9.png)
