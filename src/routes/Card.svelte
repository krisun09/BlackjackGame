<script lang="ts">
	// export let id: number;
	// export let value: number;
	export let symbol: string;
	export let suit: string;
	export let canFlip: boolean;
	export let flipped: boolean;

	// props and state
	const flipCard = () => {
		if (canFlip) {
			flipped = !flipped;
		}
	}

</script>

<button class="card"
				class:flipped
				on:click ={flipCard}
>
	<div class="front">
		<span class="symbol">{symbol + suit}</span>
	</div>
	<div class="back">
		<div class="pattern"></div>
	</div>
</button>

<style>
    .card {
        position: relative;
        aspect-ratio: 2.5 / 3.5;
        font-size: min(1vh, 0.25rem);
        width: 160px;
        height: 240px;
        background: var(--bg-1);
        border-radius: 2em;
        transform: rotateY(180deg);
        transition: transform 0.4s;
        transform-style: preserve-3d;
        margin: 20px;
        user-select: none;
        cursor: pointer;
        border: none;
    }
    .card.flipped {
        transform: rotateY(0);
    }
    .front, .back {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        backface-visibility: hidden;
        border-radius: 2em;
        border: 1px solid;
        box-sizing: border-box;
    }
    .front {
        background-size: 8em 8em, 8em 8em;
        background-color:white;
    }
    .back {
        transform: rotateY(180deg);
        padding: 2em;
        background-color:white;
    }
    .symbol {
        font-size: 20em;
        color: black;
    }
    .pattern {
        width: 100%;
        height: 100%;
        background-color:white;
        background-image:
                radial-gradient(midnightblue 9px, transparent 10px),
                repeating-radial-gradient(midnightblue 0, midnightblue 4px, transparent 5px, transparent 20px, midnightblue 21px, midnightblue 25px, transparent 26px, transparent 50px);
        background-size: 30px 30px, 90px 90px;
        background-position: 0 0;
        border-radius: 1em;
    }
</style>

