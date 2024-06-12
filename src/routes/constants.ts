const SYMBOL = {
	'A': 'A',
	'2': '2',
	'3': '3',
	'4': '4',
	'5': '5',
	'6': '6',
	'7': '7',
	'8': '8',
	'9': '9',
	'10': '10',
	'J': 'J',
	'Q': 'Q',
	'K': 'K',
} as const;

const SUITES = {
	'♠': '♠',
	'♣': '♣',
	'♦': '♦',
	'♥': '♥',
} as const;

export const CARDS = [
	// Aces
	{ id: 1, value: 1, symbol: SYMBOL.A, suit: SUITES["♠"]},
	{ id: 2, value: 1, symbol: SYMBOL.A, suit: SUITES["♣"]},
	{ id: 3, value: 1, symbol: SYMBOL.A, suit: SUITES["♥"]},
	{ id: 4, value: 1, symbol: SYMBOL.A, suit: SUITES["♦"]},
	// 2s
	{ id: 5, value: 2, symbol: SYMBOL['2'], suit: SUITES["♠"]},
	{ id: 6, value: 2, symbol: SYMBOL['2'], suit: SUITES["♣"]},
	{ id: 7, value: 2, symbol: SYMBOL['2'], suit: SUITES["♥"]},
	{ id: 8, value: 2, symbol: SYMBOL['2'], suit: SUITES["♦"]},
	// 3s
	{ id: 9, value: 3, symbol: SYMBOL['3'], suit: SUITES["♠"]},
	{ id: 10, value: 3, symbol: SYMBOL['3'], suit: SUITES["♣"]},
	{ id: 11, value: 3, symbol: SYMBOL['3'], suit: SUITES["♥"]},
	{ id: 12, value: 3, symbol: SYMBOL['3'], suit: SUITES["♦"]},
	// 4s
	{ id: 13, value: 4, symbol: SYMBOL['4'], suit: SUITES["♠"]},
	{ id: 14, value: 4, symbol: SYMBOL['4'], suit: SUITES["♣"]},
	{ id: 15, value: 4, symbol: SYMBOL['4'], suit: SUITES["♥"]},
	{ id: 16, value: 4, symbol: SYMBOL['4'], suit: SUITES["♦"]},
	// 5s
	{ id: 17, value: 5, symbol: SYMBOL['5'], suit: SUITES["♠"]},
	{ id: 18, value: 5, symbol: SYMBOL['5'], suit: SUITES["♣"]},
	{ id: 19, value: 5, symbol: SYMBOL['5'], suit: SUITES["♥"]},
	{ id: 20, value: 5, symbol: SYMBOL['5'], suit: SUITES["♦"]},
	// 6s
	{ id: 21, value: 6, symbol: SYMBOL['6'], suit: SUITES["♠"]},
	{ id: 22, value: 6, symbol: SYMBOL['6'], suit: SUITES["♣"]},
	{ id: 23, value: 6, symbol: SYMBOL['6'], suit: SUITES["♥"]},
	{ id: 24, value: 6, symbol: SYMBOL['6'], suit: SUITES["♦"]},
	// 7s
	{ id: 25, value: 7, symbol: SYMBOL['7'], suit: SUITES["♠"]},
	{ id: 26, value: 7, symbol: SYMBOL['7'], suit: SUITES["♣"]},
	{ id: 27, value: 7, symbol: SYMBOL['7'], suit: SUITES["♥"]},
	{ id: 28, value: 7, symbol: SYMBOL['7'], suit: SUITES["♦"]},
	// 8s
	{ id: 29, value: 8, symbol: SYMBOL['8'], suit: SUITES["♠"]},
	{ id: 30, value: 8, symbol: SYMBOL['8'], suit: SUITES["♣"]},
	{ id: 31, value: 8, symbol: SYMBOL['8'], suit: SUITES["♥"]},
	{ id: 32, value: 8, symbol: SYMBOL['8'], suit: SUITES["♦"]},
	// 9s
	{ id: 33, value: 9, symbol: SYMBOL['9'], suit: SUITES["♠"]},
	{ id: 34, value: 9, symbol: SYMBOL['9'], suit: SUITES["♣"]},
	{ id: 35, value: 9, symbol: SYMBOL['9'], suit: SUITES["♥"]},
	{ id: 36, value: 9, symbol: SYMBOL['9'], suit: SUITES["♦"]},
	// 10s
	{ id: 37, value: 10, symbol: SYMBOL['10'], suit: SUITES["♠"]},
	{ id: 38, value: 10, symbol: SYMBOL['10'], suit: SUITES["♣"]},
	{ id: 39, value: 10, symbol: SYMBOL['10'], suit: SUITES["♥"]},
	{ id: 40, value: 10, symbol: SYMBOL['10'], suit: SUITES["♦"]},
	// Jacks
	{ id: 41, value: 10, symbol: SYMBOL['J'], suit: SUITES["♠"]},
	{ id: 42, value: 10, symbol: SYMBOL['J'], suit: SUITES["♣"]},
	{ id: 43, value: 10, symbol: SYMBOL['J'], suit: SUITES["♥"]},
	{ id: 44, value: 10, symbol: SYMBOL['J'], suit: SUITES["♦"]},
	// Queens
	{ id: 45, value: 10, symbol: SYMBOL['Q'], suit: SUITES["♠"]},
	{ id: 46, value: 10, symbol: SYMBOL['Q'], suit: SUITES["♣"]},
	{ id: 47, value: 10, symbol: SYMBOL['Q'], suit: SUITES["♥"]},
	{ id: 48, value: 10, symbol: SYMBOL['Q'], suit: SUITES["♦"]},
	// Kings
	{ id: 49, value: 10, symbol: SYMBOL['K'], suit: SUITES["♠"]},
	{ id: 50, value: 10, symbol: SYMBOL['K'], suit: SUITES["♣"]},
	{ id: 51, value: 10, symbol: SYMBOL['K'], suit: SUITES["♥"]},
	{ id: 52, value: 10, symbol: SYMBOL['K'], suit: SUITES["♦"]},
] as const;

export const availableBets = [1, 5, 10, 25, 50, 100];
