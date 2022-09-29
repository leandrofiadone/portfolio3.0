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
			className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 md:text-2xl">
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
				className="-mb-20 md:mb-0 flex-shrink-0 w-40  mt-10 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
			/>

			<div className="md:space-y-10 space-y-4 px-0 md:px-10">
				<h4 className="md:text-4xl text-lg font-semibold">
					Here is a{" "}
					<span className="underline decoration-[#F7AB0A] ">little</span>{" "}
					background
				</h4>
				<p className="md:text-base text-xs ">
					{pageInfo?.backgroundInformation}
				</p>
			</div>
		</motion.div>
	);
}

export default About;
