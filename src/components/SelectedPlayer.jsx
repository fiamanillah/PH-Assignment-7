function SelectedPlayer({ selectedPlayer, setSelectedTab, onDeletePlayer }) {
	return (
		<div className="flex flex-col gap-3 w-full">
			{selectedPlayer.map((player) => (
				<div className="border-2 rounded-xl flex p-3 gap-4 items-center justify-between" key={player.id}>
					<div className="flex gap-3 items-center">
						<img className="w-16 h-16 border-2 rounded-xl" src={player.avatar} alt="" />
						<div>
							<h2 className="text-xl font-bold">{player.name}</h2>
							<p className="text-stone-500 text-sm">{player.playingFormate}</p>
						</div>
					</div>
					<div className="flex items-center gap-3 justify-center">
						<span>${player.price}</span>
						<button
							onClick={() => {
								onDeletePlayer(player);
							}}>
							<img src="delete.svg" alt="" />
						</button>
					</div>
				</div>
			))}

			<button
				className="bg-btn-clr-1 self-start py-2 px-4 rounded-xl text-slate-600 font-bold outline-2 outline-double outline-offset-4"
				onClick={() => {
					setSelectedTab("available");
				}}>
				Add More Player
			</button>
		</div>
	);
}

export default SelectedPlayer;
