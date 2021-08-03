# Modules, Exports, Require

## Concepts
- Modules: piece of reusable code, does not collide with other code
  - How not colliding? Scope => How to to simulate Scoping: IIFE
- CommonJS: Standard of how modules is structured
- First-class functions: Whatever you can do with a variable, you can do with function
  - Passing into other function as arguments
  - Assigning to a variable
  - Return from a function
- Function expression

## Understand in Code
* Look at src code at: `node/lib/internal/modules/cjs/loader.js`
```js
function wrapSafe(filename, content, cjsModuleInstance) {
  if (patched) {
    const wrapper = Module.wrap(content);
    // vm.runInThisContext(code, options)
    return vm.runInThisContext(wrapper, { // vm.runInThisContext() compiles code, runs it within the context of the current global and returns the result
      filename,
      lineOffset: 0,
      displayErrors: true,
      importModuleDynamically: async (specifier) => {
        const loader = asyncESM.ESMLoader;
        return loader.import(specifier, normalizeReferrerURL(filename));
      },
    });
  }
  try {
    return vm.compileFunction(content, [
      'exports',
      'require',
      'module',
      '__filename',
      '__dirname',
    ], {
      filename,
      importModuleDynamically(specifier) {
        const loader = asyncESM.ESMLoader;
        return loader.import(specifier, normalizeReferrerURL(filename));
      },
    });
  } catch (err) {
    if (process.mainModule === cjsModuleInstance)
      enrichCJSError(err, content);
    throw err;
  }
}

// ...

let wrap = function(script) {
  return Module.wrapper[0] + script + Module.wrapper[1];
};

const wrapper = [
  '(function (exports, require, module, __filename, __dirname) { ',
  '\n});',
];

let wrapperProxy = new Proxy(wrapper, {
  set(target, property, value, receiver) {
    patched = true;
    return ReflectSet(target, property, value, receiver);
  },

  defineProperty(target, property, descriptor) {
    patched = true;
    return ObjectDefineProperty(target, property, descriptor);
  }
});


ObjectDefineProperty(Module, 'wrap', {
  get() {
    return wrap;
  },

  set(value) {
    patched = true;
    wrap = value;
  }
});

ObjectDefineProperty(Module, 'wrapper', {
  get() {
    return wrapperProxy;
  },

  set(value) {
    patched = true;
    wrapperProxy = value;
  }
});
```

* Your code is wrapped inside:
```js
(function (exports, require, module, __filename, __dirname) {
 // your code is appended here
})
```
=> Here is why you always have access to above global variables inside your code ERMFD

#### Let's generalize it
```js
Module._load = function(request, parent, isMain) {
  // ...
  
        // somewhere in the middle
        (function (exports, require, module, __filename, __dirname) {
          // your code is appended here
        })
  
  // ...
  return module.exports;
}
```
❗❗❗ ⭐ `module.exports` gives the caller a reference of what has been exported

#### Module exports a ref to object being exported, but that object is cached for subsequent requires
```js
// greet.js
const myObj = {
  number: 10,
};
module.exports = myObj;

// app.js
const myObj = require("./greet");
myObj.number += 1;
console.log(myObj); // 11

const anotherObj = require("./greet"); // hmmm, you requested './greet' once before, i cached it, i'll give it back to you
anotherObj.number += 1;
console.log(anotherObj); // 12
```

## 🧠 5 module patterns

#### :one: Pattern 1
```js
// greet.js
function hello() { console.log("hello"); }

module.exports = hello;

// app.js
const hello = require("./greet");
hello();
```

#### :two: Pattern 2
```js
// greet.js
function hello() {
  console.log("hello");
}

module.exports.hello = hello;

// app.js
const hello = require("./greet").hello;
hello();
```

### :three: Pattern 3
```js
function Hello() {
  this.greeting = "hi there";
  
  this.speak = function() {
    console.log(this.greeting);
  }
}

module.exports = new Hello();
```

```js
const hello = require("./greet");

hello.speak(); // hi there
```
