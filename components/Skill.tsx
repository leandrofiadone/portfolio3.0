import React from "react";
import { motion } from "framer-motion";

type Props = {
	directionLeft?: boolean;
};

const Skill = (directionLeft: Props) => {
	return (
		<div className="group relative flex cursor-pointer">
			<motion.img
				src="/css.png"
				className="rounded-full border border-gray-500 object-cover w-24 md:w-28 xl:w-32 filter group-hover:grayscale transition duration-300 ease-in-out"
			/>
			<div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white rounded-full w-24  md:w-28  xl:w-32 xl:h-32 z-0">
				<div className="flex items-center justify-center h-full">
					<p className="md:text-3xl text-sm font-bold text-black opacity-100">
						100%
					</p>
				</div>
			</div>
		</div>
	);
};

export default Skill;
