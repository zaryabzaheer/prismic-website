import React, { useState } from 'react';
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import ProjectSectionHeader from "../../components/project-section-header";
import SliderArrow from "../../components/slider-arrow";
/**
 * @typedef {import("@prismicio/client").Content.ImageSliderSlice} ImageSliderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageSliderSlice>} ImageSliderProps
 * @param { ImageSliderProps }
 */
const ImageSlider = ({ slice }) => {
	const [currentSlide, setCurrentSlide] = useState(0)

	const [sliderRef, instanceRef] = useKeenSlider({
		initial: 0,
		mode: "snap",
		slides: {
		origin: "center",
		perView: 2,
		spacing: 32,
		size: 0.5,
		},
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel)
		},
	});

	return (
		<section className="md:container py-10 md:pt-36 md:pb-12">
			<ProjectSectionHeader slice={slice} />
			<div 
				className="keen-slider -ml-60 !overflow-visible"
				ref={sliderRef} 
				style={{ width: '120%' }}>
				{slice.items.map((item, idx) => {
					return (
						<div key={`image-slider-${idx}`} className="keen-slider__slide w-full">
							<Image
								src={item?.image?.url}
								alt={item?.image?.alt || "Slider Picture" + idx}
								width={1500}
								height={1500}
								className=""
							/>
						</div>
					);
				})}
			</div>
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

export default ImageSlider;
