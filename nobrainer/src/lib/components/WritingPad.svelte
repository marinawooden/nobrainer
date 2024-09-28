<!-- Interactivity -->
<script>
  export let defaultText;
  export let showSave;

  let entryText = defaultText;
  let timerId;
  let cursorPosition = defaultText.length;
  let instructions;

  // stores newly-updated changes to text for later use
  function updateChangedText() {
    if (timerId) {
      clearTimeout(timerId);
    }

    window.localStorage.setItem("nobrainer-prevtext", entryText.trim());

    showSave();
  }

  function setSaveTimer() {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(updateChangedText, 3000);
  }

  async function sayHello() {
    try {
      console.log(cursorPosition);
      console.log(entryText.substring(Math.max(0, cursorPosition - 3000), cursorPosition));
      let res = await fetch("/complete", {
        method: "POST",
        body: JSON.stringify({
          "text": entryText.substring(0, cursorPosition),
          "instructions": instructions,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      await statusCheck(res);

      res = await res.json();
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  }

  async function statusCheck(res) {
    if (!res.ok) {
      throw new Error(await res.text());
    }

    return res;
  }
</script>

<!-- Structure -->
<section id="writing-pad-holder">
  <textarea
    id="writing-pad"
    bind:value={entryText}
    on:change={updateChangedText}
    on:click={(event) => {
      cursorPosition = event.target.selectionStart;
    }}
    on:input={(event) => {
      cursorPosition = event.target.selectionStart;
      setSaveTimer();
    }}
  />
  <button
    id="prompt"
    on:click={sayHello}
  >Click me to say hi</button>
  <textarea
    id="extra-instructions"
    bind:value={instructions}
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

  #writing-pad {
    border: 1px solid;
    padding: 10px;
    background-color: transparent;
    color: white;
    width: 500px;
    outline: none;
    font-family: "Nunito", "Comic Sans MS", sans-serif;
    font-size: 17px;
    line-height: 1.5em;
  }
</style>