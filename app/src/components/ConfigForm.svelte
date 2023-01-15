<script lang="ts">
  import { backgroundOptions, LONG_BREAK, POMODORO, SHORT_BREAK } from '../utils/constants';
  import {
    getBackground,
    getLongtBreak,
    getPomodoro,
    getShortBreak,
    setPreferences
  } from '../utils/localStorage';
  import { formatTime } from '../utils/timer';
  import BackgroundCard from './BackgroundCard.svelte';

  export let closeConfig: () => void;

  function formatTimeConfig(time: string): number {
    const [formated] = time.split(':');
    return Number(formated);
  }

  let pomodoroTime = formatTimeConfig(getPomodoro())
  let shortBreakTime = formatTimeConfig(getShortBreak());
  let longBreakTime = formatTimeConfig(getLongtBreak());
  let backgroundColor = getBackground();

  function handleBackground(key: string, background: string): void {
    backgroundColor[key] = background;
  }

  function updatePomodoroSettings(): void {
    const settings = {
      timer: {
        pomodoro: `${formatTime(pomodoroTime)}:00`,
        shortBreak: `${formatTime(shortBreakTime)}:00`,
        longBreak: `${formatTime(longBreakTime)}:00`,
      },
      backgroundColor,
    };
    setPreferences(settings);
    window.location.reload();
  }
</script>

<form class="form-container">
  <div class="timer-config-header">
    <h1 class="title">Timer</h1>
    <button type="button" class="close-config-btn" on:click={() => closeConfig()}>
      X
    </button>
  </div>
  <h2 class="timer-title">Tempo - minutos</h2>
  <div class="timer-config-container">
    <label for="" class="timer-config-label">
      Pomodoro
      <input
        type="number"
        class="timer-config-input"
        bind:value={pomodoroTime}
        min="1"
        max="60"
      >
    </label>
    <label for="" class="timer-config-label">
      Intervalo curto
      <input
        type="number"
        class="timer-config-input"
        bind:value={shortBreakTime}
        min="1"
        max="60"
      >
    </label>
    <label for="" class="timer-config-label">
      Intervalo longo
      <input
        type="number"
        class="timer-config-input"
        bind:value={longBreakTime}
        min="1"
        max="60"
      >
    </label>
  </div>
  <div class="background-options-container">
    <span class="background-options-text">
      Pomodoro
    </span>
    <div class="each">
      {#each backgroundOptions as option}
        <BackgroundCard
          background={option}
          handleBackground={handleBackground}
          key={POMODORO}
        />
      {/each}
    </div>
    <span class="background-options-text">
      Intervalo curto
    </span>
    <div class="each">
      {#each backgroundOptions as option}
        <BackgroundCard
          background={option}
          handleBackground={handleBackground}
          key={SHORT_BREAK}
        />
      {/each}
    </div>
    <span class="background-options-text">
      Intervalo longo
    </span>
    <div class="each">
      {#each backgroundOptions as option}
        <BackgroundCard
          background={option}
          handleBackground={handleBackground}
          key={LONG_BREAK}
        />
      {/each}
    </div>
  </div>
  <button type="button" class="btn" on:click={() => updatePomodoroSettings()}>
    Finalizar
  </button>
</form>

<style>
  .form-container {
    background-color: #7265694d;
    backdrop-filter: blur(5rem);
    border: solid 1px #ffffff30;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    height: 80%;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    overflow-y: auto;
    position: absolute;
    right: 0;
    width: 60%;
    z-index: 1;
  }

  .timer-config-header {
    align-items: center;
    display: flex;
    height: 10%;
    justify-content: space-between;
  }

  .title {
    color: #fff;
    margin-left: 5%;
    text-align: center;
    text-decoration: underline;
  }

  .close-config-btn {
    background-color: #ffffff60;
    backdrop-filter: blur(10rem);
    border: solid 1px #ffffff30;
    border-radius: 0.25rem;
    color: #fff;
    font-size: 1.25rem;
    height: 70%;
    margin-right: 2.5%;
    width: 10%;
  }

  .close-config-btn:hover {
    cursor: pointer;
  }

  .timer-title {
    color: #fff;
    margin-left: 5%;
    margin-top: 0.5rem;
  }

  .timer-config-container {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }

  .timer-config-label {
    background-color: #ffffff60;
    backdrop-filter: blur(10rem);
    border: solid 1px #ffffff30;
    border-radius: 0.25rem;
    color: #fff;
    display: flex;
    flex-direction: column;
    font-size: 1.25rem;
    text-align: center;
    width: 30%;
  }

  .timer-config-input {
    background-color: #7265694d;
    border: solid 1px #ffffff30;
    border-radius: 0.25rem;
    color: #fff;
    font-size: 1.25rem;
    margin: 0 auto;
    margin-top: 0.5rem;
    text-align: center;
    width: 30%;
  }

  .timer-config-input:hover {
    cursor: pointer;
  }

  .background-options-container {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 60%;
    margin-top: 1rem;
  }

  .background-options-text {
    color: #fff;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  .each {
    display: flex;
    justify-content: space-evenly;
    height: 60%;
    width: 90%;
  }

  .btn {
    align-self: flex-end;
    background-color: #28151B;
    border: none;
    border-radius: 0.25rem;
    color: #fff;
    font-size: 2rem;
    margin-right: 1rem;
    margin-top: 1rem;
    padding: 0.5rem;
    width: 30%;
  }

  .btn:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 1000px) {
    .form-container {
      width: 90%;
    }
  }

  @media screen and (max-width: 320px) {
    .title {
      font-size: 1.5rem;
    }

    .close-config-btn {
      font-size: 1rem;
    }

    .timer-title {
      font-size: 1.25rem;
    }

    .timer-config-label {
      font-size: 0.75rem;
    }

    .timer-config-input {
      font-size: 0.7rem;
      width: 50%;
    }

    .each {
      height: 75%;
    }

    .btn {
      font-size: 1.5rem;
      padding: 0.25rem;
      width: 50%;
    }
  }

  @media screen and (min-width: 321px) and (max-width: 440px) {
    .title {
      font-size: 1.5rem;
    }

    .close-config-btn {
      font-size: 1rem;
    }

    .timer-title {
      font-size: 1.25rem;
    }

    .timer-config-label {
      font-size: 0.8rem;
    }

    .timer-config-input {
      font-size: 0.75rem;
      width: 50%;
    }

    .each {
      height: 75%;
      width: 100%;
    }

    .btn {
      font-size: 1.5rem;
      padding: 0.25rem;
      width: 50%;
    }
  }

  @media screen and (min-width: 441px) and (max-width: 540px) {
    .timer-config-label {
      font-size: 1rem;
    }

    .timer-config-input {
      width: 50%;
    }

    .btn {
      width: 50%;
    }
  }

  @media screen and (min-width: 541px) and (max-width: 640px) {
    .timer-config-label {
      font-size: 1rem;
    }

    .timer-config-input {
      width: 50%;
    }

    .btn {
      width: 50%;
    }
  }

  @media screen and (min-width: 641px) and (max-width: 740px) {
    .timer-config-label {
      font-size: 1rem;
    }

    .timer-config-input {
      width: 50%;
    }

    .btn {
      width: 40%;
    }
  }

  @media screen and (min-width: 741px) and (max-width: 1000px) {
    .timer-config-label {
      font-size: 1rem;
    }

    .timer-config-input {
      width: 50%;
    }

    .btn {
      width: 40%;
    }
  }
</style>
