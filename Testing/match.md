## Usecase 1: Assert types not exact values
```js
expect(rResult.data.user).toEqual({
  token: expect.any(String),
  id: expect.any(String),
  username,
})
```

## Usecase 2: Assert subset of props
```js
expect(listItem).toMatchObject({
  bookId: book.id,
  ownerId: testUser.id,
})
```
