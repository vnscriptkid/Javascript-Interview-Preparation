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

## More
egghead-configure-jest-for-testing-javascript-applications/14-scikit-learn-configure-jest-to-report-code-coverage-on-project-files
