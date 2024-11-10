"use client";
import { motion } from "framer-motion";
import Section from "./section";
import {
  FaCss3Alt,
  FaJsSquare,
  FaFigma,
  FaHtml5,
  FaSass,
  FaReact,
  FaBootstrap,
  FaNode,
  FaJava,
} from "react-icons/fa";
import {
  TbBrandMongodb,
  TbBrandRedux,
  TbBrandTailwind,
  TbBrandTypescript,
} from "react-icons/tb";
import { PiFileSqlBold } from "react-icons/pi";
import { SiChakraui } from "react-icons/si";

const techStack = [
  { name: "HTML", logo: <FaHtml5 /> },
  { name: "CSS", logo: <FaCss3Alt /> },
  { name: "JS", logo: <FaJsSquare /> },
  { name: "REACT", logo: <FaReact /> },
  { name: "REDUX", logo: <TbBrandRedux /> },
  { name: "NODE.JS", logo: <FaNode /> },
  { name: "Mongodb", logo: <TbBrandMongodb /> },
  { name: "CHAKRA UI", logo: <SiChakraui /> },
  { name: "TAILWIND", logo: <TbBrandTailwind /> },
  { name: "BOOTSTRAP", logo: <FaBootstrap /> },
  { name: "SASS", logo: <FaSass /> },
  { name: "FIGMA", logo: <FaFigma /> },
  { name: "TYPESCRIPT", logo: <TbBrandTypescript /> },
  { name: "SQL", logo: <PiFileSqlBold /> },
  { name: "JAVA", logo: <FaJava /> },
];

export default function TechStack() {
  return (
    <Section id="tech-stack">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Tech Stack
      </h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 max-w-screen-lg">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.01 }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="flex flex-col items-center p-3 max-w-[120px] bg-white/40 dark:bg-gray-800/60 backdrop-blur-md border border-gray-300 dark:border-gray-700 rounded-xl shadow-md dark:shadow-lg hover:shadow-lg dark:hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="mb-2 relative text-6xl">{tech.logo}</div>
              <span className="text-xs font-bold text-center  dark:text-gray-200">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
