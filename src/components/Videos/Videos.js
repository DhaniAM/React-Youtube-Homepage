import React from "react";
import Video from "./Video";
import "./Videos.css";
import videoProps from "./videoProps";

const Videos = ({ isNavOpen, isDarkmode, browserSize }) => {
	return (
		<div
			className={
				"videos " +
				(!isNavOpen ? "full " : "") +
				(isDarkmode ? "darkmode" : "")
			}
			style={{
				marginLeft:
					browserSize < 760
						? "0px"
						: isNavOpen
						? "250px"
						: "0px",
			}}
		>
			{videoProps.map(item => {
				return (
					<Video
						title={item.title}
						channelName={item.channelName}
						views={item.views}
						timeUploaded={item.timeUploaded}
						thumbnail={item.thumbnail}
						profileImage={item.profileImage}
						isDarkmode={isDarkmode}
					/>
				);
			})}
		</div>
	);
};

export default Videos;
