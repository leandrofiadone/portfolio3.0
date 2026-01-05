import React from "react";

export default function SkipLink() {
	return (
		<a
			href="#main"
			className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4
				bg-[#F7AB0A] text-black px-4 py-2 rounded z-50 font-bold
				focus:outline-none focus:ring-2 focus:ring-white"
		>
			Skip to main content
		</a>
	);
}
