import React, { useState } from 'react';

const Timer = () => {
  const [time, setTime]= useState(25*60);
  setTimeout(() => {
      setTime(time-1);
  }, 1000);
  return <h1>{`${Math.floor(time/60).toString().padStart(2,0)} : ${(time%60).toString().padStart(2,0)}`}</h1>;
};
export default Timer;
