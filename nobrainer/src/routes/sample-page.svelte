<script>
  let number;

  async function roll() {
    try {
      let res = await fetch('/complete');
      await statusCheck(res);

      number = await res.json();
    } catch (err) {
      number = null;
    }
  }

  /** Detects any http errors from the server*/
  async function statusCheck(res) {
    if (!res.ok) {
      throw new Error(await res.text());
    }

    return res;
  }
</script>

<button on:click={roll}>Roll the dice</button>
{#if ![null, undefined].includes(number)}
	<p>You rolled a {number}</p>
{/if}
