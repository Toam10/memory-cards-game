import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardsList from "../cardsList";
import * as Style from "./board.styles";
const Board = () => {
	const [worngGuesses, setWorngGuesses] = useState(0);
	const increaseWorngGuesses = (): void => {
		setWorngGuesses(worngGuesses + 1);
	};

	const navigate = useNavigate();
	return (
		<Style.Container>
			<Style.GoHomeButton onClick={() => navigate("/", { replace: true })}>Go Home</Style.GoHomeButton>
			<Style.GuessesWrapper>{worngGuesses}</Style.GuessesWrapper>
			<Style.CardsListContainer>
				<CardsList increaseWorngGuesses={increaseWorngGuesses} />
			</Style.CardsListContainer>
		</Style.Container>
	);
};

export default Board;
