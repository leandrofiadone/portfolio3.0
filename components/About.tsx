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
        className="flex flex-col relative min-h-0 lg:min-h-screen text-center lg:text-left lg:flex-row
          max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px]
          xl:px-10 lg:px-8 md:px-8 px-5
          py-16 sm:py-20 lg:py-0
          justify-start lg:justify-center
          mx-auto items-center
          gap-6 sm:gap-8 lg:gap-10 xl:gap-16 2xl:gap-20">
        <MotionDiv
          initial={slideInLeft.initial}
          whileInView={slideInLeft.animate}
          transition={slideInLeft.transition}
          viewport={{once: true}}
          className="flex-shrink-0"
        >
          <div className="group relative p-[3px] sm:p-1 rounded-full sm:rounded-[26px] md:rounded-[34px]
              bg-gradient-to-br from-[#F7AB0A] via-cyan-500 to-[#F7AB0A]
              shadow-[0_0_20px_rgba(6,182,212,0.3)]
              transition-all duration-500
              hover:shadow-[0_0_40px_rgba(247,171,10,0.5),0_0_60px_rgba(6,182,212,0.3)]
              hover:scale-[1.02]">
            <div className="relative w-36 h-36 rounded-full overflow-hidden
                sm:w-44 sm:h-44 sm:rounded-[24px]
                md:rounded-[32px] md:w-64 md:h-72
                lg:w-72 lg:h-80
                xl:w-[380px] xl:h-[420px]
                2xl:w-[450px] 2xl:h-[500px]
                bg-[#0a192f]">
              <Image
                src={urlFor(pageInfo?.aboutMePic).url()}
                alt={`About ${pageInfo?.name}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </MotionDiv>

        <div className="space-y-3 sm:space-y-4 lg:space-y-5 px-2 sm:px-4 lg:px-0 font-['Inter'] max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
          <h4 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold font-['Electrolize']">
            <span className="relative inline-block
              underline decoration-[#F7AB0A] decoration-[3px] underline-offset-4
              hover:decoration-cyan-400 transition-colors duration-300">
              About me...
            </span>
          </h4>
          {pageInfo?.aboutText ? (
            <p className="text-[13px] sm:text-sm lg:text-[15px] xl:text-base leading-relaxed">
              {pageInfo.aboutText}
            </p>
          ) : (
            <div className="text-[13px] sm:text-sm lg:text-[15px] xl:text-base leading-relaxed space-y-2.5 sm:space-y-3 lg:space-y-4 text-gray-200">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Full-Stack Developer who moves fluidly across the entire stack—from <span className="text-cyan-400">MongoDB</span> and <span className="text-cyan-400">Node.js</span> backends to <span className="text-cyan-400">React/TypeScript</span> frontends and templating systems.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                At{" "}
                <a
                  href="https://pl4nner.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F7AB0A] font-semibold relative inline-block
                    after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0
                    after:bg-[#F7AB0A] after:origin-bottom-right after:scale-x-100
                    hover:after:scale-x-0 hover:after:origin-bottom-left after:transition-transform after:duration-300
                    hover:text-yellow-300 transition-colors duration-300
                    hover:drop-shadow-[0_0_8px_rgba(247,171,10,0.6)]">
                  Pl4nner
                </a>
                , I navigated complex codebases spanning databases, APIs, and presentation layers including Pug.js templates. At{" "}
                <a
                  href="https://sinapsis.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F7AB0A] font-semibold relative inline-block
                    after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0
                    after:bg-[#F7AB0A] after:origin-bottom-right after:scale-x-100
                    hover:after:scale-x-0 hover:after:origin-bottom-left after:transition-transform after:duration-300
                    hover:text-yellow-300 transition-colors duration-300
                    hover:drop-shadow-[0_0_8px_rgba(247,171,10,0.6)]">
                  Sinapsis
                </a>
                , I migrated <span className="text-[#F7AB0A] font-semibold">7 large-scale production sites</span> to Sanity CMS—projects like{" "}
                <a
                  href="https://maquinasesolucoes.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F7AB0A] font-semibold relative inline-block
                    after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0
                    after:bg-[#F7AB0A] after:origin-bottom-right after:scale-x-100
                    hover:after:scale-x-0 hover:after:origin-bottom-left after:transition-transform after:duration-300
                    hover:text-yellow-300 transition-colors duration-300
                    hover:drop-shadow-[0_0_8px_rgba(247,171,10,0.6)]">
                  Máquinas e Soluções
                </a>
                , handling full content architecture integration.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Technical foundation: <span className="text-cyan-400">React, Next.js, Node.js, MongoDB, and TypeScript</span>, built through <span className="text-[#F7AB0A] font-semibold">800+ hours</span> at{" "}
                <a
                  href="https://www.soyhenry.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F7AB0A] font-semibold relative inline-block
                    after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0
                    after:bg-[#F7AB0A] after:origin-bottom-right after:scale-x-100
                    hover:after:scale-x-0 hover:after:origin-bottom-left after:transition-transform after:duration-300
                    hover:text-yellow-300 transition-colors duration-300
                    hover:drop-shadow-[0_0_8px_rgba(247,171,10,0.6)]">
                  SoyHenry
                </a>
                . Currently expanding into cybersecurity fundamentals at{" "}
                <a
                  href="https://tryhackme.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F7AB0A] font-semibold relative inline-block
                    after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0
                    after:bg-[#F7AB0A] after:origin-bottom-right after:scale-x-100
                    hover:after:scale-x-0 hover:after:origin-bottom-left after:transition-transform after:duration-300
                    hover:text-yellow-300 transition-colors duration-300
                    hover:drop-shadow-[0_0_8px_rgba(247,171,10,0.6)]">
                  TryHackMe
                </a>
                .
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <span className="text-cyan-400 font-semibold">What I bring:</span> Speed and creativity in execution. My audiovisual production background shapes how I think about user experience—not just functional interfaces, but beautiful, intuitive ones. I persevere through complex integrations when others pivot.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-gray-300 italic"
              >
                Remote work. Complex projects. Clients who value someone who sees things through.
              </motion.p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default About
