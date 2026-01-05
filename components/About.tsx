/* eslint-disable react/no-unescaped-entities */
import {motion} from "framer-motion"
import Image from "next/image"
import React from "react"
import {urlFor} from "../sanity"
import {PageInfo} from "../typings"
import { ANIMATION_DURATION, slideInLeft, fadeIn } from "../utils/animations"

const MotionDiv = motion.div;

type Props = {
  pageInfo: PageInfo
}

function About({pageInfo}: Props) {
  return (
    <div className="relative bg-gradient-to-r from-slate-900 via-cyan-900 to-slate-900 overflow-hidden">
      {/* Decorative angled divider */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-gray-900 to-transparent transform -skew-y-2 origin-top-left -translate-y-12" />

      <motion.div
        initial={fadeIn.initial}
        whileInView={fadeIn.animate}
        transition={fadeIn.transition}
        className="flex flex-col relative min-h-screen text-center md:text-left md:flex-row
          max-w-7xl 2xl:max-w-[1400px]
          xl:px-10 lg:px-5 md:px-8 px-4
          justify-center xl:justify-between
          mx-auto items-center
          xl:gap-16 2xl:gap-24">
        <MotionDiv
          initial={slideInLeft.initial}
          whileInView={slideInLeft.animate}
          transition={slideInLeft.transition}
          viewport={{once: true}}
          className="-mb-10 md:mb-0 flex-shrink-0 mt-10"
        >
          <Image
            src={urlFor(pageInfo?.aboutMePic).url()}
            alt={`About ${pageInfo?.name}`}
            width={550}
            height={570}
            className="w-32 h-32 rounded-full object-cover
              sm:w-40 sm:h-40 sm:rounded-[24px]
              md:rounded-[32px] md:w-64 md:h-80
              xl:w-[450px] xl:h-[470px]
              2xl:w-[550px] 2xl:h-[570px]
              bg-cyan-500 shadow-lg shadow-cyan-500/30
              transition-all duration-300 hover:shadow-cyan-500/50"
          />
        </MotionDiv>

        <div className="md:space-y-5 pt-10 space-y-4 px-4 md:px-10 font-['Electrolize'] max-w-2xl">
          <h4 className="text-lg sm:text-xl md:text-2xl xl:text-4xl font-semibold">
            <span className="underline decoration-[#F7AB0A]">About me...</span>
          </h4>
          {pageInfo?.aboutText ? (
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
              {pageInfo.aboutText}
            </p>
          ) : (
            <div className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed space-y-4">
              <p>
                📑 Since <span className="text-[#F7AB0A] font-semibold">March 2023</span>, I've been a Full-Stack Developer with a strong
                Front-End focus at{" "}
                <a
                  href="https://pl4nner.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F7AB0A] font-semibold underline decoration-[#F7AB0A]/50 hover:decoration-[#F7AB0A] transition-all hover:text-yellow-400">
                  Pl4nner.com
                </a>
                , leveraging my <span className="text-[#F7AB0A] font-semibold">+800 hours</span> of dedicated
                study at{" "}
                <a
                  href="https://www.soyhenry.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F7AB0A] font-semibold underline decoration-[#F7AB0A]/50 hover:decoration-[#F7AB0A] transition-all hover:text-yellow-400">
                  SoyHenry.com
                </a>
                .
              </p>
              <p>
                While I specialize in <span className="text-cyan-400">React, Next.js, Node.js, and MongoDB</span> for
                front-end development, I'm also deeply interested in <span className="text-cyan-400">AI and
                Blockchain</span> development.
              </p>
              <p>
                My foundation in design principles and audiovisual production complements my passion for creating
                intuitive front-end solutions. I'm committed to evolving my skills,
                staying updated with emerging technologies, and contributing innovative
                ideas to every project! 💻📚🌍
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default About
