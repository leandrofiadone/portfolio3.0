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
				className="absolute top-20 uppercase 
			tracking-[20px] text-gray-500 xl:text-2xl md:text-lg">
				projects
			</h3>

			<div
				className="w-full flex space-x-5 overflow-x-scroll 
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
