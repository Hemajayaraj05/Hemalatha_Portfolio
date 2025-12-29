import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-950 text-white py-4 px-8 hidden lg:flex justify-center shadow-md">
      <nav className="flex gap-12 text-lg font-medium">
        <a href="#about" className="hover:text-indigo-400 transition-colors">
          About
        </a>
        <a href="#skills" className="hover:text-indigo-400 transition-colors">
          Skills
        </a>
        <a href="#projects" className="hover:text-indigo-400 transition-colors">
          Projects
        </a>
        <a href="#achievements" className="hover:text-indigo-400 transition-colors">
          Achievements
        </a>
      </nav>
    </header>
  );
}
