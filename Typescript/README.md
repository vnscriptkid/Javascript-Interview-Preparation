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
- Typescript tries to guess types of states:
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
