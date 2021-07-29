## Use Case 1
#### Class-based approach using `Render Props Pattern`
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
const [posts, setPosts] = useState(null);

useEffect(() => subscribeToPosts(uid, posts => setPosts), [uid])
```
