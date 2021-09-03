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

## Mock api not supported in Test env
```js
beforeAll(() => {
  window.navigator.geolocation = {
    getCurrentPosition: jest.fn(),
  }
})

test('displays the users current location', async () => {
  const position = {
    coords: {
      latitude: 20,
      longitude: 106,
    },
  }

  const {promise, resolve} = deferred()

  window.navigator.geolocation.getCurrentPosition.mockImplementation(
    successCb => {
      promise.then(() => successCb(position))
    },
  )
  
  render(<Location />)

  expect(screen.getByLabelText(/loading/i)).toBeInTheDocument()

  await act(async () => {
    resolve()
    await promise
  })
  
  expect(screen.queryByLabelText(/loading/i)).not.toBeInTheDocument()
}  
```

## Mock a custom hook
```js
import {useCurrentPosition} from 'react-use-geolocation'

jest.mock('react-use-geolocation')

let setPosition
function useMockCurrentPosition() {
  const [pos, setPos] = React.useState(null)

  setPosition = setPos

  return [pos]
}

useCurrentPosition.mockImplementation(useMockCurrentPosition)

render(<Location />)

expect(screen.getByLabelText(/loading/i)).toBeInTheDocument()

act(() => {
  setPosition(position)
})
```
