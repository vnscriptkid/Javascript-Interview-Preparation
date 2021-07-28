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
