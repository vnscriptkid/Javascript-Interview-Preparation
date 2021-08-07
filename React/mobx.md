## Install
```console
npm install mobx mobx-react-lite
```

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
