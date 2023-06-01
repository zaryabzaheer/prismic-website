import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import HeaderNav from "./header-nav";
import Clock from "./clock";
import Router from "next/router";
import { PrismicLink } from "@prismicio/react";
import { linkResolver } from "../prismicio";
import Lottie from "react-lottie";

const Header = (props) => {
	let { page, layout, navigationdata, updateOverflow, altLangs } = props;
	const [navOpen, setNavOpen] = useState(false);
	const [isStopped, setIsStopped] = useState(false);
	const [isPaused, setIsPaused] = useState(false);
	if (!altLangs) altLangs = [];

	const light = !page?.navigation || page?.navigation == "Light";

	const logo_lottie = page?.lottie_logo_overwrite ? page.lottie_logo_overwrite :
		(light && layout?.dark_logo_lottie ? layout?.dark_lottie_logo : layout?.logo_lottie)

	const logo = page?.logo_overwrite?.url ? page?.logo_overwrite :
		(!light && layout?.dark_logo?.url ? layout?.dark_logo : layout?.logo)

	const text_color = page?.header_text_color ? page?.header_text_color :
		(!light ? layout?.dark_elements_color : layout?.elements_color);

	const toggleNav = () => {
		setNavOpen(!navOpen);
		updateOverflow(navOpen);
	};

	const closeNav = () => {
		setNavOpen(false);
		updateOverflow(true);
	};

	Router.events.on("routeChangeStart", closeNav);
	Router.events.on("routeChangeComplete", closeNav);
	Router.events.on("routeChangeError", closeNav);

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: logo_lottie ? JSON.parse(logo_lottie) : "",
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<>
			<div
				className={`pt-6 md:pt-12 absolute z-[2] top-0 w-full origin-center duration-300 ease-out transition-all
      ${navOpen ? "min-h-screen h-screen bg-dark-grey md:bg-nav-open" : ""}`}
			>
				<div className="container flex flex-row items-center">
					<div className="w-7/12 md:w-2/12">
						<Link href="/" className="hover:opacity-80">
							{logo_lottie ? (
								<Lottie
									options={defaultOptions}
									height={"auto"}
									width={190}
									isStopped={isStopped}
									isPaused={isPaused}
								/>
							) : (
								<Image
									src={logo?.url || ""}
									alt={logo?.alt ? logo?.alt : "Hér&Nú"}
									width={190}
									height={logo?.dimensions?.height}
								/>
							)}
						</Link>
					</div>
					<Clock
						styling={`hidden md:block w-8/12 text-center mx-auto
            ${text_color ? `` : "beige"}`}
						color={navOpen ? layout?.elements_color : text_color}
					/>
					<div className="w-3/12 md:hidden"></div>
					<div className="hidden md:flex w-1/12 text-white text-sm md:text-base font-medium">
						{altLangs.map((lang) => (
							<span key={lang.lang} className="ml-auto">
								<PrismicLink href={linkResolver(lang)} locale={lang.lang}>
									<span className="uppercase">{lang.lang}</span>
								</PrismicLink>
							</span>
						))}
					</div>
					<div
						className="w-4/12 md:w-1/12 block cursor-pointer hover:opacity-80"
						onClick={() => toggleNav()}
					>
						<span
							className={`w-8 md:w-10 ml-auto md:ml-20 border-solid border-b md:border-b-4 border-bottom
		            block origin-center duration-300 ease-out transition-transform
		            ${text_color ? `` : "border-beige"}
		            ${navOpen ? "transform-6-45 mb-[11px] md:mb-[9px]" : "mb-2"}`}
							style={{ borderColor: navOpen ? layout?.elements_color : text_color }}
						></span>

						<span
							className={`w-8 md:w-10 ml-auto md:ml-20 border-solid border-b md:border-b-4 border-bottom
		            block origin-center duration-300 ease-out transition-transform
		            ${text_color ? `` : "border-beige"}
		            ${navOpen ? "-transform-6-45" : ""}`}
							style={{ borderColor: navOpen ? layout?.elements_color : text_color }}
						></span>
					</div>
				</div>
				<div className="container mt-5 md:mt-10 grey">
					<Clock styling={`md:hidden ${navOpen ? "" : "hidden"}`} />
				</div>
				<HeaderNav navOpen={navOpen} data={navigationdata} />
			</div>
			<style jsx>{`
				.border-b-3 {
					border-bottom-width: 3px;
				}
				.transform-6-45 {
					transform: translateY(6px) rotate(45deg);
				}
				.-transform-6-45 {
					transform: translateY(-6px) rotate(-45deg);
				}
			`}</style>
		</>
	);
};

export default Header;
