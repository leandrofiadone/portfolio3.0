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
    <motion.div className="group relative flex cursor-pointer justify-center items-center">
      {/* Outer glow ring on hover */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle, ${getSkillColor(skill?.title)} 0%, transparent 70%)`,
          filter: 'blur(12px)',
        }}
      />

      {/* Main skill icon */}
      <motion.div
        className="relative z-10"
        whileHover={{
          y: -8,
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 10
          }
        }}
      >
        <motion.img
          src={urlFor(skill?.image).url()}
          alt={skill?.title}
          className="object-contain w-10 sm:w-14 md:w-16 xl:w-20 h-10 sm:h-14 md:h-16 xl:h-20 rounded-lg transition-all duration-300 group-hover:drop-shadow-2xl"
          style={{
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
          }}
        />

        {/* Tooltip on hover */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
          <div className="bg-[#1a2332]/95 backdrop-blur-sm px-3 py-1 rounded-md border border-[#61BAAD]/30">
            <p className="text-xs font-semibold text-[#61BAAD] font-['Electrolize'] tracking-wider">
              {skill?.title}
            </p>
          </div>
          {/* Arrow */}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#1a2332]/95 rotate-45 border-l border-t border-[#61BAAD]/30" />
        </div>
      </motion.div>
    </motion.div>
  )
}

// Helper function to get skill-specific colors for glow effects
const getSkillColor = (skillTitle: string) => {
  const colorMap: { [key: string]: string } = {
    'React': '#61DAFB40',
    'Next.js': '#00000040',
    'TypeScript': '#3178C640',
    'JavaScript': '#F7DF1E40',
    'Node.js': '#68A06340',
    'MongoDB': '#47A24840',
    'GraphQL': '#E1009740',
    'Tailwind': '#06B6D440',
    'CSS': '#1572B640',
    'HTML': '#E3472640',
  }

  return colorMap[skillTitle] || '#61BAAD40'
}

export default Skill
