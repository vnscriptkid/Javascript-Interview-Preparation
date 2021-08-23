## Facebook Login
<img height="300px" src="https://user-images.githubusercontent.com/28957748/130363212-25715f96-dbff-49f0-bbab-91d262b47bd7.png"/>

#### Check login status first `userStore.ts`
```js
// The user is logged into Facebook and has authorized your application
getFbLoginStatus = async () => {
    window.FB.getLoginStatus(response => {
        if (response.status === 'connected') {
            this.fbAccessToken = response.authResponse.accessToken;
        }
    });
}
```

#### Login by sending facebook accessToken to api
```js
fbLogin = async () => {
        if (!window.FB) return;

        this.fbLoading = true;

        const loginWithFbToken = (accessToken: string) => {
            agent.Account.fbLogin(accessToken).then(user => {
                store.commonStore.setToken(user.token);
                runInAction(() => this.user = user);
                history.push('/activities');
            }).catch(err => {
                console.error(err);
                throw err;
            }).finally(() => {
                this.fbLoading = false;
            })
        }

        if (this.fbAccessToken) {
            // https://developers.facebook.com/docs/reference/javascript/FB.getLoginStatus/
            // The user is logged into Facebook and has authorized your application
            loginWithFbToken(this.fbAccessToken);
        } else {
            window.FB.login(response => {
                loginWithFbToken(response.authResponse.accessToken);
            }, {scope: 'public_profile,email'});
        }
    }
```    
