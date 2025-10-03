import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Counter: {count}</h2>
      <button onClick={decrement} style={{ marginRight: "10px" }}>
        Decrement
      </button>
      <button onClick={increment}>Increment</button>

      {count === 10 && (
        <p style={{ color: "red", fontWeight: "bold" }}>
          Maximum limit reached.
        </p>
      )}
    </div>
  );
}

export default Counter;
