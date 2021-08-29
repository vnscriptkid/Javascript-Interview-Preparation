## How
```js
test('renders', () => {
  const {container} = render(<CalculatorDisplay value="0" />)
  expect(container).toMatchInlineSnapshot()
})
```
