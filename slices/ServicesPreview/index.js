import React, { useState } from "react";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import { useScroll, motion } from "framer-motion";

/**
 * @typedef {import("@prismicio/client").Content.ServicesSlice} ServicesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ServicesSlice>} ServicesProps
 * @param { ServicesProps }
 */
const Services = ({ slice }) => {
	const [currentColumn, setColumn] = useState(slice.items[0]?.name);

	return (
		<section className="container py-10 md:py-20">
			<span className="flex space-between">
				<span className="accent font-medium">
					{slice.primary.title && (
						<h3 className="text-base md:text-2xl text-2xl">{slice.primary.title}</h3>
					)}
				</span>
				<span className="text-xs md:text-2xl grey ml-auto font-medium inline-block">
					{slice.primary.link_text && (
						<Link
							className="flex h-full hover:opacity-80"
							href={slice?.primary?.link?.url || "/"}
						>
							<>
								<p className="m-auto">{slice.primary.link_text}</p>
								<span
									className="ml-3 md:ml-5 h-full w-8 md:w-32 bg-right bg-right bg-no-repeat hover:opacity-80"
									style={{ backgroundImage: "url(/images/arrow.svg)" }}
								></span>
							</>
						</Link>
					)}
				</span>
			</span>
			<div className="flex mt-10 md:mt-20">
				<div className="block">
					{slice.items.map((item) => {
						return (
							<span
								className="block mb-10 md:mb-16 ease-in-out"
								key={`service-column-${item.name}`}
							>
								<h2
									onClick={() => setColumn(item.name)}
									className={`duration-200 cursor-pointer md:text-[80px] hover:opacity-80 inline-block relative
                ${
																	item.name == currentColumn
																		? "grey"
																		: "text-neutral-600 hover:text-neutral"
																}`}
								>
									<p className="relative z-[1]">{item.name}</p>
									<span
										className={`absolute bottom-2 md:bottom-5 block w-full
                  ${item.name == currentColumn ? "" : "hidden"}`}
									>
										<motion.div
											className={`h-1 w-10 bg-accent`}
											initial={{ width: "10px" }}
											whileInView={{ width: "100%" }}
										/>
									</span>
								</h2>
								<span
									className={`md:hidden mt-3 ${
										item.name == currentColumn ? "block" : "hidden"
									}`}
								>
									<h3 className="grey font-light text-xl md:text-[32px]">
										{item.description && <PrismicRichText field={item.description} />}
									</h3>
								</span>
							</span>
						);
					})}
				</div>
				<div className="hidden md:block md:max-2xl ml-2/12">
					{slice.items.map((item) => {
						return (
							<span
								className={`${item.name == currentColumn ? "block" : "hidden"}`}
								key={`service-text-${item.name}`}
							>
								<h4 className="md:text-2xl accent font-medium mb-3 md:mb-7">
									{item.title}
								</h4>
								<h3 className="md:text-[32px] grey font-medium text-lg md:leading-normal">
									{item.description && <PrismicRichText field={item.description} />}
								</h3>
							</span>
						);
					})}
				</div>
			</div>
			<style jsx>{``}</style>
		</section>
	);
};

export default Services;
