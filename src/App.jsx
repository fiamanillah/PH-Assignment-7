import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import MainPlayer from "./components/MainPlayer.jsx";
import Newslatter from "./components/Newslatter.jsx";
import Footer from "./components/Footer.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	const [balance, setBalance] = useState(0);
	const balanceAddSuccess = () => toast.success("Credit Added to your Account");

	function handleAddCredit() {
		setBalance((prev) => prev + 600000);
		balanceAddSuccess();
	}

	return (
		<div>
			<Header balance={balance} />
			<HeroSection onAddCredit={handleAddCredit} />
			<MainPlayer setBalance={setBalance} balance={balance} />
			<Newslatter />
			<Footer />

			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
				transition:Bounce
			/>

			
		</div>
	);
}

export default App;
