## Jest run tests parallel on different Node instances
#### ⚠️ Problem 1: Multiple node instances using the same port
```js
const port = 8000 + Number(process.env.JEST_WORKER_ID)
```
#### ⚠️ Problem 2: Multiple node instances trying to update the same database
