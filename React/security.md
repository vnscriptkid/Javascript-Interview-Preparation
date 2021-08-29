## Cross-Site Scripting Attack
- Context

<img src="https://user-images.githubusercontent.com/28957748/131208918-65f41266-6c35-4742-9164-37143b091171.png" height="200px" />

<img src="https://user-images.githubusercontent.com/28957748/131209062-ae47627c-b6a6-453e-ab91-e3ceddc9c8ad.png" height="400px" />

#### ☠️ Vulnerable code
```html
<div
  dangerouslySetInnerHTML={{ __html: user.bio }}
/>
```
#### ✔️ Fix it
https://github.com/cure53/DOMPurify
```html
<div
  dangerouslySetInnerHTML={{ __html: DomPurify.sanitize(user.bio) }}
/>
```

## CSRF: Cross Site Request Forgery
- Mitigate using `Double Submit Cookie`
https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html#Protecting_REST_Services:_Use_of_Custom_Request_Headers
- https://www.npmjs.com/package/csurf
#### On React side: Get a csrf token when app loaded, attach with following reqs
```js
const getCsrfToken = async () => {
  const { data } = await authAxios.get("csrf-token");
  authAxios.defaults.headers["X-CSRF-Token"] = data.csrfToken;
};
```
#### Need 1 endpoint to get token, and one middleware to process token for endpoints that mutate data
```js
app.use(csrfProtection);

app.get("/api/csrf-token", (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});
```
