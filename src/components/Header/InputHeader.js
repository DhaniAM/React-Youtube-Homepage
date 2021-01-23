import React from "react";
import "./InputHeader.css";

const inputHeaderClass = {
	width: "90%",
	justifyContent: "center",
	alignItems: "center",
};

const inputWrapClass = {
	width: "100%",
	minWidth: "166px",
	display: "flex",
	justifyContent: "space-between",
	height: "auto",
	border: "1px solid rgb(189, 189, 189)",
	borderRadius: "0px",
	transition: "all 0.5s ease",
};

const inputClass = {
	padding: "6px 10px",
	minWidth: "100px",
	width: "100%",
	border: "none",
	outline: "none",
	fontSize: "1rem",
	transition: "all 0.5s ease",
	display: "flex",
};

const searchBtnClass = {
	padding: "8px 25px",
	outline: "none",
	borderRadius: "0px",
	borderRight: "none",
	borderTop: "none",
	borderBottom: "none",
	borderLeft: "1px solid rgb(189, 189, 189)",
	backgroundColor: "#d8d8d8",
	cursor: "pointer",
	transition: "all 0.3s ease",
	opacity: "0.6",
	boxShadow: "none",
	transition: "all 0.5s ease",
};

const searchBtnHoverClass = {
	opacity: "0.9",
	boxShadow: "0px 1px 2px #8a8a8aa1",
};

const inputDarkmode = {
	backgroundColor: "#121212",
	transition: "all 0.5s ease",
	color: "#e9e9e9",
};

const inputDarkmodePlaceholder = {
	color: "#e6e6e669",
	transition: "all 0.5s ease",
};

const searchBtnDarkmode = {
	padding: "8px 25px",
	outline: "none",
	borderRadius: "0px",
	borderRight: "none",
	borderTop: "none",
	borderBottom: "none",
	cursor: "pointer",
	opacity: "0.6",
	boxShadow: "none",
	backgroundColor: "#313131",
	color: "rgba(255, 255, 255, 0.733)",
	border: "none",
	transition: "all 0.5s ease",
};

const searchBtnDarkmodeHover = {
	opacity: "0.9",
	boxShadow: "none",
};

const InputHeader = ({
	isDarkmode,
	setShowSearch,
	showSearch,
	browserSizes,
}) => {
	const showSearchHandler = () => {
		if (browserSizes < 600 || showSearch) {
			setShowSearch(!showSearch);
		}
	};

	return (
		<div
			className={
				"input-header " + (isDarkmode ? "darkmode" : "")
			}
			style={showSearch ? inputHeaderClass : null}
		>
			{/* If Screen is Big, use CSS other file styling */}
			{!showSearch ? (
				<div className='input-wrap'>
					<input
						className='input'
						type='text'
						placeholder='Search...'
					/>
					<button
						type='button'
						className='search-btn'
						onClick={showSearchHandler}
					>
						<i className='fas fa-search'></i>
					</button>
				</div>
			) : (
				// If Screen is Small, use CSS in this file
				<div className='input-wrap' style={inputWrapClass}>
					<input
						className='input'
						type='text'
						placeholder='Search...'
						style={inputClass}
					/>
					<button
						type='button'
						className='search-btn'
						onClick={showSearchHandler}
						style={
							!isDarkmode
								? searchBtnClass
								: searchBtnDarkmode
						}
					>
						<i className='fas fa-search'></i>
					</button>
				</div>
			)}
		</div>
	);
};

export default InputHeader;
