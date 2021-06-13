## :star: Fullstack Architecture

![image](https://user-images.githubusercontent.com/28957748/121804384-5a667680-cc70-11eb-9b6c-347962837d60.png)

#### Workflow

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

#### Google Oauth

#### Authentication

#### MongoDB

#### Prod and Dev environments

#### Tooling

#### Proxy

#### Payments

#### Emailing

## :star: Client side

#### Client architecture

#### Routing

#### Redux

#### Redux Form
