import { connect } from "react-redux";
import PomodoroClock from "./PomodoroClock";
import {
  toggleSound,
  togglePause,
  setPomodoroClock,
  resetPomodoroClock,
  decrementClock,
  incrementSession,
  decrementSession,
  incrementShort,
  decrementShort,
  incrementLong,
  decrementLong,
} from "./pomodoroslice";

function mapStateToProps(state) {
  return {
    session: state.session,
    shortBreak: state.shortBreak,
    longBreak: state.longBreak,
    clock: state.clock,
    sound: state.sound,
    cycle: state.cycle,
    pause: state.pause,
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    toggleSound: () => dispatch(toggleSound),
    togglePause: () => dispatch(togglePause),
    setPomodoroClock: () => dispatch(setPomodoroClock),
    resetPomodoroClock: () => dispatch(resetPomodoroClock),
    decrementClock: () => dispatch(decrementClock),
    incrementSession: () => dispatch(incrementSession),
    decrementSession: () => dispatch(decrementSession),
    incrementShort: () => dispatch(incrementShort),
    decrementShort: () => dispatch(decrementShort),
    incrementLong: () => dispatch(incrementLong),
    decrementLong: () => dispatch(decrementLong),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PomodoroClock);
