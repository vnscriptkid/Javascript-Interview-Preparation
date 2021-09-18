```js
→  render → reconciliation → commit
         ↖                   ↙
              state change
              
// render: reactEleNow = render() => misleading name: just creating an object 
// reconciliation: placesToUpdate = diff(reactEleNow, reactElePrev)
// commit: commit(placesToUpdate)
```
