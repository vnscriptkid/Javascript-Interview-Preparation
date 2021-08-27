## Setup `index.js`
```js
const rootEle = document.getElementById("root");

function render() {
  ReactDOM.render(<App />, rootEle);
}

if (module.hot) {
  module.hot.accept("./App", function () {
    setTimeout(render);
  });
}

render();
```
