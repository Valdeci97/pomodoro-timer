<script lang="ts">
  import { onMount } from 'svelte';

  import Header from '../components/Header.svelte';
  import Pomodoro from '../components/Pomodoro.svelte';
  import { setupBackground } from '../utils/background';
  import { POMODORO } from '../utils/constants';

  onMount(() => {
    setupBackground(POMODORO);
  });
</script>

<main>
  <Header />
  <Pomodoro />
</main>


