import React from "react";
import "./Header.css";
import LeftHeader from "./LeftHeader";
import RightHeader from "./RightHeader";
import InputHeader from "./InputHeader";

const Header = ({
	isNavOpen,
	setIsNavOpen,
	isDarkmode,
	setIsDarkmode,
}) => {
	return (
		<div className={"header " + (isDarkmode ? "darkmode" : "")}>
			<LeftHeader
				isNavOpen={isNavOpen}
				setIsNavOpen={setIsNavOpen}
				isDarkmode={isDarkmode}
			/>
			<InputHeader isDarkmode={isDarkmode} />
			<RightHeader
				isDarkmode={isDarkmode}
				setIsDarkmode={setIsDarkmode}
			/>
		</div>
	);
};

export default Header;
