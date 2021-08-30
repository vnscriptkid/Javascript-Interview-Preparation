## How
```js
test('renders', () => {
  const {container} = render(<CalculatorDisplay value="0" />)
  expect(container).toMatchInlineSnapshot()
})
```

## Flow
- It passes on the first run
- Jest update test file with UI code rendered
- It passes for next runs as long as code is not changed
- One day, you update component with `id` attribute
- Test fails as new UI does not match with the last time (statically added to test file)
- You update test file, it works file again

## jest-emotion: Show all css attributes in static code generated
```console
npm install --save-dev @emotion/jest
```
```js
// jest.config.js
module.exports = {
    snapshotSerializers: ['@emotion/jest/serializer']
}