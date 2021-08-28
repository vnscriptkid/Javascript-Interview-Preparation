## Hey browsers, send this data for next reqs
```js
res.cookie("token", token, {
  httpOnly: true,
});
```

## Take cookie from client's reqs
```js
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.post('/myendpoint', (req, res) => {
  console.log(req.cookies.token);
  // ...
}) 
```
