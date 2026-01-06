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
		<>
			{/* Mobile/Tablet Header - horizontal layout */}
			<header className="lg:hidden fixed top-0 left-0 right-0 pt-1 px-2 sm:p-5 flex items-start justify-between max-w-7xl mx-auto z-50">
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
					className="flex flex-row items-center gap-0">
					{socials.map((social) => (
						<SocialIcon
							key={social._id}
							url={social.url}
							fgColor="gray"
							bgColor="transparent"
							target="_blank"
							style={{ height: 28, width: 28 }}
							className="transition duration-300 ease-in-out transform hover:scale-110 hover:opacity-80 sm:[&]:!h-[35px] sm:[&]:!w-[35px]"
						/>
					))}

					<SocialIcon
						url="https://wa.me/+5491151275282"
						network="whatsapp"
						fgColor="gray"
						bgColor="transparent"
						target="_blank"
						style={{ height: 28, width: 28 }}
						className="transition duration-300 ease-in-out transform hover:scale-110 hover:opacity-80 sm:[&]:!h-[35px] sm:[&]:!w-[35px]"
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
							style={{ height: 28, width: 28 }}
						/>
					</motion.div>
				</Link>
			</header>

			{/* Desktop Header - only "Get in touch" on top right */}
			<header className="hidden lg:flex fixed top-0 left-0 right-0 p-5 justify-end max-w-7xl mx-auto z-50">
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
							style={{ height: 35, width: 35 }}
						/>
						<p className="uppercase text-sm text-gray font-['Electrolize']">
							Get in touch
						</p>
					</motion.div>
				</Link>
			</header>

			{/* Desktop Sidebar - vertical social icons on the left */}
			<motion.div
				initial={{
					x: -100,
					opacity: 0,
				}}
				animate={{
					x: 0,
					opacity: 1,
				}}
				transition={{
					duration: 1.2,
					delay: 0.5,
				}}
				className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-2">
				{socials.map((social) => (
					<SocialIcon
						key={social._id}
						url={social.url}
						fgColor="gray"
						bgColor="transparent"
						target="_blank"
						style={{ height: 40, width: 40 }}
						className="transition duration-300 ease-in-out transform hover:scale-110 hover:opacity-80 hover:fgColor-[#F7AB0A]"
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

				{/* Decorative line */}
				<div className="w-[1px] h-20 bg-gray-600 mt-2" />
			</motion.div>
		</>
	);
}
