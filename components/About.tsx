import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";

type Props = {
	pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl xl:px-10 lg:px-5 md:px-8 px-2 justify-evenly mx-auto items-center">
			<h3 className="absolute top-14 md:top-20 uppercase tracking-[20px] text-[#F7AB0A]  md:text-xl text-base font-['Electrolize'] ">
				About
			</h3>
			<motion.img
				initial={{
					x: -200,
					opacity: 0,
				}}
				whileInView={{ opacity: 1, x: 0 }}
				src={urlFor(pageInfo?.aboutMePic).url()}
				alt="fotoabout"
				width="500px"
				height="500px"
				transition={{
					duration: 0.7,
				}}
				viewport={{ once: true }}
				className="-mb-20 md:mb-0 flex-shrink-0 w-40 h-40  mt-10 rounded-full object-cover
        md:rounded-[32px] md:w-64 sm:h-80 xl:w-[500px] xl:h-[600px] bg-cyan-500 shadow-lg shadow-cyan-500/50"
			/>

			<div className="md:space-y-5 pt-10 space-y-4 px-0 md:px-10 font-['Electrolize']">
				<h4 className="text-sm md:text-2xl xl:text-4xl text-lg font-semibold ">
					Here is a{" "}
					<span className="underline decoration-[#F7AB0A] ">little</span>{" "}
					background
				</h4>
				<p className="md:text-sm text-xs lg:text-base xl:text-lg ">
					{pageInfo?.backgroundInformation}
				</p>
			</div>
		</motion.div>
	);
}

export default About;
