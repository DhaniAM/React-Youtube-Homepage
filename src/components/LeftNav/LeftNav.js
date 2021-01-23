// import { useMediaQuery }
import React from "react";
import Nav from "./Nav";
import "./LeftNav.css";
import { navProps } from "./navProps";
import nextId from "react-id-generator";

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
				return [
					<Nav
						key={nextId("nav-id:")}
						name={item.name}
						icon={item.icon}
						active={item.active}
						isDarkmode={isDarkmode}
					/>,
					item.name === "Subscriptions" ||
					item.name === "Live" ? (
						<hr />
					) : null,
				];
			})}
		</div>
	);
};

export default LeftNav;
