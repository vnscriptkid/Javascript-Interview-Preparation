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

## Usecase 3: Send jwt along with the reqs
```js
axios.interceptors.request.use(config => {
    const token = store.commonStore.token;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
})
```
