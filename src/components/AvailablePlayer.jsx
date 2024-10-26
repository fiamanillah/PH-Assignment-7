function AvailablePlayer({ players, onChoosePlayer }) {
	return (
		<div className="grid grid-cols-3 gap-3 lg-t:grid-cols-2 md-p:grid-cols-1">
			{players.map((player) => (
				<div key={player.id} className="border-2 p-3 rounded-2xl flex flex-col gap-2">
					<img
						className="rounded-xl h-[250px] object-cover"
						src={player.image}
						alt={player.name}
					/>
					<div className="flex items-center gap-2">
						<img className="w-10 h-10 rounded-full" src={player.avatar} alt="" />
						<h2 className="text-xl font-bold">{player.name}</h2>
					</div>
					<div className="flex justify-between">
						<div className="flex items-center gap-2 text-slate-500">
							<img src="flag.svg" alt="" />
							<span>{player.nation}</span>
						</div>
						<span className="px-4 py-2 bg-slate-200 rounded-lg text-slate-700">
							{player.playingFormate}
						</span>
					</div>
					<hr className="border-1 rounded-full" />
					<div className="flex justify-between">
					<span className="font-bold">Rating</span>
					<span className="text-slate-500"> {player.rating}</span>
					</div>
					
					<div className="flex justify-between">
						<span className="font-bold">{player.battingStyle}</span>{" "}
						<span className="text-slate-500">{player.bowlingStyle}</span>
					</div>
					<div className="flex justify-between items-center">
						<span>price:${player.price}</span>
						<button
							className="border-2 px-4 py-2 text-slate-500 rounded-lg"
							onClick={() => {
								onChoosePlayer(player);
							}}>
							Choose Player
						</button>
					</div>
				</div>
			))}
		</div>
	);
}

export default AvailablePlayer;
