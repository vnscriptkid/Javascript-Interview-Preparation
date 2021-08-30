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
