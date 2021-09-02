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
afterEach(() => server.resetHandlers())
```

## Customize server for specific test
```js
test(`login fails 500`, async () => {
  const errorMsg = 'something went wrong'
  server.use(
    rest.post(
      'https://auth-provider.example.com/api/login',
      async (req, res, ctx) => {
        return res(ctx.delay(0), ctx.status(500), ctx.json({message: errorMsg}))
      },
    ),
  )
  // ...
})
```
