## Solution 1: Using service to store data
- Why service ? Why not storing in component itself?
  - Service in angular is singleton
  - Data stored in component get lost after component is unmounted
```js
export class MemberService {
  baseUrl = `${environment.apiUrl}/users`;

  members: Member[] = [];
  
  constructor(private http: HttpClient) { }

  getUsers() {
    if (this.members.length) {
      return of(this.members);
    }
    return this.http.get<Member[]>(`${this.baseUrl}`).pipe(
      map(members => {
        this.members = members;

        return this.members;
      })
    );
  }
}
```

## Caching data with params
* Client should be able to remember data associated with a set of params
![image](https://user-images.githubusercontent.com/28957748/127664486-0ddcf686-6e9c-40ba-a299-63c7eb7f0c66.png)

* Use a map to store data in key-value pairs
```js
memberCache = new Map();

getUsers(params: UserParams) {
  const key = Object.values(params).join('-');
  
  if (this.memberCache.has(key)) return of(this.memberCache.get(key));

  return this.getPaginatedResult<Member[]>(params)
    .pipe(map(response => {
      this.memberCache.set(key, response);

      return response;
    }));
}
```
