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
				src={urlFor(project?.projectImage).url()}
				alt="BarberApp"
			/>

			<div className="px-0 md:px-10">
				<a href={project?.nameLink}>
					<h4 className="text-4xl font-light cursor-pointer">
						{project?.projectTitle}🔗
					</h4>
				</a>
				<p className="font-bold text-2xl mt-1">Front-End Design</p>
				<div className="flex space-x2 my-2">
					{project.techUsed.map((tech) => (
						<img
							key={tech._id}
							className="h-10 w-10 rounded-full"
							src={urlFor(tech?.image).url()}
						/>
					))}
				</div>
				<p className="uppercase py-5 text-gray-300">{project?.dateTime}</p>
				<div className="list-disc space-y-4 ml-5 text-lg">
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
