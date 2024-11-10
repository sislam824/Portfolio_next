/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import Section from "./section";

export default function About() {
  return (
    <Section id="about">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="mb-4">
          I am a Full-Stack Web Developer from India. Self-motivated and curious
          with a keen interest in building user-friendly products. Looking
          forward to applying technical skills like CSS, MERN, and JavaScript to
          all the organizations that I offer my services to and help the
          organization grow and develop alongside me.
        </p>
      </motion.div>
    </Section>
  );
}
