import React, { useState, useEffect } from "react";

const Clock = (props: any) => {
	const { styling, color } = props;
	const bstOffset = 1;

	const getTime = (offset = 0) => {
		const date = new Date();
		return [
			parseTime(date.getUTCHours() + offset),
			parseTime(date.getUTCMinutes()),
		].join(":");
	};

	const parseTime = (num: any) => {
		return num.toString().padStart(2, "0");
	};

	const [gmt, setGmt] = useState(getTime());
	const [bst, setBst] = useState(getTime(bstOffset));

	useEffect(() => {
		const id = setInterval(() => {
			setGmt(getTime());
			setBst(getTime(bstOffset));
		}, 1000 * 3);
		return () => clearInterval(id);
	}, [gmt, bst]);
	
	return (
		<>
			<div
				className={`mx-auto text-xs md:text-base font-medium ${styling}`}
				style={{ color: color }}
			>
				<span className="">{gmt} (GMT)</span>
				<br />
				<span className="">{bst} (BST)</span>
			</div>
			<style jsx>{`
				.border-b-3 {
					border-bottom-width: 3px;
				}
			`}</style>
		</>
	);
};

export default Clock;
