import { spawn } from "child_process";
import React from "react";

type RatingPropsType = {
	value: number; // 0 | 1 | 2 | 3 | 4 | 5
};

function Rating(props: RatingPropsType) {
	console.log("Rating rendering");
	// debugger;
	if (props.value === 1) {
		return (
			<div>
				<Star selected={true} />
				<Star selected={false} />
				<Star selected={false} />
				<Star selected={false} />
				<Star selected={false} />
			</div>
		);
	}
	if (props.value === 2) {
		return (
			<div>
				<Star selected={true} />
				<Star selected={true} />
				<Star selected={false} />
				<Star selected={false} />
				<Star selected={false} />
			</div>
		);
	}
	if (props.value === 3) {
		return (
			<div>
				<Star selected={true} />
				<Star selected={true} />
				<Star selected={true} />
				<Star selected={false} />
				<Star selected={false} />
			</div>
		);
	}
	if (props.value === 4) {
		return (
			<div>
				<Star selected={true} />
				<Star selected={true} />
				<Star selected={true} />
				<Star selected={true} />
				<Star selected={false} />
			</div>
		);
	}
	if (props.value === 5) {
		return (
			<div>
				<Star selected={true} />
				<Star selected={true} />
				<Star selected={true} />
				<Star selected={true} />
				<Star selected={true} />
			</div>
		);
	}
	//=============== else !!! *********** ================
	return (
		<div>
			<Star selected={false} />
			<Star selected={false} />
			<Star selected={false} />
			<Star selected={false} />
			<Star selected={false} />
		</div>
	);
}

type StarPropsType = {
	selected: boolean;
};
function Star(props: StarPropsType) {
	// console.log("Star rendering");

	if (props.selected === true) {
		return (
			<span>
				<b>s*t*a*r***</b>
			</span>
		);
	} else {
		return <span>-- star --</span>;
	}
}

export default Rating;
