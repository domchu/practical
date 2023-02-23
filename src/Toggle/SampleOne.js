import React, { useState } from "react";

const SampleOne = () => {
  //using inline function and logical (!) operator
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <button className="btn btn-primary" onClick={() => setToggle(!toggle)}>
          Toggle state
        </button>
        {toggle && (
          <ul class="list-group">
            <li class="list-group-item " aria-current="">
              An active item
            </li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
          </ul>
        )}
      </div>
    </>
  );
};

export default SampleOne;
