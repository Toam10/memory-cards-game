import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CARDS_12, CARDS_18, CARDS_24 } from "../../../constants/cards.constants";
import { ICardItem, ICardsListProps } from "../../../types/game/cardsList.types";
import useCardsSListServices from "../../services/game/cardsList.services";
import CardItem from "../cardItem";

const CardsList = ({ increaseWorngGuesses }: ICardsListProps) => {
	const { flippingCard, shuffle, setCardsList, setFlippedCards, cardsList } = useCardsSListServices();
	const location = useLocation();
	const difficulty = location.pathname.split("/").pop();
	const getCardsDeck = () => {
		if (difficulty === "Hard") return [...CARDS_24];
		if (difficulty === "Medium") return [...CARDS_18];
		return [...CARDS_12];
	};
	const cardsDeck = getCardsDeck();
	useEffect(() => {
		const newCardsList = shuffle(cardsDeck).map((card) => {
			card.isHidden = true;
			return card;
		});

		setCardsList(newCardsList);
		setFlippedCards([]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [setCardsList]);

	const arrangingCards = (card: ICardItem, index: number) => {
		return <CardItem key={index} card={card} flippingCard={() => flippingCard(index, increaseWorngGuesses)} />;
	};

	return <>{cardsList.map(arrangingCards)}</>;
};

export default CardsList;
