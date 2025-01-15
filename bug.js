```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using count in a setTimeout callback that may reference a stale closure.
    const timeoutId = setTimeout(() => {
      console.log('Count:', count); // count might be outdated here
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [count]); // This dependency array is correct

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```