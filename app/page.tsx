"use client";

import React from "react";
import About from "@/components/customComponents/about";
import Contact from "@/components/customComponents/contact";
import Hero from "@/components/customComponents/hero";
import Navbar from "@/components/customComponents/navbar";
import Projects from "@/components/customComponents/projects";
import { useRandomBackgroundImage } from "./hooks/useRandomBackgroundImage";
import { useRandomGradient } from "./hooks/useRandomGradient";
import TechStack from "@/components/customComponents/tech-stack";
import Github from "@/components/customComponents/github";

export default function Home() {
  const { gradient } = useRandomGradient();

  return (
    <main
      className={`min-h-screen bg-gradient-to-br ${gradient} dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-white relative`}
    >
      {/* <div className="absolute inset-0 bg-black opacity-30"></div>{" "} */}
      {/* Overlay */}
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      {/* <Experience /> */}
      <Projects />
      <Github />
      <Contact />

      <div>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "#ff7e5f", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#feb47b", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <path
            d="M0,0V120H1200V0C1166.91,27.48,1101.67,49.26,1020,60.74,897.45,78.21,766.54,77.48,655.65,58.56,564.87,43.5,486.7,18.77,410,7.92,342.64-1.61,267.31.15,200,16.56,142.07,30.88,86.89,52.93,0,89.74Z"
            fill="url(#gradient)"
          />
        </svg>
      </div>
    </main>
  );
}
