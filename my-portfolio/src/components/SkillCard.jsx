import React, { useRef } from "react";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as MdIcons from "react-icons/md";

const Icons = { ...FaIcons, ...SiIcons, ...MdIcons };

export default function SkillCard({ skill }) {
  const cardRef = useRef(null);
  const Icon = Icons[skill.icon];

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;

    card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div className="perspective w-28 h-28 sm:w-32 sm:h-32 md:w-24 md:h-24">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full h-full rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500
                   flex flex-col items-center justify-center gap-2 text-white
                   transition-transform duration-300 ease-out shadow-xl"
      >
        {Icon && <Icon className="text-3xl sm:text-4xl" />}
        <p className="text-xs sm:text-sm font-medium text-center">
          {skill.name}
        </p>

        {/* Cursor light effect */}
        <span className="pointer-events-none absolute inset-0 rounded-xl bg-white/10 opacity-0 hover:opacity-100 transition-opacity" />
      </div>
    </div>
  );
}
