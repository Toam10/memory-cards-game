import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Game from "./components/game";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import GameDifficulty from "./components/home/gameDifficulty";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/GameDifficulty" element={<GameDifficulty />} />
			<Route path="/Game/*" element={<Game />} />
		</Routes>
	);
}

export default App;
