import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackGroundCircle from "./BackGroundCircle";

type Props = {};

function Hero({}: Props) {
	const [text, count] = useTypewriter({
		words: [
			"I´m <Leandro/> 💻",
			"A Greek name...✍️",
			"Originally ... <Λέανδρος/>",
			"Means Lion-Man 🦁",
		],
		loop: true,
		delaySpeed: 1000,
		typeSpeed: 70,
		deleteSpeed: 50,
	});
	return (
		<div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
			<BackGroundCircle />
			<Image
				width="180px"
				height="180px"
				className="relative rounded-full mx-auto object-cover"
				src="/fotoperfil.JPG"
				alt="FotoPerfil"
			/>

			<div className="z-20">
				<h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
					Fullstack Developer
				</h2>
				<h1 className="sm:text-sm md:text-2xl lg:text-6xl  font-semibold px-10">
					<span className="mr-3">{text}</span>
					<Cursor cursorColor="#F7AB0A" />
				</h1>

				<div className="pt-2">
					<Link href="#about">
						<button className="heroButton">about</button>
					</Link>

					<Link href="#projectexperience">
						<button className="heroButton">projects xp</button>
					</Link>
					<Link href="#skills">
						<button className="heroButton">skills</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Hero;
