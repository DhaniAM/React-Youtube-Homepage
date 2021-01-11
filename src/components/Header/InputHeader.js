import React from "react";
import "./InputHeader.css";

const InputHeader = ({ isDarkmode }) => {
	return (
		<div
			className={
				"input-header " + (isDarkmode ? "darkmode" : "")
			}
		>
			<div className='input-wrap'>
				<input
					className='input'
					type='text'
					placeholder='Search...'
				/>
				<button type='button' className='search-btn'>
					<i className='fas fa-search'></i>
				</button>
			</div>
		</div>
	);
};

export default InputHeader;
