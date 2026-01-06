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

// Generate Fibonacci spiral path
const generateSpiralPath = (scale: number = 1) => {
	const points: string[] = [];
	const goldenRatio = 1.618033988749895;
	const totalPoints = 1000;

	for (let i = 0; i < totalPoints; i++) {
		const angle = i * 0.08;
		const radius = Math.pow(goldenRatio, angle / (2 * Math.PI)) * 3 * scale;
		const x = radius * Math.cos(angle);
		const y = radius * Math.sin(angle);
		points.push(`${i === 0 ? 'M' : 'L'} ${x} ${y}`);
	}

	return points.join(' ');
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

	// Golden ratio spacing (φ = 1.618)
	// Base unit: 16px -> φ¹: 26px -> φ²: 42px -> φ³: 68px
	return (
    <div className="h-screen flex flex-col items-center justify-center text-center overflow-hidden">
		<BackGroundCircle />

		{/* Image with Fibonacci spiral centered behind it */}
		{/* mt-[42px] lg:mt-[68px] pushes image down, mb spacing to text */}
		<div className="relative flex items-center justify-center mt-[42px] lg:mt-[68px] mb-[26px] lg:mb-[42px]">
			{/* Fibonacci Spiral - centered on image, responsive sizing */}
			<svg
				className="absolute h-[280px] w-[280px] sm:h-[360px] sm:w-[360px] md:h-[450px] md:w-[450px] lg:h-[550px] lg:w-[550px] xl:h-[650px] xl:w-[650px] opacity-30 z-10"
				viewBox="-250 -250 500 500"
			>
				<path
					d={generateSpiralPath(1)}
					fill="none"
					stroke="#F7AB0A"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<g transform="rotate(180)">
					<path
						d={generateSpiralPath(0.95)}
						fill="none"
						stroke="#F7AB0A"
						strokeWidth="1"
						strokeLinecap="round"
						opacity={0.4}
					/>
				</g>
			</svg>

			<Image
				width={180}
				height={180}
				className="relative z-20 rounded-full mx-auto object-cover
					w-[140px] h-[140px] sm:w-40 sm:h-40 md:w-44 md:h-44 xl:w-48 xl:h-48"
				src={urlFor(pageInfo?.heroImage).url()}
				alt={`${pageInfo?.name} - ${pageInfo?.role}`}
				priority
			/>
		</div>

		{/* Role - visible on mobile only, hidden on lg+ */}
		{/* mb-[16px] sm:mb-[26px] = base and φ¹ spacing */}
		<h2 className="z-20 lg:hidden text-xs sm:text-sm uppercase text-gray-500 tracking-[0.2em] sm:tracking-[0.4em] font-['Electrolize'] mb-[16px] sm:mb-[26px]">
			{pageInfo?.role}
		</h2>

		{/* Typewriter text */}
		{/* mb-[26px] lg:mb-[42px] = φ¹ and φ² spacing */}
		<div className="z-20 mb-[26px] lg:mb-[42px]">
			<h1 className="text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold px-4 sm:px-10 font-['Electrolize'] min-h-[1.5rem] sm:min-h-[3rem] md:min-h-[3.5rem] lg:min-h-[4rem] flex items-center justify-center">
			<span className="mr-2 sm:mr-3">{text}</span>
			<Cursor cursorColor="#F7AB0A" />
			</h1>
		</div>

		{/* Navigation Buttons - 2x2 grid on mobile, row on larger screens */}
		<div className="z-20 w-[200px] sm:w-auto grid grid-cols-2 sm:flex sm:flex-row items-center justify-center gap-2 sm:gap-3">
			<Link href="#about" className="w-full sm:w-auto">
				<button className="group w-full sm:w-auto px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-md sm:rounded-lg
					bg-white/5 hover:bg-white/10
					border border-white/20 hover:border-[#61BAAD]/60
					text-white/80 hover:text-white
					font-['Electrolize'] uppercase text-[10px] sm:text-xs tracking-wider sm:tracking-widest
					transition-all duration-300 ease-out
					hover:shadow-[0_0_20px_rgba(97,186,173,0.3)]
					hover:scale-105"
					aria-label="Navigate to About section">
					about
				</button>
			</Link>

			<Link href="#projectexperience" className="w-full sm:w-auto">
				<button className="group w-full sm:w-auto px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-md sm:rounded-lg
					bg-white/5 hover:bg-white/10
					border border-white/20 hover:border-[#61BAAD]/60
					text-white/80 hover:text-white
					font-['Electrolize'] uppercase text-[10px] sm:text-xs tracking-wider sm:tracking-widest
					transition-all duration-300 ease-out
					hover:shadow-[0_0_20px_rgba(97,186,173,0.3)]
					hover:scale-105"
					aria-label="Navigate to Projects section">
					projects
				</button>
			</Link>

			<Link href="#skills" className="w-full sm:w-auto">
				<button className="group w-full sm:w-auto px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-md sm:rounded-lg
					bg-white/5 hover:bg-white/10
					border border-white/20 hover:border-[#61BAAD]/60
					text-white/80 hover:text-white
					font-['Electrolize'] uppercase text-[10px] sm:text-xs tracking-wider sm:tracking-widest
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
				<button className="group w-full sm:w-auto px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-md sm:rounded-lg
					bg-[#F7AB0A] hover:bg-[#d19108]
					border border-[#F7AB0A] hover:border-[#d19108]
					text-black font-bold
					font-['Electrolize'] uppercase text-[10px] sm:text-xs tracking-wider sm:tracking-widest
					transition-all duration-300 ease-out
					hover:shadow-[0_0_30px_rgba(247,171,10,0.5)]
					hover:scale-105
					inline-flex items-center justify-center gap-1 sm:gap-2">
					CV
					<svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
					</svg>
				</button>
			</a>
		</div>

		{/* Role - visible on desktop only, hidden on mobile */}
		{/* mt-[26px] lg:mt-[42px] = φ¹ and φ² spacing */}
		<div className="z-20 hidden lg:flex justify-center mt-[26px] lg:mt-[42px]">
			<h2 className="text-base xl:text-lg uppercase text-gray-500 tracking-[0.4em] xl:tracking-[0.5em] font-['Electrolize']">
				{pageInfo?.role}
			</h2>
		</div>
		</div>
	)
}

export default Hero;
