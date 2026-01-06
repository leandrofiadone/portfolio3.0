import React, { useState, useEffect } from "react";

const sections = [
	{ id: "hero", label: "Home", color: "#F7AB0A" },
	{ id: "about", label: "About", color: "#E09F3E" },
	{ id: "projectexperience", label: "Projects", color: "#D4A855" },
	{ id: "skills", label: "Skills", color: "#C9A227" },
	{ id: "contact", label: "Contact", color: "#F7AB0A" },
];

export default function SectionNav() {
	const [activeSection, setActiveSection] = useState("hero");

	useEffect(() => {
		const scrollContainer = document.getElementById('scroll-container');
		if (!scrollContainer) return;

		const handleScroll = () => {
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

		scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();

		return () => scrollContainer.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav
			className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:block"
			aria-label="Section navigation"
		>
			<ul className="space-y-4">
				{sections.map((section) => {
					const isActive = activeSection === section.id;
					return (
						<li key={section.id} className="relative group">
							<a
								href={`#${section.id}`}
								className={`block rounded-full transition-all duration-300
									focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2
									focus:ring-offset-gray-900
									${isActive
										? 'w-4 h-4 scale-125'
										: 'w-3 h-3 hover:scale-110'
									}`}
								style={{
									backgroundColor: isActive ? section.color : '#6B7280',
									boxShadow: isActive ? `0 0 12px ${section.color}` : 'none',
								}}
								aria-label={`Go to ${section.label}`}
								aria-current={isActive ? 'location' : undefined}
							/>
							{/* Tooltip */}
							<span className={`absolute right-7 top-1/2 -translate-y-1/2 px-3 py-1.5
								bg-gray-900 text-white text-sm rounded-md whitespace-nowrap
								opacity-0 group-hover:opacity-100 pointer-events-none
								transition-all duration-200 font-['Electrolize']
								${isActive ? 'border-2' : 'border'}`}
								style={{
									borderColor: isActive ? section.color : 'rgba(247, 171, 10, 0.3)',
								}}>
								{section.label}
							</span>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
