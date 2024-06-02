<script>
import { dealerHand, session } from '$lib/stores.ts';
import Card from './Card.svelte';
</script>
<div class="dealer-hand">
	<h2 class="hand-title">Dealer's Hand</h2>
	<div class="card-container">
		{#each $dealerHand as card, index}
			{#if index === 0}
				<Card value={card} canFlip={false} flipped={true}/>
			{:else if $session === false}
				<Card value={card} canFlip={false} flipped={true}/>
			{:else}
				<Card value={card} canFlip={false} flipped={false}/>
			{/if}
		{/each}
	</div>
</div>

<style>
    .hand-title {
        margin: 30px;
        width: 100%;
        text-align: center;
        color: white;
    }
    .dealer-hand {
        height: 360px;
    }
    .card-container {
        display: flex;
        justify-content: center;
    }
</style>
