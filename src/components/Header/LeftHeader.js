import React from "react";
import Logo from "../../img/yt-logo.png";
import darkmodeLogo from "../../img/yt-logo-darkmode.png";
import "./LeftHeader.css";

const LeftHeader = ({ isNavOpen, setIsNavOpen, isDarkmode }) => {
	const navHandler = () => {
		setIsNavOpen(!isNavOpen);
	};

	return (
		<div
			className={
				"left-header " + (isDarkmode ? "darkmode" : "")
			}
		>
			<div className='nav-bar' onClick={navHandler}>
				<div className='bar'></div>
				<div className='bar'></div>
				<div className='bar'></div>
			</div>
			<div className='logo'>
				<img
					className='yt-logo'
					src={isDarkmode ? darkmodeLogo : Logo}
					alt='Youtube Logo'
					title='Youtube Home'
				/>
			</div>
		</div>
	);
};

export default LeftHeader;
