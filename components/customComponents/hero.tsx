"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Section from "./section";
import img2 from "../../app/assests/Saif.jpg";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "Hi, I am Saiful Islam...!!";
  const typingSpeed = 150;
  const deletingSpeed = 100;

  useEffect(() => {
    let timer: any;
    if (!isDeleting && displayText !== fullText) {
      timer = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayText !== "") {
      timer = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length - 1));
      }, deletingSpeed);
    } else if (displayText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (displayText === "" && isDeleting) {
      setIsDeleting(false);
    }
    return () => clearTimeout(timer);
  }, [displayText, isDeleting]);

  return (
    <Section
      id="hero"
      className="flex items-center justify-center min-h-screen pt-20"
    >
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className="mb-8"
        >
          <Image
            src={img2}
            alt="Your Name"
            width={200}
            height={200}
            className="rounded-full mx-auto border-4 border-white shadow-lg"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
        >
          <span className="  bg-clip-text  text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {displayText}
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8"
        >
          A passionate Web Developer from India
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            asChild
            className="bg-white text-purple-600 hover:bg-purple-100 dark:bg-purple-800 dark:text-white dark:hover:bg-purple-700"
          >
            <a href="#contact">Get in touch</a>
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
