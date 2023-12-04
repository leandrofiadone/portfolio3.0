/* eslint-disable react/no-unescaped-entities */
import {motion} from "framer-motion"
import Image from "next/image"
import React from "react"
import {urlFor} from "../sanity"
import {PageInfo} from "../typings"

type Props = {
  pageInfo: PageInfo
}

function About({pageInfo}: Props) {
  return (
    <div className="transform skew-y-6 bg-[#005248] bg-gradient-to-r from-slate-900 via-cyan-900 to-slate-900 backdrop-opacity-50 ">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl xl:px-10 lg:px-5 md:px-8 px-2 justify-evenly mx-auto items-center -skew-y-6">
        <h3 className="absolute top-14 md:top-20 uppercase tracking-[20px] text-[#F7AB0A]  md:text-xl text-base font-['Electrolize'] ">
          About
        </h3>
        <motion.img
          initial={{
            x: -200,
            opacity: 0
          }}
          whileInView={{opacity: 1, x: 0}}
          src={urlFor(pageInfo?.aboutMePic).url()}
          alt="fotoabout"
          width="500px"
          height="500px"
          transition={{
            duration: 0.7
          }}
          viewport={{once: true}}
          className="-mb-20 md:mb-0 flex-shrink-0 w-40 h-40  mt-10 rounded-full object-cover
        md:rounded-[32px] md:w-64 sm:h-80 xl:w-[500px] xl:h-[600px] bg-cyan-500 shadow-lg shadow-cyan-500/50 "
        />

        <div className="md:space-y-5 pt-10 space-y-4 px-0 md:px-10 font-['Electrolize'] ">
          <h4 className="text-sm md:text-2xl xl:text-4xl font-semibold ">
            Here is a{" "}
            <span className="underline decoration-[#F7AB0A] ">little</span>{" "}
            background
          </h4>
          <p className="md:text-sm text-xs lg:text-base xl:text-lg ">
            📑 Since March 2023, I've been a Full-Stack Developer with a strong
            Front-End focus at{" "}
            <a
              href="https://pl4nner.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 underline hover:no-underline">
              Pl4nner.com
            </a>
            , leveraging my +800 hours of dedicated study at{" "}
            <a
              href="https://www.soyhenry.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 underline hover:no-underline">
              SoyHenry.com
            </a>
            . While I specialize in React, Next.js, Node.js, and MongoDB for
            front-end development, I'm also deeply interested in AI and
            Blockchain development. This fascination drives my continuous
            exploration and learning in these domains. My foundation in design
            principles and audiovisual production complements my passion for
            creating intuitive front-end solutions. I'm committed to evolving my
            skills, staying updated with emerging technologies, and contributing
            innovative ideas to every project! 💻📚🌍
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default About
