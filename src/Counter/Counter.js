import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>counter</h1>
        <div style={{ fontSize: "20px" }}>
          <h2>{count}</h2>
          <button className="inc" onClick={handleInc}>
            increment
          </button>
          <button
            className="inc"
            onClick={() => setCount(count - 1)}
            disabled={count === 0}
          >
            decrement
          </button>
          <button
            className="inc"
            onClick={() => setCount(0)}
            disabled={count === 0}
          >
            reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
