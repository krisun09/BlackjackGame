<script lang="ts">
	import {
		playerHandTotal,
		dealerHandTotal,
		session,
		playerHand,
		dealerHand,
		existingCards,
		addedBetList,
		fund
	} from '$lib/stores.ts';

	const win = () => {
		let haveWon = 0;
		for (let i = 0; i < $addedBetList.length; i++) {
			haveWon += $addedBetList[i];
		}
		console.log("have won is: " + haveWon);
		fund.set($fund + haveWon);
	}

	const even = () => {
		// TODO: change calculation method. should win more.
		let total = 0;
		for (let i = 0; i < $addedBetList.length; i++) {
			total += $addedBetList[i];
		}
		fund.set($fund + total/2);
	}

	const decideWinner = () => {
		let resultMessage;

		let playerPoint = $playerHandTotal;
		let dealerPoint = $dealerHandTotal;

		switch (true) {
			case playerPoint > 21:
				resultMessage = "You Bust!";
				break;
			case dealerPoint > 21:
				resultMessage = "You Won!";
				win();
				break;
			case playerPoint === dealerPoint:
				resultMessage = "Even";
				even();
				break;
			case playerPoint > dealerPoint:
				resultMessage = "You Won!";
				win();
				break;
			default:
				resultMessage = "You Lost!";
		}

		resetSession();
		console.log("session is " + $session)

		console.log("dealer: " + dealerPoint + " Player: " + playerPoint)
		window.alert(resultMessage);
	}

	const resetSession = () => {
		session.set(false);
	}


	const reset = () => {
		playerHand.set([]);
		dealerHand.set([]);
		playerHandTotal.set(0);
		dealerHandTotal.set(0);
		existingCards.set([]);
		addedBetList.set([]);
	}

	const endGame = () => {
		decideWinner();
		reset();
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
