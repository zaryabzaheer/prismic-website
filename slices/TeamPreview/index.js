import React, { useState } from "react";
import Link from "next/link";
import Modal from "react-modal";
import "animate.css";
import { useScroll, motion } from "framer-motion";

/**
 * @typedef {import("@prismicio/client").Content.TeamPreviewSlice} TeamPreviewSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TeamPreviewSlice>} TeamPreviewProps
 * @param { TeamPreviewProps }
 */
const customStyles = {
	content: {
		position: "absolute",
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		backgroundColor: "#2f2f2f",
		width: "100vw",
		height: "100vh",
		display: "flex",
		flexDirection: "column",
		padding: "-0px",
		zIndex: 3,
		border: 0,
		borderRadius: 0,
	},
	overlay: { zIndex: 3 },
};

const TeamPreview = ({ slice }) => {
	const [currentMember, setMember] = useState(
		`0-${slice.primary?.team?.data?.slices?.primary?.name}`
	);
	const [currentMemberDetails, setCurrentMemberDetails] = useState("");

	const [modalIsOpen, setIsOpen] = React.useState(false);

	const handleMemberClick = (member, idx) => {
		if (window.innerWidth <= 768) {
			openModal();
		}
		setMember(`${idx}-${member.primary?.name}`);
		setCurrentMemberDetails(member.primary);
	};
	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {}

	function closeModal() {
		setIsOpen(false);
		setCurrentMemberDetails("");
	}
	return (
		<section className="container pt-14 pb-20 md:py-32">
			<span className="flex space-between mb-10 md:mb-20">
				<span className="accent">
					{slice.primary.title && (
						<h3 className="text-2xl">{slice.primary.title}</h3>
					)}
				</span>
				<span className="ml-auto grey text-xs md:text-2xl">
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
			{currentMemberDetails != "" && (
				<motion.div
					className={``}
					initial={{ height: "0px" }}
					whileInView={{ height: "33rem" }}
					viewport={{ once: true }}
				>
					{slice.primary?.team?.data?.slices?.map((member, idx) => (
						<div
							className={`overflow-hidden transition-all 
                ${
																	`${idx}-${member?.primary?.name}` == currentMember
																		? "md:block"
																		: "hidden"
																}`}
							key={`image-${idx}-${member.primary?.name}`}
						>
							<div className="hidden md:flex grid grid-cols-2 divide-x-0 transition-all">
								<div className="">
									<div
										className="mb-10 hover:brightness-110 duration-100 bg-cover bg-center
                    w-6/12 lg:w-[428px] max-w-[428px] h-auto pb-[114%]"
										style={{
											backgroundImage: member?.primary?.image?.url
												? `url('${member.primary.image.url}')`
												: "",
										}}
									></div>
								</div>
								<div className="ml-1/12">
									<h2 className="accent mb-5">{member.primary.name}</h2>
									<h3 className="text-2xl grey">{member.primary.title}</h3>
									<h3 className="text-2xl grey mt-20">{member.primary.email}</h3>
								</div>
							</div>
						</div>
					))}
				</motion.div>
			)}
			<div className="flex flex-wrap z-[0] style={{outline:'none'}}">
				{slice.primary?.team?.data?.slices?.map((member, idx) => (
					<h3
						className={`relative cursor-pointer grey mr-2 md:text-2xl md:leading-[48px]
            ${
													`${idx}-${member?.primary?.name}` == currentMember ? "" : ""
												} inline pb-1`}
						onClick={() => handleMemberClick(member, idx)}
						key={`link-${idx}-${member.primary?.name}`}
					>
						<p className="relative z-[1]">
							{member?.primary?.name}
							{idx < slice.primary?.team?.data?.slices?.length - 1 && (
								<span className="accent">, </span>
							)}
						</p>
						<span
							className={`absolute bottom-2 md:bottom-4 w-full block pr-2 pl-0
                ${
																	`${idx}-${member?.primary?.name}` == currentMember
																		? ""
																		: "hidden"
																}`}
						>
							<motion.div
								className={`h-0.5 bg-accent`}
								initial={{ width: "0px" }}
								whileInView={{ width: "100%" }}
							/>
						</span>
					</h3>
				))}
				<div className="relative z-[3]">
					<Modal
						isOpen={modalIsOpen}
						onAfterOpen={afterOpenModal}
						onRequestClose={closeModal}
						style={customStyles}
						contentLabel="Example Modal"
					>
						<div
							className="bg-cover bg-center w-full h-[112vw] min-h-[112vw] z-[3] "
							style={{
								backgroundImage: currentMemberDetails?.image?.url
									? `url('${currentMemberDetails.image.url}')`
									: "",
							}}
						></div>
						<div className="container py-7">
							<h2 className="accent text-2xl font-bold tracking-wider pb-2">
								{currentMemberDetails.name}
							</h2>
							<h3 className="grey text-xl pb-10">{currentMemberDetails.title}</h3>
							<h3 className="grey text-2xl underline decoration-hn-lime decoration-1 underline-offset-4">
								{currentMemberDetails.email}
							</h3>
						</div>
						<div className="w-full flex flex-col absolute bottom-[7vh]">
							<div
								className="flex items-center justify-center rounded-full border border-accent mx-auto"
								style={{ width: "40px", height: "40px", padding: "8px" }}
							>
								<button
									onClick={closeModal}
									className="bg-transparent border-none text-lg font-hairline accent relative w-8 h-8"
									style={{ transform: "rotate(45deg)" }}
								>
									<span className="absolute w-6 h-0.5 bg-accent top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
									<span className="absolute w-6 h-0.5 bg-accent top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-90"></span>
								</button>
							</div>
						</div>
					</Modal>
				</div>
			</div>
			<style jsx>{`
				.react-modal__content {
					border: none;
				}
			`}</style>
		</section>
	);
};

export default TeamPreview;
