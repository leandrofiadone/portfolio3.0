import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import { Project } from "../typings";
import { urlFor } from "../sanity";

const MotionDiv = motion.div;

type Props = {
	project: Project;
	isDragging?: boolean;
};

const ProjectExperienceCard = ({ project, isDragging }: Props) => {
	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		if (isDragging) {
			e.preventDefault();
			e.stopPropagation();
		}
	};

	return (
		<article
			className="group flex flex-col
				w-[280px] sm:w-[340px] md:w-[400px] lg:w-[440px] xl:w-[480px] 2xl:w-[540px]
				h-[380px] sm:h-[440px] md:h-[460px] lg:h-[470px] xl:h-[465px] 2xl:h-[490px]
				flex-shrink-0
				snap-center
				bg-[#1a1a1a]
				border border-gray-800/60
				rounded-lg
				overflow-hidden
				transition-all duration-300 ease-out
				hover:border-[#61BAAD]/40
				hover:translate-y-[-4px]
				shadow-[0_4px_16px_rgba(0,0,0,0.3)]
				hover:shadow-[0_12px_32px_rgba(0,0,0,0.5)]">

			{/* Project Image */}
			<a
				href={project?.nameLink}
				rel="noopener noreferrer"
				target="_blank"
				onClick={handleClick}
				className="w-full h-[140px] sm:h-[190px] md:h-[200px] lg:h-[205px] xl:h-[205px] 2xl:h-[215px] group/image relative block flex-shrink-0 overflow-hidden"
			>
				<MotionDiv
					initial={{ y: -50, opacity: 0 }}
					transition={{ duration: 0.8 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="relative w-full h-full"
				>
					<Image
						src={urlFor(project?.projectImage).width(600).height(300).fit("crop").crop("top").url()}
						alt={project?.projectTitle || "Project"}
						layout="fill"
						objectFit="cover"
						className="group-hover/image:scale-105 transition-all duration-700 ease-out
							group-hover/image:brightness-110"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent
						opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
				</MotionDiv>
			</a>

			{/* Project Info - fixed height to match card */}
			<div className="w-full h-[240px] sm:h-[250px] md:h-[260px] lg:h-[265px] xl:h-[260px] 2xl:h-[275px] flex flex-col px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3">
				{/* Title & Date */}
				<div className="space-y-0.5 sm:space-y-1 flex-shrink-0">
					<a
						href={project?.nameLink}
						rel="noopener noreferrer"
						target="_blank"
						onClick={handleClick}
						className="group/title block"
					>
						<h4 className="text-base sm:text-lg md:text-xl font-bold font-['Electrolize']
							text-white/90 group-hover/title:text-white
							transition-all duration-300 flex items-center gap-1.5 sm:gap-2 leading-tight line-clamp-1">
							{project?.projectTitle}
							<svg
								className="w-4 h-4 opacity-40 group-hover/title:opacity-100 group-hover/title:translate-x-1 group-hover/title:text-cyan-400 transition-all duration-300 flex-shrink-0"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
							</svg>
						</h4>
					</a>
					<p className="text-xs text-gray-500 font-['Electrolize'] tracking-wider uppercase">
						{project?.dateTime}
					</p>
				</div>

				{/* Summary - takes remaining space with fade effect */}
				<div className="relative flex-1 min-h-0 mt-1.5 sm:mt-2">
					<div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent pr-1">
						<p className="text-xs sm:text-sm text-gray-400/90 leading-relaxed pb-4">
							{project?.summary}
						</p>
					</div>
					{/* Fade gradient at bottom */}
					<div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[#1a1a1a] to-transparent pointer-events-none" />
				</div>

				{/* Bottom Section - Always at bottom */}
				<div className="flex-shrink-0 space-y-1 sm:space-y-1.5 md:space-y-2 pt-2 sm:pt-2.5 border-t border-gray-800/50">
					{/* Tech Stack */}
					<div className="space-y-1 sm:space-y-1.5 md:space-y-2">
						<p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider font-['Electrolize']">Technologies</p>
						<div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
							{project.techUsed.slice(0, 3).map((tech, index) => (
								<div key={tech._id} className={`group/tech ${index >= 3 ? 'hidden sm:block' : ''}`}>
									<div className="flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md
										bg-gray-800/50 border border-gray-700/50
										hover:border-[#61BAAD]/40 hover:bg-gray-800
										transition-all duration-300
										hover:shadow-[0_0_8px_rgba(97,186,173,0.2)]">
										<Image
											src={urlFor(tech?.image).url()}
											alt={tech?.title || "Technology"}
											width={14}
											height={14}
											className="object-contain opacity-80 group-hover/tech:opacity-100
												transition-opacity duration-300 flex-shrink-0 sm:w-4 sm:h-4"
										/>
										<span className="text-[10px] sm:text-xs text-gray-400 group-hover/tech:text-gray-200
											transition-colors duration-300 font-medium">
											{tech?.title}
										</span>
									</div>
								</div>
							))}
							{project.techUsed.length > 3 && (
								<span className="text-[10px] sm:text-xs text-gray-500 font-medium">+{project.techUsed.length - 3}</span>
							)}
						</div>
					</div>

					{/* Action Buttons */}
					<div className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 pt-1 sm:pt-1.5 md:pt-2 border-t border-white/5">
					<a
						href={project?.nameLink}
						rel="noopener noreferrer"
						target="_blank"
						onClick={handleClick}
						className="flex-1 group/btn px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg
							bg-[#61BAAD]/10 hover:bg-[#61BAAD]/20
							border border-[#61BAAD]/30 hover:border-[#61BAAD]/60
							text-white/80 hover:text-white
							font-['Electrolize'] uppercase text-[10px] sm:text-xs tracking-wider
							transition-all duration-300 ease-out
							hover:shadow-[0_0_15px_rgba(97,186,173,0.3)]
							text-center"
					>
						<span className="flex items-center justify-center gap-1 sm:gap-1.5">
							View Live
							<svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover/btn:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
							</svg>
						</span>
					</a>
					<a
						href={project?.gitHubUrl}
						rel="noopener noreferrer"
						target="_blank"
						className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg
							bg-gray-800/50 hover:bg-gray-800
							border border-gray-700/50 hover:border-gray-600
							transition-all duration-300
							hover:scale-105"
						aria-label="View GitHub repository"
					>
						<svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/60 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
							<path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
						</svg>
					</a>
				</div>
				</div>
			</div>
		</article>
	)
};

export default ProjectExperienceCard;
