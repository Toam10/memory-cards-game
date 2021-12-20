import React from "react";
import CardsList from "../cardsList";
import * as Style from "./board.styles";
const Board = () => {
	return (
		<Style.Container>
			<CardsList />
		</Style.Container>
	);
};

export default Board;
