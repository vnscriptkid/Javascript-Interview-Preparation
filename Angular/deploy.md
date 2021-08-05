## Checklist
* Look for any `localhost` in codebase => These things should be taken from `environment`
* Update config `angular.json`
```json
"outputPath": "../API/wwwroot",
```
* Build (default to prod)
```console
ng build
```
