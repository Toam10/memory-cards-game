import { useEffect, useState } from "react";
import { CARDS_12 } from "../../../constants/cards.constants";
import { ICardItem, ICardsListProps } from "../../../types/game/cards.types";
import useCardsSListServices from "../../services/game/cardsList.services";
import CardItem from "../cardItem";

const CardsList = ({ increaseWorngGuesses }: ICardsListProps) => {
	const { flippingCard, shuffle, setCardsList, cardsList } = useCardsSListServices();

	useEffect(() => {
		const newCardsList = shuffle([...CARDS_12]);
		setCardsList(newCardsList);
	}, [setCardsList, shuffle]);

	const arrangingCards = (card: ICardItem, index: number) => {
		return <CardItem key={index} card={card} flippingCard={() => flippingCard(index, increaseWorngGuesses)} />;
	};

	return <>{cardsList.map(arrangingCards)}</>;
};

export default CardsList;
