<script lang="ts">
	import {
		session,
		existingCards,
		addedBetList,
		fund,
		playerInfo,
		dealerInfo
	} from '$lib/stores.ts';

	const resetSession = () => {
		session.set(false);
		console.log("session reset, session is: " + $session)
	}

	const win = () => {
		let haveWon = 0;
		for (let i = 0; i < $addedBetList.length; i++) {
			haveWon += $addedBetList[i];
		}
		console.log("have won is: " + haveWon);
		fund.set($fund + haveWon);

		return("You Won!")
	}

	const even = () => {
		let total = 0;
		for (let i = 0; i < $addedBetList.length; i++) {
			total += $addedBetList[i];
		}
		fund.set($fund + total/2);

		return("Even")
	}

	const decideWinner = () => {
		resetSession()

		let playerPoint = $playerInfo.total;
		let dealerPoint = $dealerInfo.total;

		let resultMessage: string;

		if (playerPoint > 21 && dealerPoint > 21) {
			resultMessage = even()
		}
		else if (playerPoint > 21) {
			resultMessage = "You Bust!";
		}
		else if (dealerPoint > 21) {
			resultMessage = win();
		}
		else if (playerPoint === dealerPoint) {
			resultMessage = even();
		}
		else if (playerPoint > dealerPoint) {
			resultMessage = win();
		}
		else {
			resultMessage = "You Lost!";
		}

		console.log("dealer: " + dealerPoint + " Player: " + playerPoint)
		setTimeout(() => {
			window.alert(resultMessage);
			reset();
		}, 1000);
	}

	const reset = () => {
		playerInfo.update(hand => {
			hand.total = 0;
			hand.cards = [];

			return hand;
		});
		dealerInfo.update(hand => {
			hand.total = 0;
			hand.cards = [];

			return hand;
		})

		existingCards.set([]);
		addedBetList.set([]);
	}

	const endGame = () => {
		decideWinner();
	}


</script>

<div>
	<button class="end-button"
					on:click={endGame}
					disabled={!$session}
					data-tooltip="Please deal card first"
	>Stand
	</button>
</div>

<style>
	.end-button {
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
      right: 10px;
      margin: 10px;
	}

	.end-button:hover:enabled {
      cursor: pointer;
      transform: scale(0.965);
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
	}
  .end-button:disabled {
      background-color: darkgrey;
      cursor: not-allowed;
  }
  .end-button:hover:enabled {
      cursor: pointer;
      transform: scale(0.965);
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
  }
  .end-button:disabled::after {
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
  .end-button:disabled:hover::after {
      opacity: 1;
  }
</style>
