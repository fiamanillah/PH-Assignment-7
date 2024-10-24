import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";

function App() {
	const [balance, setBalance] = useState(0);

	function handleAddCredit() {
		setBalance((prev) => prev + 600000);
	}

	return (
		<div>
			<Header balance={balance} />
			<HeroSection onAddCredit={handleAddCredit} />
		</div>
	);
}

export default App;
