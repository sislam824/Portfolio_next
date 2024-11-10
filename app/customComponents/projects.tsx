"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Section from "./section";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@/components/ui/button";
import { Github, Globe } from "lucide-react";
import song1 from "../../app/assests/song1.png";
import song2 from "../../app/assests/song2.png";
import song3 from "../../app/assests/song3.png";
import health1 from "../../app/assests/health1.png";
import health2 from "../../app/assests/health2.png";
import health3 from "../../app/assests/health3.png";
import health4 from "../../app/assests/health4.png";
import khan1 from "../../app/assests/khan1.png";
import khan2 from "../../app/assests/khan2.png";
import khan3 from "../../app/assests/khan3.png";

const projects = [
  {
    title: "Beat Pulse",
    description:
      "Beat Pulse is a dynamic music streaming app featuring user and admin sides. Users can discover, stream, and curate playlists, while the admin manages content, user roles, and updates the music library.",
    technologies: ["HTML", "CSS", "JS", "Jason-server"],
    images: [song1, song2, song3],
    deployedLink: "https://beet-pulse-music.netlify.app/",
    githubLink: "https://github.com/alfaj7/SAP-Sultans_056",
  },
  {
    title: "Health Tracker",
    description:
      "Health Tracker is a wellness app that helps users set health goals, create diet plans, select exercises, and book doctor appointments, offering a complete solution for fitness, nutrition, and healthcare.",

    technologies: ["React", "Chakra UI", "Sass", "Firebase"],
    images: [health1, health2, health3, health4],

    deployedLink: "https://pixel-pole-vault-040.vercel.app/",
    githubLink: "https://github.com/sagarrathod7568/Health-and-Wellness-App",
  },
  {
    title: "E-Learning Platform",
    description:
      "E-Learning Platform is a Khan Academy-inspired app offering courses and lessons. Users access video tutorials and practice exercises, while admins manage content and track user progress to optimize learning.",

    technologies: ["HTML", "CSS", "Sass", "Bootstrap"],
    images: [khan1, khan2, khan3],
    deployedLink: "https://innovatoracademy.netlify.app/",
    githubLink: "https://github.com/deep-maurya/Kaveri-Debugging-005",
  },
];

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // arrows: false,
  };

  return (
    <Section id="projects">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex w-full overflow-hidden"
          >
            <Card className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg dark:bg-gray-800 dark:bg-opacity-30 flex flex-col w-full max-w-sm mx-auto">
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-200 dark:text-gray-300">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <Slider {...settings} className="mb-4">
                  {project.images.map((image, imageIndex) => (
                    <div key={imageIndex} className="px-1">
                      <Image
                        src={image}
                        alt={`${project.title} screenshot ${imageIndex + 1}`}
                        width={400}
                        height={300}
                        className="rounded-md w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </Slider>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-purple-600 dark:bg-purple-800 text-white px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white"
                  onClick={() => window.open(project.deployedLink, "_blank")}
                >
                  <Globe className="w-4 h-4" />
                  Live Demo
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white"
                  onClick={() => window.open(project.githubLink, "_blank")}
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
