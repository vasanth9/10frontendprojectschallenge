import React from "react";
import Timer from './Timer'
import "./PomodoroClock.css";

const PomodoroClock = (props) => {
  return (
    <div className="Pomodoro-Div">
    <Timer {...props} />
    </div>
  );
};

export default PomodoroClock;
