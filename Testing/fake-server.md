## Setup a faker server for react testing 
https://mswjs.io/
```js
import {rest} from 'msw'
import {setupServer} from 'msw/node'

const server = setupServer(
  rest.post(
    'https://auth-provider.example.com/api/login',
    async (req, res, ctx) => {
      return res(
        ctx.json({
          username: req.body.username,
        }),
      )
    },
  ),
)

beforeAll(() => server.listen())
afterAll(() => server.close())
```
