## Events bubbling
* __What__: If you click on button, all outside elements in DOM tree will catch that click event, due to event bubbling.
* How to stop that happens in Angular:
```html
<div (click)="doMyWork()">
<!-- a lot elements between -->
  <button 
    (click)="$event.stopPropagation()"
    (click)="deleteMessage(message)"
  >Delete</button>
```
