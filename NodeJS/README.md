## Big Words
* V8 Engine: Written in C++, Read JS code, convert to machine code
* Why NodeJS is written in C++? Because V8 is C++ && V8 is core of NodeJS
* V8 can run standalone, or can be embedded into any C++ application
- Why Node was born? 
  - JS was initially designed to run on browsers, there's no way to run it outside browsers, doing things like interacting with file system, querying db
  - NodeJS embeds V8 insides, so that it can understand all JS code, other than that, NodeJS extends JS by adding a subset of APIs

## Conceptual Aside
* Processors: A tiny machine inside ur computer
* Machine Code: low-level programming language spoken by processors
* C++

Order of abtraction: Javascript -> C/C++ -> Assembly -> Machine Code

## Lookup Nodejs source code
- General view
  - `/lib`: define api (js code)
  - `/src`: c++ implementations of those api

- How __binding__ works
  - `lib/fs.js`: Look up `read()` corresponding to `fs.read()` in nodejs
  ```js
  function read(fd, buffer, offset, length, position, callback) {
    // ...
    binding.read(fd, buffer, offset, length, position, req);
  }
  ```
  
  - `src/node_file.cc`
  ```js
  static void Read(const FunctionCallbackInfo<Value>& args) {
  // ...
  env->SetMethod(target, "read", Read);
  ```
