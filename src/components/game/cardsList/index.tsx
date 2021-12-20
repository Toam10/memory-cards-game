import { useEffect, useState } from "react";
import { CARDS_12 } from "../../../constants/cards.constants";
import { ICardItem } from "../../../types/game/cards.types";
import CardItem from "../cardItem";

const CardsList = () => {
	const [cardsList, setCardsList] = useState<ICardItem[]>([]);
	const [flippedCards, setFlippedCards] = useState<ICardItem[]>([]);

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

	const flippingCard = (index: number): void => {
		let newCardList: ICardItem[] = [...cardsList];
		let newFlippedCards: ICardItem[] = [...flippedCards];

		newCardList[index].isHidden = newCardList[index].isHidden = false;
		newFlippedCards.push(newCardList[index]);

		if (newFlippedCards.length >= 2) {
			const [card1, card2] = newFlippedCards;
			if (card1.value === card2.value) newFlippedCards = [];
			if (card1.value !== card2.value) {
				newFlippedCards = [];
				setTimeout(() => {
					console.log(newFlippedCards);
					newCardList = newCardList.map((card) => {
						card.isHidden = true;
						return card;
					});
					setCardsList(newCardList);
				}, 500);
			}
		}
		setFlippedCards(newFlippedCards);
	};

	const arrangingCards = (card: ICardItem, index: number) => {
		return <CardItem key={index} card={card} flippingCard={() => flippingCard(index)} />;
	};

	return <>{cardsList.map(arrangingCards)}</>;
};

export default CardsList;
