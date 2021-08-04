## Async vs Sync?
- Synchronous: Doing one thing at a time
- Asynchronous: Doing multiple things at the same time

## Is Node synchronous or asynchronous?
- Node = V8 + Features X (= Chrome)
  - V8 is synchronous (running on 1 main thread)
  - Features X running outside of V8 can be asynchronous

## Callbacks

## What is event-driven non-blocking IO
- __Event-driven__ implies: __libuv__, sitting outside V8, managing events coming from OS by
  - putting events in a __queue__ to process in sequence
  - running a __event loop__, constantly checking __queue__ to process the next one
- __Non-blocking__ means: __livuv__ while doing all those things, does not block __main thread__, it runs code on __another thread__ (asynchronouly)

## Advantages of NodeJS
- JS code runs one thing at a time => Easy to reason, no Race Conditions, Deadlocks ...

## Stream && Buffer?
- Buffer: place to store data temporarily
- Stream: data coming over time, that finally combine into a whole

## Binary data && Character Sets
- Binary data: Data in computer literally is stored in 0 & 1 bits
- Character sets: a collection of characters, each represented in a unique numbers. Example: Unicode, ASCII
- Character encoding: How numbers are converted to 0s and 1s. How many bits are used for each number.

> a Unicode string is a sequence of code points, which are numbers from 0 through 0x10FFFF (1,114,111 decimal). This sequence of code points needs to be represented in memory as a set of code units, and code units are then mapped to 8-bit bytes. The rules for translating a Unicode string into a sequence of bytes are called a character encoding, or just an encoding.
