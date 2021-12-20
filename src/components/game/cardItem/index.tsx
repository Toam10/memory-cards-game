import React from "react";
import { ICardItemProps } from "../../../types/game/cardItem.types";
import * as Style from "./cardItem.styles";
const CardItem = ({ card, flippingCard }: ICardItemProps) => {
	return (
		<Style.Container isHidden={card.isHidden} onClick={flippingCard}>
			{card.isHidden ? "" : card.value}
		</Style.Container>
	);
};

export default CardItem;
