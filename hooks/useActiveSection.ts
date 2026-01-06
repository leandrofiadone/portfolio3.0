import { useState, useEffect } from "react";

const SECTIONS = [
	{ id: "hero", name: "" },
	{ id: "about", name: "About" },
	{ id: "projectexperience", name: "Projects" },
	{ id: "skills", name: "Skills" },
	{ id: "contact", name: "Contact" },
];

export function useActiveSection() {
	const [activeSection, setActiveSection] = useState("");

	useEffect(() => {
		const findActiveSection = () => {
			const scrollContainer = document.getElementById("scroll-container");
			if (!scrollContainer) return;

			const viewportHeight = window.innerHeight;

			for (let i = SECTIONS.length - 1; i >= 0; i--) {
				const section = SECTIONS[i];
				const element = document.getElementById(section.id);
				if (element) {
					const rect = element.getBoundingClientRect();
					// Check if section is mostly visible (top half of viewport)
					if (rect.top <= viewportHeight * 0.5) {
						setActiveSection(section.name);
						return;
					}
				}
			}
		};

		// Run on mount
		const timeoutId = setTimeout(findActiveSection, 100);

		// Listen to scroll
		const scrollContainer = document.getElementById("scroll-container");
		if (scrollContainer) {
			scrollContainer.addEventListener("scroll", findActiveSection, { passive: true });
		}

		return () => {
			clearTimeout(timeoutId);
			scrollContainer?.removeEventListener("scroll", findActiveSection);
		};
	}, []);

	return activeSection;
}
