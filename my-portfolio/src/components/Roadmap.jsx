import React from "react";
import { roadmapItems } from "../data/roadmapData";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { motion } from "framer-motion";

export default function Roadmap() {
  return (
    <section className="min-h-screen px-6 sm:px-12 md:px-20 lg:px-32 py-12 bg-gray-950">
      <h1 className="text-4xl font-bold mb-10 text-center text-white">
        My Achievements
      </h1>

      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        {roadmapItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 text-white p-6 rounded-xl shadow-md"
            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-lg">{item}</p>
          </motion.div>
        ))}
      </div>

      {/* Social/Contact Icons */}
      <div className="flex justify-center gap-6 mt-12">
        <a
          href="https://github.com/Hemajayaraj05"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-indigo-400 transition-colors text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="http://www.linkedin.com/in/hemalatha-jayarajan-137870271"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 transition-colors text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:hemajayarajan05@gmail.com"
          className="text-white hover:text-red-500 transition-colors text-2xl"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://leetcode.com/u/m7NTp4Agf9/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-400 transition-colors text-2xl"
        >
          <SiLeetcode />
        </a>
        <a
          href="https://www.geeksforgeeks.org/profile/hemajaya15ex"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-green-400 transition-colors text-2xl"
        >
          <SiGeeksforgeeks />
        </a>
      </div>
    </section>
  );
}
