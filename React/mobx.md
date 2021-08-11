## Install
```console
npm install mobx mobx-react-lite
```

## Advantages
* Communicating between different stores is easy
* Change states simply by calling a function
* Clear separation between different stores, it has it's own states
* Encapsulate each store inside a class, free to write a lot of custom logic, calculated props inside

## Setup
#### :one: Resource store
```js
// stores/activityStore.ts
class ActivityStore {
    title = 'Hello from mobx';

    constructor() {
        makeObservable(this, {
            title: observable,
            setTitle: action
        })
    }
    
    // must be arrow fn so that this is bound to object ActivityStore
    setTitle = () => {
        this.title = this.title + '!!!';
    }
}
```

#### :two: Combine resource stores
```js
// stores/store.ts
interface Store {
    activityStore: ActivityStore
}

export const store: Store = {
    activityStore: new ActivityStore()
}
```

#### :three: Hook with react
```js
// stores/store.ts
export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}
```

#### :four: Provide for react
```js
ReactDOM.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  document.getElementById('root')
);
```

#### :five: Query state
```js
const { activityStore } = useStore();
//////
<h2>{activityStore.title}</h2>
/////
<Button content='Add one !' onClick={activityStore.setTitle} />
// hoc
export default observer(App);
```

## Access to browser in mobx (to redirect after resposne)
```js
// index.tsx
import {createBrowserHistory} from 'history';

export const history = createBrowserHistory();

<Router history={history}>
  <App />
</Router>

// someStore.ts: import history from index.tsx
history.push('/activities');
```

## Usecase: React to changes
```js
export default class CommonStore {
    token: string | null = window.localStorage.getItem('jwt');
    
    constructor() {
        makeAutoObservable(this);

        // if token is changed, do something
        reaction(
            () => this.token,
            token => {
                if (token) {
                    window.localStorage.setItem('jwt', token);
                } else {
                    window.localStorage.removeItem('jwt');
                }
            }
        )
    }
```
