import {  createSlice } from "@reduxjs/toolkit";
import constants from './constants';
const initialState = {
  session: 1500,
  shortBreak: 300,
  longBreak: 600,
  clock: 1500,
  sound: false,
  soundUrl:
    "https://res.cloudinary.com/dmotk8y3k/video/upload/v1643726855/rain_p4hwqd.mp3",
  cycle: 1,
  pause: false,
};

const reducers = {
  toggleSound(state,{payload}) {
    state.sound = payload;
  },
  togglePause(state,{payload}) {
    state.pause = payload;
  },
  setPomodoroClock(state, payload) {
    if (payload) {
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
  resetPomodoroClock(state) {
    state.cycle = 1;
    state.session = 1500;
    state.shortBreak = 300;
    state.longBreak = 600;
    state.clock = 1500;
    state.pause = false;
  },
  decrementClock(state) {
    state.clock -= 1;
  },
  incrementSession(state) {
    state.session += 60;
    state.clock = state.session;
  },
  decrementSession(state) {
    if (state.session > 60) {
      state.session -= 60;
      state.clock = state.session;
    }
  },
  incrementShort(state) {
    state.shortBreak += 60;
  },
  decrementShort(state) {
    if (state.shortBreak > 60) {
      state.shortBreak -= 60;
    }
  },
  setSoundIndex(state,payload){
    state.url = constants[payload];
  }
};

const PomodoroSlice = createSlice({
  name: "Pomodoro",
  initialState,
  reducers,
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
  setSoundIndex,
} = PomodoroSlice.actions;

export default PomodoroSlice.reducer;