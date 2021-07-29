## Use Case 1
#### Class-based approach
```js
class UserPosts extends React.Component {
  state = { posts: [] }
  subscribe() {
    this.unsub = subscribeToPosts(this.props.uid, posts => this.setState({ posts }));
  }
  componentDidMount() {
    this.subscribe();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.uid !== this.props.uid) {
       this.unsub();
       this.subscribe();
    }
  }
  componentWillUnmount() {
    this.unsub();
  }
  render() {
    return this.props.children(this.state.posts)
  }
}
```
#### Convert to hook-style
```js
const [user, setUser] = useState(null);
useEffect(() => {
  let isMounted = true

  fetchUser(uid).then(user => {
    if (isMounted) setUser(user)
  })

  return () => {
    isMounted = false
  }
}, [uid])
```
