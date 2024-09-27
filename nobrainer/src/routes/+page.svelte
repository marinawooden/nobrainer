
<!-- Behavior -->
<script>
  export let data;

  import { WritingPad } from "$lib";
</script>

<!-- Structure -->
<div id="conts">
  <header>
    <h1>nobrainer.</h1>
    <p><small>it just is.</small></p>
  </header>
  <main>
    <WritingPad defaultText={data?.entry}/>
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