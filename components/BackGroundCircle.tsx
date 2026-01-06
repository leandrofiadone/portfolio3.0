import { motion } from "framer-motion";
import React from "react";

type Props = {};

const BackGroundCircle = (props: Props) => {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			animate={{
				scale: [1, 2, 2, 3, 1],
				opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
				borderRadius: ["20%", "20%", "50%", "80%", "20%"],
			}}
			transition={{
				duration: 2.5,
			}}
			className="relative flex justify-center items-center z-[1]">
			<div className="absolute border border-[#333333] rounded-full h-[120px] w-[120px] sm:h-[200px] sm:w-[200px] mt-32 sm:mt-52 animate-ping" />
			<div className="absolute border border-[#333333] rounded-full h-[180px] w-[180px] sm:h-[300px] sm:w-[300px] mt-32 sm:mt-52 animate-ping" />
			<div className="absolute border border-[#333333] rounded-full h-[280px] w-[280px] sm:h-[500px] sm:w-[500px] mt-32 sm:mt-52 animate-ping" />
			<div className="absolute border border-[#F7AB0A] opacity-20 rounded-full h-[380px] w-[380px] sm:h-[650px] sm:w-[650px] mt-32 sm:mt-52 animate-pulse" />
			<div className="absolute border border-[#333333] opacity-20 rounded-full h-[480px] w-[480px] sm:h-[800px] sm:w-[800px] mt-32 sm:mt-52 animate-pulse" />
		</motion.div>
	);
};

export default BackGroundCircle;
