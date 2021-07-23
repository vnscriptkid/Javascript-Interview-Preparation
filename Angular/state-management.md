## Solution 1: Using service to store data
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
