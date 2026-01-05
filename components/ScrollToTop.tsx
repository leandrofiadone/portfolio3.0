import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const scrollContainer = document.getElementById('scroll-container');
		if (!scrollContainer) return;

		const handleScroll = () => {
			// Solo mostrar cuando no estás en hero (después de 50% del hero)
			const heroElement = document.getElementById('hero');
			if (heroElement) {
				const heroRect = heroElement.getBoundingClientRect();
				const heroBottom = heroRect.bottom;

				// Mostrar solo cuando has salido del hero (cuando el bottom del hero está arriba del viewport)
				setIsVisible(heroBottom < window.innerHeight / 2);
			}
		};

		scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();

		return () => scrollContainer.removeEventListener('scroll', handleScroll);
	}, []);

	if (!isVisible) return null;

	return (
		<Link href="#hero" aria-label="Scroll back to top">
			<div className="fixed bottom-8 right-8 cursor-pointer z-10 group">
				<div className="relative">
					<Image
						className="h-10 w-10 sm:h-12 sm:w-12 rounded-full filter grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-110 opacity-60 hover:opacity-100"
						src="/arrow.png"
						alt="Scroll to top arrow"
						width={48}
						height={48}
					/>
				</div>
			</div>
		</Link>
	);
}
