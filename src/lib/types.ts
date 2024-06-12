export interface Card {
	id: number;
	value: number;
	symbol: string;
	suit: string;
}

export interface PlayerHand {
	total: number;
	cards: Card[];
}
