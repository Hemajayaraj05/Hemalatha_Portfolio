import React from "react";
import { roadmapItems } from "../data/roadmapData";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/Hemajayaraj05",
    hover: "hover:text-indigo-400",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/hemalatha-jayarajan-137870271",
    hover: "hover:text-blue-500",
  },
  {
    name: "Email",
    icon: <FaEnvelope />,
    link: "mailto:hemajayarajan05@gmail.com",
    hover: "hover:text-red-400",
  },
  {
    name: "LeetCode",
    icon: <SiLeetcode />,
    link: "https://leetcode.com/u/m7NTp4Agf9/",
    hover: "hover:text-yellow-400",
  },
  {
    name: "GeeksforGeeks",
    icon: <SiGeeksforgeeks />,
    link: "https://www.geeksforgeeks.org/profile/hemajaya15ex",
    hover: "hover:text-green-400",
  },
];

export default function Roadmap() {
  return (
    <section className="min-h-screen px-6 sm:px-12 md:px-20 lg:px-32 py-12 bg-gray-950">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-12 text-center text-white">
        My Achievements
      </h1>

      {/* Achievements List */}
      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        {roadmapItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-800/80 backdrop-blur-md text-white p-6 rounded-xl shadow-md"
            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-lg">{item}</p>
          </motion.div>
        ))}
      </div>

      {/* Social / Contact Glass Cards */}
      <div className="flex flex-wrap justify-center gap-6 mt-16">
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.link}
            target={social.name !== "Email" ? "_blank" : undefined}
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -4 }}
            className={`
              flex items-center gap-3 px-2 py-2
              rounded-2xl cursor-pointer
              bg-gray/10 backdrop-blur-lg
              border border-white/20
              text-white text-lg font-medium
              shadow-lg transition-all
              ${social.hover}
            `}
          >
            <span className="text-xl">{social.icon}</span>
            <span className="text-sm font-thin">{social.name}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
