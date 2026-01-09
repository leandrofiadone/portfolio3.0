import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  skill: Skill;
  index: number;
};

const TechnicalSkill = ({ skill, index }: Props) => {
  const proficiencyLevel = skill.progress || 50;

  const getLevelLabel = (progress: number) => {
    if (progress >= 90) return "Expert";
    if (progress >= 75) return "Advanced";
    if (progress >= 60) return "Intermediate";
    return "Learning";
  };

  const getLevelColor = (progress: number) => {
    if (progress >= 90) return "#10B981"; // green
    if (progress >= 75) return "#3B82F6"; // blue
    if (progress >= 60) return "#F59E0B"; // amber
    return "#61BAAD"; // teal
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="relative group"
    >
      {/* Card Container */}
      <div className="bg-[#1a2332]/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:border-[#61BAAD]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#61BAAD]/10">
        {/* Icon and Title */}
        <div className="flex items-center gap-3 mb-3">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="relative w-12 h-12"
          >
            <Image
              src={urlFor(skill?.image).url()}
              alt={skill?.title}
              width={48}
              height={48}
              className="object-contain rounded-lg"
            />
          </motion.div>

          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-semibold text-gray-200 truncate">
              {skill?.title}
            </h4>
            <span
              className="text-xs font-medium"
              style={{ color: getLevelColor(proficiencyLevel) }}
            >
              {getLevelLabel(proficiencyLevel)}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative h-2 bg-gray-800/50 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${proficiencyLevel}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.05 + 0.3, ease: "easeOut" }}
            className="h-full rounded-full relative"
            style={{
              backgroundColor: getLevelColor(proficiencyLevel),
              boxShadow: `0 0 10px ${getLevelColor(proficiencyLevel)}40`
            }}
          >
            {/* Animated shimmer effect */}
            <motion.div
              className="absolute inset-0 opacity-30"
              style={{
                background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)`,
              }}
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.1,
              }}
            />
          </motion.div>
        </div>

        {/* Percentage */}
        <div className="mt-2 text-right">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 + 0.5 }}
            className="text-xs text-gray-400 font-mono"
          >
            {proficiencyLevel}%
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};

export default TechnicalSkill;
