import styled from "styled-components";
import { ICardContainer } from "../../../types/game/cardItem.types";

export const Container = styled.div<ICardContainer>`
	width: 200px;
	height: 300px;
	border: 1px solid gray;
	margin: 10px;
	text-align: center;
	line-height: 300px;
	font-size: 100px;
	cursor: pointer;
	${({ isHidden }) =>
		isHidden &&
		`background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvo-Uhq29SXiEFOWCSo7VoHyF9gcyu5WBHUw&usqp=CAU);
		 background-position: center;
		 background-repeat: no-repeat;
		 background-size: 100% 120%;
		 `};

	:hover {
		transition: 0.2s;
		transform: scale(1.1);
	}

	:active {
		transition: 0.5s;
		transform: rotateY(180deg);
	}

	@media (max-width: 940px) {
		width: 20vw;
		height: 35vw;
		border: 1px solid gray;
		margin: 3px;
		text-align: center;
		line-height: 35vw;
		font-size: 40px;
	}
`;
