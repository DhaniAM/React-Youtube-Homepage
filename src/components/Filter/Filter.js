import React from "react";
import FilterItem from "./FilterItem";
import "./Filter.css";
import nextId from "react-id-generator";

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
					<FilterItem
						key={nextId("filter-id:")}
						name={item}
						isDarkmode={isDarkmode}
					/>
				);
			})}
		</div>
	);
};

export default Filter;
