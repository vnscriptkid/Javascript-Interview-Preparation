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
  *ngFor="let post of posts"
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
- :one: From __parent__ side: Passing data down to child through __property binding__
```html
<my-child [drink]="getDrink()"></my-child>
```

- :two: From __child__ side: Receive data through `@Input` decorator
```js
@Input() drink = '';
```
