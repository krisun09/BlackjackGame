<script lang="ts">
	export let value: number;
	export let alt: string;

	// trying to set different sizes for different types of bets here, need to find out how
	const TypeAndSize = {
		'betSymbol': 88,
		'userChip': 66
	}

	const getImagePath = (bet: number) => {
		return `/chips/chip_${bet}.png`;
	}
</script>

<button class="bet" type="button" on:click>
	<img src={getImagePath(value)} alt={alt} />
</button>

<style>
    .bet img {
        width: 88px;
    }
    .bet {
        cursor: pointer;
        margin: 10px;
        text-align: center;
        border: none;
        background: none;
        padding: 0;
    }
</style>
