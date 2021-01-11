import React from "react";
import FilterItem from "./FilterItem";
import "./Filter.css";

const filterItem = [
	"HTML",
	"CSS",
	"Javascript",
	"React",
	"Vue",
	"Node",
	"PHP",
	"MySQL",
];

const Filter = ({ isNavOpen, isDarkmode }) => {
	return (
		<div
			className={
				"filter " +
				(!isNavOpen ? "full " : "") +
				(isDarkmode ? "darkmode" : "")
			}
		>
			{filterItem.map(item => {
				return (
					<FilterItem name={item} isDarkmode={isDarkmode} />
				);
			})}
		</div>
	);
};

export default Filter;
