import { writable } from 'svelte/store';
import type { PlayerHand } from './types.ts';

export const session = writable(false);
export const playerInfo = writable(<PlayerHand>({
	"total": 0,
	"cards":[]
	}
));

export const dealerInfo = writable(<PlayerHand>({
		"total": 0,
		"cards":[]
	}
));

export let existingCards = writable(new Array<string>);
// derived store; name => disableDealButton
export const addedBetThisRound = writable(false);
export const addedBetList = writable(new Array<number>);
export let fund = writable(500);
