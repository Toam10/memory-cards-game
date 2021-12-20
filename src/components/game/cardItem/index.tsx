import React from "react";
import { ICardItemProps } from "../../../types/game/card.types";
import * as Style from "./cardItem.styles";
const CardItem = ({ card }: ICardItemProps) => {
	return <Style.Container>{card.value}</Style.Container>;
};

export default CardItem;
