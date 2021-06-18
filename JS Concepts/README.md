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
  - Features: (__GDP__ __V__ ietnam __T__ op)
    - (G) Prevent defining variables without keywords var || let || const (Attach to global obj in non-strict mode)
    - (P) Prevent using preserved keywords as variable name: let, const, eval
    - (V) Variables inside `val('...')` does not leak to outside scope
    - (D) Prevent deleting variables, function, arguments
    - (T) Stop `this` keyword being global object. It's `undefined` for those cases.
 
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
        - undefined == null // Boolean(undefined) == Boolean(null)
      - Might resolve to `false || true`. It's unpredictable
  - `===`: strict equality. No conversion is made
    - If both sides are different types => 100% false. It's predictable
  - https://dorey.github.io/JavaScript-Equality-Table/
  - Always use 3 equals unless you have a good reason to use 2.

- What is `NaN` and how can we check for it?
  -See when doing bad calculations:
    - Convert string to number: `parseInt('abc') -> NaN
    - Do math with string: 123 / 'abc'
  - Interesting facts:
    - NaN === NaN // false (unequal to itself :confused: no where else like this :cold_sweat:
    - NaN == anything // false
    - isNaN(NaN) true // the only way to check if something is `NaN`
    - typeof NaN // "number"
  - How to check if one is __not-a-number__
    - `isNaN('abc') // type coersion happens
      - (1) temp = Number('abc') // NaN
      - (2) isNaN(temp) // true
    - `isNaN('123') -> false`

## Scopes & Variables
- What are the different scopes in JS?
  - Scope tells us from where we can access a variable, a function?
    - Global scope: accessible anywhere (is a property of global object `window`)
    - Function scope:
      - Can't access outside function
      - Live only in the lifetime of that function
    - Block scope (since ES6)
      - `let, const`
        - `const`: Can't reassign value to `const` variable
  - At the time a variable is defined, its scope is determined
    - How scope is determined? What are the rules?
      - Variable: where am i now? What is the nearest scope of mine? 
      - Variable: how am i defined? By `let, const` or `var`
        - `let, const`: find the nearest block scope
        - `var`: find the nearest function scope

- What is variable hoisting? __DEV__ eloper. Situation when declaration are bubbled up to the top of current scope
  - __(D)__ Function declaration: Move whole upward
  - __(V)__ Variables: Move the declaration only, not assigning value
  - __(E)__ Function expression (like a variable that holds function ref)
  - `let, const` variables are not hoisted
  
  ```js
  // What will be the output of first console.log in the code below?
   var salary = "1000$";
   (function () {
       console.log("Original salary was " + salary);
       var salary = "5000$";
       console.log("My New Salary " + salary);
   })();
   // The var salary in the IIFE is hoisted to the top of the function scope, 
   // so that means that salary is set to undefined by the time the first console.log is run
   ``` 

- What is the scope chain?
  - If i am standing at outer scope, i can not access to variables of inner scope
  - If i am standing at inner scope, i can have access to any variable belongs to outer scope
  - The scope lookup works based on lexical order (physical order in which code is written on the page) and not calling order

```js
// scope lookup order: foo -> global
function foo() { console.log(number) }
function bar() {
  var number = 100;
  foo();
}
bar();
// Uncaught ReferenceError: number is not defined
```

- What is IIFE & Why might you use it?
  - IIFE stands for 'immediately invoked function expression'
  - I use it when i want to wrap related code into separate function scope
  - How ? Define an anonymous function, then immediately call it
  - Benefits: Avoid polluting global scope, in order to not accidentally overwrite variables with the same name
  - Default browser behaviour: Run all js files in the same `global` scope

- What are function closures?
![image](https://user-images.githubusercontent.com/28957748/122352124-0661d780-cf79-11eb-8e15-081f3628d90b.png)

  - Use cases: caching
  - Definition: Function remembers the context when it was created
  - Function reserves a closure (like a backpack holding things), containing variables that it has access to via lexical scope.
  Even if the context of those variables have been cleared (after removed from stack)
  - Closure holds current value of variables, not value of those variables when closure was created
  ```js
  var fns = [];
  for (var i = 0; i < 10; i++) {
      fns.push(function() { console.log(i) });
  }

  fns[0]();
  fns[1]();
  fns[2]();
  ```
  - How to fix:
  ```js
    var fns = [];
  for (var i = 0; i < 10; i++) {
      (function(j) {
        fns.push(function() { 
            console.log(j) 
        });
      })(i);
  }

  fns[0]();
  fns[1]();
  fns[2]();
  ```

## Destructuring & Looping
- What is destructuring? ES6 feature, that condenses tasks of extracting values from object or array
  - Use cases: 
    - object: extract value by key, save it to variable
    - array: extract value by it's order in array, save them to variables
  - Where:
    - Extract directly from arguments
    ```js
    function hello({ name = 'default' }) { console.log(name) }
    hello({ name: 'Thanh' })
    ```
  - Notes
    - Avoid nesting destructuring, it's hard to read, keep it 1 level at max
- What are different ways you can loop with `for`?
  - 3 ways
    - `for ... of`: Loop an iterable like array
      - Wanna loop through objects with key-value: `for ([key, value] of Object.entries(obj))`
    - `for ... in`: Loop object by keys
    - `for (;;)`: Traditional loop
    - `arr.forEach((item, index) => { ... })`: Can't use `break` or `continue`

## `this` keyword
- What does the `this` keyword mean?
  - `this` keyword lives inside a function, refers to different things depending how a function is called (calling context)
  - Use cases:
    - Function constructor: `this` refers to the object is created at runtime
    - Other cases: obj.doSomething() -> `this` refers to obj (left side of the dot)
    - `call, `bind`, `apply`: explicitly tells what `this` is
  
  - Generalizations:
    - doSomething(): `this` inside this function points to Window (not an arrow function, no `bind` used)
    - new Dog(): `this` inside this function points to newly created objects
    - person.talk(): `this` inside this function points to `person` (not an arrow function, no `bind` used)
    - `call, `bind`, `apply`: explicitly tells what `this` is
    - Arrow function binds `this` keyword lexically, so that `this` keyword is determined by where function is in, not how function is called
      - How to reason: What's the outer scope of that arrow function, `this` inside arrow function points to `this` of outside function (at runtime)
      - Behind the scene:
      ```js
        // whatever scope now
        // that = this
        () => {
          // this = that
        }
      ```

  ```js
  // Case 1
  console.log(this); // Window obj
  
  // Case 2
  function check() { console.log(this) } // Window obj
  check() // no caller => Window
  
  // Case 3
  var thanh = {
    check: function() { console.log(this) }
  }
  thanh.check() // caller of `check()` is `thanh`
  
  // Case 4
  var func = thanh.check;
  func() // caller of `func()` is 
  
  // Case 5
  function hello() {
    // Solution: self = this;
    console.log('Hello: ', this) // caller of `hello()` is `thanh`
    function inside() { 
      console.log('Inside: ', this) // no caller => Window
    }
    inside()
  }

  thanh = {
    check: hello
  }

  thanh.check()
  ```
  - Solution: 
    - `"use strict"`
    - Use temp vars like: self, that, vm
    - `call, apply, bind`
    - Arrow function

```js
// Reason about `this` keywords down here
var person = {
  talk: function() {
    console.log('Talk: ', this);

    const language = { 
      english: 'hello',
      greet: () => {
        console.log('Greet: ', this);
      }
    }

    language.greet();

  }
}

// person.talk()
person.talk()
```

- What does the functions `call`, `bind` and `apply` do?
  - `bind`: define what `this` is when function is called in the future, can be used only once, can't bind twice for same function
    - Can't be used with function declaration (function expression only)
    - `this` is default to `Window` when
      - Nothing is passed to bind
      - null || undefined is passed to bind
  - `call` ~ `apply`: call function with arguments, with explicit `this` context
    - `call`: arguments list [this, arg1, arg2]: used when you know exactly how many parameters are there.
    - `apply`: arguments list [this, listOfArgs]: used when num of arguments are variable.
  - Normally, `this` points to either an object or Window, but with `bind, call, apply`, it could be anything
  - Prove that `function` is object:
  ```js
  function walk() {}
  console.log(walk.name); // function has a property
  console.log(walk.toString()); // function has a method
  ```

- What is fat arrow function?
  - function expression
  - `this` inside arrow function is persistent, not depends on how function is called but where it was defined
  - `this` always points to outside context

## OOP
- What is prototype chain?
  - Property lookup:
    - `obj.someKey`: First search for `someKey` inside `obj`, if not found incrementally search accross prototype chain through `__proto__`
    ```js
    var company = {name: 'viettel'}
    // var company = new Object({ name: 'viettel' })
    
    // `company` inherits from `Object.prototype`
    console.log(company.__proto__ === Object.prototype)
    // We can point company.__proto__ to anywhere we want to inherit from
    
    // Interesting fact: Object.prototype is the highest in inheritance chain
    console.log(Object.prototype.__proto__ === null)
    ```
    
  - `Object.create` do 2 things:
    - Create new object
    - Inherits from somewhere (behind the scene set __proto__)

  ```js
  var emp = { company: 'viettel' }
  var boss = Object.create(emp, {department: { value: 'IT' }});
  console.log(boss.department)
  console.log(boss.company)
  ```
  
  - When we make a constructor function `X`, there are 2 objects created:
    - object that holds function itself
    - `prototype` object that makes inheritance possible
    - objects created by X can access X's prototype through it's `__proto__`
    
- What is the difference between prototypal inheritance and classical inheritance?
  - Prototypal inheritance works through `prototype` object, we put anything that we want others to inherit inside `prototype`
  - Classical inheritance
    - 2 concepts:
      - `class`: drawing design of a house
      - `instance`: the building itself
    - You can only live in a house :house: but not the design :framed_picture:
  - Prototypal inheritance:
    - No concept of `class`
    - You build a house :house_with_garden: from an existing house :house:

  ![image](https://user-images.githubusercontent.com/28957748/122389664-5ce00d80-cf9b-11eb-8a3e-b03491b07775.png)


- What is the constructor OO pattern (psuedo class)?
  - Create new object by constructor function
  - `new` keyword makes the difference
  ```javascript
  function Dog(name){ {
    // this = {}
    this.name = name;
    // return this
  }
  
  var dog = new Dog('jack');
  
  var anotherDog = new Dog('kelly');
  // var anotherDog = {};
  Dog.call(anotherDog, 'kelly')
  ```
  
  ![image](https://user-images.githubusercontent.com/28957748/122395076-d4fd0200-cfa0-11eb-8315-244dfd06790e.png)
  
  - 2 ways of adding methods to objects:
    ![image](https://user-images.githubusercontent.com/28957748/122396557-4d17f780-cfa2-11eb-9daa-3d4baa1dc672.png)

    - Inject directly to `this` keyword of constructor function
      - Each object maintains its own methods when object are created. It's memory inefficient.

    ![image](https://user-images.githubusercontent.com/28957748/122397813-8309ab80-cfa3-11eb-9bb7-736112ec2ef9.png)

    - Attach to prototype object of constructor
      - All objects created by constructor share the same methods
      - In look-up process, JS first searches on object itself, before climbing up the inheritance tree through `__proto__`
    
    ![image](https://user-images.githubusercontent.com/28957748/122396416-2954b180-cfa2-11eb-9838-d373d638a903.png)
    
  - Implement Inheritance using __Constructor OO pattern__
  ```js
  function Animal(age) {
    this.age = age;
  }

  Animal.prototype.sleep = function() {
      console.log(this, 'zzzz')
  }

  function Dog(name, age) {
      Animal.call(this, age);
      this.name = name;
  }
  
  // Magic line that makes Inheritance works
  Dog.prototype = Object.create(Animal.prototype);
  // behind the scene
  // (1) var dogProto = {};
  // (2) dogProto.__proto__ = Animal.prototype;
  // (3) Dog.prototype = dogProto;

  // must put after line above. Otherwise, bark() would be overwritten
  Dog.prototype.bark = function() { 
      console.log(this, 'whooop!!!')
  }

  var dog = new Dog('john', 12);
  dog.bark()
  dog.sleep()
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
  - Not every callback is async, it's up to the caller. Give an example
  ```js
  function runCb(cb) { cb() }
  
  runCb(() => console.log(name));
  
  let name = 'thanh'; // let is not hoisted
  ```
  - Example of async callback: User.findById(id, function(user) { ... })
    - Run the callback after getting back user from db (some point in the future)
  - Handling errors in callback pattern:
    - Error-first callbacks: First param of param is `err`

- What is callback hell?
  - Nested multiple callbacks, that is hard to read and know execution order.

- What are promises?
  - Same nature as callback, but with more clear syntax and looks linear, avoid callback hell
  - Promise hell
  - 2 ways Handling errors in promise
    - for specific `then()`
    - central place for handling errors with `catch()`
  - 2 ways of failing a promise:
    - throw an error -> get turned to `reject`
    - reject
  - Promise is async be default, callback is not
  - How to clean up: `finally` runs in the end either fails or succeeds

```js
// one way
fetchData()
    .then(
      data => console.log(data), 
      err => console.error(err)
    )
```

```js
fetchData()
  .then(data => console.log(data))
  .catch(err => console.error(err))
```
- Simulate static method in JS: immediately resolved promise
  - Keep your promise: `Promise.resolve('Done');`
  - Explain why you failed: `Promise.reject('I failed because ...')`

- How do you chain promises together?
  - return something from `then()`
    - data: chain sync to async
    - another promise: chain async to async
  - `iPromiseYou.then(() => 'Done 1').then(() => { console.log('Done2' })`
  - Chaining vs Forking
    - Chaining: Execute operations sequentially
    - Forking: Create separate executing flows

    ```js
    promise = Promise.resolve('done')
  promise.then((msg) => console.log('Done 1: ', msg))
  promise.then((msg) => console.log('Done 2: ' + msg))
    ```
    
- What does the `Promise.all` function do?
  - Use in case we have multiple async tasks run parallel, and we want to wait for all of them to be done

- What is async/await and how is it different from promises?
  - ES8 feature, that makes your code looks totally synchronous (seems like code run line by line)
  - Turn non-blocking code to blocking code:
  - Code is synchronous only when both of these are true:
    - In the context of that `async` function
    - Must use `await`
  ```js
  function asyncTask() {
    return Promise.resolve('Done');
  }
  ```
  - Cons of async/await:
    - Might be bad on performance if it's misused
      - Example: instead of allowing parallel execution of async tasks (Promise.all), we may force it to run sequentially

  - Pros:
    - Easy to read
  
  // IIFE
  ```js
  (async () => {
      const value = await asyncTask();
      console.log('Value: ', value);
      console.log('After that.');
  })();
  ```

- Mix between async and promise:
```js
var asyncFunction = async function() {
  return "done";
};

// async function actually returns a promise so that we can chain `then` on
asyncFunction().then(v => console.log(v));
```

## Networking
- What is CORS?
  - Stands for __Cross Origin Resource Sharing__
  - Browser has security mechanism to detect requests to another domain || same domain but another port and blocks response not the request
  - What problem does the security policy solve?
    - Prevent using data (retrive & manipulate) from a source (server) when you don't have permission from them yet.
  - CORS is a way to break that security policy
    - Server selectively choose who can have access to them
  - How it occurs?
    - For testing: http://client.cors-api.appspot.com/client
    - GET:
      - Req from browser to server foo.com: GET { Origin: moo.com }
      - Res from server foo.com: { Access-Control-Allow-Origin: moo.com || * }
    - POST, PUT, DELETE:
      - The kinds that change data on server. So browser might want to block the request before it changes something on server without permission
      - Browser first sends a preflight req to ask for permission first
    ![image](https://user-images.githubusercontent.com/28957748/122514038-759d0180-d035-11eb-9d30-a36f1836611b.png)

- What is JSONP?
  - Solve the same problems that CORS solves
  - Works only with GET, not PUT, POST, DELETE
  - It's like you are tricking browsers, pretending like you are loading an js file but not making ajax requests

## Events
- What is the difference between event capturing and event bubbling?
  ![image](https://user-images.githubusercontent.com/28957748/122516564-1e992b80-d039-11eb-959e-d36823a6d3df.png)
  
  - By default, element will listen to events on bubbling phase
  - How to listen to event capturing instead:
  - ele.addEventListener('click', function() { ... }, true)

- What is the difference between `stopPropagation` and `preventDefault`?
  - Events traverse 2 phases in sync way, it must wait for a handler finishes his job before moving to the next element 
  - `stopPropagation` will stop event move to next element either in event capturing phase or event bubbling phase
  - `preventDefault` stops the normal effect that the event has on element, doesn't stop the event from propagating.
    - click on checkbox: box is not ticked
    - click form submit: ajax request is not sent
