import React from "react";
import Image from "next/image";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import SingleProject from '../../components/single-project';
/**
 * @typedef {import("@prismicio/client").Content.ProjectsSlice} ProjectsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectsSlice>} ProjectsProps
 * @param { ProjectsProps }
 */
const Projects = ({ slice }) => {
	return (
		<section className="container py-20 md:pt-20 md:pb-60">
			<span className="flex space-between mb-6">
				<span className="accent">
					{slice.primary.title && (
						<h4 className="md:text-3xl text-2xl">{slice.primary.title}</h4>
					)}
				</span>
				<span className="grey ml-auto">
					{slice.primary.link_text && (
						<Link
							className="flex h-full hover:opacity-80"
							href={slice?.primary?.link?.url ? "" : "/verkefni"}
						>
							<>
								<h4 className="text-sm md:text-2xl m-auto">
									{slice.primary?.link_text}
								</h4>
								<span
									className="ml-3 md:ml-5 h-full w-8 md:w-32 bg-right bg-no-repeat hover:opacity-80"
									style={{ backgroundImage: "url(/images/arrow.svg)" }}
								></span>
							</>
						</Link>
					)}
				</span>
			</span>

			<div className="block">
				{slice?.items?.map((item, idx) => (
					<ProjectsRow
						display={item?.display}
						project1={item?.project}
						project2={item?.project_2}
						project3={item?.project_3}
						idx={idx}
						key={`project-${idx}`}
					></ProjectsRow>
				))}
			</div>

			<style jsx>{``}</style>
		</section>
	);
};

const projectsRowClass = {
	Single: '"a"/ 1fr',
	Double: '"a b"/ 1fr 1fr',
	"Double Block + Single": '"a c" "b c"/ 1fr 1fr',
	"Double Flex + Single": '"a b c c"/ 1fr 1fr 1fr 1fr',
	"Single + Double Block": '"a b" "a c"/ 1fr 1fr',
	"Single + Double Flex": '"a a b c"/ 1fr 1fr 1fr 1fr',
};

const displayOptions = {
	single: "Single",
	double: "Double",
	double_block_single: "Double Block + Single",
	double_flex_single: "Double Flex + Single",
	single_double_block: "Single + Double Block",
	single_double_flex: "Single + Double Flex",
};

const ProjectsRow = ({ display, project1, project2, project3, idx }) => {
	const projects = [
		{ project: project1, gridArea: "a" },
		{ project: project2, gridArea: "b" },
		{ project: project3, gridArea: "c" },
	];
	return (
		<>
			<div
				className={`grid -mx-2`}
				style={{ gridTemplate: projectsRowClass[display] }}
			>
				{projects.map((item, idxy) => {
					if (item?.project)
						return (
							<SingleProject
								project={item?.project}
								display={displayOptions.single ? "pb-[56%]" : "pb-[70%]"}
								key={`project-${idx}-${idxy}-${item?.project?.id}`}
								gridArea={item.gridArea}
							/>
						);
				})}
			</div>
		</>
	);
};

export default Projects;
