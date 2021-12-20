import React from "react";
import { ICardProps } from "../../../types/game/card.types";
import * as Style from "./card.styles";
const Card = ({ card }: ICardProps) => {
	return <Style.Container>{card}</Style.Container>;
};

export default Card;
