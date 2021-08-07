## Usecase 1: Changing route does not re-render
* React couldn't detect changes in this case
```js
<Route path={['/createActivity', '/manage/:id']} component={ActivityForm} />
```
* Give him some hints
```js
const {key} = useLocation();
///
<Route key={key} path={['/createActivity', '/manage/:id']} component={ActivityForm} />
```
