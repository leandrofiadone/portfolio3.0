import type { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProjectExperience from "../components/ProjectExperience";
import Skills from "../components/Skills";
import { PageInfo, Project, Skill, Social } from "../typings";
import { fetchGetProjects } from "../utils/fetchGetProjects";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";

type Props = {
	pageInfo: PageInfo;
	skills: Skill[];
	projects: Project[];
	socials: Social[];
};

const Home = ({ pageInfo, skills, projects, socials }: Props) => {
	return (
		<div
			className="bg-[rgb(36,36,36)] text-white h-screen 
    snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 
	bg-gradient-to-b from-gray-900 via-cyan-900 to-sky-900 
	">
			<Head>
				<title>👨‍💻 Leandro Fiadone 🇦🇷 FullStack Developer</title>
				<meta name="description" content="🔹 Front-End Oriented💻⌨🖥🖱🔋🇦🇷 🔸" />

				<meta property="og:url" content="https://leanfiadone.vercel.app/" />
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content="🔹 Leandro Fiadone 👨‍💻 FullStack Developer 🔸"
				/>
				<meta
					property="og:description"
					content="🔹 Front-End Oriented💻⌨🖥🖱🔋🇦🇷 🔸"
				/>
				<meta
					property="og:image"
					content="https://c4.wallpaperflare.com/wallpaper/176/195/659/javascript-node-js-abstract-logo-wallpaper-preview.jpg"
				/>

				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="leanfiadone.vercel.app" />
				<meta
					property="twitter:url"
					content="https://leanfiadone.vercel.app/"
				/>
				<meta
					name="twitter:title"
					content="🔹 Leandro Fiadone 👨‍💻 FullStack Developer 🔸"
				/>
				<meta
					name="twitter:description"
					content="🔹 Front-End Oriented💻⌨🖥🖱🔋🇦🇷 🔸"
				/>
				<meta
					name="twitter:image"
					content="https://c4.wallpaperflare.com/wallpaper/176/195/659/javascript-node-js-abstract-logo-wallpaper-preview.jpg"
				/>
			</Head>

			<Header socials={socials} />

			<section id="hero" className="snap-start ">
				<Hero pageInfo={pageInfo} />
			</section>

			<section id="about" className="snap-center">
				<About pageInfo={pageInfo} />
			</section>

			<section id="projectexperience" className="snap-center ">
				<ProjectExperience projects={projects} />
			</section>

			<section id="skills" className="snap-start">
				<Skills skills={skills} />
			</section>

			<section id="contact" className="snap-start  ">
				<Contact />
			</section>
			<Link href="#hero">
				<footer className="sticky bottom-5 w-full cursor-pointer">
					<div className="flex items-center justify-center">
						<img
							className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0"
							src="/arrow.png"
							alt="up"
						/>
					</div>
				</footer>
			</Link>
		</div>
	);
};

export default Home;

// export const getStaticProps: GetStaticProps<Props> = async () => {

export const getServerSideProps: GetStaticProps<Props> = async () => {
	const pageInfo: PageInfo = await fetchPageInfo();
	const skills: Skill[] = await fetchSkills();
	const projects: Project[] = await fetchGetProjects();
	const socials: Social[] = await fetchSocials();

	return {
		props: {
			pageInfo,
			skills,
			projects,
			socials,
		},

		// revalidate: 10,
	};
};
