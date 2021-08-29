## import common stuff quickly
- Context: We want to do: `import CalculatorDisplay from 'calculator-display'`, though `calculator-display` is not a lib
- Config __webpack__:
```js
const path = require('path')

module.exports = {
  resolve: {
    modules: ['node_modules', path.join(__dirname, 'src'), 'shared'],
  }
}  
```  
