import { ZERO, ONE, FIFTH_NINE, TEN } from './constants';

export async function invalidateTimer(
  timer: NodeJS.Timeout,
  minutes: number,
  seconds: number,
  play: () => Promise<void>,
): Promise<void> {
  if (minutes <= ZERO && seconds <= ZERO) {
    clearInterval(timer);
    await play();
  }
}

export function handleMinutes(minutes: number, seconds: number): number {
  const value = seconds === ZERO ? minutes - ONE : minutes;
  return value;
}

export function handleSeconds(seconds: number): number {
  const value = seconds === ZERO ? FIFTH_NINE : seconds - ONE;
  return value;
}

export function formatTime(comparator: number): string {
  const formatedValue = comparator < TEN ? `0${comparator}` : `${comparator}`;
  return formatedValue;
}
