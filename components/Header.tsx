import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../typings";

type Props = {
	socials: Social[];
};

export default function Header({ socials }: Props) {
	// const [isHover, setIsHover] = useState(false);

	// const handleMouseEnter = () => {
	// 	setIsHover(true);
	// };
	// const handleMouseLeave = () => {
	// 	setIsHover(false);
	// };
	// const boxStyle = {
	// 	//...
	// 	fgColor: isHover ? "gray" : "null",
	// };

	return (
		<header className="sticky top-0 sm:p-5 pt-0 px-3 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center ">
			<motion.div
				initial={{
					x: -500,
					opacity: 0,
					scale: 0.3,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
					width: 150,
					
				}}
				transition={{
					duration: 1.2,
				}}
				className="flex flex-row items-center ">
				{socials.map((social) => (
					<SocialIcon
						key={social._id}
						url={social.url}
						fgColor="gray"
						bgColor="transparent"
						target="_blank"
						className="inline-block p-2 transition duration-300 ease-in-out transform xl:scale-150  hover:scale-125 "
						// network={social.title}
					/>
				))}

				{/* NO LOGRE CONECTAR WHATSAPP A SU NETWORK POR LA API DE SANITY */}

				<SocialIcon
					url="https://wa.me/+5491151275282"
					network="whatsapp"
					fgColor="gray"
					bgColor="transparent"
					target="_blank"
					className="inline-block p-2 transition duration-300 ease-in-out transform xl:scale-150  hover:scale-125"
				/>

				{/* 
				<SocialIcon
					url="https://twitter.com/tokentango"
					fgColor="gray"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://t.me/Tokentango"
					fgColor="gray"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://wa.me/+5491151275282"
					network="whatsapp"
					fgColor="gray"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://www.linkedin.com/in/leandro-fiadone"
					fgColor="gray"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://github.com/leandrofiadone"
					fgColor="gray"
					bgColor="transparent"
				/> */}
			</motion.div>

			<Link href="#contact">
				<motion.div
					initial={{
						x: 500,
						opacity: 0,
						scale: 0.5,
					}}
					animate={{
						x: 0,
						opacity: 1,
						scale: 1,
					}}
					transition={{
						duration: 1.1,
					}}
					className="flex flex-row items-center text-gray-300 cursor-pointer">
					<SocialIcon
						className="cursor-pointer"
						network="email"
						fgColor="gray"
						bgColor="transparent"
					/>
					<p className="uppercase hidden md:inline-flex text-sm text-gray font-['Electrolize']">
						Get in touch
					</p>
				</motion.div>
			</Link>
		</header>
	);
}
