<script lang="ts">
  import alarm from '../assets/alarm-clock.mp3';
  import Button from './Button.svelte';
  import { handleMinutes, handleSeconds, formatTime, invalidateTimer } from '../utils/timer';
  import { LONG_BREAK, ONE_SECOND_IN_MS, POMODORO, SHORT_BREAK } from '../utils/constants';
  import { handleClasses } from '../utils/timerButtons';
  import { getLongtBreak, getPomodoro, getShortBreak } from '../utils/localStorage';
  import { setupBackground } from '../utils/background';

  let stopCountdown = false;
  let selectedTime = getPomodoro();
  let timer: NodeJS.Timeout;
  let backgroundKey = POMODORO;

  const pomodoroTime = getPomodoro();
  const shortBreakTime = getShortBreak();
  const longBreakTime = getLongtBreak();
  const audio = new Audio(alarm);

  function play(): Promise<void> {
    return audio.play();
  }

  function handleTimerValue(time: string, e: any, key: string): void {
    selectedTime = time;
    handleClasses('.timer-settings-btn', 'selected', `#${e.target.id}`);
    backgroundKey = key;
    setupBackground(key);
  }

  function stopTimer(): void {
    stopCountdown = false;
    clearInterval(timer);
  }

  function startTimer(): void {
    stopCountdown = true;
    let [minutes, seconds] = selectedTime.split(':').map((time) => Number(time));
    timer = setInterval( async () => {
      minutes = handleMinutes(minutes, seconds);
      seconds = handleSeconds(seconds);
      const screenMinutes = formatTime(minutes);
      const screenSeconds = formatTime(seconds);
      selectedTime = `${screenMinutes}:${screenSeconds}`;
      await invalidateTimer(timer, minutes, seconds, play);
    }, ONE_SECOND_IN_MS);
  }
</script>

<div class="timer-settings-container">
    <div class="timer-settings">
      <div class="btn-container">
        <button
          type="button"
          on:click={(event) => handleTimerValue(pomodoroTime, event, POMODORO)}
          class="timer-settings-btn selected"
          id="pomodoro"
        >
          Pomodoro
        </button>
        <button
          type="button"
          on:click={(event) => handleTimerValue(shortBreakTime, event, SHORT_BREAK)}
          class="timer-settings-btn"
          id="short-break"
        >
          Intervalo curto
        </button>
        <button
          type="button"
          on:click={(event) => handleTimerValue(longBreakTime, event, LONG_BREAK)}
          class="timer-settings-btn"
          id="long-break"
        >
          Intervalo longo
        </button>
      </div>
      <div class="timer">
        <span>{ selectedTime }</span>
      </div>
      {#if stopCountdown}
        <Button text={'Pausar'} handleTimer={stopTimer} key={backgroundKey} />
      {/if}
      {#if !stopCountdown}
        <Button text={'Iniciar'} handleTimer={startTimer} key={backgroundKey} />
      {/if}
  </div>
</div>

<style>
  .timer-settings-container {
    display: flex;
    height: 55%;
    justify-content: center;
    width: 100%;
  }

  .timer-settings {
    align-self: center;
    background-color: #ffffff2c;
    backdrop-filter: blur(10rem);
    border-radius: 0.25rem;
    display: flex;
    flex-direction: column;
    height: 95%;
    width: 35%;
  }

  .btn-container {
    align-items: center;
    align-self: center;
    display: flex;
    height: 20%;
    justify-content: space-evenly;
    width: 80%;
  }

  .timer-settings-btn {
    background-color: transparent;
    border: none;
    border-radius: 0.25rem;
    color: #fff;
    font-size: 1rem;
    height: 60%;
    padding: 0 0.5rem;
  }

  .selected {
    background-color: #7265694d;
    backdrop-filter: blur(5rem);
  }

  .timer-settings-btn:hover {
    cursor: pointer;
  }

  .timer-settings-btn:disabled {
    background-color: transparent;
    backdrop-filter: unset;
  }

  .timer {
    align-self: center;
    color: #fff;
    font-size: 8rem;
  }
</style>
