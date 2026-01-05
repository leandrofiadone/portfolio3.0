import React, { useState, useEffect } from "react";
import Link from "next/link";

const sections = [
	{ id: "hero", label: "Home" },
	{ id: "about", label: "About" },
	{ id: "projectexperience", label: "Projects" },
	{ id: "skills", label: "Skills" },
	{ id: "contact", label: "Contact" },
];

export default function StickyNav() {
	const [isVisible, setIsVisible] = useState(false);
	const [activeSection, setActiveSection] = useState("hero");

	useEffect(() => {
		const scrollContainer = document.getElementById('scroll-container');
		if (!scrollContainer) return;

		const handleScroll = () => {
			// Show navbar when scrolled down (not at the very top)
			setIsVisible(scrollContainer.scrollTop > 200);

			// Detect active section using closest to viewport center
			const viewportCenter = window.innerHeight / 2;
			let closestSection = "hero";
			let closestDistance = Infinity;

			for (const section of sections) {
				const element = document.getElementById(section.id);
				if (element) {
					const rect = element.getBoundingClientRect();
					const elementCenter = rect.top + rect.height / 2;
					const distance = Math.abs(elementCenter - viewportCenter);

					if (distance < closestDistance) {
						closestDistance = distance;
						closestSection = section.id;
					}
				}
			}

			setActiveSection(closestSection);
		};

		scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();

		return () => scrollContainer.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-500 ease-in-out ${
				isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
			}`}
		>
			<div className="bg-gray-900/95 backdrop-blur-md border-b border-white/10 shadow-lg">
				<div className="max-w-7xl mx-auto px-6 py-3">
					<div className="flex items-center justify-between">
						{/* Logo/Name */}
						<Link href="#hero">
							<span className="text-xl font-bold font-['Electrolize'] text-white hover:text-[#F7AB0A] transition-colors cursor-pointer">
								LF
							</span>
						</Link>

						{/* Navigation Links */}
						<div className="flex items-center gap-8">
							{sections.map((section) => (
								<Link key={section.id} href={`#${section.id}`}>
									<span
										className={`text-sm font-['Electrolize'] uppercase tracking-wider transition-all duration-300 cursor-pointer
											${
												activeSection === section.id
													? "text-[#61BAAD] font-semibold"
													: "text-gray-400 hover:text-white"
											}`}
									>
										{section.label}
									</span>
								</Link>
							))}
						</div>

						{/* CTA Button */}
						<a
							href="LeandroFiadone-FrontEnd-CV.pdf"
							download="LeandroFiadone-FrontEnd-CV.pdf"
							className="px-4 py-2 rounded-md bg-[#F7AB0A] hover:bg-[#d19108] text-black font-['Electrolize'] text-xs uppercase tracking-wider font-semibold transition-all duration-300 hover:scale-105"
						>
							Download CV
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}
