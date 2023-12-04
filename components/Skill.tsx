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
          scale: 1.2,
          transition: {duration: 0.1} // Ajusta la duración aquí
        }}
        src={urlFor(skill?.image).url()}
        className=" border-gray-500 object-cover w-14 md:w-16 xl:w-24 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out w-20 md:w-22 xl:w-24  z-0">
        <div className="flex items-center justify-center h-full">
          <p
            className="md:text-xl text-sm font-bold text-white opacity-100"
            style={{textShadow: "2px 2px 6px rgba(0,0,0,2)"}}>
            {skill?.title}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skill
