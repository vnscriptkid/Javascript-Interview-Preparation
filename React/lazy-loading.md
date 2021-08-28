## Why?
- Reduce bundle size, improve performance
- We don't want piece of code that users are not authorized to see, in client

## How?
- For example, lazy load authenticated content until user is logged in
```js
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Account = lazy(() => import("./pages/Account"));
const Inventory = lazy(() => import("./pages/Inventory"));
const Settings = lazy(() => import("./pages/Settings"));
const Users = lazy(() => import("./pages/Users"));
```
- Provide `<Suspense>` will fallback
```js
<Suspense fallback={<div>Loading...</div>}>
  <Switch> ... </Switch>
</Suspense>
```
