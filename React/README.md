# React = 🏗️ Composable + 🚡 Declarative

## 🧱 Building blocks
#### The guy who Describes UI 🤏
```js
import React from 'react';
```
#### The guy who Renders to DOM 🖼️
```js
import ReactDOM from 'react-dom';
```
#### React Element
* An JS object that describes UI
```js
const reactElement = <div>hello</div>;
```
* React is just bunch of JS: JSX -> JS
```js
const reactElement = React.createElement("div", { style: { color: red } }, "hello there");
```
* Curly braces `{}` in JSX means go back to JS

#### DOM element
```js
const domElement = document.getElementById('root');
```
#### Bring all together
```js
ReactDOM.render(reactElement, domElement);
```

## 🏗️ React Component
* Compose __elements__ with __behaviors__ inside a function
* Why? Reusable, Customize component by receiving params

## 🚸 React Children
* What?
  * Special props
  * Passing by __position__ not by __name__ (though it can be)
* How ?
```js
<AppButton style={{ color: 'red' }}>Submit</AppButton>
```

## ♈ Data Flow
* React is one-way data flow
* How to communicate backward: passing a callback down
```js
<AppButton onClick={() => console.log('Clicked');}></AppButton>
```
```js
// When new post form succeeds, give me the post
<NewPostForm onSuccess={(post) => console.log(post);}></NewPostForm>
```

## 🚡 Declarative
* Describe what to do but not how to do it?
* Opposite to 👷‍♂️ __Imperative__ (Jquery)
* At state X then display Y
* We do not directly change the DOM, React do it for us
* We define states and describe how UI should look like for each state
```js
// states
const [error, setError] = useState(null);
// render
{error && <span className="error">error</span>}
```
* As we change state, React handle updating UI for us

## 🚀 Why React fast?
- Rendering
```js
// first render
const oldElement = MyComponent();
// second render
const newElement = MyComponent();
```
- Update UI in a performent way by finding 🔡 the exact diff between last render, 😄 so that minimum update is made
```js
const diff = compare(oldElement, newElement)
```

## ⚓ How to React
* Think in state first
