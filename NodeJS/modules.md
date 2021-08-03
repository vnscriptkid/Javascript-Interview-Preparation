# Modules, Exports, Require

## Concepts
- Modules: piece of reusable code, does not collide with other code
  - How not colliding? Scope => How to to simulate Scoping: IIFE
- CommonJS: Standard of how modules is structured
- First-class functions: Whatever you can do with a variable, you can do with function
  - Passing into other function as arguments
  - Assigning to a variable
  - Return from a function
- Function expression

## Understand in Code
```js
function wrapSafe(filename, content, cjsModuleInstance) {
  if (patched) {
    const wrapper = Module.wrap(content);
    // vm.runInThisContext(code, options)
    return vm.runInThisContext(wrapper, { // vm.runInThisContext() compiles code, runs it within the context of the current global and returns the result
      filename,
      lineOffset: 0,
      displayErrors: true,
      importModuleDynamically: async (specifier) => {
        const loader = asyncESM.ESMLoader;
        return loader.import(specifier, normalizeReferrerURL(filename));
      },
    });
  }
  try {
    return vm.compileFunction(content, [
      'exports',
      'require',
      'module',
      '__filename',
      '__dirname',
    ], {
      filename,
      importModuleDynamically(specifier) {
        const loader = asyncESM.ESMLoader;
        return loader.import(specifier, normalizeReferrerURL(filename));
      },
    });
  } catch (err) {
    if (process.mainModule === cjsModuleInstance)
      enrichCJSError(err, content);
    throw err;
  }
}
```
