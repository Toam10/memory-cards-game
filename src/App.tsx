import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Game from "./components/game";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";

function App() {
	return (
		<Routes>
			<Route path="/Game" element={<Game />} />
			<Route path="/" element={<Home />} />
		</Routes>
	);
}

export default App;
