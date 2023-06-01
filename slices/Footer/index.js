import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import Link from "next/link";

/**
 * @typedef {import("@prismicio/client").Content.FooterSlice} FooterSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FooterSlice>} FooterProps
 * @param { FooterProps }
 */
const Footer = ({ slice }) => {
	return (
		<section className="text-center  bg-neutral-800 pb-20 pt-24 md:py-32">
			<div className="container block">
				<div className="mx-auto text-center mb-5">
					<Link href="/" className="hover:opacity-80 inline-block">
						<Image
							src={slice.primary?.logo?.url}
							alt={slice.primary?.logo?.alt || "Hér&Nú"}
							width={150}
							height={slice.primary?.logo?.dimensions?.height}
							className="mx-auto"
						/>
					</Link>
				</div>
				<div className="grey text-[28px] leading-[160%] md:text-[48px] font-semibold py-5 md:py-5 md:leading-tight">
					<PrismicRichText field={slice.primary?.location} />
				</div>
				<div className="block md:flex grey text-[28px] leading-[160%] md:text-5xl font-semibold py-5 md:py-5 md:leading-normal accent">
					<Link
						className="mr-4 block md:flex ml-auto hover:opacity-80"
						href={`mailto:${slice.primary?.email}`}
					>
						{slice.primary?.email}
						<span className="grey hidden md:block">,</span>
					</Link>
					<Link
						className="mr-auto hover:opacity-80"
						href={`tel:${slice.primary?.phone}`}
					>
						{slice.primary?.phone}
					</Link>
				</div>
				<div className="flex flex-wrap justify-center">
					{slice.items.map((item, idx) => {
						return (
							<div key={`${idx}-${item.link_text}`}>
								<h2 className="text-2xl md:text-5xl">
									<a
										className="grey py-5 underline decoration-hn-lime decoration-2 underline-offset-8 mx-5 hover:opacity-80"
										target="_blank"
										href={item?.link?.url}
									>
										{item.link_text}
									</a>
								</h2>
							</div>
						);
					})}
				</div>
			</div>
			<style jsx>{``}</style>
		</section>
	);
};

export default Footer;
