import { useState } from "react";
import { motion } from "framer-motion";
import FloatingIcons from "./FloatingIcons";

export default function OverMijPage({ onBekijkProjecten }) {
  const [showExtra, setShowExtra] = useState(false);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen w-full bg-black overflow-x-hidden overflow-y-auto">
      <FloatingIcons />
      <motion.div
        className="relative z-10 bg-white/90 rounded-xl shadow-2xl p-4 sm:p-8 max-w-xs sm:max-w-2xl w-full flex flex-col items-center mt-10"
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        whileHover={{ scale: 1.03, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.25)" }}
      >
        <img
          src="/globe.svg"
          alt="Profiel"
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-blue-300 shadow mb-4 sm:mb-6"
        />
        <h1 className="text-2xl sm:text-4xl font-extrabold text-blue-700 mb-2 text-center">
          Milan Muroni
        </h1>
        <h2 className="text-lg sm:text-xl text-blue-600 mb-4 text-center">
          Student Informatica UHasselt
        </h2>
        <p className="text-gray-700 text-center mb-6 text-sm sm:text-base">
          Op deze website vind je een overzicht van mijn projecten, studie en interesses binnen de informatica. 
        </p>
         <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 w-full justify-center items-center">
          <a
            href="https://github.com/MilanM-2262576"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition text-center w-full sm:w-auto"
          >
            Bekijk mijn GitHub
          </a>
          <button
            className="bg-white border border-blue-600 text-blue-700 px-4 py-2 rounded shadow hover:bg-blue-50 transition text-center w-full sm:w-auto"
            onClick={onBekijkProjecten}
          >
            Bekijk projecten
          </button>
        </div>
        {/* Grote pijl naar beneden RECHTS ONDERIN DE CARD */}
        {!showExtra && (
          <div className="w-full flex justify-end">
            <button
              onClick={() => setShowExtra(true)}
              className="mt-4 animate-bounce flex flex-col items-center group"
              aria-label="Meer over mij"
            >
              <span className="text-5xl text-blue-600 group-hover:text-blue-800 transition">&#8595;</span>
              <span className="text-xs text-blue-600 mt-1">Meer over mij</span>
            </button>
          </div>
        )}
      </motion.div>
      {/* Extra informatie sectie */}
      {showExtra && (
        <motion.div
          className="relative z-10 bg-white/80 rounded-xl shadow-xl p-4 sm:p-8 max-w-xs sm:max-w-2xl w-full flex flex-col items-center mt-16 mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-blue-700 mb-4 text-center">Meer over mij</h3>
          <p className="text-gray-800 text-center mb-4 text-sm sm:text-base">
            Ik ben Milan Muroni een 21 jarige gepassioneerde student informatica aan UHasselt met een grote interesse in softwareontwikkeling, algoritmes en creatieve technologieën.
            <br /><br />
            Ik werk graag aan persoonlijke projecten, leer graag nieuwe programmeertalen en frameworks, en verdiep ik me in onderwerpen zoals AI, graphics, webontwikkeling....
            <br /><br />
            U mag me altijd contacteren indien u interesse heeft in een app, software, website, webapp, bijlessen programmeren... Ik help u graag verder.
          </p>
          <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base mb-2">
            <li>Favoriete talen: Java, C++, Rust</li>
            <li>Interesses: Game development, AI, Data science, Computer Graphics, software...</li>
          </ul>
        </motion.div>
      )}
    </section>
  );
}