# W7D3 - Side Effects & Other Data Fetching

### To Do
- [x] Rules for Hooks
- [x] Pure Functions and Side Effects
- [x] `useEffect`
- [x] Dependencies
- [x] Cleanup
- [x] _useEffect_ Flow

### Hook
- manage the state
- hook into the running React process (React runtime)

### Rules for Hooks
- Only Call Hooks at the Top Level
- Only Call Hooks from React Functions

### Pure Functions
- Given the same arguments always returns the same result
- They produce no side effects

```js
let x = 5;
const sum = (y) => {
  x += 1;
  return x + y;
};

const sayHello = (name) => {
  console.log(`hello ${name}`);
};
```

### Side Effects
- Any operation that modifies the state of the application or interacts with the outside world (ie. things that not in your JS)
- Common side effects
   - Writing/reading to/from standard out/in
   - Modifying the DOM directly
   - Establishing a socket connection (ws or Socket.io)
   - Retrieving data (aka data fetching)
   - Setting timers and intervals

### useEffect

```jsx
React.useEffect(() => {});

const arr = React.useState(0);
```

