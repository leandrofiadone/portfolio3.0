import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
	skill: Skill;
	directionLeft?: boolean;
};

const Skill = ({ skill, directionLeft }: Props) => {
	return (
		<div className="group relative flex cursor-pointer">
			<motion.img
				src={urlFor(skill?.image).url()}
				className="rounded-full border border-gray-500 object-cover w-20 md:w-22 xl:w-24 filter group-hover:grayscale transition duration-300 ease-in-out"
			/>
			<div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white rounded-full w-20 md:w-22 xl:w-24  z-0">
				<div className="flex items-center justify-center h-full">
					<p className="md:text-3xl text-sm font-bold text-black opacity-100">
						{skill?.progress}%
					</p>
				</div>
			</div>
		</div>
	);
};

export default Skill;
