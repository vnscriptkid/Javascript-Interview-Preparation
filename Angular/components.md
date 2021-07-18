## Reusable component using `ng-content` with `select`
#### [REF] 🔗 Multi-slot content projection: https://angular.io/guide/content-projection#multi-slot

![image](https://user-images.githubusercontent.com/28957748/126061976-da9a1fad-b55c-4fcd-b03e-9236b0f12e16.png)

#### :one: On parent side
```html
<app-segment>
    <header>
        <i class="pdf file outline icon"></i>
        No documents are listed for this customer.
    </header>
    <div class="ui primary button">Add Document</div>
</app-segment>
```

#### :two: On child side:
```html
<div class="ui placeholder segment">
    <div class="ui icon header">
        <ng-content select="header"></ng-content>
    </div>
    <ng-content></ng-content>
</div>
```

#### :star: Hide empty elements
![image](https://user-images.githubusercontent.com/28957748/126062419-87f0d98a-bc77-4c5a-9de9-50a115eed146.png)

```css
.ui.icon.header:empty {
    display: none;
}
```

