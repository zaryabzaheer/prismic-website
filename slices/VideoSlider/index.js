import React, { useState } from 'react';
import ProjectSectionHeader from "../../components/project-section-header";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import VideoComponent from "../../components/VideoComponent";
import SliderArrow from "../../components/slider-arrow";

/**
 * @typedef {import("@prismicio/client").Content.VideoSliderSlice} VideoSliderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<VideoSliderSlice>} VideoSliderProps
 * @param { VideoSliderProps }
 */
const VideoSlider = ({ slice }) => {
	const [currentSlide, setCurrentSlide] = useState(0)

	const [sliderRef, instanceRef] = useKeenSlider({
		initial: 0,
		mode: "snap",
		slides: {
			origin: "center",
			perView: 2,
			spacing: 15,
			size: 0.5,
		},
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel)
		},
	});

	return (
		<section className="md:container py-10 md:pt-36 md:pb-12">
			{slice?.primary?.title ||
				(slice?.primary?.description?.length > 0 && (
					<ProjectSectionHeader slice={slice} />
				))}
			<div
				className="keen-slider -ml-96 !overflow-visible"
				ref={sliderRef}
				style={{ width: "150%" }}
			>
				{slice.items.map((item, idx) => {
					return (
						<div key={`video-slider-${idx}`} className="keen-slider__slide w-full">
							<VideoComponent
								vimeo_video={
									item?.vimeo_video?.video_id
										? `https://player.vimeo.com/video/${item?.vimeo_video?.video_id}`
										: null
								}
								vimeo_src={item?.vimeo_video.html}
								video_link_url={item?.video_link?.url || item?.vimeo_video?.embed_url}
								loop={item?.loop}
								mute_and_autoplay={item?.mute_and_autoplay}
								controls={item?.controls}
							/>
						</div>
					);
				})}
		instance</div>
			<div className="flex mt-8 md:mt-20 justify-between w-full -md:container">
				<SliderArrow
					left
					onClick={(e) => e.stopPropagation() || instanceRef?.current?.prev() }
					disabled={currentSlide === 0}
				/>
				<SliderArrow
					onClick={(e) => e.stopPropagation() || instanceRef?.current?.next() }
					disabled={ currentSlide === instanceRef?.current?.track?.details?.slides?.length - 1 }
				/>
			</div>
			<style jsx>{``}</style>
		</section>
	);
};

export default VideoSlider;
