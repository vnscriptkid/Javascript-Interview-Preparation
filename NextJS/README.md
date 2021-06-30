## Why?
- Bundler (webpack) + Transpiler (Babel)
- production optimizations such as code splitting
- performance and SEO: pre-render

## Global sytles vs Shared styles

## How server-side rendering?
- render a page on the server for the initial page load and then on the client for subsequent loads

## `getInitialProps()` vs `componentDidMount()`
- If you want to render a page on the server for the initial load, you should fetch data with getInitialProps() .
- If you want to render a page on the client, without server-side rendering for the initial load, you should fetch data using the API method inside the componentDidMount lifecycle hook.
