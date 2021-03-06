export interface ICardItemProps {
	card: {
		value: string | number;
		isHidden: boolean;
	};
	flippingCard(): void;
}

export interface ICardContainer {
	isHidden: boolean;
}
