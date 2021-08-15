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
const oldEle = MyComponent(props1);
const newEle = MyComponent(props2);

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
- Props can be `object`, `array`, `function`
```js
//// Approach 1: Keep props passed down as primitive type
<FeedPost key={post.id} post={post} />
<FeedPost key={post.id} {...post} />

//// Approach 2: For object types, keep referential identity between rendering with `useMemo` || `useCallback`
const handleNewPostSuccess = () => { ... }
/////// OPTIMIZED
const handleNewPostSuccess = useMemo(() => () => {
  // ...
}, [x, y]);
/////// OR
const handleNewPostSuccess = useCallback(() => {
  // ...
}, [x, y]);

<NewPost date={newPostDate} onSuccess={handleNewPostSuccess} />

```
#### :three:
