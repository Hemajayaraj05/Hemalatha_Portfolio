import React from "react";
import SkillCard from "./SkillCard";
import { skillsData } from "../data/skills";

export default function SkillsPage() {
  return (
    <section className="min-h-screen px-6 sm:px-12 md:px-20 lg:px-32 py-12 bg-gray-950 text-white ">
      <h1 className="text-3xl font-bold mb- text-center text-white">My Skills</h1>

      {Object.entries(skillsData).map(([category, skills]) => (
        <div key={category} className="mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-white">{category}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-6 justify-center">
            {skills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
