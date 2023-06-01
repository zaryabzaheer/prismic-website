import React, { useState, useEffect } from 'react';
import { PrismicRichText } from '@prismicio/react'
import Cookies from 'js-cookie';
import Link from "next/link";

const CookiePopup = (props : any) => {
    const { data } = props;
	const cookieName = `cookie_popup`;
	const [open, setOpen] = useState(false);
  	const expiration = 17;

	const closePopup = () => {
		setOpen(false);
		Cookies.set(cookieName, (true).toString(), { expires: expiration });
	};

	useEffect(()=>{
		const cookie = Cookies.get(cookieName);
		setOpen(cookie != 'true');
	},[]);

	return (
		<>
			<div>
				{open && (
					<div className="bg-zinc-800 text-white modal-box flex relative z-40 font-light" style={{ boxShadow: '0px 5px 20px #00000029' }}>
						<div>
							<div className="modal-content lg:m-auto p-6 pt-6">
								<h4 className="mb-2 text-lg">{data?.cookies_title}</h4>
								<div className="text-base md:text-base richtext-smaller">
                                    <PrismicRichText field={data?.cookies_description} />
                                </div>
								<div className="flex mt-5 w-full">
									<div className="px-7 py-2 bg-accent block text-dark-grey font-medium text-lg cursor-pointer hover:opacity-80" 
										onClick={() => closePopup()}>
										<p>{data?.cookies_button_text}</p>
									</div>
									{data?.cookies_link?.url && (
										<Link href={data?.cookies_link?.url} className="flex ml-auto hover:opacity-80" target="_blank">
											<div className="block font-medium text-lg ml-auto text-white flex">
												<p className="my-auto">{data?.cookies_link_text}</p>
												<span
													className="ml-3 h-full w-8 bg-right bg-right bg-no-repeat"
													style={{ backgroundImage: 'url(/images/arrow.svg)' }}>
												</span>
											</div>
										</Link>
									)}
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
			<style jsx>{`
			.modal-box {
				max-width: 400px;
				left: 2rem;
				bottom: 2rem;
				position: fixed;
			}
			.modal-content a {
				color: rgba(255,88,151,var(--tw-bg-opacity));
			}
			@media (max-width: 767px) {
				.modal-box {
					width: 100vw;
					bottom: 0;
					left: 0;
				}
			}
		`}</style>
		</>);
};

export default CookiePopup;
