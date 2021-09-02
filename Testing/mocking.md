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

## Mock modules
- Clear mock
```js
beforeEach(() => jest.clearAllMocks())
```
- Register module to be mocked
```js
import * as booksDB from '../../db/books'

jest.mock('../../db/books')
```
- Mock returned value
```js
booksDB.readById.mockResolvedValueOnce(book)
```
- Assert mocked function
```js
expect(booksDB.readById).toHaveBeenCalledWith(book.id)
```

## Usecase: Mock react's component event handlers
```js
const handleSubmit = jest.fn()

render(<Login onSubmit={handleSubmit} />)

expect(handleSubmit).toHaveBeenCalledWith({})
```  
