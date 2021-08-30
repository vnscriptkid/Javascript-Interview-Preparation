## Debug with Jest
- Add script
```json
  "scripts": {
    "test:debug": "node --inspect-brk ./node_modules/jest/build/jest.js --runInBand",
  },
```
- In Chrome, go for: `chrome://inspect/#devices`
