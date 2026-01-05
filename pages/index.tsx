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
import SkipLink from "../components/SkipLink";
import SectionNav from "../components/SectionNav";
import ScrollProgress from "../components/ScrollProgress";
import StickyNav from "../components/StickyNav";
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
			id="scroll-container"
			className="bg-[rgb(36,36,36)] text-white h-screen
    snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80
	bg-gradient-to-b from-gray-900 via-cyan-900 to-sky-900
	">
			<SkipLink />
			<ScrollProgress />
			<StickyNav />
			<Head>
				<title>Leandro Fiadone | Full-Stack Developer | React & Next.js Expert</title>
				<meta
					name="description"
					content="Full-Stack Developer specializing in React, Next.js, Node.js, and MongoDB. Based in Buenos Aires, Argentina. Front-end oriented with expertise in modern web technologies."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="robots" content="index, follow" />
				<link rel="canonical" href="https://leanfiadone.vercel.app/" />

				<meta property="og:url" content="https://leanfiadone.vercel.app/" />
				<meta property="og:type" content="website" />
				<meta property="og:locale" content="en_US" />
				<meta property="og:site_name" content="Leandro Fiadone Portfolio" />
				<meta
					property="og:title"
					content="Leandro Fiadone | Full-Stack Developer | React & Next.js Expert"
				/>
				<meta
					property="og:description"
					content="Full-Stack Developer specializing in React, Next.js, Node.js, and MongoDB. Based in Buenos Aires, Argentina."
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
					content="Leandro Fiadone | Full-Stack Developer"
				/>
				<meta
					name="twitter:description"
					content="Full-Stack Developer specializing in React, Next.js, Node.js, and MongoDB."
				/>
				<meta
					name="twitter:image"
					content="https://c4.wallpaperflare.com/wallpaper/176/195/659/javascript-node-js-abstract-logo-wallpaper-preview.jpg"
				/>

				{/* Structured Data */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Person",
							"name": "Leandro Fiadone",
							"jobTitle": "Full-Stack Developer",
							"description": "Full-Stack Developer specializing in React, Next.js, Node.js, and MongoDB",
							"url": "https://leanfiadone.vercel.app",
							"image": pageInfo?.heroImage ? `https://cdn.sanity.io/${pageInfo.heroImage.asset._ref}` : "",
							"sameAs": socials?.map(s => s.url) || [],
							"knowsAbout": ["React", "Next.js", "Node.js", "MongoDB", "TypeScript", "JavaScript"],
							"address": {
								"@type": "PostalAddress",
								"addressLocality": "Buenos Aires",
								"addressCountry": "Argentina"
							}
						})
					}}
				/>
			</Head>

			<Header socials={socials} />
			<SectionNav />

			<main id="main">
				<section id="hero" className="snap-start" aria-label="Hero section">
					<Hero pageInfo={pageInfo} />
				</section>

				<section id="about" className="snap-center" aria-label="About me">
					<About pageInfo={pageInfo} />
				</section>

				<section id="projectexperience" className="snap-center" aria-label="Projects">
					<ProjectExperience projects={projects} />
				</section>

				<section id="skills" className="snap-start" aria-label="Skills">
					<Skills skills={skills} />
				</section>

				<section id="contact" className="snap-start" aria-label="Contact form">
					<Contact pageInfo={pageInfo} />
				</section>
			</main>
			<Link href="#hero" aria-label="Scroll back to top">
				<footer className="sticky bottom-5 w-full cursor-pointer">
					<div className="flex items-center justify-center">
						<Image
							className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 z-50"
							src="/arrow.png"
							alt="Scroll to top arrow"
							width={30}
							height={30}
						/>
					</div>
				</footer>
			</Link>
		</div>
	);
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
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
		revalidate: 60, // Regenera cada 60 segundos
	};
};
