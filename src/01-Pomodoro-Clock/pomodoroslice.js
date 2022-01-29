import {  createSlice } from "@reduxjs/toolkit";

const initialState = {
  session: 1500,
  shortBreak: 300,
  longBreak: 600,
  clock: 1500,
  sound: false,
  cycle: 0,
  pause: false,
};

const reducers = {
  toggleSound: (state) => {
    state.sound = !state.sound;
  },
  togglePause: (state) => {
    state.pause = !state.pause;
  },
  setPomodoroClock: (state, payload) => {
    if (payload.cycle) {
      state.cycle += 1;
    }
    if (state.cycle % 2 === 1) {
      state.clock = state.session;
    } else if (state.cycle % 8 === 0) {
      state.clock = state.longBreak;
    } else {
      state.clock = state.shortBreak;
    }
  },
  resetPomodoroClock: (state) => {
    state.cycle = 1;
    state.clock = state.session;
  },
  decrementClock: (state) => {
    state.clock -= 1;
  },
  incrementSession: (state) => {
    state.session += 60;
  },
  decrementSession: (state) => {
    if (state.session >= 60) {
      state.session -= 60;
    }
  },
  incrementShort: (state) => {
    state.shortBreak += 60;
  },
  decrementShort: (state) => {
    if (state.shortBreak >= 60) {
      state.shortBreak -= 60;
    }
  },
  incrementLong: (state) => {
    state.shortBreak += 60;
  },
  decrementLong: (state) => {
    if (state.shortBreak >= 60) {
      state.shortBreak -= 60;
    }
  },
};

const PomodoroSlice = createSlice({
  name: "Pomodoro",
  initialState,
  reducer: reducers,
}); 

export const {
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
} = PomodoroSlice.actions;

export default PomodoroSlice.reducer;