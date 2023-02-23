import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div style={{ textAlign: "center" }} className="card py-5">
        <h1>counter</h1>
        <div style={{ fontSize: "20px" }}>
          <h2 className="my-3">{count}</h2>
          <button className="btn btn-success mx-3" onClick={handleInc}>
            increment
          </button>
          <button
            className="btn btn-danger mx-3"
            onClick={() => setCount(count - 1)}
            disabled={count === 0}
          >
            decrement
          </button>
          <button
            className="btn btn-secondary"
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
