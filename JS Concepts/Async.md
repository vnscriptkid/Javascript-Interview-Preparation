## Promise
- tool to handle things in the future
- 3 states of promise: unresolved, resolved, rejected

## :star: V8 vs Chrome vs Node

## :star: Async vs Sync
  - #### 🤹 What is asynchronous?
  - #### 🛑 Blocking vs Non-blocking
  - #### 🧵 Multi-threaded programming
  - #### 🥳 Event Driven Programming

## :star: :one: Async Pattern 1: Callbacks

## :star: :two: 🤝 Async Pattern 2: Promises

  #### Memorize:
    - 

  #### Convert callback to promise manually
  ```js
  const fs = require("fs");

  function readFile(filename, encoding) {
    return new Promise((resolve, reject) => {
      fs.readFile(filename, encoding, (err, data) => {
        if (err) reject(err); // once rejected, can't be resolved
        // if (err) return reject(err);
        resolve(data);
      });
    })
  }
  readFile("./files/demofile.txt", "utf-8")
      .then(
        data => console.log("File content: ", data),
        err => console.log("Failed to read file: ", err)
      )
  ```
  
  #### Convert callback to promise using util's promisify. This is applied for err-first callback
  ```js
  
  const fs = require("fs");
  const {promisify}  = require("util")

  const readFile = promisify(fs.readFile); 

  readFile("./files/demofile.txt", "utf-8")
      .then(
        data => console.log(data),
        err => console.log(err)
      )

  ```
  
  #### Chaining promises
  ```js
  const fs = require("fs");
  const zlib = require("zlib");
  const {promisify} = require('util');

  const gzip = promisify(zlib.gzip);

  const readFile = promisify(fs.readFile);

  readFile("./files/demofile.txt", "utf-8")
    .then(data => gzip(data))
    .then(result => console.log(result))
    .catch(err => console.error('Something wrong happened along the way: ', err));
  ```

## :star: :three: ⬇️ Async Pattern 3: Async/Await

## :star: :four: Async Pattern 4: Generator

## :star: ➿ Event Loops
  - #### 🎛️ Node Event Loop
  - #### 🕸️ Chrome Event Loop
