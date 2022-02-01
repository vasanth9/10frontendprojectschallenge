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
  setSoundIndex,
} from "./pomodoroslice";

const mapStateToProps = (state) => ({
  session: state.session,
  shortBreak: state.shortBreak,
  longBreak: state.longBreak,
  clock: state.clock,
  sound: state.sound,
  cycle: state.cycle,
  pause: state.pause,
  soundUrl: state.soundUrl,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSound: (data) => dispatch(toggleSound(data)),
  togglePause: (data) => dispatch(togglePause(data)),
  setPomodoroClock: (data) => dispatch(setPomodoroClock(data)),
  resetPomodoroClock: () => dispatch(resetPomodoroClock()),
  decrementClock: () => dispatch(decrementClock()),
  incrementSession: () => dispatch(incrementSession()),
  decrementSession: () => dispatch(decrementSession()),
  incrementShort: () => dispatch(incrementShort()),
  decrementShort: () => dispatch(decrementShort()),
  incrementLong: () => dispatch(incrementLong()),
  decrementLong: () => dispatch(decrementLong()),
  setSoundIndex: (data) => dispatch(setSoundIndex(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PomodoroClock);
