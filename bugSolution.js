```javascript
import React, { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0); // Use a ref to store the latest count

  useEffect(() => {
    countRef.current = count; // Update the ref with the latest count
    const timeoutId = setTimeout(() => {
      console.log('Count:', countRef.current); // Access the latest count from the ref
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
```