## Add new script in `package.json`
```json
"test": "jest --coverage",
```

## Cover only files in `src/`
```
// jest.config.js
collectCoverageFrom: ['**/src/**/*.js']
```

## Ignore `coverage/` from git

## Behind the scene
https://github.com/istanbuljs/babel-plugin-istanbul

egghead-configure-jest-for-testing-javascript-applications/14-scikit-learn-configure-jest-to-report-code-coverage-on-project-files

## Add thresholds
```js
// jest.config.js
coverageThreshold: {
  global: {
    statements: 20,
    branches: 20,
    functions: 20,
    lines: 20,
  },
  './src/shared/utils.js': {
    statements: 100,
    branches: 80,
    functions: 100,
    lines: 100,
  },
}
```

