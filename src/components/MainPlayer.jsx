import AvailablePlayer from "./AvailablePlayer";
import { useEffect, useState } from "react";
import SelectedPlayer from "./SelectedPlayer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MainPlayer({ balance, setBalance }) {
	const [players, setPlayers] = useState([]);
	const [selectedTab, setSelectedTab] = useState("available");
	const [selectedPlayer, setSelectedPlayer] = useState([]);

	const lowBalanceMsg = () => toast.error("Insufficient Balance");
	const playerExist = () => toast.error("Player already selected");
	const playerAddSuccess = () => toast.success("Player Added successfully");
	const maximumPlayerSelected = () => toast.error("Maximum player selected");

	useEffect(() => {
		fetch("data.json")
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then((data) => {
				setPlayers(data);
				console.log(data);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, []);

	function handleChoosePlayer(player) {
		console.log(selectedPlayer.findIndex((element) => element.id == player.id));
		if (balance < player.price) {
			lowBalanceMsg();
		} else if (selectedPlayer.findIndex((element) => element.id == player.id) > -1) {
			playerExist();
		} else if (selectedPlayer.length == 6) {
			maximumPlayerSelected();
		} else {
			setBalance((prev) => prev - player.price);
			setSelectedPlayer((prev) => [...prev, player]);
			playerAddSuccess();
		}
	}

	function handleDeleteSelectedPlayer(selectedPlayer) {
		setSelectedPlayer((prev) => {
			return prev.filter((player) => player.id != selectedPlayer.id);
		});
	}

	return (
		<section className="max-w-screen-xl m-auto py-5 flex flex-col justify-center items-center gap-5">
			<div className="flex justify-between items-center w-full">
				<h1 className="text-2xl font-bold">
					{selectedTab == "available"
						? "Available Players"
						: `Selected Players (${selectedPlayer.length}/6)`}
				</h1>
				<div className="flex overflow-hidden border-2 rounded-xl">
					<button
						className={` ${
							selectedTab == "available" && "bg-btn-clr-1 font-bold text-black"
						} text-slate-600 py-3 px-4`}
						onClick={() => {
							setSelectedTab("available");
						}}>
						Available
					</button>
					<button
						className={` ${
							selectedTab == "selected" && "bg-btn-clr-1 font-bold text-black"
						} text-slate-600 py-3 px-4`}
						onClick={() => {
							setSelectedTab("selected");
						}}>
						Selected ({selectedPlayer.length})
					</button>
				</div>
			</div>

			<div className="w-full">
				{selectedTab == "available" && (
					<AvailablePlayer players={players} onChoosePlayer={handleChoosePlayer} />
				)}
				{selectedTab == "selected" && (
					<SelectedPlayer
						selectedPlayer={selectedPlayer}
						setSelectedTab={setSelectedTab}
						onDeletePlayer={handleDeleteSelectedPlayer}
					/>
				)}
			</div>

			<ToastContainer
				position="top-center"
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

		</section>
	);
}

export default MainPlayer;
