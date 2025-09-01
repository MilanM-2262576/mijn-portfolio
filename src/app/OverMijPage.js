import { useState } from "react";
import { motion } from "framer-motion";
import FloatingIcons from "./FloatingIcons";

export default function OverMijPage({ onBekijkProjecten, onBekijkFreelance }) {
  const [showExtra, setShowExtra] = useState(false);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen w-full bg-black overflow-x-hidden overflow-y-auto">
      <FloatingIcons />
      <motion.div
        className="relative z-10 bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-12 max-w-md sm:max-w-2xl w-full flex flex-col items-center mt-16 border border-blue-100"
        initial={{ opacity: 0, scale: 0.97, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        whileHover={{ scale: 1.015, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.12)" }}
      >
        <div className="flex flex-col items-center gap-2">
          <img
            src="/globe.svg"
            alt="Profiel"
            className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-blue-200 shadow-lg mb-2 bg-white"
          />
          <h1 className="text-3xl sm:text-5xl font-black text-blue-800 mb-1 tracking-tight text-center drop-shadow-sm">
            Milan Muroni
          </h1>
          <h2 className="text-base sm:text-lg text-blue-500 font-medium mb-4 text-center">
            Student Informatica @ UHasselt
          </h2>
        </div>
        <p className="text-gray-700 text-center mb-8 text-base sm:text-lg leading-relaxed font-light">
          Welkom op mijn portfolio! Hier ontdek je mijn projecten, studies en passies binnen de informatica.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full justify-center items-center mb-4">
          <a
            href="https://github.com/MilanM-2262576"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700/90 hover:bg-blue-800 text-white px-5 py-2.5 rounded-lg shadow transition font-semibold text-center w-full sm:w-auto"
          >
            GitHub
          </a>
          <button
            className="bg-white border border-blue-400 text-blue-700 px-5 py-2.5 rounded-lg shadow hover:bg-blue-50 transition font-semibold text-center w-full sm:w-auto"
            onClick={onBekijkProjecten}
          >
            Projecten
          </button>
        </div>
        <button
          className="mt-4 w-full px-7 py-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white text-lg font-bold rounded-2xl shadow-lg hover:scale-105 hover:from-blue-600 hover:to-purple-600 transition-all duration-200 border-0 tracking-wide flex items-center justify-center gap-2"
          onClick={onBekijkFreelance}
        >
          <span className="text-2xl">🚀</span> <span>Freelance aanbod</span>
        </button>
        {!showExtra && (
          <div className="w-full flex justify-end">
            <button
              onClick={() => setShowExtra(true)}
              className="mt-6 animate-bounce flex flex-col items-center group"
              aria-label="Meer over mij"
            >
              <span className="text-4xl text-blue-400 group-hover:text-blue-600 transition">&#8595;</span>
              <span className="text-xs text-blue-400 mt-1 group-hover:text-blue-600">Meer over mij</span>
            </button>
          </div>
        )}
      </motion.div>
      {showExtra && (
        <motion.div
          className="relative z-10 bg-white/90 backdrop-blur rounded-2xl shadow-lg p-6 sm:p-10 max-w-md sm:max-w-2xl w-full flex flex-col items-center mt-12 mb-20 border border-blue-100"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4 text-center tracking-tight">
            Meer over mij
          </h3>
          <p className="text-gray-800 text-center mb-4 text-base sm:text-lg leading-relaxed font-light">
            Ik ben Milan Muroni, een 21-jarige gepassioneerde student informatica aan UHasselt met een grote interesse in softwareontwikkeling, algoritmes en creatieve technologieën.<br /><br />
            Ik werk graag aan persoonlijke projecten, leer graag nieuwe programmeertalen en frameworks, en verdiep me in onderwerpen zoals AI, graphics en webontwikkeling.<br /><br />
            Contacteer me gerust voor een app, software, website, webapp of bijlessen programmeren. Ik help je graag verder!
          </p>
          <ul className="list-disc list-inside text-gray-700 text-base sm:text-lg mb-2 font-light">
            <li><span className="font-semibold text-blue-700">Favoriete talen:</span> Java, C++, Rust</li>
            <li><span className="font-semibold text-blue-700">Interesses:</span> Game development, AI, Data science, Computer Graphics, software...</li>
          </ul>
        </motion.div>
      )}
    </section>
  );
}