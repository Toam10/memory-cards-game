import React from "react";
import { Link } from "react-router-dom";
import * as Style from "./gameDifficulty.styles";
const GameDifficulty = () => {
	return (
		<Style.Container>
			<Style.Wrapper>
				<Link to="/Game/Easy">
					<Style.Button>Easy</Style.Button>
				</Link>
				<Link to="/Game/Medium">
					<Style.Button>Medium</Style.Button>
				</Link>
				<Link to="/Game/Hard">
					<Style.Button>Hard</Style.Button>
				</Link>
			</Style.Wrapper>
		</Style.Container>
	);
};

export default GameDifficulty;
