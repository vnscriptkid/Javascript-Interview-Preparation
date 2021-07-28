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
