## Patterns
* `myObservable.pipe(take(1))`: takes the first value output by the observable, then unsubscribes itself

## BehavioralSubject
- __What__: Requires an __initial value__ and emits the __current value__ to new subscribers

#### Use case: Current status of user (online or offline)
* __Idea__: Subscribers only care about the current status of users

```js
export class PresenceService {
  // ...
  private onlineUsersSource = new BehaviorSubject<string[]>([]);

  public onlineUsernames$ = this.onlineUsersSource.asObservable();
  // ...
  this.hubConnection.on('GetOnlineUsers', (onlineUsernames: string[]) => {
      this.onlineUsersSource.next(onlineUsernames);
    });
}
```

```js
// ... subscribers
export class MemberCardComponent implements OnInit {
  // ...  
  constructor(
    public presence: PresenceService,
    ) { }
```

```html
<i 
  [class.is-online]="(presence.onlineUsernames$ | async).includes(member.username)"
  class="fa fa-user mr-2"></i>
```
