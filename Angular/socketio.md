# This doc implies that you're using Signalr
## Usecase 1: How to call socket io endpoint (adding message)
- Assuming in backend you have something like:
```csharp
public class MessageHub : Hub 
{
  public async Task SendMessage(CreateMessageDto createMessageDto) { }
}

```
- Then in frontend, you can call that method __by name__:
```js
sendMessage(recipientUsername: string, content: string) {
    return this.hubConnection.invoke('SendMessage', {
      recipientUsername,
      content
    }).catch(error => console.error(error));
  }
```

## Usecase 2: How to listen on a channel
- Start hub connection first
```js
this.hubConnection = new HubConnectionBuilder()
      .withUrl(`${this.hubUrl}?user=${otherUsername}`, { accessTokenFactory: () => user.token })
      .withAutomaticReconnect()
      .build();

this.hubConnection.start().catch(error => console.error(error));
```
- Then start listening
```js
this.hubConnection.on('ReceiveMessageThread', messages => {
      this.messageThreadSource.next(messages);
    });
```
