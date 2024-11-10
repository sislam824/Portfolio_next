"use client";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Home, Mail, Github, Phone, Linkedin } from "lucide-react";
import Link from "next/link";
import { FormEvent, useRef, useState } from "react";

interface ContactFormData {
  from_name?: string;
  reply_to?: string;
  message?: string;
}
export default function Contact() {
  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({});
  // console.log(formData);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setDone(false);
    setNotDone(false);
  };

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.from_name || !formData.reply_to || !formData.message) {
      setNotDone(true);
    } else {
      try {
        const result = await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          {
            from_name: formData.from_name,
            reply_to: formData.reply_to,
            message: formData.message,
          },
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
        );
        if (result.text === "OK") {
          setDone(true);
        }
      } catch (error) {
        console.error("Error sending email:", error);
        setNotDone(true);
      }
    }
  };

  return (
    <section
      id="contact"
      className="py-16 rounded-xl p-5 flex justify-center items-center  bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg dark:bg-gray-800 dark:bg-opacity-30 w-[90%] mx-auto mt-10"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          Get in Touch
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-start justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 max-w-md"
          >
            <form className="space-y-4 " onSubmit={sendEmail}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Input
                  type="text"
                  placeholder="Your Name"
                  required
                  name="from_name"
                  onChange={handleChange}
                  className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg text-white placeholder-gray-300 w-full border-none"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Input
                  type="email"
                  placeholder="Your Email"
                  required
                  name="reply_to"
                  onChange={handleChange}
                  className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg text-white placeholder-gray-300 w-full border-none"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Textarea
                  placeholder="Your Message"
                  required
                  name="message"
                  onChange={handleChange}
                  className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg text-white placeholder-gray-300 w-full border-none"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  type="submit"
                  className="w-full bg-white text-purple-600 hover:bg-purple-100 transition-colors duration-300"
                >
                  Send Message
                </Button>
                <span className="done">
                  {done && "Thanks for Contacting me"}
                </span>
              </motion.div>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 max-w-md space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Contact Information
            </h3>
            <ContactItem
              icon={<Home className="w-6 h-6" />}
              text="Bangalore, Karnataka"
            />
            <ContactItem
              icon={<Mail className="w-6 h-6" />}
              text="S.islam20000@gmail.com"
              href="mailto:S.islam20000@gmail.com"
            />
            <ContactItem
              icon={<Github className="w-6 h-6" />}
              text="Github"
              href="https://github.com/Sislam824"
            />
            <ContactItem
              icon={<Phone className="w-6 h-6" />}
              text="7454922637"
              href="tel:7454922637"
            />
            <ContactItem
              icon={<Linkedin className="w-6 h-6" />}
              text="Saiful Islam"
              href="https://www.linkedin.com/in/mohd-saiful-islam-1b4990309"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  text,
  href,
}: {
  icon: React.ReactNode;
  text: string;
  href?: string;
}) {
  const content = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center space-x-4 text-white hover:text-purple-200 transition-colors duration-300"
    >
      {icon}
      <span>{text}</span>
    </motion.div>
  );

  return href ? (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
    >
      {content}
    </Link>
  ) : (
    content
  );
}
