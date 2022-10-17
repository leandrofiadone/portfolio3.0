import React from "react";
import { Project } from "../typings";
import ProjectExperienceCard from "./ProjectExperienceCard";

type Props = {
	projects: Project[];
};

const ProjectExperience = ({ projects }: Props) => {
	return (
		<div
			className="h-screen flex relative overflow-hidden 
		flex-col text-lft md:flex-row max-w-full  
		justify-evenly mx-auto items-center">
			<h3
				className="absolute sm:top-20 top-14 uppercase 
			sm:tracking-[20px] tracking-[10px] text-gray-500 xl:text-2xl md:text-lg  text-sm">
				projects
			</h3>

			<div
				className="w-full xl:mt-5 sm:mt-20 flex space-x-5 overflow-x-scroll 
			scroll-smooth hover:scroll-auto p-10 snap-x snap-mandatory
			scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 z-10">
				{projects?.map((project) => (
					<ProjectExperienceCard key={project._id} project={project} />
				))}

				{/* <ProjectExperienceCard />
				<ProjectExperienceCard />
				<ProjectExperienceCard /> */}
			</div>
		</div>
	);
};

export default ProjectExperience;
