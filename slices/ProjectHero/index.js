import React from "react";
import { IoIosArrowDown } from "react-icons/io";

/**
 * @typedef {import("@prismicio/client").Content.ProjectHeroSlice} ProjectHeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectHeroSlice>} ProjectHeroProps
 * @param { ProjectHeroProps }
 */
const ProjectHero = ({ slice }) => {
	const mobileBackground = slice.primary?.mobile_background?.url;
	const desktopBackground = slice.primary?.background?.url;

	return (
		<section className="h-screen bg-cover bg-center desktop-background">
			<div className="container relative h-full w-full">
				<div className="absolute bottom-10 md:bottom-[72px]">
					{slice.primary.heading && (
						<h1
							className={`text-3xl md:text-4xl md:text-[64px] md:leading-[77px] mb-2 md:mb-4 text-accent`}
							style={{ color: slice?.primary?.heading_color }}
						>
							{slice.primary.heading}
						</h1>
					)}
					{slice.primary.subheading && (
						<h3
							className={`text-base md:text-lg text-grey md:text-[24px] md:leading-[29px]`}
							style={{ color: slice?.primary?.subheading_color }}
						>
							{slice.primary.subheading}
						</h3>
					)}
					<div className="accent mt-9 md:mt-16">
						<IoIosArrowDown size={35} />
					</div>
				</div>
			</div>
			<style jsx>{`
				.desktop-background {
					background-image: url("${desktopBackground}");
				}

				@media (max-width: 767px) {
					.desktop-background {
						background-image: url("${mobileBackground || desktopBackground}");
					}
				}
			`}</style>
		</section>
	);
};

export default ProjectHero;
