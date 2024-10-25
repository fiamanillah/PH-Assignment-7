import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import MainPlayer from "./components/MainPlayer.jsx";

function App() {
	const [balance, setBalance] = useState(0);

	function handleAddCredit() {
		setBalance((prev) => prev + 600000);
	}

	return (
		<div className="mx-5">
			<Header balance={balance} />
			<HeroSection onAddCredit={handleAddCredit} />
			<MainPlayer setBalance={setBalance} balance={balance}/>
		</div>
	);
}

export default App;
