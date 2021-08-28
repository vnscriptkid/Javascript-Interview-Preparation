## Flow
#### :one: Server sends back `token` in cookie after login or register success 
```js
res.cookie("token", token, {
  httpOnly: true,
});
```    
#### :two: Browsers attach  for every following reqs in cookie

#### :three: Server takes out `token` from cookie and validate in middleware
```
app.use(cookieParser());

const checkJwt = expressJwt({
  secret: process.env.JWT_SECRET,
  issuer: "api.orbit",
  audience: "api.orbit",
  getToken: function fromCookie(req) {
    return req.cookies.token;
  },
});

app.get(
  "/api/dashboard-data",
  checkJwt,
  (req, res) => res.json(dashboardData)
);
```
