## Usecase 1
```js
axios.get<Activity[]>('http://localhost:5000/api/activities')
```

## Usecase 2: Generic req
```js
const getResponseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(getResponseBody),
}
```
