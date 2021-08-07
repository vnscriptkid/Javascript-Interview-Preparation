## Usecase 1
```js
function handleDeleteActivity(event: SyntheticEvent<HTMLButtonElement>) {
    setTargetId(event.currentTarget.name);
    deleteActivity(event.currentTarget.name)
}
```
