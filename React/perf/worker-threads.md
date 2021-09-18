## When?
- JS code runs in 1 thread by nature
- Off-load expensive calculations to worker threads

## How
#### Workerize the expensive module
```js
import makeFilterCitiesWorker from 'workerize!./filter-cities'

const {getItems} = makeFilterCitiesWorker()

export {getItems}

/*
eslint
  import/no-webpack-loader-syntax: 0,
*/
```
