import React from "react";
import "./Header.css";
import LeftHeader from "./LeftHeader";
import RightHeader from "./RightHeader";
import InputHeader from "./InputHeader";
import nextId from "react-id-generator";

const headerClass = {
	justifyContent: "center",
};

const Header = ({
	isNavOpen,
	setIsNavOpen,
	isDarkmode,
	setIsDarkmode,
	browserSizes,
	showSearch,
	setShowSearch,
}) => {
	return (
		<div
			className={"header " + (isDarkmode ? "darkmode" : "")}
			style={showSearch ? headerClass : null}
		>
			{!showSearch ? (
				[
					<LeftHeader
						key={nextId()}
						isDarkmode={isDarkmode}
						isNavOpen={isNavOpen}
						setIsNavOpen={setIsNavOpen}
						browserSizes={browserSizes}
					/>,
					<InputHeader
						key={nextId()}
						isDarkmode={isDarkmode}
						showSearch={showSearch}
						setShowSearch={setShowSearch}
						browserSizes={browserSizes}
					/>,
					<RightHeader
						key={nextId()}
						isDarkmode={isDarkmode}
						setIsDarkmode={setIsDarkmode}
					/>,
				]
			) : (
				<InputHeader
					key={nextId()}
					isDarkmode={isDarkmode}
					showSearch={showSearch}
					setShowSearch={setShowSearch}
					browserSizes={browserSizes}
				/>
			)}
		</div>
	);
};

export default Header;
