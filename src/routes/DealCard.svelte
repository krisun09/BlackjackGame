<script lang="ts">
	import {
		session,
		addedBetThisRound,
		playerInfo,
		dealerInfo, addedBetList
	} from '$lib/stores.ts';
	import { CARDS } from './constants.ts';
	import { get } from 'svelte/store';

	let deck = [...CARDS];

	const drawCard = () => {
		// Ensure there are still cards in the deck
		if (deck.length === 0) {
			console.error("No more cards in the deck!");
			return null;
		}

		// Draw a random card
		const randomIndex = Math.floor(Math.random() * deck.length);
		const drawnCard = deck[randomIndex];

		// Remove the drawn card from the deck
		deck = deck.filter(card => card.id !== drawnCard.id);

		return drawnCard;
	}

	const dealCard = (player: typeof playerInfo) => {
		const card = drawCard();

		if (card === null) {
			console.log("All cards has been dealt")
			return;
		}

		addedBetThisRound.set(false);

		player.update(hand => {
			const previousTotal = hand.total;
			hand.total = previousTotal + card.value;

			hand.cards.push(card);

			return hand;
		});
	}

	const dealerAddBetAndCard = (thinkingTime: number) => {
		setTimeout(() => {
			addedBetList.update(addedBetListValue => {
				// addedBetListValue.push(bet)
				const lastBet = addedBetListValue.slice(-1)[0];
				addedBetListValue = [...addedBetListValue, lastBet]
				return addedBetListValue;
			});
			dealCard(dealerInfo);
		}, thinkingTime);
	}

	const dealerAddBet = (thinkingTime: number) => {
		setTimeout(() => {
			addedBetList.update(addedBetListValue => {
				// addedBetListValue.push(bet)
				const lastBet = addedBetListValue.slice(-1)[0];
				addedBetListValue = [...addedBetListValue, lastBet]
				return addedBetListValue;
			});
		}, thinkingTime);
	}

	const dealCards = () => {
		// Deal initial cards for the player and the dealer
		session.set(true);
		if (get(playerInfo).cards.length === 0) {
			dealCard(playerInfo);
			dealCard(playerInfo);
			dealerAddBet(0);
			dealCard(dealerInfo);
			dealCard(dealerInfo);
			return;
		}

		// a simple logic for dealer to stop hitting. Should update.
		if ($dealerInfo.total > 18) {
			console.log("Dealer's total is " + $dealerInfo.total + ", stopping hitting.")
			dealCard(playerInfo);
			dealerAddBet(200)
			return;
		}

		// deal cards for both hands
		dealCard(playerInfo);
		dealerAddBetAndCard(500);

		// console.log("initial player card dealt " + $playerHand)
		// console.log("initial dealer card dealt " + $dealerHand)
	}

</script>

<div>
	<button class="deal-card-button"
					on:click={dealCards}
					disabled={!$addedBetThisRound}
					data-tooltip="Please add a bet first"
	>Deal
	</button>
</div>

<style>
    .deal-card-button {
        border: none;
        padding: 0.5rem 2rem;
        background-color: #39c41f;
        color: #fff;
        font-size: 1.5rem;
        border-radius: 1rem;
        transition: all 250ms;
        transform-origin: center;
        box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25),
        inset 0px -2px 3px rgba(0, 0, 0, 0.25);
        position: absolute;
        bottom: 46px;
        right: 144px;
        margin: 10px;
    }
    .deal-card-button:disabled {
        background-color: darkgrey;
        cursor: not-allowed;
    }

    .deal-card-button:hover:enabled {
        cursor: pointer;
        transform: scale(0.965);
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
    }
    .deal-card-button:disabled::after {
        content: attr(data-tooltip);
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        color: #fff;
        padding: 5px;
        border-radius: 3px;
        font-size: 0.9rem;
        white-space: nowrap;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s;
    }
    .deal-card-button:disabled:hover::after {
        opacity: 1;
    }
</style>
