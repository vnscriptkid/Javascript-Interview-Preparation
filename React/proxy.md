## `create-react-app`
- Context: We want SPA and API share the same domain and port (So avoid problems with cookie)
  - SPA: `http://localhost:3000`
  - API: `http://localhost:3001`
- In `package.json` (SPA): Hey SPA, if you see any reqs coming, redirect to `http://localhost:3001`
```json
"proxy": "http://localhost:3001"
```
- So now, fix the api endpoints
```js
axios.create({
    baseURL: '/api',
});
```
