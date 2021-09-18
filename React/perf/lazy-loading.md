## Lazy-loading using Code Spliting
#### Load when users need
```js
const loadGlobe = () => import('../globe')
const Globe = React.lazy(loadGlobe)
// ...
<React.Suspense fallback={<div>loading...</div>}>
  {showGlobe ? <Globe /> : null}
</React.Suspense>
```
#### Load when there's an indication that user needs it (focus, hover)
```js
<input
  onMouseOver={loadGlobe}
  onFocus={loadGlobe}
/>
```
#### Loads when browser is no longer busy (save to cache)
```
const loadGlobe = () => import(/*webpackPrefetch: true*/ '../globe')
```
