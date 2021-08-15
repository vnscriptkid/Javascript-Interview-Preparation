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

#### :two: Skip diffing process if props unchanged
```js
const oldEle = MyComponent();
const newEle = MyComponent();

//// this is where we care about
const diff = compare(oldEle, newEle);
commitChanges(diff)
////
export default function FeedPost({ post }) { ... };
```

```js
export default memo(function FeedPost({ post }) { ... });
////
<FeedPost key={post.uid} post={post} />
//// behind the scene
if (propsChanged(oldEle.props, newEle.props)) {
  const diff = compare(oldEle, newEle);
  commitChanges(diff);
}
```

#### :three:
