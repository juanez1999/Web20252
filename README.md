# Understanding `useState` in React

## 1. What is `useState`?
- `useState` is a React hook that lets you create and manage a variable that can change while the app is running.
- This variable is part of the component’s state.
- When you change the state, React re-renders the component to show the updated information.

Key idea:  
Without `useState`, a functional component cannot have data that changes and automatically updates the UI.

---

## 2. How it works
`useState` returns two things:

1. The current state value (a variable).
2. A function to update that value.

Syntax:
```jsx
const [state, setState] = useState(initialValue);

state → holds the current value.
setState → function that updates the value and triggers a re-render.
initialValue → the starting value of the state.
```
---

## Important Rules:
- Never update state directly (❌ state = 5), always use setState.
- Updating state causes a re-render, but React optimizes it.
- You can store numbers, strings, objects, arrays, and more in useState.
- If the new value depends on the old value, use a callback function:

```jsx
setCount(prev => prev + 1);
```


