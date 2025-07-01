import { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

export default function StudiePage() {
  const stappen = [
    { 
      titel: "1ste Bachelor", 
      vakken: ["Inleiding Algoritmen en Programmeren", "Imperatief Programmeren", "Object georienteerd programmeren",
        "Problem solving", "Redeneren en Abstraheren", "Calculus", "Databases", "Computer- en communicatie systemen", 
        "Microprocessoren", "Beleidsinformatica", "Projectvaardigheden"
      ]
    },
    { 
      titel: "2de Bachelor", 
      vakken: ["Algoritmen en datastructuren", "digitale elektronica", "Functioneel programmeren", "Natuurkunde en technologie",
        "Geavanceerd Object georienteerd programmeren", "Project en communicatievaardigheden 2", "Web programming",
        "Designing Interactive Systems", "Lineaire Algebra", "Computer Graphics & Visual computing", "Geavanceerde programmeertechnieken", 
      ]
    },
    { 
      titel: "3de Bachelor", 
      vakken: ["Algemene bedrijfskunde", "Wetenschapsfilosofie", "Besturingssystemen", "... 2025-2026"] 
    },
    { 
      titel: "1ste Master", 
      vakken: ["// nog niet begonnen //"]
    },
    { 
      titel: "2de Master", 
      vakken: ["// nog niet begonnen //"]
    },
  ];

  const [hovered, setHovered] = useState(null);

  return (
    <section className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8 text-blue-700 flex items-center gap-2">
        <FaGraduationCap className="text-blue-500" /> UHasselt Informatica
      </h1>
      <div className="relative">
        <div className="absolute left-5 top-0 h-full w-1 bg-blue-200 rounded"></div>
        <ul className="space-y-12 pl-12">
          {stappen.map((stap, idx) => (
            <motion.li
              key={idx}
              className="relative flex items-center group"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6, type: "spring" }}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="absolute -left-1.5 w-8 h-8 flex items-center justify-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow"></div>
              </div>
              <div className="bg-white/90 rounded-lg shadow p-4 min-w-[220px]">
                <div className="font-semibold text-blue-700">{stap.titel}</div>
              </div>
              {hovered === idx && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 40 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex items-center absolute left-full ml-4 z-10"
                >
                  <svg width="32" height="32" viewBox="0 0 32 32" className="text-blue-500">
                    <polyline
                      points="4,16 28,16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <polyline
                      points="20,8 28,16 20,24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="ml-2 bg-white rounded-lg shadow-lg p-4 min-w-[420px] border border-blue-200">
                    <div className="font-semibold text-blue-700 mb-2">Vakken</div>
                    <ul className="flex flex-wrap gap-2 text-gray-700 text-sm">
                      {stap.vakken.map((vak, i) => (
                        <li key={i} className="bg-blue-50 px-2 py-1 rounded whitespace-nowrap">{vak}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}