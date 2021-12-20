import { useEffect } from "react";
import { CARDS_12 } from "../../../constants/cards.constants";
import { ICardItem, ICardsListProps } from "../../../types/game/cardsList.types";
import useCardsSListServices from "../../services/game/cardsList.services";
import CardItem from "../cardItem";

const CardsList = ({ increaseWorngGuesses }: ICardsListProps) => {
	const { flippingCard, shuffle, setCardsList, setFlippedCards, cardsList } = useCardsSListServices();

	useEffect(() => {
		const newCardsList = shuffle([...CARDS_12]).map((card) => {
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
