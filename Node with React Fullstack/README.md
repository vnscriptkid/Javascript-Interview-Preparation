## :star: Fullstack Architecture

![image](https://user-images.githubusercontent.com/28957748/121804384-5a667680-cc70-11eb-9b6c-347962837d60.png)

![image](https://user-images.githubusercontent.com/28957748/121853255-e7660a00-cd1a-11eb-8d18-abc03d8f51c6.png)

#### Why this architecture?

![image](https://user-images.githubusercontent.com/28957748/121861209-d4a40300-cd23-11eb-85ea-dcbc4cb2107e.png)

![image](https://user-images.githubusercontent.com/28957748/121861576-2056ac80-cd24-11eb-9d45-bf4276e24cda.png)

#### Dev workflow
```json
"scripts": {
  "server": "nodemon index.js",
  "client": "npm run start --prefix client",
  "dev": "concurrently \"npm run server\" \"npm run client\"",
},
```

## :star: Backend side

#### Backend architecture

#### Route handlers
![image](https://user-images.githubusercontent.com/28957748/121804676-d3b29900-cc71-11eb-81d2-5e1efc54b94e.png)

```javascript
// routes/surveyRoutes.js
module.exports = (app) => {
  app.get("/api/surveys", requireLogin, async (req, res) => {
    // Fetching all surveys of current user
  });
}
// index.js
require("./routes/surveyRoutes")(app);
```

#### Configs
![image](https://user-images.githubusercontent.com/28957748/121804862-a31f2f00-cc72-11eb-822d-8df8403dd29d.png)

![image](https://user-images.githubusercontent.com/28957748/121856710-ffd82380-cd1e-11eb-85da-34b6423838c3.png)

```javascript
// config/keys.js
if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}

// config/prod.js
module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID
}

// config/dev.js
module.exports = {
  googleClientID: 'abcxyz'
}
```

#### Heroku Deployments
![image](https://user-images.githubusercontent.com/28957748/121814900-a54ab300-cc9d-11eb-9011-e0331149137a.png)

```javascript
// index.js
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
```

- package.json
```json
"engines": {
  "node": "12.18.3",
  "npm": "6.11.3"
},
"scripts": {
  "start": "node index.js",
},
```

- First deployment
```console
foo@bar:~$ heroku login
foo@bar:~$ heroku create
foo@bar:~$ git remote add heroku https://git.heroku.com/mighty-brushlands-84201.git
foo@bar:~$ git push heroku master
foo@bar:~$ heroku open
```

- After that
```console
foo@bar:~$ git push heroku master
foo@bar:~$ heroku open
```

#### Express

![image](https://user-images.githubusercontent.com/28957748/121849551-a8818580-cd15-11eb-9112-e58294d12962.png)

#### Setup Goolge Oauth

console.developers.google.com

#### Google Oauth

![image](https://user-images.githubusercontent.com/28957748/121837047-e626e400-ccfe-11eb-91c0-09946c18907d.png)

![image](https://user-images.githubusercontent.com/28957748/121857610-0024ee80-cd20-11eb-8990-93e579266ca5.png)

#### Authentication

![image](https://user-images.githubusercontent.com/28957748/121854301-2f396100-cd1c-11eb-9e8c-949206ce82a7.png)

![image](https://user-images.githubusercontent.com/28957748/121856546-cd2e2b00-cd1e-11eb-83d5-1cab2380fc38.png)

- `index.js`
```javascript
const express = require("express");
const cookieSession = require("cookie-session"); // This module stores the session data on the client within a cookie
const passport = require("passport");
const keys = require("./config/keys");

require("./services/passport");

const app = express();

// Middlewares
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

// Route Hanlders
```

- `routes/authRoutes.js`
```javascript
module.exports = (app) => {
  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/surveys");
    }
  );

  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
```

- `services/passsport.js`
```javascript
const passport = require("passport");
var GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");
const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  // determines which data of the user object should be stored in the session
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  // The first argument of deserializeUser corresponds to the key of the user object that was given to the done in serializeUser
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) done(null, existingUser);
      else {
        const user = await new User({ googleId: profile.id }).save();
        done(null, user);
      }
    }
  )
);
```
![image](https://user-images.githubusercontent.com/28957748/121854950-fcdc3380-cd1c-11eb-869a-7dee816509eb.png)

![image](https://user-images.githubusercontent.com/28957748/121858150-817c8100-cd20-11eb-9df5-f738e97607db.png)

#### Cookie-based auth using Oauth

![image](https://user-images.githubusercontent.com/28957748/121855155-3c0a8480-cd1d-11eb-873f-4a47888d4608.png)

#### Session-based vs Cookie-based auth

![image](https://user-images.githubusercontent.com/28957748/121856123-5729c400-cd1e-11eb-80e2-ad15c3fcabc0.png)

#### MongoDB

- Collection vs Subdocument
  - Mongo Size limit for a single record = 4mb!

#### Prod and Dev environments

![image](https://user-images.githubusercontent.com/28957748/121837483-e673af00-ccff-11eb-9694-105b2abb07e5.png)

```javascript
// ...
require("./routes/authRoutes")(app);
require("./routes/stripeRoutes")(app);
require("./routes/surveyRoutes")(app);

// Final in middleware chain, after route handlers
if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets like main.js, main.css
  app.use(express.static("client/build"));
  // Express will serve up index.html if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
```

#### Tooling
Instead of this:
```console
foo@bar:~$ npm install -g create-react-app
foo@bar:~$ create-react-app client
```
Just do this:
```console
foo@bar:~$ npx create-react-app client
```

#### Proxy (in dev env only)
```console
foo@bar:~$ npm install http-proxy-middleware@1.0.6
```
- `client/src/setupProxy.js`
```javascript
const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api", "/auth/google"],
    createProxyMiddleware({
      target: "http://localhost:9000",
    })
  );
};
```

#### Payments

#### Emailing

![image](https://user-images.githubusercontent.com/28957748/121859550-04eaa200-cd22-11eb-8ec5-bbb9d847a117.png)

![image](https://user-images.githubusercontent.com/28957748/121859863-732f6480-cd22-11eb-87d6-2ceeab372386.png)

## :star: Client side

#### Client architecture

#### Routing

![image](https://user-images.githubusercontent.com/28957748/121860052-abcf3e00-cd22-11eb-9404-1221e551bacd.png)

#### Redux

![image](https://user-images.githubusercontent.com/28957748/121838389-e8d70880-cd01-11eb-9462-2a9d1348afa4.png)

#### Redux-thunk

![image](https://user-images.githubusercontent.com/28957748/121860457-0f596b80-cd23-11eb-9030-dc6444258c9a.png)

#### Redux Form

![image](https://user-images.githubusercontent.com/28957748/121858618-010a5000-cd21-11eb-8d9a-b30a31245e67.png)

