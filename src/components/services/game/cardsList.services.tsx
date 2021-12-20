import React, { useState } from "react";
import { ICardItem } from "../../../types/game/cards.types";
import CardItem from "../../game/cardItem";

const useCardsSListServices = () => {
	const [cardsList, setCardsList] = useState<ICardItem[]>([]);
	const [flippedCards, setFlippedCards] = useState<ICardItem[]>([]);

	const shuffle = (cards: ICardItem[]) => {
		let currentIndex: number = cards.length;
		let randomIndex: number;

		while (currentIndex !== 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			if (currentIndex === randomIndex) continue;
			currentIndex--;

			[cards[currentIndex], cards[randomIndex]] = [cards[randomIndex], cards[currentIndex]];
		}
		return cards;
	};

	const flippingCard = (index: number, increaseWorngGuesses: any): void => {
		let newCardList: ICardItem[] = [...cardsList];
		let newFlippedCards: ICardItem[] = [...flippedCards];

		if (newFlippedCards.length >= 2) {
			const [card1, card2] = newFlippedCards;
			if (card1.value === card2.value) newFlippedCards = [];
			if (card1.value !== card2.value) {
				newFlippedCards = [];
				increaseWorngGuesses();
				setTimeout(() => {
					newCardList = newCardList.map((card) => {
						card.isHidden = true;
						return card;
					});
					setCardsList(newCardList);
				}, 500);
			}
		} else {
			newCardList[index].isHidden = newCardList[index].isHidden = false;
			if (newFlippedCards.length) {
				if (newFlippedCards[0].id !== newCardList[index].id) newFlippedCards.push(newCardList[index]);
			} else {
				newFlippedCards.push(newCardList[index]);
			}
		}
		setFlippedCards(newFlippedCards);
		if (newCardList.every((card) => card.isHidden === false)) alert("you are the winnner");
	};

	return { shuffle, flippingCard, setCardsList, cardsList };
};

export default useCardsSListServices;
