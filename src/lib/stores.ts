import { writable } from 'svelte/store';

export const session = writable(false);
export const playerHand = writable(new Array<string>);
export const playerHandTotal = writable(0);
export const dealerHand = writable(new Array<string>);
export const dealerHandTotal = writable(0);
export let existingCards = writable(new Array<string>);
export const addedBet = writable(false);
export const addedBetList = writable(new Array<number>);
export let fund = writable(500);
