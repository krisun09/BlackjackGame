<script lang="ts">
	import {
		dealerHand,
		dealerHandTotal,
		playerHand,
		playerHandTotal,
		session,
		existingCards,
		addedBet
	} from '$lib/stores.ts';

	const allSymbols = [
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		"J",
		"Q",
		"K",
		"A",
	];
	const allSuitSymbols = "♠♣♦♥";

	const generateCardValue = () => {
		// generate a random value between 0-12 and get the corresponding symbol from allSymbols
		return allSymbols[Math.floor(Math.random() * 12)];
	}

	const generateCardSuit = (value: string | number): string => {
		// generate a random suit
		// need to fix the possibility for a value with all four suits existed
		let randomSuitSymbol = allSuitSymbols[Math.floor(Math.random() * 4)];
		if (!checkCardExists(value, randomSuitSymbol)) {
			return randomSuitSymbol;
		}
		return generateCardSuit(value);
	}

	const checkCardExists = (value: string | number, symbol: string): boolean => {
		// returns true if exists, false if not
		let valueStr = value.toString;
		let card = valueStr + symbol;
		console.log("card is " + card + " existingCards: " + $existingCards + " returning: " + $existingCards.includes(card));

		return $existingCards.includes(card);
	}

	const addCardRecord = (cardFace: string) => {
		$existingCards.push(cardFace);
		existingCards.set($existingCards);
	}

	const dealCard = () => {
		if ($session === false) {
			console.log("Initialising session");
			initialDeal();
		}
		// let cardSets = generateCardSets()
		let cardValue = generateCardValue();
		let cardSuit = generateCardSuit(cardValue);
		let cardFace = cardValue + cardSuit;

		if (typeof cardValue !== 'number') {
			cardValue = (cardValue === "A") ? 1 : 10;
		}

		addedBet.set(false);

		playerHandTotal.set($playerHandTotal + cardValue);
		$playerHand.push(cardFace);
		playerHand.set($playerHand);

		addCardRecord(cardFace)
		console.log("player card " + cardFace + " dealt. The current player hand is: " + $playerHand);

		// a simple logic for dealer to stop hitting. Should update.
		if ($dealerHandTotal > 18) {
			console.log("Dealer's total is " + $dealerHandTotal + ", stopping hitting.")
			return;
		}

		cardValue = generateCardValue();
		cardSuit = generateCardSuit(cardValue);
		cardFace = cardValue + cardSuit;

		if (typeof cardValue !== 'number') {
			cardValue = (cardValue === "A") ? 1 : 10;
		}

		dealerHandTotal.set($dealerHandTotal + cardValue);
		$dealerHand.push(cardFace);
		dealerHand.set($dealerHand);
		addCardRecord(cardFace);

		console.log("dealer card " + cardFace + " dealt");
	}

	const initialDeal = () => {
		// Deal initial cards for the player and the dealer
		session.set(true);

		dealCard();
		// console.log("initial player card dealt " + $playerHand)
		// console.log("initial dealer card dealt " + $dealerHand)
	}

</script>

<div>
	<button class="deal-card-button"
					on:click={dealCard}
					disabled={!$addedBet}
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
