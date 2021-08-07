## Usecase 1: Set base url
```js
axios.defaults.baseURL = 'http://localhost:5000/api';
```

## Usecase 2: Intercept response
```js
const sleep = (delay: number) => new Promise(resolve => setTimeout(resolve, delay));

axios.interceptors.response.use(async response => {
    try {
        await sleep(1000);
        return response;
    } catch (error) {
        console.log(error);
        return await Promise.reject(error);
    }
})
```
