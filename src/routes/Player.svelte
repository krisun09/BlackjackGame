<script lang="ts">
	import { addedBetThisRound, addedBetList, fund, playerInfo } from '$lib/stores.ts';
	import {availableBets} from './constants.ts';
	import Card from './Card.svelte';
	import Chip from './Chip.svelte';

	$: totalSum = $addedBetList.reduce((sum, bet) => sum + bet, 0);

	const selectBet = (bet: number) => {
		console.log("selecting bet...")
		if ($fund - bet >= 0) {
			addedBetThisRound.set(true);

			// .push on array doesn't trigger reactivity.
			addedBetList.update(addedBetListValue => {
				// addedBetListValue.push(bet)
				addedBetListValue = [...addedBetListValue, bet]
				return addedBetListValue;
			});

			// use update, more efficient
			fund.update(value => value - bet)
			// fund.set($fund - bet);

			console.log(`Selected bets: ${$addedBetList}, total sum: ${totalSum}`);
		} else {
			alert("Your balance doesn't support this bet.");
		}
	}
</script>

<div>
	<div class="player-hand">
		<h2 class="hand-title">Player's Hand - {$playerInfo.total}</h2>
		<div class="card-container">
			{#each $playerInfo.cards as card}
				<Card symbol={card.symbol} suit={card.suit} canFlip={true} flipped={true} />
			{/each}
		</div>
	</div>
	<div class="bet-container">
		<div class="fund">$ {$fund}</div>
		{#each availableBets as bet}
				<Chip
					value={bet}
					alt="Bet ${bet}"
					on:click={() => selectBet(bet)}
				/>
		{/each}
	</div>
	<div>
		<div class="floating-chips">
			<div class="total-sum">$ {totalSum}</div>
			{#each $addedBetList as bet}
				<Chip
					value={bet}
					alt="Selected bet ${bet}"
				/>
			{/each}
		</div>
	</div>
</div>


<style>
    .hand-title {
        margin: 30px;
        width: 100%;
        text-align: center;
        color: white;
    }
    .card-container {
        display: flex;
        justify-content: center;
    }
    .bet-container {
        position: absolute;
        bottom: 33px;
        left: 10px;
        margin: 10px;
    }
		.fund {
        font-size: 1.6em;
        font-weight: bold;
        margin-bottom: 10px;
        color: white;
				padding-left: 20px;
		}
    .floating-chips {
        position: absolute;
        top: 33px;
        right: 33px;
        text-align: center;
				width: 210px;
    }
    .total-sum {
        font-size: 1.6em;
        font-weight: bold;
        margin-bottom: 10px;
        color: white;
				padding-right: 7px;
    }
</style>

