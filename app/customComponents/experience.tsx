"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Section from "./section";

const experiences = [
  {
    title: "Web Developer",
    company: "Tech Solutions Inc.",
    duration: "4 months",
    description:
      "Worked on various client projects, focusing on front-end development using React and Next.js.",
  },
  {
    title: "Web Development Intern",
    company: "Digital Innovations Co.",
    duration: "6 months",
    description:
      "Assisted in the development of responsive websites and learned best practices in web development.",
  },
];

export default function Experience() {
  return (
    <Section id="experience">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{exp.title}</CardTitle>
                <CardDescription>
                  {exp.company} - {exp.duration}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{exp.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
