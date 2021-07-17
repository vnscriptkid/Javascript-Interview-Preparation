## File types
- Component: event handlers, variables
- Template: html code
- Style: css
- Module: group components by feature
- Service: fetching & manipulating data

## Event Binding
```html
<input (input)="onInputLength($event)" />
```

## Property
```html
<input [value]="password" type="text" />
```

## Interpolation
```html
<p> {{ name }} </p>
```

## Structural Directives
```html
<div *ngIf="password">
  <!-- anything -->
</div>
```
