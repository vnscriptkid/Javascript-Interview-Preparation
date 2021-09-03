## Test hooks in react
```js
test('exposes the count and increment/decrement functions', () => {
  let result
  function TestComponent() {
    result = useCounter()
    return null
  }

  render(<TestComponent />)
  expect(result.count).toEqual(0)
  act(() => result.increment())
  expect(result.count).toEqual(1)
  act(() => result.decrement())
  expect(result.count).toEqual(0)
})
```

## Use lib
```js
import {renderHook, act} from '@testing-library/react-hooks'

test('step can be changed', () => {
  let {result, rerender} = renderHook(useCounter, {
    initialProps: {initialCount: 10, step: 2},
  })
  // ...
})  
```  
