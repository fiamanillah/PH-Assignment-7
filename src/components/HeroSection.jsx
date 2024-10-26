

function HeroSection({ onAddCredit }) {
	return (
		<section className="max-w-screen-xl m-auto py-5 px-[2%] flex justify-center items-center">
			<div className="bg-bg-shadow bg-black rounded-3xl w-full flex flex-col justify-center items-center gap-5 py-14 text-center">
				<img src="banner-main.png" alt="" />
				<h1 className="text-white text-4xl font-bold">
					Assemble Your Ultimate Dream 11 Cricket Team
				</h1>
				<p className="text-slate-300 text-xl">Beyond Boundaries Beyond Limits</p>
				<button
					className="bg-btn-clr-1  py-3 px-5 rounded-xl outline-2 outline-double outline-offset-4 outline-btn-clr-1"
					onClick={onAddCredit}>
					Claim Free Credit
				</button>
			</div>
		</section>
	);
}

export default HeroSection;
