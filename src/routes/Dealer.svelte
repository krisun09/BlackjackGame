<script lang="ts">
	import { dealerInfo, session } from '$lib/stores.ts';
	import Card from './Card.svelte';
</script>

<div class="dealer-hand">
	<h2 class="hand-title">Dealer's Hand</h2>
	<div class="card-container">
		{#if $session}
			{#each $dealerInfo.cards as card, index}
				{#if index === 0}
					<Card symbol={card.symbol} suit={card.suit} canFlip={true} flipped={true} />
				{:else}
					<Card symbol={card.symbol} suit={card.suit} canFlip={false} flipped={false} />
				{/if}
			{/each}
		{:else}
			{#each $dealerInfo.cards as card}
				<Card symbol={card.symbol} suit={card.suit} canFlip={true} flipped={true} />
			{/each}
		{/if}
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
