import React, { useEffect, useState } from "react";

export default function ProjectCard({ project, direction = "left" }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Slide-in animation from direction
  let fromClass = "";
  switch (direction) {
    case "left":
      fromClass = "translate-x-[-50px]";
      break;
    case "right":
      fromClass = "translate-x-[50px]";
      break;
    case "top":
      fromClass = "translate-y-[-50px]";
      break;
    case "bottom":
      fromClass = "translate-y-[50px]";
      break;
    default:
      fromClass = "translate-x-[-50px]";
  }

  return (
    <div
      className={`bg-white/10 backdrop-blur-md rounded-xl shadow-xl overflow-hidden
      transition-all duration-700 ease-out
      ${
        visible
          ? "translate-x-0 translate-y-0 opacity-100"
          : `${fromClass} opacity-0`
      }
      hover:scale-105 hover:shadow-2xl`}
    >
      {/* Image */}
      <div className="relative w-full aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-white">
          {project.title}
        </h3>

        <p className="text-gray-300 text-sm">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs rounded-full
              bg-purple-500/20 text-purple-300
              border border-purple-500/30"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-purple-400 hover:text-purple-600 font-medium underline"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}
