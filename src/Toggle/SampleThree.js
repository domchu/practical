import React, { useState } from "react";

const SampleThree = () => {
  //css style
  const [toggle, setToggle] = useState(false);

  const handeToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <button className="btn btn-primary" onClick={handeToggle}>
        Toggle state
      </button>

      <ul class="list-group" style={{ display: toggle ? "block" : "none" }}>
        <li class="list-group-item " >
          An active item
        </li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
        <li class="list-group-item">A fourth item</li>
        <li class="list-group-item">And a fifth one</li>
      </ul>
    </div>
  );
};

export default SampleThree;
