import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
// import { Button, Card, Col, Row } from "react-bootstrap";
import ProgressRing from "./ProgressRing";
const Timer = (props) => {
  const {
    session,
    shortBreak,
    longBreak,
    clock,
    decrementClock,
    pause,
    togglePause,
    resetPomodoroClock,
    setPomodoroClock,
    incrementSession,
    decrementSession,
    decrementShort,
    incrementShort,
    decrementLong,
    incrementLong,
  } = props;
  useEffect(() => {
    let intervalId;
    console.log(Math.floor(((clock) / session) * 100));
    if (pause) {
      intervalId = setInterval(() => {
        decrementClock();
      }, 1000);
    }
    if (clock <= 0) {
      setPomodoroClock(true);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [clock, decrementClock, pause, setPomodoroClock,session]);

  const handleStart = () => {
    togglePause(!pause);
  };
  const handleReset = () => {
    resetPomodoroClock();
    togglePause(false);
  };
  return (
    <div className="Timer-Container">
      <ProgressRing radius={60} stroke={4} progress={Math.floor(((clock)/session)*100)} />
      <p>
        <button disabled={pause} onClick={() => decrementSession()}>
          -
        </button>
        {`${Math.floor(session / 60)
          .toString()
          .padStart(2, "0")}:${(session % 60).toString().padStart(2, "0")}`}
        <button disabled={pause} onClick={() => incrementSession()}>
          +
        </button>
      </p>
      <p>
        <button disabled={pause} onClick={() => decrementShort()}>
          -
        </button>
        {`${Math.floor(shortBreak / 60)
          .toString()
          .padStart(2, "0")}:${(shortBreak % 60).toString().padStart(2, "0")}`}
        <button disabled={pause} onClick={() => incrementShort()}>
          +
        </button>
      </p>
      <p>
        <button disabled={pause} onClick={() => decrementLong()}>
          -
        </button>
        {`${Math.floor(longBreak / 60)
          .toString()
          .padStart(2, "0")}:${(longBreak % 60).toString().padStart(2, "0")}`}
        <button disabled={pause} onClick={() => incrementLong()}>
          +
        </button>
      </p>
      <div className="Circular-Progress">
        <p>{`${Math.floor(clock / 60)
          .toString()
          .padStart(2, "0")}:${(clock % 60).toString().padStart(2, "0")}`}</p>
      </div>
      <button onClick={handleStart}>{pause ? "Pause" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
export default Timer;
