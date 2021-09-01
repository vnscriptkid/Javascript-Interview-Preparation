## Config `test/jest.config.js`
```js
const path = require('path')

module.exports = {
  moduleDirectories: [
    'node_modules',
    __dirname,
  ],
  setupFilesAfterEnv: [require.resolve('./setup-env')],
}
```

## Setup env `test/setup-env.js`
```js
const port = 8000 + Number(process.env.JEST_WORKER_ID)
process.env.PORT = process.env.PORT || port;
```
