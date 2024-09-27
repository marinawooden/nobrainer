<!-- Structure -->
<div id="save-bubble">
  Work saved.
</div>

<!-- Visual -->
<style>
  #save-bubble {
    color: greenyellow;
    font-family: monospace;
    position: absolute;
    top: 10px;
    right: 10px;
    animation: 3s bubble forwards;
  }

  @keyframes bubble {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
      transform: translateY(-10px);
    }
  }
</style>