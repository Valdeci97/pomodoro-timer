const BLUE = '#67BBF4';
const GREY = '#A3A3A3';
const GREEN = '#55B48B';
const PINK = '#CB48B7';
const ORANGE = '#FE4120';
const GOLD = '#EB991E';
const pomodoro = '25:00';
const shortBreak = '05:00';
const longBreak = '15:00';

export const ZERO = 0;
export const ONE_SECOND_IN_MS = 1000;
export const ONE = 1;
export const FIFTH_NINE = 59;
export const TEN = 10;
export const backgroundOptions = [BLUE, GREY, GREEN, PINK, ORANGE, GOLD];
export const POMODORO = 'pomodoro';
export const SHORT_BREAK = 'shortBreak';
export const LONG_BREAK = 'longBreak';
export const appDefaultConfig = {
  timer: {
    pomodoro,
    shortBreak,
    longBreak,
  },
  backgroundColor: {
    pomodoro: ORANGE,
    shortBreak: BLUE,
    longBreak: GREEN,
  },
};
