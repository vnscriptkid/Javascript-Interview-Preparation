## Babel as transpiler

## Webpack as bundler

![image](https://user-images.githubusercontent.com/28957748/123500011-0b074980-d665-11eb-95ea-cf3673fd8876.png)

```js
// src/message.js
const message = "Hello Thanh";

module.exports = message;

// src/index.js
const message = require("./message");

console.log(message);
```

- Combine all into one single file
```js
(() => {
  // webpackBootstrap
  var __webpack_modules__ = {
    "./src/message.js": (module) => {
      eval(
        'const message = "Hello Thanh";\r\n\r\nmodule.exports = message;\r\n\n\n//# sourceURL=webpack://bundler/./src/message.js?'
      );
    },
  };

  var __webpack_module_cache__ = {};

  // The require function
  function __webpack_require__(moduleId) {
    // Check if module is in cache
    if (__webpack_module_cache__[moduleId]) {
      return __webpack_module_cache__[moduleId].exports;
    }
    // Create a new module (and put it into the cache)
    var module = (__webpack_module_cache__[moduleId] = {
      // no module.id needed
      // no module.loaded needed
      exports: {},
    });

    // Execute the module function
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    // Return the exports of the module
    return module.exports;
  }

  (() => {
    eval(
      'const message = __webpack_require__(/*! ./message */ "./src/message.js");\r\n\r\nconsole.log(message);\r\n\n\n//# sourceURL=webpack://bundler/./src/index.js?'
    );
  })();
})();
```

## Final flow

![image](https://user-images.githubusercontent.com/28957748/123500171-435b5780-d666-11eb-836f-4f4e371112f0.png)
