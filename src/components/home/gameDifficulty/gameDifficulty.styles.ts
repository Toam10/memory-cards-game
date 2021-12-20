import styled from "styled-components";

export const Wrapper = styled.div`
	width: 50%;
	display: flex;
	justify-content: space-evenly;
	flex-direction: column;
	align-items: center;
	height: 400px;
`;
export const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

export const Button = styled.button`
	width: 200px;
	height: 50px;
	border: 1px solid gray;
	font-size: xx-large;
	background-color: indianred;
	letter-spacing: 10px;
	text-transform: uppercase;
	color: wheat;
	cursor: pointer;

	@media (max-width: 450px) {
		height: auto;
		border: 1px solid gray;
		margin: 3px;
		text-align: center;
		font-size: small;
		border-radius: 4px;
	}
`;
