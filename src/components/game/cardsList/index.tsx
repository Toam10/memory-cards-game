import React from "react";
import { CARDS_12 } from "../../../constants/cards.constants";
import Card from "../card";

const CardsList = () => {
	const arrangingCards = (card: string | number) => {
		return <Card card={card} />;
	};

	return <>{CARDS_12.map(arrangingCards)}</>;
};

export default CardsList;
