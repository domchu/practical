import React from "react";

const PropsDetail = ({ name, job }) => {
  return (
    <div>
      <div>
        <h1>{name}</h1>
        <div>
          <p>{job}</p>
          <p>7:30pm nice meeting</p>
        </div>
      </div>
    </div>
  );
};

export default PropsDetail;
