function Footer() {
	return (
		<footer className=" text-white bg-[#060919] w-full relative">
			<div className="max-w-screen-xl m-auto py-5 px-[2%] flex flex-col justify-center items-center gap-5">
				<img src="logo-footer.png" alt="" />
				<div className="flex md-p:gap-5 md-p:flex-col  justify-between">
					<div className="basis-1/4">
						<h2 className="text-xl font-medium mb-2">About Us</h2>
						<p className="text-slate-400">
							We are a passionate team dedicated to providing the best services to our
							customers.
						</p>
					</div>

					<div className="basis-1/4">
						<h2 className="text-xl font-medium mb-2">Quick Link</h2>
						<ul className="text-slate-400">
							<li>
								<button>Home</button>
							</li>
							<li>
								<button>Service</button>
							</li>
							<li>
								<button>About</button>
							</li>
							<li>
								<button>Contact</button>
							</li>
						</ul>
					</div>

					<div className="basis-1/4">
						<h2 className="text-xl font-medium mb-2">Subscribe</h2>
						<p className="text-slate-400 mb-2">
							Subscribe to our newsletter for the latest updates.
						</p>
						<div className="flex rounded-xl overflow-hidden">
							<input
								className="p-2 text-black"
								type="email"
								placeholder="Enter Your email"
							/>
							<button
								className="py-2 px-4 rounded-r-xl"
								style={{
									background:
										"linear-gradient(90deg, rgba(235,190,86,1) 0%, rgba(235,190,86,1) 71%, rgba(221,113,176,1) 100%)",
								}}>
								Subscribe
							</button>
						</div>
					</div>
				</div>
				<hr className="border-slate-500 border-1 w-full" />
				<div>
					<span className="text-slate-400">@2024 Your Company All Rights Reserved.</span>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
