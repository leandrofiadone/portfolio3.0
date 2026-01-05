import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";

type Props = {
	skills: SkillType[];
};

const Skills = ({ skills }: Props) => {
	return (
		<div className="relative bg-gradient-to-r from-gray-700 via-gray-900 to-black overflow-hidden">
			{/* Decorative angled divider */}
			<div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-cyan-900 to-transparent transform -skew-y-2 origin-top-left -translate-y-12" />

			<motion.div
				className="min-h-screen flex relative flex-col text-center
			md:text-left xl:flex-row max-w-7xl 2xl:max-w-[1400px] xl:px-10 justify-center xl-space-y-0 mx-auto items-center py-20">
				<h3 className="absolute top-20 sm:top-24 uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[#61BAAD] text-xl sm:text-2xl font-['Electrolize']">
					Skills
				</h3>
				<h3 className="absolute top-32 sm:top-36 pt-1 uppercase tracking-[0.15em] sm:tracking-[0.2em] text-gray-300 text-xs sm:text-sm font-['Electrolize']">
					Hover over a skill for current proficiency
				</h3>

				<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-4 sm:gap-5 xl:gap-6 2xl:gap-8 xl:pt-20 lg:pt-32 p-8 sm:p-14">
					{skills?.map((skill) => (
						<Skill key={skill._id} skill={skill} />
					))}
				</div>
			</motion.div>
		</div>
	);
};

export default Skills;
