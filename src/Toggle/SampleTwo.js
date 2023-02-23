import React, { useState } from "react";

const SampleTwo = () => {
  const [toggle, setToggle] = useState(false);

  const handeToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <button className="btn btn-primary" onClick={handeToggle}>
        Toggle state
      </button>
      {toggle ? (
        <ul class="list-group">
          <li class="list-group-item " aria-current="">
            An active item
          </li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
          <li class="list-group-item">A fourth item</li>
          <li class="list-group-item">And a fifth one</li>
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SampleTwo;
