## ❓ 1. Describe React life-cycle of functional component?
Here's the lifecycle of a React app:

```
→  render → reconciliation → commit
         ↖                   ↙
              state change
```
Let's define a few terms:

- The "render" phase: create React elements React.createElement
- The "reconciliation" phase: compare previous elements with the new ones
- The "commit" phase: update the DOM (if needed).
## ❓ 2. What are the reasons that make component to be re-rendered?
  1. Its props change
  2. Its internal state changes
  3. It is consuming context values which have changed
  4. Its parent re-renders

## ❓ 3. Differentiate between `React.memo` and `React.useMemo`? What are they for? Which part of life-cycle are they in?
## ❓ 4. What is the default behavior of `React.memo`, how to customize it?
## ❓ 5. Give an example when memoization is broken due to referential equality. How to fix it?
```js
function MyApp({ store, cookies }) {
  return (
    <div className="main">
      <header>
        <MemoizedLogout
          username={store.username}
          onLogout={() => cookies.clear('session')}
        />
      </header>
      {store.content}
    </div>
  );
}
```

```js
const MemoizedLogout = React.memo(Logout);

function MyApp({ store, cookies }) {
  const onLogout = useCallback(
    () => cookies.clear('session'), 
    [cookies]
  );
  return (
    <div className="main">
      <header>
        <MemoizedLogout
          username={store.username}
          onLogout={onLogout}
        />
      </header>
      {store.content}
    </div>
  );
}
```
