<script>
    export let space = '';
    export let winner; 

    $: won = space === winner
</script>

<div class="
space 
is-align-content-center
is-justify-content-center
has-text-centered
is-flex-grow-1
py-5
"
class:winning={won}
on:click>
{space}
</div>

<style>
    .space {
        border: solid 1px gray;
        height: 125px;
        width: 125px;
        font-size: 55px;

    }

    .winning {
        color: purple
    }


</style>