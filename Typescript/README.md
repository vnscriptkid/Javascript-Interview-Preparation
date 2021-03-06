## Init Typescript-based React project

```bat
npx create-react-app rts --template typescript
```

## `*.ts` vs `*.tsx`
- tsx: contains JSX
- ts: no JSX inside

## Typescript for React
#### :one: Props
![image](https://user-images.githubusercontent.com/28957748/123383930-fae85f00-d5bd-11eb-9e22-8d8941d710ff.png)

```js
// Child.tsx
interface ChildProp {
    name: string,
    onClick: () => void
}

export const Child = (props: ChildProp) => (
    <div>
      Child: {props.name}
      <button onClick={props.onClick}>Click me</button>
    </div>
)

// Parent.tsx
import { Child } from './Child';

const Parent = () => (
    <div>Parent: <Child onClick={() => console.log('Clicked')} name="Thanh" /></div>
)

export default Parent;
```

#### :two: Explicityly tells that: Something is a functional component
![image](https://user-images.githubusercontent.com/28957748/123387158-aa730080-d5c1-11eb-87d0-b1e5a3695cf8.png)
- Other pros: 
  - Solve problem with passing data via children to component
  ```json
  Type '{ children: string; onClick: () => void; name: string; }' is not assignable to type 'IntrinsicAttributes & ChildProp'.
  Property 'children' does not exist on type 'IntrinsicAttributes & ChildProp'.ts(2322)
  ```
  ```js
  <Child onClick={() => console.log('onClick')} name="Thanh">
      Hello Child
  </Child></div>
  ```

#### :three: Type inference with state
- Typescript tries to guess type of state based on initial value
```js
const [name, setName] = useState('');
// easy! it's a string

const [guests, setGuests] = useState([]);
// hmmm! what do you mean @@. i'll leave it never[]
```

- Okay! TS , i'll be more easy on you
```js
const [guests, setGuests] = useState<string[]>([]);
```

#### :four: Types union X:A|B|C - X can be either A or B or C
```js
interface Guest {
    name: string,
    age: number
}

const SearchGuest: React.FC = () => {
    const [term, setTerm] = useState('');
    const [guest, setGuest] = useState<Guest | undefined>();
    
    const search = () => {
        const foundGuest = guestList.find((guest) => guest.name === term);
        setGuest(foundGuest);
    }
    // ...
}
```

#### :five: Type inference is only applied for inline event handlers (but not handlers defined ahead of time)
- `Parameter 'event' implicitly has an 'any' type.ts(7006)`
```js
const onInputChange = (event) => {
    setTerm(event.target.value)
}
// TS: i'll do type inference from top to bottom! till now you don't give me any clue about event. So I'll leave it any

// ...
<input value={term} onChange={onInputChange} />
```

- Let's fix it
```js
const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value)
}
```

#### :six: TS with class-based components
```js
interface Guest {
    name: string,
    age: number
}

interface SearchGuestProps {
    guests: Guest[]
}

interface SearchGuestState {
    term: string,
    guest: Guest | undefined
}

class SearchGuest extends Component<SearchGuestProps> {
    state: SearchGuestState = {
        term: '',
        guest: undefined
    }
    // ...
}
```

#### :seven: Applying Types to Refs
```js
// ref to what?
const inputRef = useRef<HTMLInputElement | null>(null);
    
useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.focus();
}, []);

return (
    <input ref={inputRef}/>
)
```

## Typescript with Redux
#### Installing dependencies
```bat
npm install --save-exact @types/react-redux@7.1.15 axios@0.21.1 react-redux@7.2.2 redux@4.0.5 redux-thunk@2.3.0
```
?????? Installing new dependencies might break React type defs. Fix:
```bat
npm install @types/react
```

#### Architecture
![image](https://user-images.githubusercontent.com/28957748/123415873-0d739000-d5e0-11eb-9d9f-f2451bf1783d.png)

#### Redux with React checklist
- ?????? Organize redux-related code in modules
![image](https://user-images.githubusercontent.com/28957748/123435191-7e727200-d5f7-11eb-9d45-f869f3c45266.png)
- ?????? Create reducers that handle updating specific resources, must specify initial state
- ?????? Combine reducers
- ?????? Create action creators
- ?????? Create a store that links to reducers and applies middleware (like thunk)
- ?????? Export all redux-related code via a single entrance `src/state/index.ts`
- ?????? Connect redux store with root component via `Provider`
- ?????? Dispatch actions from React components via useDispatch()
- ?????? Have access to latest state via useSelector()

#### Redux with TS checklist
- ?????? Annotate state of reducer
- ?????? Annotate action of reducer
- ?????? Create action types as enums
- ?????? Create one interface for each action
- ?????? Group related actions using `type`
- ?????? Annotate dispatch of async action creators
- ?????? Solve problem with useSelector by a custom hook:
```js
// src/hooks/useTypedSelector.ts
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

// src/components/RepositoriesList.tsx
const { loading, error, data } = useTypedSelector(state => state.repositories);
```
- ?????? Make dispatching from component cleaner by a custom hook
```js
// src/hooks/useActions.ts
export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actionCreators, dispatch);
}

// src/components/RepositoriesList.tsx
const { searchRepositories } = useActions();
```

