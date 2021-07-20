## Use case 1: Stop Event Propagation (Angular)
![image](https://user-images.githubusercontent.com/28957748/126262282-49c1b531-9c69-46ce-b9d7-424e09adb089.png)
```html
<div *ngIf="open" (click)="onClose()" class="ui dimmer visible active">
    <div (click)="$event.stopPropagation()" class="ui modal visible active">
        <i (click)="onClose()" class="close icon"></i>
        <div class="header">
            MODAL
        </div>
        <div class="content">
            <p>
                Some content for the modal
            </p>
        </div>
        <div class="actions">
            <button (click)="onClose()" class="ui button">OK</button>
        </div>
    </div>
</div>
```
