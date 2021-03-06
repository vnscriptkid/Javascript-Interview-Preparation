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

## Property Binding
```html
<input [value]="password" type="text" />
```
#### 🆚 Static Property
![image](https://user-images.githubusercontent.com/28957748/126030006-fd763846-d052-4998-9b30-3ec0d72f5111.png)

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

```html
<app-card 
  *ngFor="let post of posts; let i = index;"
  [title]="post.title" 
  [username]="post.username" 
  [imageUrl]="post.imageUrl" 
  [content]="post.content"
></app-card>
```

## Scoped CSS

![image](https://user-images.githubusercontent.com/28957748/126029192-5e9144de-08be-4729-89e6-9dde3ac21273.png)

#### ⭐ How to select outer-most tag of a component
![image](https://user-images.githubusercontent.com/28957748/126029592-b2d5dff7-1a3f-490f-866b-debea8999fdf.png)
```css
:host {
    display: flex;
}
```

## Components
- Represents a independent piece of UI
- Has __data__ and __behaviors__
- Can be reused

## Parent passing data to Children
#### Approach 1: Through `Input()`
- :one: From __parent__ side: Passing data down to child through __property binding__
```html
<my-child [drink]="getDrink()"></my-child>
```

- :two: From __child__ side: Receive data through `@Input` decorator
```js
@Input() drink = '';
```
#### Approach 2: Through `<ng-content>` (like `children` in React)
- :one: From __parent side__:
```html
<app-divider>Placeholder Component</app-divider>
```

- :two: From __child side__:
```html
<h1>
    <ng-content></ng-content>
</h1>
<div class="ui divider"></div>
```

## Pipes
- https://angular.io/api/common#pipes
- Format data in template

:one: `nguyen trung thanh` => `Nguyen Trung Thanh`
```html
<p>{{ fullName | titlecase }}</p>
```
:two: `20-12-1992` => `Dec 20, 1992`
```html
<p>{{ date | date:'MMM d, y' }}</p>
```

:three: `12.199` => `$12.20`
```html
<p>{{ amount | currency }}</p>
```

:four: obj => dump (for debug)
```html
<p>{{ obj | json }}</p>
```

:five: custom
```console
ng generate pipe my-pipe
```

#### ⭐ Chaining pipes
```html
<p> {{ data | mypipe | number:'1.0-2' }}
<!-- {minIntegerDigits}.{minFractionDigits}-{maxFractionDigits} -->
```
