## :star: V8 vs Chrome vs Node

## :star: Async vs Sync
  - #### 🤹 What is asynchronous?
  - #### 🛑 Blocking vs Non-blocking
  - #### 🧵 Multi-threaded programming
  - #### 🥳 Event Driven Programming

## :star: :one: Async Pattern 1: Callbacks

## :star: :two: 🤝 Async Pattern 2: Promises

  #### Convert callback to promise:
  ```js
  const fs = require("fs");

  function readFile(filename, encoding) {
    return new Promise((resolve, reject) => {
      fs.readFile(filename, encoding, (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    })
  }
  readFile("./files/demofile.txt", "utf-8")
      .then(
        data => console.log(data),
        err => console.log(err)
      )
  ```

## :star: :three: ⬇️ Async Pattern 3: Async/Await

## :star: :four: Async Pattern 4: Generator

## :star: ➿ Event Loops
  - #### 🎛️ Node Event Loop
  - #### 🕸️ Chrome Event Loop
