import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../typings";

type Props = {
	socials: Social[];
};

export default function Header({ socials }: Props) {
	return (
		<header className="sticky top-0 sm:p-5 pt-0 px-3 flex items-start justify-between max-w-7xl mx-auto z-50 xl:items-center ">
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
				}}
				transition={{
					duration: 1.2,
				}}
				className="flex flex-row items-center gap-1">
				{socials.map((social) => (
					<SocialIcon
						key={social._id}
						url={social.url}
						fgColor="gray"
						bgColor="transparent"
						target="_blank"
						style={{ height: 40, width: 40 }}
						className="transition duration-300 ease-in-out transform hover:scale-110 hover:opacity-80"
					/>
				))}

				<SocialIcon
					url="https://wa.me/+5491151275282"
					network="whatsapp"
					fgColor="gray"
					bgColor="transparent"
					target="_blank"
					style={{ height: 40, width: 40 }}
					className="transition duration-300 ease-in-out transform hover:scale-110 hover:opacity-80"
				/>
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
