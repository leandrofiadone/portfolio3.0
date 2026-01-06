import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import BackGroundCircle from "./BackGroundCircle";

type Props = {
	pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
	const defaultTexts = [
		`I´m <${pageInfo?.name}/> 💻`,
		"A Greek name ...✍️",
		"Originally ... <Λέανδρος/>",
		"Means Lion-Man 🦁",
	];

	const [text, count] = useTypewriter({
		words: pageInfo?.typewriterTexts && pageInfo.typewriterTexts.length > 0
			? pageInfo.typewriterTexts
			: defaultTexts,
		loop: true,
		delaySpeed: 1000,
		typeSpeed: 70,
		deleteSpeed: 50,
	});

	return (
    <div className="h-screen flex flex-col space-y-2 sm:space-y-6 items-center justify-center text-center overflow-hidden px-6 sm:px-0">
		<BackGroundCircle />

		<Image
			width={180}
			height={180}
			className="relative rounded-full mx-auto object-cover
				w-24 h-24 sm:w-40 sm:h-40 md:w-44 md:h-44 xl:w-48 xl:h-48"
			src={urlFor(pageInfo?.heroImage).url()}
			alt={`${pageInfo?.name} - ${pageInfo?.role}`}
			priority
		/>

		{/* Text content */}
		<div className="z-20">
			<h2 className="text-[10px] sm:text-sm md:text-base uppercase text-gray-500 pb-1 sm:pb-2 tracking-[0.2em] sm:tracking-[0.4em] font-['Electrolize']">
			{pageInfo?.role}
			</h2>
			<h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold px-2 sm:px-10 font-['Electrolize'] min-h-[2rem] sm:min-h-[3rem] md:min-h-[4rem] lg:min-h-[5rem] flex items-center justify-center">
			<span className="mr-2 sm:mr-3">{text}</span>
			<Cursor cursorColor="#F7AB0A" />
			</h1>
		</div>

		{/* Navigation Buttons - Separate container with fixed width */}
		<div className="z-20 w-full max-w-[260px] sm:max-w-none flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4">
			<Link href="#about" className="w-full sm:w-auto">
				<button className="group w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 rounded-lg
					bg-white/5 hover:bg-white/10
					border border-white/20 hover:border-[#61BAAD]/60
					text-white/80 hover:text-white
					font-['Electrolize'] uppercase text-xs sm:text-sm tracking-widest
					transition-all duration-300 ease-out
					hover:shadow-[0_0_20px_rgba(97,186,173,0.3)]
					hover:scale-105"
					aria-label="Navigate to About section">
					about
				</button>
			</Link>

			<Link href="#projectexperience" className="w-full sm:w-auto">
				<button className="group w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 rounded-lg
					bg-white/5 hover:bg-white/10
					border border-white/20 hover:border-[#61BAAD]/60
					text-white/80 hover:text-white
					font-['Electrolize'] uppercase text-xs sm:text-sm tracking-widest
					transition-all duration-300 ease-out
					hover:shadow-[0_0_20px_rgba(97,186,173,0.3)]
					hover:scale-105"
					aria-label="Navigate to Projects section">
					projects
				</button>
			</Link>

			<Link href="#skills" className="w-full sm:w-auto">
				<button className="group w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 rounded-lg
					bg-white/5 hover:bg-white/10
					border border-white/20 hover:border-[#61BAAD]/60
					text-white/80 hover:text-white
					font-['Electrolize'] uppercase text-xs sm:text-sm tracking-widest
					transition-all duration-300 ease-out
					hover:shadow-[0_0_20px_rgba(97,186,173,0.3)]
					hover:scale-105"
					aria-label="Navigate to Skills section">
					skills
				</button>
			</Link>

			{/* CV Download Button */}
			<a
				href="LeandroFiadone-FrontEnd-CV.pdf"
				download="LeandroFiadone-FrontEnd-CV.pdf"
				className="w-full sm:w-auto inline-flex">
				<button className="group w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 rounded-lg
					bg-[#F7AB0A] hover:bg-[#d19108]
					border border-[#F7AB0A] hover:border-[#d19108]
					text-black font-bold
					font-['Electrolize'] uppercase text-xs sm:text-sm tracking-widest
					transition-all duration-300 ease-out
					hover:shadow-[0_0_30px_rgba(247,171,10,0.5)]
					hover:scale-105
					inline-flex items-center justify-center gap-2">
					CV RESUME
					<svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
					</svg>
				</button>
			</a>
		</div>
		</div>
	)
}

export default Hero;
