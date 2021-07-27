## `Self()`
- Ref1: https://www.tektutorialshub.com/angular/self-skipself-optional-decorators-angular/
- Ref2: https://medium.com/frontend-coach/self-or-optional-host-the-visual-guide-to-angular-di-decorators-73fbbb5c8658
- What? configure how the DI Framework should resolve the dependencies
- Resolution Modifiers: modify the behavior of injectors

## DI process
* :one: ❓ component asks for Dependency
* :two: 🕶️ look for the Dependency in the current component's `ElementInjector`
* :three: 🧗 Climb up the component tree, until root `ElementInjector`
* :four: 👓 looks for the Dependency in the `ModuleInjector`
* :five: ☠️ Throw an error
