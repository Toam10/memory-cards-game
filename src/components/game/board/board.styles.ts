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
