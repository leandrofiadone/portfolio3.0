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
    <div className="relative overflow-hidden">

      <motion.div
        initial={fadeIn.initial}
        whileInView={fadeIn.animate}
        transition={fadeIn.transition}
        className="flex flex-col relative min-h-screen text-center lg:text-left lg:flex-row
          max-w-7xl 2xl:max-w-[1400px]
          xl:px-10 lg:px-5 md:px-8 px-4
          py-16 lg:py-0
          justify-center lg:justify-evenly
          mx-auto items-center
          gap-6 lg:gap-12 xl:gap-16 2xl:gap-24">
        <MotionDiv
          initial={slideInLeft.initial}
          whileInView={slideInLeft.animate}
          transition={slideInLeft.transition}
          viewport={{once: true}}
          className="flex-shrink-0"
        >
          <div className="relative w-32 h-32 rounded-full overflow-hidden
              sm:w-40 sm:h-40 sm:rounded-[24px]
              md:rounded-[32px] md:w-72 md:h-80
              lg:w-80 lg:h-96
              xl:w-[450px] xl:h-[500px]
              2xl:w-[550px] 2xl:h-[600px]
              bg-cyan-500 shadow-lg shadow-cyan-500/30
              transition-all duration-300 hover:shadow-cyan-500/50">
            <Image
              src={urlFor(pageInfo?.aboutMePic).url()}
              alt={`About ${pageInfo?.name}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </MotionDiv>

        <div className="lg:space-y-5 space-y-3 px-2 sm:px-4 lg:px-10 font-['Electrolize'] max-w-2xl">
          <h4 className="text-base sm:text-xl md:text-2xl xl:text-4xl font-semibold">
            <span className="underline decoration-[#F7AB0A]">About me...</span>
          </h4>
          {pageInfo?.aboutText ? (
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
              {pageInfo.aboutText}
            </p>
          ) : (
            <div className="text-xs sm:text-sm lg:text-lg xl:text-xl leading-relaxed space-y-2 sm:space-y-4">
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
