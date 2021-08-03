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
- __Non-blocking__ means: __livuv__ while doing all those things, does not block __main thread__, it runs code on __another thread__
