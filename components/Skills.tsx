import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";

type Props = {
	skills: SkillType[];
};

const Skills = ({ skills }: Props) => {
	return (
		<motion.div className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl-space-y-0 mx-auto items-center">
			<h3 className="absolute top-24 uppercase tracking-[20px] text-[#61BAAD] md:text-2xl font-['Electrolize']">
				Skills
			</h3>
			<h3 className="absolute top-32 pt-1  uppercase md:tracking-[4px] tracking-[3px] text-gray-500 text-sm font-['Electrolize'] ">
				Hover over a skill for currency proficiency
			</h3>

			<div className="grid sm:grid-cols-5 grid-cols-4 gap-5 xl:pt-20 lg:pt-32 p-14">
				{skills?.map((skill) => (
					<Skill key={skill._id} skill={skill} />
				))}
			</div>
		</motion.div>
	);
};

export default Skills;
