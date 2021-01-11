import React from "react";
import "./RightHeader.css";

const RightHeader = ({ isDarkmode, setIsDarkmode }) => {
	const darkmodeHandler = () => {
		setIsDarkmode(!isDarkmode);
	};

	return (
		<div
			className={
				"right-header " + (isDarkmode ? "darkmode" : "")
			}
		>
			<div className='darkmode-btn' onClick={darkmodeHandler}>
				<i
					className={
						isDarkmode ? "far fa-moon" : "fas fa-sun"
					}
				></i>
			</div>
			<div className='upload'>
				<i className='fas fa-video'></i>
			</div>
			<div className='apps'>
				<i className='fas fa-th'></i>
			</div>
			<div className='notification'>
				<i className='fas fa-bell'></i>
			</div>
			<div className='profile'></div>
		</div>
	);
};

export default RightHeader;
