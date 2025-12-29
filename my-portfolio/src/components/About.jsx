import { Typewriter } from "react-simple-typewriter";
import profile from "../images/hema.jpg";
import resume from "../images/HEMALATHA_J.pdf";

export default function About() {
  return (
    <section className="min-h-screen flex flex-col items-center bg-gray-950 text-white px-6 py-12">

      {/* Quote at the top */}
      <h2 className="text-center text-xl md:text-xl  text-purple-300 mb-12">
        Innovating through logic, designing through passion ❤️
      </h2>

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
            <div className="absolute inset-0 bg-purple-500 blur-3xl opacity-30 rounded-full"></div>
            <img
              src={profile}
              alt="Hema Profile"
              className="relative w-full h-full object-cover rounded-full animate-float shadow-2xl border-4 border-purple-500/30"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I’m <span className="text-purple-400">HEMALATHA</span>
          </h1>

          <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-purple-300 h-10">
            <Typewriter
              words={["Full Stack Developer"]}
              loop={4}
              cursor
              cursorStyle="|"
              typeSpeed={80}
            />
          </h2>

          <p className="mt-6 text-gray-400 max-w-xl">
            I build modern, scalable web applications using React, TypeScript,
            Node.js, and databases like PostgreSQL.
          </p>

          {/* Download Resume Button */}
          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <a
              href={resume}
              download
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition"
            >
              Download Resume
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
