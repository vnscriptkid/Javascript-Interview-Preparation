## Defer a promise, decide time to resolve
```js
function deferred() {
  let resolve, reject
  const promise = new Promise((res, rej) => {
    resolve = res
    reject = rej
  })
  return {promise, resolve, reject}
}

(async() => {
    const {promise, resolve} = deferred()
    console.log('start')
    console.log('promise now: ', promise)
    promise.then(() => console.log('done promise'))
    await Promise.resolve('do something 1').then(val => console.log(val))
    resolve()
    await promise
    await Promise.resolve('do something 2').then(val => console.log(val))
    console.log('final line')
})()
```
