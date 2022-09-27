import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {};

function About({}: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				About
			</h3>
			<motion.img
				initial={{
					x: -200,
					opacity: 0,
				}}
				whileInView={{ opacity: 1, x: 0 }}
				src="/fotoabout.jpg"
				alt="fotoabout"
				width="500px"
				height="500px"
				transition={{
					duration: 0.7,
				}}
				viewport={{ once: true }}
				className="-mb-20 md:mb-0 flex-shrink-0 w-40  mt-10 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
			/>

			<div className="md:space-y-10 space-y-4 px-0 md:px-10">
				<h4 className="md:text-4xl font-semibold">
					Here is a{" "}
					<span className="underline decoration-[#F7AB0A] ">little</span>{" "}
					background
				</h4>
				<p className="md:text-base text-xs ">
					👋 Hi, I am Leandro! 📑 In 2021 I turned my professional career as an
					audiovisual producer 🎥 and I started my studies at the Henry academy
					to train as a Full-Stack Programmer with a Front-End orientation!
					There i got more than +800 hours of pure practice with coding 💥 In
					this way, gain experience working with Javascript, Html, Css, React
					⚛️, Redux among other technologies. I have extensive knowledge in the
					world of design and visual and sound aesthetics. I manage myself
					perfectly with English. Currently I continue to reinforce my knowledge
					with React JS, React Native, TypeScript and I am gradually delving
					into the BlockChain code. ⚡️ I am a very patient, flexible and
					sociable person. I know how to work very well in a team and I love to
					always be behind the latest trends and cutting-edge technology! 💻📚 I
					am currently looking for my first job in the IT world! 🌍
				</p>
			</div>
		</motion.div>
	);
}

export default About;
