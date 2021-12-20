import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

export const GuessesWrapper = styled.div`
	position: absolute;
	font-size: 50px;
`;

export const CardsListContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(3, 1fr);
	margin-top: 100px;
`;

export const GoHomeButton = styled.button`
	width: 150px;
	height: 50px;
	border: 1px solid gray;
	font-size: large;
	background-color: indianred;
	letter-spacing: 3px;
	text-transform: uppercase;
	color: wheat;
	cursor: pointer;
	position: absolute;
	left: 20px;
	top: 20px;
	border-radius: 10px;

	@media (max-width: 450px) {
		width: 20vw;
		height: auto;
		border: 1px solid gray;
		margin: 3px;
		text-align: center;
		font-size: small;
		border-radius: 4px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
