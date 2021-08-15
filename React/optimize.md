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

#### :two: Speed up diffing process
```js
const oldEle = MyComponent();
const newEle = MyComponent();

//// this is where we care about
const diff = compare(oldEle, newEle);
commitChanges(diff)

////
export default function FeedPost({ post }) { ... };
////
export default function memo(FeedPost({ post }) { ... });
```
