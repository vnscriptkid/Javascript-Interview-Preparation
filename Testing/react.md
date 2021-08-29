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
```console
npm install --save-dev identity-obj-proxy
```
```js
// jest.config.js
module.exports = {
    moduleNameMapper: {
        '\\.module.css$': require.resolve('identity-obj-proxy'),
        '\\.css$': require.resolve('./test/style-mock.js')
    }
}
```
