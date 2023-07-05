import React from "react";
import { motion } from "framer-motion";
import { Skill as mySkill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  skill: mySkill;
  directionLeft?: boolean;
};

export default function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -300 : 300, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0 }}
        className="rounded-full border border-gray-500 object-cover w-12 h-12 md:w-18 md:h-18 xl:w-24 xl:h-24 filter 
        group-hover:grayscale transition duration-300 ease-in-out"
        src={urlFor(skill?.image).url()}
        alt=""
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 
      transition duration-300 ease-in-out group-hover:bg-amber-300 
      w-12 h-12 md:w-18 md:h-18 xl:w-24 xl:h-24 rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-xl font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}
