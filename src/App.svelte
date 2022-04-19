<script>
  import GameState from "./lib/GameState.svelte";
  import GameSquare from "./lib/GameSquare.svelte";
  import gameStore from "./game-store.js"

  gameStore.subscribe(data => {
    console.log(data, 'data from store');
  })

</script>

<main class="section">
  <h3 class="title is-2">Tic Tac Toe</h3>
  
  <GameState />

  <div class="section">
    <div class="columns">
      <div class="column is-three-quarters">
        <div class="row is-flex">
          <GameSquare space="X" />
          <GameSquare space="X" />
          <GameSquare space="X" />
        </div>
        <div class="row is-flex">
          <GameSquare space="X" />
          <GameSquare space="X" />
          <GameSquare space="X" />
        </div>
        <div class="row is-flex">
          <GameSquare space="X" />
          <GameSquare space="X" />
          <GameSquare space="X" />
        </div>
    
        <div class="section">
          <button class="button is-info is-fullwidth">New Game</button>
        </div>
      </div>
    </div>
  </div>

</main>