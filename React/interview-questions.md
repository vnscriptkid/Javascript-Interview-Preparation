## 1. Describe React life-cycle of functional component?
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
## 2. What are the reasons that make component to be re-rendered?
  1. Its props change
  2. Its internal state changes
  3. It is consuming context values which have changed
  4. Its parent re-renders
