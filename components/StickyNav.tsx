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
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const lastScrollTopRef = React.useRef(0);

	useEffect(() => {
		const scrollContainer = document.getElementById('scroll-container');
		if (!scrollContainer) return;

		const handleScroll = () => {
			const currentScrollTop = scrollContainer.scrollTop;

			// Show navbar when scrolled down (not at the very top)
			setIsVisible(currentScrollTop > 200);

			// Close mobile menu only if user actually scrolled (not just DOM change)
			if (Math.abs(currentScrollTop - lastScrollTopRef.current) > 5) {
				setMobileMenuOpen(false);
			}
			lastScrollTopRef.current = currentScrollTop;

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

		// Initialize without triggering menu close
		const currentScrollTop = scrollContainer.scrollTop;
		setIsVisible(currentScrollTop > 200);
		lastScrollTopRef.current = currentScrollTop;

		return () => scrollContainer.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-500 ease-in-out ${
				isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
			}`}
		>
			<div className="bg-gray-900/95 backdrop-blur-md border-b border-white/10 shadow-lg">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
					<div className="flex items-center justify-between">
						{/* Logo/Name */}
						<Link href="#hero">
							<span
								className="text-xl font-bold font-['Electrolize'] text-white hover:text-[#F7AB0A] transition-colors cursor-pointer"
								onClick={() => setMobileMenuOpen(false)}
							>
								LF
							</span>
						</Link>

						{/* Desktop Navigation Links */}
						<div className="hidden lg:flex items-center gap-6 xl:gap-8">
							{sections.map((section) => (
								<Link key={section.id} href={`#${section.id}`}>
									<span
										className={`text-xs xl:text-sm font-['Electrolize'] uppercase tracking-wider transition-all duration-300 cursor-pointer
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

						{/* Desktop CTA Button */}
						<a
							href="LeandroFiadone-FrontEnd-CV.pdf"
							download="LeandroFiadone-FrontEnd-CV.pdf"
							className="hidden lg:block px-3 xl:px-4 py-2 rounded-md bg-[#F7AB0A] hover:bg-[#d19108] text-black font-['Electrolize'] text-xs uppercase tracking-wider font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap"
						>
							Download CV
						</a>

						{/* Mobile Hamburger Button */}
						<button
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
							aria-label="Toggle menu"
						>
							<svg
								className="w-6 h-6"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								{mobileMenuOpen ? (
									<path d="M6 18L18 6M6 6l12 12" />
								) : (
									<path d="M4 6h16M4 12h16M4 18h16" />
								)}
							</svg>
						</button>
					</div>

					{/* Mobile Menu */}
					{mobileMenuOpen && (
						<div className="lg:hidden mt-4 pb-4 space-y-3">
							{sections.map((section) => (
								<Link key={section.id} href={`#${section.id}`}>
									<div
										onClick={() => setMobileMenuOpen(false)}
										className={`block px-4 py-2 rounded-md transition-all duration-300 cursor-pointer
											${
												activeSection === section.id
													? "text-[#61BAAD] font-semibold bg-white/10"
													: "text-gray-400 hover:text-white hover:bg-white/5"
											}`}
									>
										<span className="font-['Electrolize'] uppercase text-sm tracking-wider">
											{section.label}
										</span>
									</div>
								</Link>
							))}

							{/* Mobile CV Button */}
							<a
								href="LeandroFiadone-FrontEnd-CV.pdf"
								download="LeandroFiadone-FrontEnd-CV.pdf"
								className="block px-4 py-3 rounded-md text-center bg-[#F7AB0A] text-black font-['Electrolize'] text-sm uppercase tracking-wider font-semibold transition-all duration-300"
								onClick={() => setMobileMenuOpen(false)}
							>
								Download CV
							</a>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
}
