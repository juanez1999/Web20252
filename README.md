## Fundamental Hooks: `useEffect` and Side Effects

### 🔹 What is `useEffect`?
In React, components should focus on **rendering UI**.  
But sometimes we need to do things **outside of rendering**, like:
- Fetching data from an API
- Subscribing to an event (e.g., window resize)
- Updating the document title
- Starting a timer

These actions are called **side effects**.  
The hook **`useEffect`** allows us to perform them in functional components.

---

### 🔹 Syntax of `useEffect`
```jsx
useEffect(() => {
  // Code for the side effect
  return () => {
    // Optional cleanup (runs before the component unmounts or before re-running the effect)
  };
}, [dependencies]);
```

- **Effect function** → the main code you want to run.  
- **Cleanup function** (optional) → used to remove subscriptions, clear timers, etc.  
- **Dependencies array**:
  - `[]` → run only once when the component mounts.
  - `[someValue]` → run whenever `someValue` changes.
  - No array → run after every render (⚠️ not common, usually inefficient).  

---

### 🔹 Example: Updating the document title
```jsx
import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  // Side effect: update the document title
  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  }, [count]); // Runs every time count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

👉 Every time `count` changes, the effect updates the **browser tab title**.

---

## Lifecycle of Components with Hooks

In class components we had:
- `componentDidMount` → runs once after the component mounts  
- `componentDidUpdate` → runs after each update  
- `componentWillUnmount` → runs before the component unmounts  

With **functional components + hooks**, all of this is handled by **`useEffect`**.

---

### 🔹 Lifecycle Phases with `useEffect`

1. **Mounting (when component is added to the DOM)**  
   ```jsx
   useEffect(() => {
     console.log("Component mounted");
   }, []); // Empty array → only runs once
   ```

2. **Updating (when state or props change)**  
   ```jsx
   useEffect(() => {
     console.log("Count changed!");
   }, [count]); // Runs whenever 'count' changes
   ```

3. **Unmounting (when component is removed from the DOM)**  
   ```jsx
   useEffect(() => {
     const timer = setInterval(() => {
       console.log("Running interval...");
     }, 1000);

     // Cleanup function → stops the interval
     return () => {
       clearInterval(timer);
       console.log("Component unmounted, interval cleared");
     };
   }, []);
   ```

---

## Key Takeaways 
- `useEffect` is the way to handle **side effects** in functional components.  
- The **dependencies array** controls **when** the effect runs.  
- `useEffect` replaces **lifecycle methods** from class components:
  - `componentDidMount` → `useEffect(..., [])`
  - `componentDidUpdate` → `useEffect(..., [deps])`
  - `componentWillUnmount` → `return cleanup` inside `useEffect`
