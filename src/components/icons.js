import React from "react";
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";

const Icon = ({ name }) => {
	switch (name) {
		case "circle":
			return <FaRegCircle className="icon"></FaRegCircle>;
			break;

		case "cross":
			return <FaTimes className="icon"></FaTimes>;
			break;

		default:
			return <FaPen className="icon"></FaPen>;
			break;
	}

	return (
		<>
			<div></div>
		</>
	);
};

export default Icon;
