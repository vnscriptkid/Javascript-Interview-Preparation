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

## Load module by name like a lib
```js
const path = require('path')

module.exports = {
    moduleDirectories: ['node_modules', path.join(__dirname, 'src'), 'shared']
}    
```

## JestDOM
```console
npm install --save-dev @testing-library/jest-dom
```
- Pros
  - Better assertion api
  - Better error logging
- Global setup (without `import` in every test file)
```js
module.exports = {
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect']
}
```

## Hey, eslint! Here's my settings, apply it
```console
npm install --save-dev eslint-import-resolver-jest
```

```js
// .eslintrc.js
const path = require('path')

module.exports = {
  overrides: [
    {
      files: ['**/__tests__/**'],
      settings: {
        'import/resolver': {
          jest: {
            jestConfigFile: path.join(__dirname, './jest.config.js'),
          },
        },
      },
    },
  ],
}

```
