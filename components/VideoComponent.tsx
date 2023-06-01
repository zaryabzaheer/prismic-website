import React from "react";
import { PrismicRichText } from "@prismicio/react";

const VideoComponent = ({ vimeo_video, vimeo_src, video_link_url, loop, mute_and_autoplay, controls }) => {
	
	return (
		<div className="video-wrapper h-full w-full"
			style={{
				position: "relative",
				paddingBottom: vimeo_video ? "56.25%" : '0px',
			}}
		>
			{vimeo_video ? (
				<iframe
				id="iframe"
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
				}}
				src={vimeo_video}
				className="h-full w-full"
			/>
			) :
			(<>
				{vimeo_src ? (
					<div dangerouslySetInnerHTML={{ __html: vimeo_src }} />

				) :
				(<>
					{video_link_url ? (
						<>
							<video className="w-full" width="" 
								autoPlay={mute_and_autoplay} 
								muted={mute_and_autoplay} 
								controls={controls} 
								loop={loop}>
								<source src={`${video_link_url}`} type="video/mp4" />
								<source src={`${video_link_url}`} type="video/ogg" />
								Your browser does not support HTML video.
							</video>
						</>
					) : <></>}
				</>)
			}
			</>)
		}
			
		</div>
	);
};

export default VideoComponent;
