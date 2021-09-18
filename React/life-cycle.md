```js
→  render → reconciliation → commit
         ↖                   ↙
              state change
              
// render: reactEleNow = render() 
// reconciliation: placesToUpdate = diff(reactEleNow, reactElePrev)
// commit: commit(placesToUpdate)
```
