import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProjectExperience from "../components/ProjectExperience";
import Skills from "../components/Skills";

const Home: NextPage = () => {
	return (
		<div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
			<Head>
				<title> Leandro Fiadone Portfolio </title>
			</Head>

			<Header />

			<section id="hero" className="snap-start">
				<Hero />
			</section>

			<section id="about" className="snap-center">
				<About />
			</section>
			{/* About */}
			<section id="projectexperience" className="snap-center">
				<ProjectExperience />
			</section>
			<section id="skills" className="snap-start">
				<Skills />
			</section>
			{/* Skills */}

			{/* Projects */}

			{/* Contact me */}
		</div>
	);
};

export default Home;
