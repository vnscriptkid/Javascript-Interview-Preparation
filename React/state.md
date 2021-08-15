## Types of state
#### :one: Implicit state:
- By using communication channel `context`
#### :two: Explicit state
```js
const [posts, setPosts] = useState([]);
```
#### :three: Persistent state
```js
let cachedState = null
////
const initialState = cachedState || {
  posts: []
}
////
useEffect(() => {
  cachedState = state
})
```
