import "./App.css";
import { useState, useLayoutEffect, useEffect } from "react";
import Header from "./components/Header/Header";
import LeftNav from "./components/LeftNav/LeftNav";
import Filter from "./components/Filter/Filter";
import Videos from "./components/Videos/Videos";

const App = () => {
	const [isNavOpen, setIsNavOpen] = useState(true);
	const [isDarkmode, setIsDarkmode] = useState(false);
	let browserSize = window.innerWidth;
	const [browserSizes, setBrowserSizes] = useState(browserSize);
	const [showSearch, setShowSearch] = useState(false);

	// If browser big, show Nav
	useEffect(() => {
		if (browserSize < 760) {
			setIsNavOpen(false);
		} else {
			setIsNavOpen(true);
		}
	}, []);

	useEffect(() => {
		// Close nav if open, if on small screen
		if (browserSizes < 760) {
			if (isNavOpen) {
				setIsNavOpen(false);
			}
		}
		// Hide search if screen below 400px
		// if (browserSizes < 400) {
		// 	setShowSearch(false);
		// }
	}, [browserSizes]);

	// Listen to browser size
	useLayoutEffect(() => {
		window.addEventListener("resize", () =>
			setBrowserSizes(window.innerWidth)
		);
		return window.removeEventListener("resize", () =>
			setBrowserSizes(window.innerWidth)
		);
	});

	return (
		<div>
			<Header
				isNavOpen={isNavOpen}
				setIsNavOpen={setIsNavOpen}
				isDarkmode={isDarkmode}
				setIsDarkmode={setIsDarkmode}
				browserSizes={browserSizes}
				showSearch={showSearch}
				setShowSearch={setShowSearch}
			/>
			<div className='content-wrap'>
				<LeftNav
					isNavOpen={isNavOpen}
					isDarkmode={isDarkmode}
				/>
				<div className='content'>
					<Filter
						isNavOpen={isNavOpen}
						isDarkmode={isDarkmode}
					/>
					<Videos
						isNavOpen={isNavOpen}
						isDarkmode={isDarkmode}
						browserSize={browserSize}
					/>
				</div>
			</div>
		</div>
	);
};

export default App;
