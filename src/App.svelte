<script>
  import GameState from "./lib/GameState.svelte";
  import GameSquare from "./lib/GameSquare.svelte";
  import gameStore from "./game-store.js";
  import { nextMove, reset } from "./request.js";

  let board = ["", "", "", "", "", "", "", "", ""];
  let nextPlayer = "";
  let winner;

  let numberOfPeeps = 0;

  let errorMessage;

  let boardRows = () => {
    let result = [];
    for (let index = 0; index < board.length; index += 3) {
      result.push(board.slice(index, index + 3));
    }
    return result;
  };

  async function newGame() { errorMessage = await reset(); } 

  gameStore.subscribe((state) => {
    if (!state) {
      return;
    }

    winner = state.winner;
    nextPlayer = state.nextPlayer;
    board = state.board;
    numberOfPeeps = state.numberOfPeeps;
  });

  async function takeSpace(space) {
    console.log("in function");
    if (winner || !gameStore.isCOnnected) {
      return;
    }

    errorMessage = await nextMove(space);
  }
</script>

<main class="section">
  <h3 class="title is-2">Tic Tac Toe</h3>

  <h3 class="title">Number of people playing: {numberOfPeeps}</h3>

  {#if winner == "TIE"}
    <h3 class="title">Game is tied</h3>
  {:else if winner}
    <h3 class="title">Winner: {winner}</h3>
  {:else}
    <h3 class="title">Player: {nextPlayer}</h3>
  {/if}

  <div class="section">
    <div class="columns">
      <div class="column is-three-quarters">
        {#each boardRows() as rows, r}
          <div class="row is-flex">
            {#each rows as tile, i}
              {@const offset = r === 0 ? r : r === 1 ? 3 : 6}
              {@const pos = i + offset}
              <GameSquare
                {winner}
                space={board[pos]}
                on:click={() => takeSpace(pos)}
              />
            {/each}
          </div>
        {/each}
      </div>
    </div>
  </div>

  <div class="columns">
    <div class="column is-three-quarters">
      {#if winner}
        <button class="button is-info is-fullwidth" on:click={reset}>
          New Game
        </button>
      {/if}
      {#if errorMessage}
        <p class="content is-medium has-text-danger">{errorMessage}</p>
      {/if}
    </div>
  </div>
</main>
