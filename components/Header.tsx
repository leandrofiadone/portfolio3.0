import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
	const [isHover, setIsHover] = useState(false);

	const handleMouseEnter = () => {
		setIsHover(true);
	};
	const handleMouseLeave = () => {
		setIsHover(false);
	};
	const boxStyle = {
		//...
		fgColor: isHover ? "gray" : "null",
	};
	return (
		<header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
			<motion.div
				initial={{
					x: -500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1.2,
				}}
				className="flex flex-row items-center">
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
				/>
			</motion.div>
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
				<p className="uppercase hidden md:inline-flex text-sm text-gray">
					Get in touch
				</p>
			</motion.div>
		</header>
	);
}
