import React from "react"
import {motion} from "framer-motion"
import {Skill} from "../typings"
import {urlFor} from "../sanity"

type Props = {
  skill: Skill
  directionLeft?: boolean
}

const Skill = ({skill, directionLeft}: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        whileHover={{
          scale: 1.15,
          rotate: 5,
          transition: {duration: 0.2}
        }}
        src={urlFor(skill?.image).url()}
        alt={skill?.title}
        className="border-gray-500 object-cover w-14 md:w-16 xl:w-24 filter group-hover:grayscale transition duration-300 ease-in-out rounded-lg group-hover:shadow-lg group-hover:shadow-[#F7AB0A]/30"
      />
      <div className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out w-14 md:w-16 xl:w-24 h-14 md:h-16 xl:h-24 z-0 bg-black/60 rounded-lg backdrop-blur-sm">
        <div className="flex items-center justify-center h-full p-1">
          <p
            className="text-xs md:text-sm xl:text-base font-bold text-[#F7AB0A] text-center leading-tight"
            style={{textShadow: "2px 2px 6px rgba(0,0,0,0.8)"}}>
            {skill?.title}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skill
