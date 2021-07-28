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

## useEffect
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
