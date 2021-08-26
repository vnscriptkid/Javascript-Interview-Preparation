## 🗽 useState 
#### 🌊 Demistify it
```js
const states = []
let calls = -1

function useState(defaultValue) {
  const callId = ++calls
  const existing = states[callId]

  if (existing) {
    return existing
  }

  function setValue(newValue) {
    states[callId][0] = newValue
    render()
  }

  const state = [defaultValue, setValue]
  states[callId] = state
  return state
}

function render() {
  calls = -1
  ReactDOM.render(<Minutes />, document.getElementById("root"))
}

```

#### ⚠️ Gotchas ☠️ Never do this
```js
// Never call state conditionally
if (minutes < 4) {
  const [error, setError] = useState(null)
}
```

#### setState is async
```js
const [targetId, setTargetId] = useState('');
    
function handleDeleteActivity(event: any) {
    setTargetId(event.target.name);
    // `targetId` here is not available yet as setTargetId is async
    deleteActivity(targetId)
    // fix
    // deleteActivity(event.target.name)
}
```

## 👇 useRef 
- Have direct access to DOM node through: `ref.current`
- Imperative way to change UI

## useEffect (Think in events 🥳)
* Runs after UI has been rendered
* `Effect` here means __side effects__
```js
// whenever message changes, we want to do something (side effect)
useEffect(() => {
  // do something
}, [message])
```
- 2 cases:
    - :one: Initial load
    - :two: whenever message changes

- What might be the side-effects:
  - 🛑 Upload UI ? Hmmm, you can but that's probably React's work (__Think in state__ 🗽)
  - ✔️ Fetch data ? Yes
  - ✔️ Save data to local? Perfect
  - ✔️ Play a sound ? Awesome
  - ✔️ Adjust scroll
- When side-effect does not happen?
```js
const first20Chars = message.substr(0, 20);
useEffect(() => {
  // do something
}, [first20Chars])
```
👉 Side effects do not happen when message is longer than 20 chars ( 😸 performance gains as we save function calls)

- Run on __every render__:
```js
useEffect(() => {
  // do something
})
```
- Run only __first render__:
```js
useEffect(() => {
  // do something
}, [])
// why: React try to compare the array between renders. 
// And run side-effect only when that array changes
// but in this case, array is empty so never run twice
```
- What to put inside `[ ]`
👉 Things inside side-effect function

- Custom useEffect hook is a way to compose __states__ and __behaviors__ 
- Potential memory leak
  - When it happens?
    - Component fetch data from api
    - Component get unmounted
    - Data comes back from api, run setState on unmounted component
    - Boom! Memory leak
  - Solution
  ```js
  const [user, setUser] = useState(null);
  useEffect(() => {
    let isMounted = true

    fetchUser(uid).then(user => {
      if (isMounted) setUser(user)
    })

    return () => {
      isMounted = false
    }
  }, [uid])
  // 1. Initializing state
  // 2. Set up subscription
  // 3. Clean up the subscription
  // 4. When the uid changes:
  //  - clean up the supscription
  //  - setup a new subscription
  ```
* Best practice
  - Do clean up for side-effect
  - Do not use sideEffect conditionally
  - Do not use async for sideEffect, use Promise instead (if you really want, wrap inside IIFE)
