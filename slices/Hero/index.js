import React, { useState, useEffect, useCallback } from "react";
import { PrismicRichText } from "@prismicio/react";
import $ from "jquery";
import Lottie from "react-lottie";

const heroHeight = 700;

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param { HeroProps }
 */
const Hero = ({ slice }) => {
	const [isStopped, setIsStopped] = useState(false);
	const [isPaused, setIsPaused] = useState(false);
	const [frame, setFrame] = useState(0);
	let iconsLoaded = false;

	useEffect(() => {
		if (iconsLoaded) return;
		if ($(".hero-icon").length) return;
		iconsLoaded = true;
		$(".icon").each(function (idx) {
			if ($(`#hero-icon-${idx}`).length) return;
			if (!slice?.items[idx]?.icon?.url) return;
			const item = slice?.items[idx];
			var img = $(
				`<img
            class="-lg:h-8 h-[76px] inline-block hero-icon"
            id="hero-icon-${idx}"
            style="margin-left: ${item?.margin_left}px;margin-right: ${item?.margin_right}px;"
          >`
			);
			img.attr("src", item?.icon?.url);
			$(this).replaceWith(img);
		});
	});

	const defaultOptions = {
		loop: false,
		autoplay: false,
		animationData: slice?.primary?.lottie_json
			? JSON.parse(slice?.primary?.lottie_json)
			: "",
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	const onScroll = useCallback(
		(event) => {
			const { pageYOffset } = window;
			const newPoint =
				(pageYOffset / heroHeight) *
				slice?.primary?.lottie_frames *
				slice?.primary?.lottie_speed;
			setFrame(newPoint);
		},
		[frame]
	);

	useEffect(() => {
		//add eventlistener to window
		window.addEventListener("scroll", onScroll, { passive: true });
		// remove event on unmount to prevent a memory leak with the cleanup
		return () => {
			window.removeEventListener("scroll", onScroll, { passive: true });
		};
	}, [frame]);

	return (
		<section className="pt-16 min-h-screen">
			<div
				className="relative mx-0 md:mx-auto hero pt-32 md:pt-48 md:pt-80 bg-cover md:bg-contain bg-center bg-no-repeat"
				style={{
					backgroundImage:
						!slice?.primary?.lottie_json && slice?.primary?.background?.url
							? `url('${slice.primary.background.url}')`
							: 'url("")',
				}}
			>
				{slice?.primary?.lottie_json && (
					<div className="absolute top-1/4 md:top-[10%] left-0 w-full h-full z-[0] flex overflow-visible lottie -md:h-3/4 -md:w-full">
						<LottieWithAnimationControl
							options={defaultOptions}
							height={"85%"}
							width={"90%"}
							isStopped={isStopped}
							isPaused={isPaused}
							percentage={frame}
							className="overflow-visible lottie"
						/>
					</div>
				)}
				<div className="container relative z-[1]">
					<h1
						className="text-[56px] break-words md:text-5xl lg:text-[140px] md:font-semibold	grey l10 
              leading-normal md:leading-loose lg:leading-normal"
					>
						<span
							className={`${
								slice.primary?.mobile_title?.length ? "hidden" : ""
							} lg:block`}
						>
							<PrismicRichText field={slice.primary?.title} />
						</span>
						<span className="lg:hidden break-words">
							<PrismicRichText field={slice.primary?.mobile_title} />
						</span>
					</h1>
				</div>
			</div>
			<div className="hidden hero-icons">
				{slice.items.map((item, idx) => {
					return (
						<img
							className="inline-block"
							id={`icon-${idx}`}
							key={`icon-${idx}`}
							src={item?.icon?.url}
						/>
					);
				})}
			</div>
			<style jsx>{`
				.hero {
					height: calc(100vh - 10rem);
				}
			`}</style>
		</section>
	);
};

export default Hero;

class LottieWithAnimationControl extends Lottie {
	static propTypes = {
		...Lottie.propTypes,
		percentage: Number,
	};

	anim;
	props;

	componentDidUpdate(prevProps, prevState, prevContext) {
		if (super.componentDidUpdate) {
			super.componentDidUpdate(prevProps, prevState, prevContext);
			this.anim.goToAndStop(this.props.percentage, true);
		}
	}
}
