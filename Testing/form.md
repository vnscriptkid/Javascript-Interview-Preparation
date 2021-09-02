## Use faker to generate form data 
- Why: Communicate that it's not important (can be anything)
#### Do it manually
```js
function buildLoginForm(overrides) {
  return {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    ...overrides,
  }
}
```
#### Use 3rd-party lib
```js
import {build, fake} from '@jackfranklin/test-data-bot'

const buildLoginForm = build({
  fields: {
    username: fake(f => f.internet.userName()),
    password: fake(f => f.internet.password()),
  },
})
```
