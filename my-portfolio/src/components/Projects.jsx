import React from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../data/projects";

const directions = ["left", "right", "top", "bottom"];

export default function ProjectsPage() {
  return (
    <section className="min-h-screen px-6 sm:px-12 md:px-20 lg:px-32 py-12 bg-gray-950">
      <h1 className="text-3xl font-bold mb-12 text-center text-white">
        My Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            direction={directions[index % directions.length]}
          />
        ))}
      </div>
    </section>
  );
}
