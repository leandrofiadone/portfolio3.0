import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
	project: Project;
};

const ProjectExperienceCard = ({ project }: Props) => {
	return (
		<article
			className="flex flex-col rounded-lg mt-20 items-center sm:space-y-4 space-y-1 flex-shrink-0
        w-[240px] md:w-[400px] lg:w-[550px] xl:w-[600px] snap-center bg-[#292929] 
		sm:p-6 p-3 hover:opacity-100 opacity-40  transition-opacity duration-200">
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
				className="w-96 lg:w-[300px] xl:w-[500px]"
				src={urlFor(project?.projectImage).url()}
				alt="BarberApp"
			/>

			<div className="px-0 md:px-10">
				<a href={project?.nameLink}>
					<h4 className="xl:text-2xl lg:text-xl md:text-lg  font-light cursor-pointer">
						{project?.projectTitle}🔗
					</h4>
				</a>
				<p className="font-bold xl:text-lg md:text-base  text-sm mt-1">
					Front-End Design
				</p>
				<div className="flex space-x2 my-2">
					{project.techUsed.map((tech) => (
						<img
							key={tech._id}
							className=" xl:w-8 md:w-6  w-5 rounded-full"
							src={urlFor(tech?.image).url()}
						/>
					))}
				</div>
				<p className="uppercase py-3 xl:text-base text-xs text-gray-300">
					{project?.dateTime}
				</p>
				<div className="list-disc space-y-4 sm:ml-3 sm:text-sm text-xs">
					<p>{project?.summary}</p>
				</div>
				<SocialIcon
					url={project?.gitHubUrl}
					fgColor="gray"
					bgColor="transparent"
				/>
			</div>
		</article>
	);
};

export default ProjectExperienceCard;
