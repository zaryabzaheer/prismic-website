import Link from "next/link";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
import { PrismicRichText } from "@prismicio/react";

const ProjectSectionHeader = ({ slice }) => {
	return (
		<>
			{slice?.primary?.title ? (
				<span className="container flex justify-between md:mb-20 pb-14">
					<span className="accent">
						<h3 className="text-base md:text-[24px]">{slice.primary.title}</h3>
					</span>
					{slice?.primary?.description?.length > 0 && (
						<span className="grey w-9/12 md:w-1/2">
							<h3 className="text-base md:text-[34px] font-normal md:font-medium leading-tight">
								<PrismicRichText field={slice.primary.description} />
							</h3>
						</span>
					)}
				</span>
			) : (
				<>
					{slice?.primary?.description?.length > 0 && (
						<div className="pb-14 md:pb-40">
							<span className="grey">
								<h2 className="text-2xl md:text-5xl">
									<PrismicRichText field={slice.primary.description} />
								</h2>
							</span>
						</div>
					)}
				</>
			)}
			<style jsx>{``}</style>
		</>
	);
};

export default ProjectSectionHeader;
