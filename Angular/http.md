## HowTo: Get the full response
* 😧 Default behavior: Only the body is accessible
```js
this.http.get<Member[]>(`${this.baseUrl}`).pipe(
  map(members => {
    // do something with members
  })
```
* 😅 I want the whole response instead
```js
return this.http.get<Member[]>(`${this.baseUrl}`, { observe: 'response' }).pipe(
      map(response => {
        const members = response.body;
        // do something
      })
    );
```

## HowTo: Pass along Query Param with request
```js
const params = {
  queryNumber: query.page,
  pageSize: query.itemsPerPage
}

this.http.get<Member[]>(`${this.baseUrl}`, { observe: 'response', params })
```
