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

## 👇 useRef 
- Have direct access to DOM node through: `ref.current`
- Imperative way to change UI

## useEffect (Think in events 🥳)
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
