import React from "react";
import "./Nav.css";

const Nav = ({ name, icon, active, isDarkmode }) => {
	return (
		<div
			className={
				"nav " +
				(isDarkmode ? "darkmode " : "") +
				(active === true ? "active" : "")
			}
		>
			<div className='left-nav-icon'>
				<i className={icon}></i>
			</div>
			<h4>{name}</h4>
		</div>
	);
};

export default Nav;
