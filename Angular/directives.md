## Structural directives
- Change the structure of html by adding or removing elements from dom

## `*ngFor`

## `*ngIf`

## `[ngClass]`

## `React.Fragment`'s Angular 👉 `<ng-container></ng-container>`

## ☠️ 2 directives on same element is impossible ⚠️

## `ngSwitch`

## Rebuild `ngClass`
```console
ng generate directive class
```

#### :one: Inject target element to directive class at runtime
```js
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {
  constructor(private ele: ElementRef) { }
}
```

#### :two: Behind the scene
```html
<div customDirective [backgroundColor]="'green'">hello</div>
```
```js
// somewhere in angular code
const customDirective = new customDirectiveClass();
// ... later ...
customDirective.backgroundColor = 'green';
```

#### :three: Catch `backgroundColor` at the time it's passed down
```js
@Input() set backgroundColor(value: string) {
  // make use of `value`
}
```

#### :four: Replace `ngClass`
```html
<div [appClass]="{ 'red': true, 'green': false, 'grey': true }">hello</div>
```

```js
@Input('appClass') set classNames(obj: any) {
  for (let [className, included] of Object.entries(obj)) {
    if (included) {
      this.ele.nativeElement.classList.add(className);
    } else {
      this.ele.nativeElement.classList.remove(className);
    }
  }
}
```

## Rebuild `*ngFor`
#### Generate new directive
```console
ng generate directive times
```

#### Think of API
```html
<ul *appTimes="5">
    <li>repeated item</li>
</ul>
```

#### Implement it
```js
import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(private viewContainer: ViewContainerRef, private templateRef: TemplateRef<any>) {}

  @Input('appTimes') set render(times: number) {
    this.viewContainer.clear();

    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {});
    }
  }
}
```
