## create-react-app
#### Env variables
* `.env.production`
```config
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_CHAT_URL=http://localhost:5000/chat
```
* `.env.development`
```config
REACT_APP_API_URL=/api
REACT_APP_CHAT_URL=/chat
```

#### Config to move build files to dotnet server, in `package.json`
```json
"postbuild": "rimraf ../API/wwwroot && mv build ../API/wwwroot"
```

#### Run the build
```console
npm run build
```
