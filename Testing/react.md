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

## Transform things like `className={styles.autoScalingText}` to `class="autoScalingText"` when rendering
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
