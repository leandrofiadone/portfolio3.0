import React from "react";
import { Project } from "../typings";
import ProjectExperienceCard from "./ProjectExperienceCard";
import { useDragScroll } from "../hooks/useDragScroll";

type Props = {
	projects: Project[];
};

const ProjectExperience = ({ projects }: Props) => {
	const { scrollRef, isDragging, handlers } = useDragScroll();

	return (
		<div className="h-screen flex relative overflow-hidden flex-col max-w-full mx-auto px-4 md:px-6 pt-16 pb-8">
			{/* Title */}
			<div className="w-full text-center mb-6 flex-shrink-0">
				<h3 className="uppercase tracking-[0.3em] sm:tracking-[0.4em]
					text-[#61BAAD] text-xl md:text-2xl font-['Electrolize']">
					projects
				</h3>
				<p className="mt-2 text-gray-500/80 text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] font-['Electrolize']">
					{projects?.length} {projects?.length === 1 ? 'Project' : 'Projects'}
				</p>
			</div>

			{/* Projects Container - centered in remaining space */}
			<div className="flex-1 flex flex-col items-center justify-center min-h-0">
				<div className="relative w-full max-w-[95vw] md:max-w-[92vw] xl:max-w-[96vw] 2xl:max-w-[94vw]">
				{/* Gradient Fade - subtle on mobile, stronger on desktop */}
				<div className="hidden sm:block absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-24 xl:w-32 z-10 pointer-events-none
					bg-gradient-to-r from-[rgb(31,41,55)] via-[rgb(31,41,55)]/40 to-transparent" />
				<div className="hidden sm:block absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-24 xl:w-32 z-10 pointer-events-none
					bg-gradient-to-l from-[rgb(31,41,55)] via-[rgb(31,41,55)]/40 to-transparent" />

				{/* Scrollable Area - Optimized for 1920x1080 */}
				<div
					ref={scrollRef}
					{...handlers}
					className="flex gap-5 md:gap-6 xl:gap-8 overflow-x-auto
						px-8 md:px-12 xl:px-16 py-6
						scroll-smooth snap-x snap-mandatory
						scrollbar-thin scrollbar-track-gray-800/30 scrollbar-thumb-[#61BAAD]/40
						hover:scrollbar-thumb-[#61BAAD]/60
						select-none">
					{projects?.map((project) => (
						<ProjectExperienceCard
							key={project._id}
							project={project}
							isDragging={isDragging}
						/>
					))}
				</div>
			</div>

				{/* Drag Hint */}
				<div className="mt-3 flex items-center justify-center gap-2 text-gray-500/40 text-xs font-['Electrolize'] uppercase tracking-wider">
					<svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H20M20 7L16 3M20 7L16 11M16 17H4M4 17L8 13M4 17L8 21" />
					</svg>
					<span>Drag to explore</span>
				</div>
			</div>
		</div>
	);
};

export default ProjectExperience;
