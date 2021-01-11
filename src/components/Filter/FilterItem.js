import { toNamespacedPath } from "path";
import React from "react";
import "./FilterItem.css";

const FilterItem = ({ name, isDarkmode }) => {
	return (
		<div
			className={
				"filter-item " + (isDarkmode ? "darkmode" : "")
			}
		>
			{name}
		</div>
	);
};

export default FilterItem;
