<script lang="ts">
  import { getBackground } from "../utils/localStorage";


  export let text: string;
  export let handleTimer: () => void;
  export let key: string;

  const background = getBackground();
</script>

<button
  type="button"
  class="timer-control-btn"
  on:click={() => handleTimer()}
  style="color: {background[key]};"
>
  { text }
</button>

<style>
  .timer-control-btn {
    align-self: center;
    background-color: #fff;
    border: none;
    border-radius: 0.25rem;
    font-size: 3.25rem;
    height: 25%;
    width: 40%;
  }

  .timer-control-btn:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 320px) {
    .timer-control-btn {
      width: 50%;
    }
  }

  @media screen and (min-width: 321px) and (max-width: 440px) {
    .timer-control-btn {
      width: 50%;
    }
  }
</style>
