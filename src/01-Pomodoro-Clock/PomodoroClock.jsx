import React from "react";
import Timer from './Timer'
import "./PomodoroClock.css";

const PomodoroClock = (props) => {
  return (
    <>
    <Timer {...props} />
    </>
  );
};

export default PomodoroClock;
