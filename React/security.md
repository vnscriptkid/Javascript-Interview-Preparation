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
```html
<div
  dangerouslySetInnerHTML={{ __html: DomPurify.sanitize(user.bio) }}
/>
```
