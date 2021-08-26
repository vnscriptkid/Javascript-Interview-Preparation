## First way
```js
const originalGetWinner = utils.getWinner;
utils.getWinner = fn((p1, p2) => p1);
// 
utils.getWinner = originalGetWinner;
```

## Second way
```js
jest.spyOn(utils, "getWinner");
utils.getWinner.mockImplementation((p1, p2) => p1);
//
utils.getWinner.mockRestore();
```
