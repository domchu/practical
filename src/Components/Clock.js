import React, { useEffect, useState } from "react";

const Clock = () => {
  const time = new Date().toLocaleTimeString();
  const date = new Date().toLocaleDateString();
  const [currentTime, setCurrentTime] = useState(time);
  const [currentDate, setCurrentDate] = useState(date);

  const updateTime = () => {
    const time = new Date().toLocaleTimeString();
    const date = new Date().toLocaleDateString();
    setCurrentTime(time);
    setCurrentDate(date);
  };

  useEffect(() => {
    setInterval(updateTime, 1000);
  }, []);
  return (
    <div>
      <h1>digital clock</h1>
      <h1>{currentTime} </h1>
      <h1>{currentDate} </h1>
    </div>
  );
};

export default Clock;
