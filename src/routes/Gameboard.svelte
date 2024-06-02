<script>
  import Player from './Player.svelte';
	import DealCard from './DealCard.svelte';
	import EndGame from './EndGame.svelte';
	import Dealer from './Dealer.svelte';

</script>
<div class="game-board">
		<Dealer/>
		<Player/>
		<DealCard/>
		<EndGame/>
</div>

<style>
    :global(body) {
        background-size: cover;
        background: url("/pokerTable.jpg");
        background-size:100% auto;
    }
</style>


