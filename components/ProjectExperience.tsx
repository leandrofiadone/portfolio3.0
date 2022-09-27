import React from "react";
import ProjectExperienceCard from "./ProjectExperienceCard";

type Props = {};

const ProjectExperience = (props: Props) => {
	return (
		<div className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				projects
			</h3>
			<div>
				<ProjectExperienceCard />
				{/* <ProjectExperienceCard />
				<ProjectExperienceCard />
				<ProjectExperienceCard /> */}
			</div>
		</div>
	);
};

export default ProjectExperience;
