import React from "react";
import { ICardItemProps } from "../../../types/game/card.types";
import * as Style from "./cardItem.styles";
const CardItem = ({ card, flippingCard }: ICardItemProps) => {
	return <Style.Container onClick={flippingCard}>{card.isHidden ? "" : card.value}</Style.Container>;
};

export default CardItem;
