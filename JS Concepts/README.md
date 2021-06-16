## Basics
- What is JS and how does it change?
  - A programming language, was designed to run on browser
  - The most common version is ES5, but majors change has been introduced since then
  - Now we can write JS code outside browser using NodeJS, a runtime environment, powered by V8, the engine is used by Chrome
  - Major changes are: class, promise, async/await, const, let, spreading, destructring
  - Over the years, there's a committee, who decides what new features to add to JS, then it's up to vendors like Chrome, Firefox to implement it
    - See: https://github.com/tc39/proposals
  - JS is backward-compatible, means code you write today still works fine in 10 years.
    - Browser: https://caniuse.com/
    - Node: https://node.green/ 
  - The committee doesnt' redefine old features but add a thin layer on top of old versions. So ES6 can be convert to 100% ES5 equavilent code.

- What is compilations vs polyfilling?
  - Compilation is the process of converting JS code from new syntax to older syntax so that we can use latest features of JS
  without caring about browser support
    - https://babeljs.io/
  - Polyfilling is actually the same thing, used for whole new feature like Promise
  There's no Promise at all in older version of JS.
    - https://www.npmjs.com/package/promise-polyfill

- What is `use strict` and what does it do?
  - Make debugging easier, prevent ambiguous code from running
  - Can be used in global context or within function context
    - "use strict;"
  - Features: (__GDP__ __V__ ietnam)
    - (G) Prevent defining variables without keywords var || let || const (Attach to global obj in non-strict mode)
    - (P) Prevent using preserved keywords as variable name: let, const, eval
    - (V) Variables inside `val('...')` does not leak to outside scope
    - (D) Prevent deleting variables, function, arguments
 
- Does JS pass variables by reference or by value?
  - Both are used depending on type of vars
    - Pass by ref: array, object
    - Pass by value: number, string, null, undefined
  - Follow-up: What are pass-by-value and pass-by-ref:
    - pass-by-value: pass a copy of original data, any modification on copy version doesn't affect original data.
    - pass-by-ref: pass a ref (pointer) to original data, any modification using ref, does affect original data.

- What are the rest operators? Boxing arbitrary number of varialbes inside one variable
  - Use cases:
      -  flexible function api, clean syntax (es5, `arguments` looks like an array but not, be careful)
      -  collapse left-over parts while destructuring
```javascript
// boxing all additional args to rest arr
function(a, b, ...rest) {}

// boxing all others while destructuring
const [first, ...rest] = [1,2,3] 
```

- What is the spread operator? ES6 syntax, unboxing object or array
  - Use cases:
    - (1) Copy object, array (shallow copy) // visualize nested object copy
    - (2) Merging objects, arrays
    - (3) Exploding arguments list and passing to function

```javascript
// (1) 
const obj = { a: 1 };
const anotherObj = { ...obj }
  
// (2)
const first = { a: 1 }
const third = { c: 3 }
const merged = { ...first, b: 2, ...third }

// (3)  Spreading and destructuring have the same syntax, depending on the context (where `...` is placed)
function wrapper(...args) {
  return inner(...args) {  }
}

function max(...args) {
  return Math.max(...args);
}
console.log(max(1,2,3)) // 3
```

- What are template strings?
  - String without concatenation
  - Don't need to use escape characters in case using single-quote or double-quote inside string.
  - Variable embedding (expression that resolves a value)
  - Multi-lines string
```javascript
console.log(`My full name is ${firstName} ${lastName}`);
```

- What are template string tags?
  - Example: 
    - styled-component
    - http://i18n-tag.kolmer.net/

```js
function h1(args) {
  return `<h1>${args[0]}</h1>`;
}
console.log(h1`This is a h1 heading`);
```
  
## Types & Equality
- What are the different types in JS?
  - Primitive: 
    - String: 'a', "ab"
    - Number: 1, 2.3
    - null: typeof null // object (it should be null, JS's mistake)
    - undefined
  - Object: 
    - Object: {}, new Object()
    - Array

- What is the difference between statically typed language like Java vs dynamically typed language like JS:
  - For Java, data type is a must when declaring variable, can't change type later
  - For JS, variable type is determined at runtime, so no specific type is used when declaring variable but `var, let, const`

- Differentiate `null` vs `undefined`?
  - Both are JS types
  - `undefined` is set by JS engine, means __not declared
    - access a variable that is not declared yet
    - access non-exist key in object
    - access a out-of-range value in array
  - `null` is set by us, means __empty
  - Compared to Java: Null means absence of value

- What is the difference between `===` vs `==`?
  - `==`: equality `1 == '1'` is `true`. 
    - If both sides are different types:
      - JS converts both to the same type before comparing them
        - 2 == '2' // String(2) == 2
        - false == 'false' // false == Boolean('false')
      - Might resolve to `false || true`. It's unpredictable
  - `===`: strict equality. No conversion is made
    - If both sides are different types => 100% false. It's predictable
  - https://dorey.github.io/JavaScript-Equality-Table/
  - Always use 3 equals unless you have a good reason to use 2.

- What is `NaN` and how can we check for it?
  - when convert string to number using parseInt
    - `parseInt('123') -> 123`
    - `parseInt('abc') -> NaN
  - check if one is not a number
    - `isNaN('abc') -> true`
    - `isNaN('123') -> false`

## Scopes & Variables
- What are the different scopes in JS?
  - Scope tells us from where we can access a variable, a function?
    - Before ES6: 2 scopes = global + function
    - After ES6: +1 more, which is block scope
  - At the time a variable is defined, its scope is determined
    - How scope is determined? What are the rules?
      - Variable: where am i now? What is the nearest scope of mine? 
      - Variable: how am i defined? By `let, const` or `var`
        - `let, const`: find the nearest block scope
        - `var`: find the nearest function scope

- What is variable hoisting?
  - Function declaration is bubbled up to the head, so even it's declared far down the file, we can still access even before declaration line
  - Function expression is not hoisted

- What is the scope chain?
  - If i am standing at outer scope, i can not access to variables of inner scope
  - If i am standing at inner scope, i can have access to any variable belongs to outer scope

- What is IIFE & Why might you use it?
  - IIFE stands for 'immediately invoked function expression'
  - I use it when i want to wrapping related code into separate function scope
  - How ? Define an anonymous function, wrapping related code inside, then immediately call it

- What are function closures?
  - Use cases: caching
  - Definition: Function remembers the context when it was created

## Destructuring & Looping
- What is destructuring? Extract value from an object or array in a clean way
  - Use cases: 
    - object: extract value by key
    - array: extract value by it's order in array
- What are different ways you can loop with `for`?
  - 3 ways
    - `for ... of`: loop an iterable like array
    - `for ... in`: loop object by keys
    - `for (;;)`: traditional loop

## `this` keyword
- What does the `this` keyword mean?
  - `this` keyword lives inside a function, refers to different things depending how a function is called
  - Use cases:
    - Function constructor: `this` refers to the object is created at runtime
    - Other cases: obj.doSomething() -> `this` refers to obj (left side of the dot)
    - `call, `bind`, `apply`: explicitly tells what `this` is

- What does the functions `call`, `bind` and `apply` do?
  - `bind`: define what `this` is when function is called in the future, can be used only once, can't bind twice for same function
  - `call` ~ `apply`: call function with arguments, with explicit `this` context
    - `call`: arguments are separate
    - `apply`: arguments must be wrapped inside an object

- What is fat arrow function?
  - function expression
  - `this` inside arrow function is persistent, not depends on how function is called but where it was defined
  - `this` always points to outside context

## OOP
- What is prototype chain?
  - When we make a constructor function `X`, there are 2 objects created:
    - object that holds function itself
    - `prototype` object that makes inheritance possible
    - objects created by X can access X's prototype through it's `__proto__`
    
- What is the difference between prototypal inheritance and classical inheritance?
  - Prototypal inheritance works through `prototype` object, we put anything that we want others to inherit inside `prototype`

- What is the constructor OO pattern?
  - Create new object by constructor function
  - `new` keyword makes the difference
  ```javascript
  function Dog(name){ {
    // this = {}
    this.name = name;
    // return this
  }
  ```

- How do you use the `class` and `extends` keywords?
```javascript
class Dog extends Animal {
  constructor(name) {
    this.name = name;
  }
}
```

![image](https://user-images.githubusercontent.com/28957748/122054697-1e6b1700-ce12-11eb-9cb5-a5f79f982628.png)

![image](https://user-images.githubusercontent.com/28957748/122056134-83733c80-ce13-11eb-9d6d-8be0681ec2bb.png)

## Asynchronous Programming
- What is a callback?
  - Callback is a function that is passed to another function as argument, and is called by that function
  - Not every callback is async, it's up to the caller
  - Example of async callback: User.findById(id, function(user) { ... })
    - Run the callback after getting back user from db (some point in the future)

- What is callback hell?
  - Nested multiple callbacks

- What are promises?
  - Same nature as callback, but with more clear syntax, avoid callback hell
  - Promise hell

- How do you chain promises together?
- What does the `Promise.all` function do?
- What is async/await and how is it different from promises?

## Networking
- What is CORS?
  - Browser security mechanism when detecting request to another domain || same domain but another port
  - Before taking that route, Browser sends a preflight asking server if it should do that

- What is JSONP?

## Events
- What is the difference between event capturing and event bubbling?
- What is the difference between `stopPropagation` and `preventDefault`?
