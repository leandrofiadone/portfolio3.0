import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

type Props = {};

const ProjectExperienceCard = (props: Props) => {
	return (
		<article
			className="flex flex-col rounded-lg  items-center space-y-7 flex-shrink-0
        w-[240px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40  transition-opacity duration-200">
			<motion.img
				initial={{
					y: -100,
					opacity: 0,
				}}
				transition={{
					duration: 1.2,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
				viewport={{ once: true }}
				className="w-96 xl:w-[600px]"
				src="/BarberApp.png"
				alt="BarberApp"
			/>
			<div className="px-0 md:px-10">
				<h4 className="text-4xl font-light cursor-pointer">BarberApp🔗</h4>
				<p className="font-bold text-2xl mt-1">Front-End Design</p>
				<div className="flex space-x2 my-2">
					<img className="h-10 w-10 rounded-full" src="/css.png" />
					{/* tech used */}
					{/* tech used */}
					{/* tech used */}
				</div>
				<p className="uppercase py-5 text-gray-300">June 2022</p>
				<div className="list-disc space-y-4 ml-5 text-lg">
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
						obcaecati, maxime labore qui libero ex cupiditate tempore, illo
						dolor cum quibusdam aperiam quis quo nemo delectus non. Tempora, qui
						adipisci.
					</p>
				</div>
				<SocialIcon
					url="https://github.com/leandrofiadone"
					fgColor="gray"
					bgColor="transparent"
				/>
			</div>
		</article>
	);
};

export default ProjectExperienceCard;
