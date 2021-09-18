```js
→  render → reconciliation → commit
         ↖                   ↙
              state change
              
// render: domNow = render() 
// reconciliation: placesToUpdate = diff(domNow, domPrev)
// commit: commit(placesToUpdate)
```
