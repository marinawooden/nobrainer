
<!-- Behavior -->
<script>
  export let data;
  let shouldShowSave = false;

  import { WritingPad, SaveBubble } from "$lib";

  function showSave() {
    shouldShowSave = true;
    setTimeout(() => {
      shouldShowSave = false;
    }, 3000);
  }
  
</script>

<!-- Structure -->
<div id="conts">
  <header>
    <h1>nobrainer.</h1>
    <p><small>it just is.</small></p>
  </header>
  <main>
    {#if shouldShowSave}
      <SaveBubble />
    {/if}
    <WritingPad
      defaultText={data?.entry}
      showSave={showSave}
    />
  </main>
</div>

<!-- Visual -->
<style>
  :global(body) {
    background-color: black;
    color: white;
  }

  ::selection {
    color: black;
    background-color: greenyellow;
  }

  #conts {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 100px);
  }

  header {
    text-align: center;
  }
  
  h1 {
    font-style: italic;
  }

  main {
    flex: 1;
  }
</style>