<script lang="ts">
  import ConfigForm from './ConfigForm.svelte';

  let showConfig = false;

  function setBodyBackgroundColor(): void {
    // const [body] = document.getElementsByTagName('body');
    // body.style.backgroundColor = 'green';
    showConfig = true;
  }

  function closeConfig(): void {
    showConfig = false;
  }

  const props = { closeConfig };
</script>

<header class="header-container">
  <div class="header-menu">
    <h1 class="title">Cronodoro</h1>
    <button type="button" class="setting-btn" on:click={() => setBodyBackgroundColor()}>
      <p>configurar</p>
      <p class="setting-emoji">&#x2699;</p>
    </button>
  </div>
</header>

{#if showConfig}
  <ConfigForm {...props} />
{/if}

<style>
  .header-container {
    align-items: center;
    display: flex;
    height: 10vh;
    justify-content: center;
  }

  .header-menu {
    align-items: center;
    display: flex;
    height: 80%;
    justify-content: space-between;
    width: 50%;
  }

  .title {
    color: #fff;
    font-size: 1.5rem;
  }

  .setting-btn {
    align-items: center;
    background-color: #ffffff60;
    backdrop-filter: blur(10rem);
    border: solid 1px #ffffff30;
    border-radius: 0.25rem;
    color: #fff;
    display: flex;
    font-size: 1rem;
    height: 60%;
    justify-content: space-evenly;
    padding: 0 0.25rem;
  }

  .setting-btn:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  .setting-emoji {
    font-size: 1.5rem;
    margin-left: 0.25rem;
  }
</style>
