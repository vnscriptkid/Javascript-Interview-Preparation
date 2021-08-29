## Use `import` with jest with `.babelrc.js`
```js
const isTest = String(process.env.NODE_ENV) === 'test'

module.exports = {
  presets: [
    ['@babel/preset-env', {modules: isTest ? 'commonjs': false}]
  ],
  // ...
}    
```

## Simulate `window` in `jest`
```js
// jest.config.js
module.exports = {
    testEnvironment: 'jest-environment-jsdom'
}
```
