// import { useMediaQuery }
import React from "react";
import Nav from "./Nav";
import "./LeftNav.css";
import { navProps } from "./navProps";

const LeftNav = ({ isNavOpen, isDarkmode }) => {
	return (
		<div
			className={"left-nav " + (isDarkmode ? "darkmode" : "")}
			style={
				!isNavOpen
					? { display: "none" }
					: { display: "block" }
			}
		>
			{navProps.map(item => {
				return (
					<Nav
						name={item.name}
						icon={item.icon}
						active={item.active}
						isDarkmode={isDarkmode}
					/>
				);
			})}
		</div>
	);
};

export default LeftNav;
