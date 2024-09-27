<!-- Interactivity -->
<script>
  export let defaultText;

  let entryText = defaultText;
  let timerId;

  // stores newly-updated changes to text for later use
  function updateChangedText() {
    if (timerId) {
      clearTimeout(timerId);
    }

    console.log(entryText);
    window.localStorage.setItem("nobrainer-prevtext", entryText.trim());
  }

  function setSaveTimer() {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(updateChangedText, 3000);
  }
</script>

<!-- Structure -->
<section id="writing-pad-holder">
  <textarea
    id="writing-pad"
    bind:value={entryText}
    on:change={updateChangedText}
    on:input={setSaveTimer}
  />
</section>

<!-- Visual -->
<style>
  #writing-pad-holder {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
    flex: 1;
  }

  #writing-pad-holder,
  textarea {
    height: 100%;
  }

  textarea {
    border: 1px solid;
    padding: 10px;
    background-color: transparent;
    color: white;
    width: 500px;
    outline: none;
  }
</style>