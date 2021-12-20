import { useState } from "react";
import CardsList from "../cardsList";
import * as Style from "./board.styles";
const Board = () => {
	const [worngGuesses, setWorngGuesses] = useState(0);
	const increaseWorngGuesses = (): void => {
		setWorngGuesses(worngGuesses + 1);
	};
	return (
		<Style.Container>
			<Style.GuessesWrapper>{worngGuesses}</Style.GuessesWrapper>
			<Style.CardsListContainer>
				<CardsList increaseWorngGuesses={increaseWorngGuesses} />
			</Style.CardsListContainer>
		</Style.Container>
	);
};

export default Board;
