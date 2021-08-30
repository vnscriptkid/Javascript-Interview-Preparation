# Husky + lint-staged
- Install
```console
npm install --save-dev lint-staged husky
```
- Config `lint-staged` in `package.json`
```json
"lint-staged": {
  "**/*.+(js|json|css|html|md)": [
    "prettier",
    "jest --findRelatedTests",
    "git add"
  ]
}
```
- Config husky
```console
npx husky-init && npm install 
```
- In `.husky/pre-commit`
```console
npx lint-staged && npm run build
```
