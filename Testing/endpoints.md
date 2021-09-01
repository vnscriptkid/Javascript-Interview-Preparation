## Setup
```js
let server

beforeAll(async () => {
  server = await startServer({port: 8000}) // connect to db
})

afterAll(() => server.close())

beforeEach(() => resetDb())
```

## Test auth flow
```js
const baseURL = 'http://localhost:8000/api'
const api = axios.create({baseURL})

test('auth flow', async () => {
  // Register
  const userForm = generate.loginForm()

  const rResult = await api.post('auth/register', userForm)

  expect(rResult.data.user).toEqual({
    username: userForm.username,
    token: expect.any(String),
    id: expect.any(String),
  })

  // Login
  const lResult = await api.post('auth/login', userForm)

  expect(lResult.data.user).toEqual(rResult.data.user)

  // Current user
  const mResult = await api.get('auth/me', {
    headers: {
      Authorization: `Bearer ${lResult.data.user.token}`,
    },
  })

  expect(mResult.data.user).toEqual(lResult.data.user)
})
```
