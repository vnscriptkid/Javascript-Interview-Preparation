## Hooks 
* ngOnInit: called once, after first rendering, after receiving props from parent
* ngOnChanges: called every time when props change
* ngOnDestroy: called once, when component is about to be removed

## Diagram && Code

<img src="https://codecraft.tv/courses/angular/components/lifecycle-hooks/images/lifecycle-hooks.png" width="400" />

```
new - data is undefined // constructor
ngOnChanges - data is [object Object]
ngOnInit  - data is [object Object]
ngDoCheck
ngAfterContentInit
ngAfterContentChecked
ngAfterViewInit
ngAfterViewChecked
```
