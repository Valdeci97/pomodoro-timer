import { appDefaultConfig } from './constants';

type PomodoroOptions = {
  pomodoro: string;
  shortBreak: string;
  longBreak: string;
};

type PomodoroSettings = {
  timer: PomodoroOptions;
  backgroundColor: PomodoroOptions;
};

function getPomodoroSettings(): PomodoroSettings {
  const local = JSON.parse(localStorage.getItem('pomodoro-preferences')) as unknown;
  if (!local) {
    return appDefaultConfig;
  }
  return local as PomodoroSettings;
}

export function getPomodoro(): string {
  const local = getPomodoroSettings();
  return local.timer.pomodoro;
}

export function getShortBreak(): string {
  const local = getPomodoroSettings();
  return local.timer.shortBreak;
}

export function getLongtBreak(): string {
  const local = getPomodoroSettings();
  return local.timer.longBreak;
}

export function getBackground(): PomodoroOptions {
  const local = getPomodoroSettings();
  return local.backgroundColor;
}

export function setPreferences(value: PomodoroSettings): void {
  localStorage.setItem('pomodoro-preferences', JSON.stringify(value));
}
