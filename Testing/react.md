## Setup
```console
npm install --save-dev @testing-library/react
```

## Render a component
```js
test('renders', () => {
    render(<AutoScalingText />)
})
```

## Mock css file loading: If loading css found, load this instead
```js
// jest.config.js
module.exports = {
    moduleNameMapper: {
        '\\.css$': require.resolve('./test/style-mock.js')
    }
}
```
