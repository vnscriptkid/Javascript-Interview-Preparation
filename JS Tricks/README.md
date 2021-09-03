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

## `obj.current` pattern
```js
function setup(opts) {
  let result = {}
  function TestComponent() {
    result.current = useCounter(opts) // make sure we don't reassign the result obj
    return null
  }

  render(<TestComponent />)

  return result
}

test('exposes the count and increment/decrement functions', () => {
  let result = setup()
  // ...
}  
```
