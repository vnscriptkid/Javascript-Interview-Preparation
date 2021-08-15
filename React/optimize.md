## Spots to look for:
#### :one: Expensive calculation inside component
```js
<SlowComponent />
// const ele = SlowComponent()
```
- Solution: `useMemo`, do expensive stuff only when we need to
```js
const result = useMemo(() => {
  return doExpensiveCal(x, y)
}, [x, y])
```
