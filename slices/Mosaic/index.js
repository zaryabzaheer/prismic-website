import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import VideoComponent from "../../components/VideoComponent";
import ProjectSectionHeader from "../../components/project-section-header";
/**
 * @typedef {import("@prismicio/client").Content.CollageSlice} CollageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CollageSlice>} CollageProps
 * @param { CollageProps }
 */
const Collage = ({ slice }) => {
	return (
		<section className="container py-10 md:py-36">
			<ProjectSectionHeader slice={slice} />
			<div className="flex flex-wrap">
				{slice.items.map((item, idx) => {
					if (item.image.url) {
						return (
							<div
								className={`${item.fullwidth ? "w-full" : "w-1/2"} p-1 md:p-2`}
								key={`collage-${idx}`}
							>
								<div className="w-full h-auto bg-center bg-cover"
								style={{ backgroundImage: `url('${item?.image?.url}')`,
									paddingBottom: item.height_width_ratio ? item.height_width_ratio : item.fullwidth ? '56%' : '70%'}}>
								</div>
							</div>
						);
					} else if (item?.vimeo_video?.video_id || item?.video_link?.url) {
						return (
							<div
								className={`${item.fullwidth ? "w-full" : "w-1/2"} relative h-auto`}
								key={`collage-${idx}`}
							>
								<div className="">
									<div className="p-1 md:p-2">
										<VideoComponent
											vimeo_video={item?.vimeo_video?.video_id ? `https://player.vimeo.com/video/${item?.vimeo_video?.video_id}` : null}
											vimeo_src={item?.vimeo_video.html}
											video_link_url={item?.video_link?.url || item?.vimeo_video?.embed_url}
											loop={item?.loop}
											mute_and_autoplay={item?.mute_and_autoplay}
											controls={item?.controls}
											/>
									</div>
								</div>
							</div>
						);
					}
				})}
				
			</div>
			<style jsx>{``}</style>
		</section>
	);
};

export default Collage;
