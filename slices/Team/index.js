import React from "react";
import {
	PrismicRichText,
	useAllPrismicDocumentsDangerously,
} from "@prismicio/react";
import Image from "next/image";
/**
 * @typedef {import("@prismicio/client").Content.TeamSlice} TeamSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TeamSlice>} TeamProps
 * @param { TeamProps }
 */
const Team = ({ slice }) => {
	return (
		<section className="container py-20">
			<div className="py-16">
				<h2 className="accent text-base md:text-[32px] tracking-wider font-light md:mb-10">
					{slice.primary.title}
				</h2>
				<div className="grey text-lg md:text-[40px] md:leading-[140%] mt-4 leading-relaxed font-medium max-w-6xl">
					<PrismicRichText field={slice?.primary?.description} />
				</div>
			</div>
			<div className="grid grid-cols-2 gap-4 md:grid-cols-4">
				{slice.primary?.team?.data?.slices?.map((member) => {
					return (
						<div key={member?.id} className="mb-4 md:mb-12">
							<div
								className="h-auto bg-cover bg-center mb-2 md:mb-4 pb-[130%]"
								style={{
									backgroundImage: member.primary?.image?.url
										? `url('${member?.primary?.image?.url}')`
										: "",
								}}
							></div>
							<h2 className="accent text-sm md:text-2xl font-semibold tracking-wide md:mb-1">
								{member?.primary?.name}
							</h2>
							<h2 className="grey text-sm md:text-base mb-3 font-light tracking-wide">
								{member?.primary?.title}
							</h2>
							<a
								href={`mailto:${member?.primary?.email}`}
								className="grey text-sm md:text-base font-light tracking-wide"
							>
								{member?.primary?.email}
							</a>
						</div>
					);
				})}
			</div>
			<style jsx>{``}</style>
		</section>
	);
};

export default Team;
