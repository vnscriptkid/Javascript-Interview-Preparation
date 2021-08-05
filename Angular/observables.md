## What is it?

## When to use?

## Alternative? Why choose one over another?
* Promise: the callback runs once
* Observable: the callback can runs whenever there's value emitted from source

## Benefits of async pipe
* Auto unsubscribe when component is unmounted, avoid memory leaks

## Create a observable
#### `Promise` version
```js
new Promise<boolean>((resolve) => {
  this.modalService.onHidden.subscribe(() => {
    resolve(this.modalRef.content.result);
  });
}) 
```

#### Conver to `Observable`
```js
new Observable<boolean>((observer) => {
  const sub = this.modalService.onHidden.subscribe(() => {
    observer.next(this.modalRef.content.result);
    observer.complete();
  });

  return {
    unsubscribe =       sub.unsubscribe();
    }
  }
}) 
```    
