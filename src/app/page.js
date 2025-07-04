"use client";
import { useState } from "react";
import { FaFolderOpen, FaGraduationCap, FaUser, FaBriefcase} from "react-icons/fa";
import OverMijPage from "./OverMijPage";
import ProjectenPage from "./ProjectenPage";
import StudiePage from "./StudiePage";
import FreelancePage from "./FreelancePage";

const navItems = [
  { icon: <FaFolderOpen size={28} />, label: "Mijn Projecten" },
  { icon: <FaGraduationCap size={28} />, label: "Mijn Studie" },
  { icon: <FaUser size={28} />, label: "Over Mij" },
  { icon: <FaBriefcase size={28} />, label: "Freelancing" },
];

function SidebarNav({ current, setCurrent }) {
  return (
    <nav
      className="
        fixed
        sm:top-0 sm:left-0 sm:h-screen sm:w-20
        bottom-0 left-0 w-full h-16
        flex
        sm:flex-col flex-row
        items-center
        sm:justify-center justify-between
        gap-8
        z-50
        bg-gray-950
        shadow-lg
        px-4
      "
    >
      <div className="flex flex-1 sm:flex-col flex-row items-center justify-center w-full h-full gap-8">
        {navItems.map((item, idx) => (
          <button
            key={item.label}
            onClick={() => setCurrent(idx)}
            className={`group flex flex-col items-center focus:outline-none transition-colors ${
              current === idx ? "text-blue-600" : "text-gray-500 hover:text-blue-500"
            }`}
          >
            <span>{item.icon}</span>
            <span className="mt-2 px-2 py-1 rounded bg-white/90 text-gray-800 text-xs shadow opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity pointer-events-none select-none whitespace-nowrap sm:block hidden">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}

export default function HomePage() {
  const [current, setCurrent] = useState(2); // Start op OverMijPage

  return (
    <div className="flex min-h-screen">
      <SidebarNav current={current} setCurrent={setCurrent} />
      <main className="flex-1 flex flex-col items-center justify-center">
        {current === 0 && <ProjectenPage />}
        {current === 1 && <StudiePage />}
        {current === 2 && <OverMijPage onBekijkProjecten={() => setCurrent(0)} />}
        {current === 3 && <FreelancePage />}
      </main>
    </div>
  );
}