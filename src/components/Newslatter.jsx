function Newslatter() {
	return (
		<div
			className="mx-auto flex flex-col justify-center items-center py-10"
			style={{
				background: "linear-gradient(to bottom, white, white 50%, #060a18 50%, #060a18)",
			}}>
			<div className="w-6/12 mx-auto flex flex-col justify-center items-center gap-3 py-10 relative outline-2 outline-double outline-offset-[10px] outline-slate-100 overflow-hidden rounded-xl bg-white">
				<div
					className="absolute inset-0 pointer-events-none transform-gpu overflow-hidden blur-2xl">
					<div
						style={{
							clipPath:
								"polygon(9.34% 44.5%, 16.26% 72.5%, 50.18% 51.57%, 64.26% 60.96%, 82.3% 100%, 81.56% 53.92%, 100% 52.5%, 85.8% 30.99%, 80.7% 0%, 100% 24.75%, 94.41% 24.29%, 98.62% 67.12%, 100% 100%, 89.03% 41.75%, 89.96% 72.12%, 75% 75%, 38.76% 49.88%, 16.26% 71.51%, 10.53% 64.04%, 11.72% 83.57%, 14.26% 99.74%, 0.1% 100%, 0% 65.98%, 0% 53.5%, 2.52% 24.75%, 3.14% 58.67%)",
							background:
								"linear-gradient(90deg, rgba(114,215,255,1) 0%, rgba(255,172,89,1) 100%)",
						}}
						className="relative h-full"></div>
				</div>

				<h1 className="text-3xl font-bold">Subscribe to our Newsletter</h1>
				<p className="text-slate-500">
					Get the latest updates and news right in your inbox!
				</p>
				<div>
					<input
						className="border-2 p-2 rounded-lg"
						type="email"
						placeholder="Enter Your email"
					/>
					<button
						style={{
							background:
								"linear-gradient(90deg, rgba(221,113,176,1) 0%, rgba(235,190,86,1) 32%, rgba(235,190,86,1) 100%)",
						}}
						className=" py-2 px-4 font-medium ml-2 rounded-lg active:scale-95 duration-200">
						Subscribe
					</button>
				</div>
			</div>
		</div>
	);
}

export default Newslatter;
