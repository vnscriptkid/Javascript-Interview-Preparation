## How fast is enough?
- 60 frames per second (60fps) => Browser draws UI 60 times per second
- Intervals between frames is 16.67ms => Do JS stuff between these 

## Why React can be slow?
- Slow render (creating object that describes UI with `React.createElement`)
- Unneccessary re-renders (Re-creating react element before diffing)

## Checklist
1. Lazy Loading
2. Improve slow render (avoid re-running unneccessary expensive calculations) => useMemo, useCallback
3. Avoid unneccesary re-renders => memo
4. Window large lists with react-virtual
