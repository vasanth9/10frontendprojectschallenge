import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Play from "./Play";
import Pause from "./Pause";
import Reset from "./Reset";

const Timer = (props) => {
  const {
    session,
    shortBreak,
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
    soundUrl,
    sound,
    toggleSound,
  } = props;
 const myRef = useRef();
useEffect(()=>{
sound? myRef.current.play() : myRef.current.pause();
},[sound])
 const startAudio = () => {
   
  toggleSound(true);
 };

 const pauseAudio = () => {
   toggleSound(false);
 };
  useEffect(() => {
    let intervalId;
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
  }, [clock, decrementClock, pause, setPomodoroClock, session]);

  const handleStart = () => {
    togglePause(!pause);
  };
  const handleReset = () => {
    resetPomodoroClock();
    togglePause(false);
  };
  
  return (
    <div>
      <div className="Timer-Container">
        <h2>React Pomodoro Clock</h2>
        <div className="timer-circle">
          <h1 className="timer-clock">{`${Math.floor(clock / 60)
            .toString()
            .padStart(2, "0")}:${(clock % 60)
            .toString()
            .padStart(2, "0")}`}</h1>
          <div className="row-buttons">
            <button onClick={handleStart} className="circular-button">
              {pause ? <Pause /> : <Play />}
            </button>
            <button onClick={handleReset} className="circular-button">
              <Reset />
            </button>
          </div>
        </div>
        <div>
          <span className="span-length">Session Length</span>
          <span className="span-length">Break Length</span>
        </div>
        <div className="button-div-width">
          <button
            className={pause ? "circular-button-3" : "circular-button-2"}
            disabled={pause}
            onClick={() => decrementSession()}
          >
            -
          </button>
          <span className="span-pomodoro">{`${Math.floor(session / 60)
            .toString()
            .padStart(2, "0")}`}</span>
          <button
            className={pause ? "circular-button-3" : "circular-button-2"}
            disabled={pause}
            onClick={() => incrementSession()}
          >
            +
          </button>
          <button
            className={pause ? "circular-button-3" : "circular-button-2"}
            disabled={pause}
            onClick={() => decrementShort()}
          >
            -
          </button>
          <span className="span-pomodoro">{`${Math.floor(shortBreak / 60)
            .toString()
            .padStart(2, "0")}`}</span>
          <button
            className={pause ? "circular-button-3" : "circular-button-2"}
            disabled={pause}
            onClick={() => incrementShort()}
          >
            +
          </button>
        </div>
      </div>
      <audio ref={myRef} src={soundUrl} />
      {sound ? (
        <button className="circular-button" onClick={pauseAudio}>
          <Pause />
        </button>
      ) : (
        <button className="circular-button" onClick={startAudio}>
          <Play />
        </button>
      )}
    </div>
  );
};
export default Timer;
