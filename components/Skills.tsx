import React, { useState } from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import SkillsBackground3D from "./SkillsBackground3D";
import { Skill as SkillType } from "../typings";

type Props = {
	skills: SkillType[];
};

const softSkills = [
	{
		title: "Systems Thinking",
		description: "Connecting abstract concepts with practical applications",
		detail: "I see patterns across domains—philosophy, code, recovery. Where others see isolated elements, I find connections that create holistic solutions.",
		color: "#61BAAD",
		emoji: "🧠"
	},
	{
		title: "Rapid Adaptation",
		description: "Learning new technologies on demand",
		detail: "Full-stack, cybersecurity, complex migrations—I absorb what's needed and apply it effectively. Resourcefulness over rigid knowledge.",
		color: "#3B82F6",
		emoji: "⚡"
	},
	{
		title: "Meta-Cognition",
		description: "Observing my own mental processes",
		detail: "I catch perfectionism before it becomes procrastination. I distinguish genuine preparation from avoidance. Self-awareness as a debugging tool.",
		color: "#F59E0B",
		emoji: "🔍"
	},
	{
		title: "Authentic Communication",
		description: "Moving between technical and human contexts",
		detail: "I can translate between code, philosophy, emotion, and strategy. No corporate speak—just clear, genuine communication.",
		color: "#10B981",
		emoji: "💬"
	},
	{
		title: "Resilient Execution",
		description: "Delivering under pressure",
		detail: "I've shipped complex features while navigating personal challenges. Operational resilience means keeping commitments even when burned out.",
		color: "#8B5CF6",
		emoji: "💪"
	},
	{
		title: "Values-Based Priority",
		description: "Clarity in what matters",
		detail: "My primary commitment is the work I've taken on. Everything else is secondary. This isn't ruthlessness—it's strategic clarity.",
		color: "#EC4899",
		emoji: "🎯"
	},
];

const Skills = ({ skills }: Props) => {
	const [activeSoftSkill, setActiveSoftSkill] = useState(0);

	return (
		<div className="relative overflow-hidden">
			{/* 3D Background */}
			<SkillsBackground3D />

			<motion.div
				className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-7xl 2xl:max-w-[1400px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center py-8 sm:py-16"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
			>
				{/* Main Title - Hidden on mobile */}
				<h3 className="hidden sm:block absolute top-8 sm:top-16 uppercase tracking-[0.2em] sm:tracking-[0.4em] text-[#61BAAD] text-base sm:text-2xl font-['Electrolize']">
					Skills
				</h3>

				{/* Subtitle */}
				<h3 className="absolute top-20 sm:top-28 pt-1 uppercase tracking-[0.1em] sm:tracking-[0.2em] text-gray-400 text-[9px] sm:text-sm font-['Electrolize']">
					Technical & Professional Competencies
				</h3>

				{/* Technical Skills Grid */}
				<div className="relative w-full pt-14 sm:pt-36 lg:pt-40 px-3 sm:px-6">
					{/* Center glow effect */}
					<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
						<div className="w-48 h-48 sm:w-64 sm:h-64 bg-[#61BAAD]/10 rounded-full blur-3xl" />
					</div>

					{/* Skills Grid - Smaller on mobile */}
					<div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-2 sm:gap-3 md:gap-4 xl:gap-5 relative z-10 max-w-4xl mx-auto">
						{skills?.map((skill, index) => (
							<motion.div
								key={skill._id}
								initial={{ opacity: 0, scale: 0.5, y: 50 }}
								whileInView={{ opacity: 1, scale: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.5,
									delay: index * 0.03,
									type: "spring",
									stiffness: 100
								}}
								whileHover={{
									scale: 1.1,
									zIndex: 10,
									transition: { duration: 0.2 }
								}}
							>
								<Skill skill={skill} />
							</motion.div>
						))}
					</div>

					{/* Soft Skills Section */}
					<motion.div
						className="mt-3 sm:mt-6 space-y-1 sm:space-y-3 mb-2"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.6 }}
					>
						{/* Section Header */}
						<div className="text-center mb-1 sm:mb-3">
							<h4 className="text-[10px] sm:text-sm text-gray-400 font-['Electrolize'] tracking-wider uppercase mb-0.5 sm:mb-1">
								Professional Competencies
							</h4>
							<div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent via-[#61BAAD] to-transparent mx-auto" />
						</div>

						{/* Soft Skills Grid - Compact Cards */}
						<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-1.5 sm:gap-3 max-w-5xl mx-auto">
							{softSkills.map((softSkill, index) => (
								<motion.div
									key={softSkill.title}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
									whileHover={{ scale: 1.02 }}
									onClick={() => setActiveSoftSkill(index)}
									className="group cursor-pointer h-full"
								>
									<div
										className="bg-[#1a2332]/50 backdrop-blur-sm rounded-md sm:rounded-lg p-1.5 sm:p-3 transition-all duration-300 h-full flex flex-col"
										style={{
											borderWidth: '1px',
											borderStyle: 'solid',
											borderColor: activeSoftSkill === index ? '#61BAAD' : '#374151',
											boxShadow: activeSoftSkill === index ? '0 0 15px rgba(97, 186, 173, 0.2)' : 'none'
										}}
									>
										{/* Title with Emoji */}
										<div className="flex items-center gap-1 sm:gap-2 mb-0.5 sm:mb-1">
											<span className="text-xs sm:text-base opacity-60">{softSkill.emoji}</span>
											<h5
												className="text-[9px] sm:text-sm font-bold font-['Electrolize'] tracking-wide"
												style={{ color: activeSoftSkill === index ? '#61BAAD' : '#9CA3AF' }}
											>
												{softSkill.title}
											</h5>
										</div>

										{/* Description */}
										<p className="text-[8px] sm:text-xs text-gray-400 leading-relaxed mb-0.5 sm:mb-1">
											{softSkill.description}
										</p>

										{/* Detail - Shows on active - with fixed min height */}
										<div className="min-h-[20px] sm:min-h-[30px]">
											{activeSoftSkill === index && (
												<motion.p
													initial={{ opacity: 0 }}
													animate={{ opacity: 1 }}
													exit={{ opacity: 0 }}
													transition={{ duration: 0.3 }}
													className="text-[7px] sm:text-[10px] text-gray-500 italic leading-relaxed border-t border-[#61BAAD]/30 pt-1 sm:pt-1.5"
												>
													{softSkill.detail}
												</motion.p>
											)}
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
};

export default Skills;
