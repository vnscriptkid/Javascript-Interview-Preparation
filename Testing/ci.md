## Upload coverage to codecov in `.travis.yml`
```yml
after script: npx codecov@3
```

## No watch mode in CI
```console
npm install --save-dev is-ci-cli
```
- Update `package.json`
```json
"scripts": {
  "test": "is-ci \"test:coverage\" \"test:watch\"",
  "test:coverage": "jest --coverage",
  "test:watch": "jest --watchAll"
}  
    

