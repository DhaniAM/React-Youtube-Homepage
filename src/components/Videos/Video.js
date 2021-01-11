import React from "react";
import "./Video.css";

const Video = ({
	title,
	channelName,
	views,
	timeUploaded,
	thumbnail,
	profileImage,
	isDarkmode,
}) => {
	return (
		<div className={"video " + (isDarkmode ? "darkmode" : "")}>
			<div
				className='thumbnail-wrap'
				style={{ backgroundImage: `url(${thumbnail})` }}
			></div>
			<div className='info-wrap'>
				<div
					className='channel-profile'
					style={{
						backgroundImage: `url(${profileImage})`,
					}}
				></div>
				<div className='info'>
					<h5 className='info-item'>{title}</h5>
					<p className='info-item'>{channelName}</p>
					<p className='info-item'>
						{views} views &#9679; {timeUploaded}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Video;
