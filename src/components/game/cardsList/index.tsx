import { useEffect, useState } from "react";
import { CARDS_12 } from "../../../constants/cards.constants";
import { ICardItem } from "../../../types/game/cards.types";
import CardItem from "../cardItem";

const CardsList = () => {
	const [cardsList, setCardsList] = useState<ICardItem[]>([]);

	useEffect(() => {
		const newCardsList = shuffle([...CARDS_12]);
		setCardsList(newCardsList);
	}, []);

	const shuffle = (cards: ICardItem[]) => {
		let currentIndex: number = cards.length;
		let randomIndex: number;

		while (currentIndex !== 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			if (currentIndex === randomIndex) continue;
			currentIndex--;

			[cards[currentIndex], cards[randomIndex]] = [cards[randomIndex], cards[currentIndex]];
		}

		console.log(cards);
		return cards;
	};

	const arrangingCards = (card: ICardItem, index: number) => {
		return <CardItem key={index} card={card} />;
	};

	return <>{cardsList.map(arrangingCards)}</>;
};

export default CardsList;
