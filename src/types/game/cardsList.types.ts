export interface ICardItem {
	value: string | number;
	isHidden: boolean;
	id: number;
}

export interface ICardsListProps {
	increaseWorngGuesses(): void;
}
