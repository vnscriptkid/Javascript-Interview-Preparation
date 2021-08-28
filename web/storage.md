## Compare `cookie` && `localStorage` && `sessionStorage`
https://www.youtube.com/watch?v=2PPSXonhIck

<img width="700px" src="https://user-images.githubusercontent.com/28957748/130888548-e2129ea0-215f-43b6-8201-f818e522f33f.png" />

#### localStorage
- ✔️ Persist user state accross refreshes, tab closings, browser closings
- ⚠️ Vulnerable to Cross-site scripting attack

#### Cookie
- Flow
  - Server tells client (browser) to set cookie
  - Since then, for every reqs sent by browsers to server (it attaches cookie data in headers)
- `document.cookie`
- By setting `http=true`, means this piece of data can only sent by browsers (not javascript)
