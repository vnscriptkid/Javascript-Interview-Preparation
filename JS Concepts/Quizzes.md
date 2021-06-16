```js
const a = { 'foo': 'bar' }
function x(a) {
  a = { 'bar': 'foo' }
}
x(a)
console.log(a)
```
:100: `{ 'foo': 'bar' }`

```js
const a = { 'foo': 'bar' }
function x(a) {
  a.bar = 'foo';
}
x(a)
console.log(a)
```
:100: `{ 'foo': 'bar', 'bar': 'foo' }`

```js
"use strict";
var asimsVar = 3;
asimVar = 1;
console.log(asimVar);
```
:100: Throw an error. In strict mode we can't use variables that have not been declared with var first

:question: What is the output? Convert code to ES6;
```js
function login(method) {
  const options = Array.prototype.slice.call(arguments, 1);
  console.log(options);
}
login('facebook', 1, 2, 3, 4);
```

```js
let someone = 'everyone';
let name = 'thanh';

function h1(strings, ...values) {
    let output = '';
  
    for (let [index, substr] of strings.entries()) {
        output += substr + (values[index] || '');
    }

  return output;
}

console.log(h1`Hello ${someone}, My name is ${name}.`);
```

```js
var moo = "foo";
console.log(`hello\n${moo}
how are you?`);
```
:100:
```js
hello
foo
how are you?
```

```js
function foo(strings) { 
    console.log(strings[1]) 
};
foo`moo${foo}foo`
```
