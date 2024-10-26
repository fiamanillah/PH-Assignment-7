function Header({ balance }) {
	return (
		<header className="max-w-screen-xl m-auto py-5 px-[5%] flex justify-between items-center">
			<img src="logo.png" alt="" />
			<div className="flex items-center gap-5">
				<ul className="flex items-center gap-10 md-p:hidden">
					<li>
						<button> Home </button>
					</li>
					<li>
						<button>Fixture </button>
					</li>
					<li>
						<button> Teams </button>
					</li>
					<li>
						<button> Schedules </button>
					</li>
				</ul>

				<button className="flex justify-center items-center border-2 border-stone-400 py-2 px-4 rounded-xl">
					{balance} coin <img src="Currency.png" alt="" />
				</button>
			</div>
		</header>
	);
}

export default Header;
