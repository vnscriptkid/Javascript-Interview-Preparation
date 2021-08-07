## 👶 Naive way: Store state in component
- State should be the top component in component tree 🎄 ? 
  - Due to one-way data flow nature ⏳
  - So when state at top is updated, all child components receiving state through props get updated 🆕
- Cons
  - Manually passing props every layer from top to bottom, prone to errors, hard to update
  - Giant and messy components with a lot of props (children) and event handlers (parents)
- Easy to reason:
  - Data down, Event up
