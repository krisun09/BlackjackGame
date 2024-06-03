<script lang="ts">
	import { addedBet, addedBetList, playerHand, playerHandTotal, fund } from '$lib/stores.ts';
	import Card from './Card.svelte';

	let bets = [1, 5, 10, 25, 50, 100];


	const getImagePath = (bet: number) => {
		return `/chips/chip_${bet}.png`;
	}

	let totalSum = 0;
	$: totalSum = $addedBetList.reduce((sum, bet) => sum + bet, 0);

	const selectBet = (bet: number) => {
		if ($fund - bet >= 0) {
			addedBet.set(true);
			addedBetList.update(addedBetList => {
				addedBetList.push(bet)
				return addedBetList;
			});

			// Calculate new total sum and update fund immediately
			const newTotalSum = $addedBetList.reduce((sum, bet) => sum + bet, 0);
			console.log(`Selected bets: ${$addedBetList}, total sum: ${newTotalSum}`);
			fund.set($fund - newTotalSum);
		} else {
			alert("Your balance doesn't support this bet.");
		}
	}
</script>

<div>
	<div class="player-hand">
		<h2 class="hand-title">Player's Hand - {$playerHandTotal}</h2>
		<div class="card-container">
			{#each $playerHand as card}
				<Card value={card} canFlip={true} flipped={true} />
			{/each}
		</div>
	</div>
	<div class="bet-container">
		<div class="fund">$ {$fund}</div>
		{#each bets as bet}
			<button class="bet" type="button" on:click={() => selectBet(bet)}>
				<img src={getImagePath(bet)} alt={`Bet ${bet}`} />
			</button>
		{/each}
	</div>
	<div>
		<div class="floating-chips">
			<div class="total-sum">$ {totalSum}</div>
			{#each $addedBetList as bet}
				<div class="chip">
					<img src={getImagePath(bet)} alt={`Selected bet ${bet}`} />
				</div>
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
    .bet {
        cursor: pointer;
        margin: 10px;
        text-align: center;
        border: none;
        background: none;
        padding: 0;
    }
    .bet img {
        width: 88px;
    }
    .floating-chips {
        position: absolute;
        top: 33px;
        right: 33px;
        text-align: center;
				width: 210px;
    }
    .chip {
        display: contents;
    }
		.chip img {
				width: 66px;
		}
    .total-sum {
        font-size: 1.6em;
        font-weight: bold;
        margin-bottom: 10px;
        color: white;
				padding-right: 7px;
    }

</style>

