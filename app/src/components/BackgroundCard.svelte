<script lang="ts">
  export let background: string;
  export let handleBackground: (key: string, background: string) => void;
  export let key: string;
</script>

<button
  type="button"
  class="background-card"
  style="background-color: {background};"
  on:click={() => handleBackground(key, background)}
>
</button>

<style>
  .background-card {
    border: none;
    border-radius: 0.25rem;
    height: 60%;
    width: 10%;
  }

  .background-card:hover {
    cursor: pointer;
    opacity: 0.6;
  }
</style>
