import React from "react";
import * as Style from "./home.styles";
import { Link } from "react-router-dom";
const Home = () => {
	return (
		<>
			<Link to="/Game">
				<Style.StartButton>Start Game</Style.StartButton>;
			</Link>
		</>
	);
};

export default Home;
