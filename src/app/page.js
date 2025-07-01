"use client";
import { useState } from "react";
import { FaFolderOpen, FaGraduationCap, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

const navItems = [
  { icon: <FaFolderOpen size={28} />, label: "Mijn Projecten" },
  { icon: <FaGraduationCap size={28} />, label: "Mijn Studie" },
  { icon: <FaUser size={28} />, label: "Over Mij" },
];

function SidebarNav({ current, setCurrent }) {
  return (
    <nav className="fixed top-0 left-0 h-screen w-20 flex flex-col items-center justify-center gap-8 z-50 bg-gray-950 shadow-lg">
      {navItems.map((item, idx) => (
        <button
          key={item.label}
          onClick={() => setCurrent(idx)}
          className={`group flex flex-col items-center focus:outline-none transition-colors ${
            current === idx ? "text-blue-600" : "text-gray-500 hover:text-blue-500"
          }`}
        >
          <span>{item.icon}</span>
          <span className="mt-2 px-2 py-1 rounded bg-white/90 text-gray-800 text-xs shadow opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity pointer-events-none select-none whitespace-nowrap">
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  );
}

function ProjectenPage() {
  const projecten = [
    {
      titel: "OpenGL animation",
      tags: ["C++", "OpenGL", "GLSL"],
      korteBeschrijving: "Een roller coaster simulatie in OpenGL met scenery",
      beschrijving: `In dit project voor het vak Computer Graphics & Visual Computing heb ik en een groepspartner hebben we een
      interactieve 3D omgeving gebouwd met OpenGL in C++ en GLSL voor shader programming. De centrale focus lag hierbij op een geanimeerde achtbaan opgemaakt m.b.v. Bezier Curves waarop een karretje
      zich vloeiend voortbeweegt gecombineerd met dynamische belichting en visuele effecten.`,
      bullets: [
        "Bézier-curve animatie: een karretje beweegt over een samengestelde 3D-curve.",
        "Belichting: meerdere lichtbronnen (ambient, diffuse, specular, attenuatie)",
        "3D-modellen: geïmporteerd met Assimp en getextureerd weergegeven in de wereld.",
        "Camera’s: een handmatige first-person camera en een automatische achtbaancamera.",
        "Post-processing: beeldfilters zoals Gaussian blur en Laplacian kernel.",
        "Chroma-keying: groene achtergronden transparant maken met fragment shaders.",
        "Interactieve elementen: zoals color picking en vuurpartikels bij klikacties.",
        "Extra’s: hoogtekaart voor landschap en realistische wateranimatie."
      ],
      github: "https://github.com/MilanM-2262576/CG-VC--project",
      fotos: [
        
      ],
      youtube: "https://www.youtube.com/embed/aVNPC2o-Z88",
      finished: true,
    },
    {
      titel: "Shooter minigame",
      tags: ["Java", "LibGDX"],
      korteBeschrijving: "Mini pixelart 2D shootergame",
      beschrijving: `Om Object georienteerd java in te oefenen heb ik een 2D pixelart shootergame gemaakt waarbij je tegenstanders met je muis moet neerschieten,
      je hebt als speler limited HP en Ammo maar je kan je healen en herladen door pickups die random spawnen in de map. Pixelart heb ik zelf niet gemaakt en zijn free
      assets van het internet. Ik heb bij dit project extreem gelet op code kwaliteit en documentatie in de code en het gebruik van Model View Controller patroon.`,
      bullets: [
        "Besturing en gameplay: Verplaatsen -> WASD, Schieten -> muis klikken, Mikken -> hitmarker",
        "Gezondheid & Munitie: speler heeft HP en beperkte munitie",
        "Power-ups: medpacks vullen HP aan en ammo packs vullen munitie aan",
        "Sound effects inbegrepen",
        "Projectiestructuur : Gradle m.b.v gdx-liftoff template",
      ],
      github: "https://github.com/MilanM-2262576/2Dshooter",
      fotos: [
      ],
      youtube: "https://www.youtube.com/embed/b7_mIIIix5g",
      finished: true,
    },
    {
      titel: "Block jump",
      tags: ["Dart", "Flutter"],
      korteBeschrijving: "Mobile platformer game",
      beschrijving: `Je springt als blok heletijd omhoog via platformen door swipe bewegingen te doen, hoe hoger men geraakt hoe hoger de score maar hoe
        moeilijker het wordt. 
        NOG NIET AF
      `,
      bullets: [
          "Besturing en gameplay: omhoog swipen om te springen",
          "Score: elk platformer omhoog is +1 ",
      ],
      github: "https://github.com/MilanM-2262576/BlockJump",
      fotos: [
        "/projectfotos/BlockJump/1.png",
        "/projectfotos/BlockJump/2.png",
        "/projectfotos/BlockJump/3.png",
      ],
      youtube: "",
      finished: false,
    },
    {
      titel: "Snake game",
      tags: ["Java"],
      korteBeschrijving: "Mini snake game",
      beschrijving: `Traditionele Snake game met een enemy die de speler kan 'vermoorden.
        Deze heb game heb ik heel in het begin van het vak Geavanceerd object georienteerd gemaakt om de Swing UI mechanismen van java
        in te oefenen. 
      '`,
      bullets: [
        "Besturing: WASD voor bewegen, SPATIE voor sprinten",
        "Indien het duiveltje je aanraakt verlies je",
        "Simpele sound effecten en muziek (Ik heb geen rechten hiertoe)"
      ],
      github: "https://github.com/MilanM-2262576/Snake",
      youtube: "https://www.youtube.com/embed/KY9aYJFkAxg",
      finished: true,
    },
    {
      titel: "Killer Sudoku",
      tags: ["Rust"],
      korteBeschrijving: "Killer Sudoku oplosser",
      beschrijving: `Killer sudoku is een variant van sudoku die extra beperkingen oplegt. Het doel is om een 9x9 rooster te vullen met cijfers 1
        tot en met 9 zoals een gewone sudoku maar bijkomend zijn zogenaamde killing cages, net zoals elke rij kolom of vierkant in sudoku mag in iedere
        killing cage elk cijfer maar 1x voorkomen. Bij een killing cage is er echter ook een extra beperking dat de som van de cijfers in zo een cage gelijk
        moet zijn aan de gegeven waarde.
      `,
      bullets: [
        "Print: print de puzzel in een 9x9 formaat",
        "Test: test de geldigheid van de sudoku en markeert fouten met een X",
        "Solve: lost de puzzel op met een brute-force backtracking algoritme -> Ondersteunt sequentiele EN parallelle modus",
        "Input/Output: JSON",
        "Parallellisatie met rayon crate en CLI met clap crate",
      ],
      github: "https://github.com/MilanM-2262576/KillerSudoku",
      youtube: "",
      finished: true,
    },
    {

    },

    // Voeg meer projecten toe...
  ];

  const [openIdx, setOpenIdx] = useState(null);

  // Split projecten in finished en niet finished
  const finished = projecten.filter(p => p.finished);
  const notFinished = projecten.filter(p => !p.finished);

  return (
    <section className="flex flex-col items-center w-full">
      <h1 className="text-3xl font-bold mb-8 text-blue-700">Mijn Projecten</h1>

      <h2 className="text-2xl font-bold mt-4 mb-2 text-green-700">Afgerond</h2>
      <div className="flex flex-wrap gap-6 justify-center w-full">
        {finished.map((project, idx) => (
          <div
            key={project.titel}
            className="bg-white rounded-lg shadow-lg p-6 cursor-pointer transition-all duration-300 border border-blue-100 hover:scale-105 w-96"
            onClick={() => setOpenIdx(projecten.indexOf(project))}
          >
            <h2 className="text-xl font-semibold text-blue-700 mb-2 flex items-center gap-2">
              {project.titel}
              {project.tags && project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="ml-1 bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </h2>
            <p className="text-gray-700 mb-2">{project.korteBeschrijving}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-2 text-orange-600">Niet afgerond</h2>
      <div className="flex flex-wrap gap-6 justify-center w-full">
        {notFinished.map((project, idx) => (
          <div
            key={project.titel}
            className="bg-white rounded-lg shadow-lg p-6 cursor-pointer transition-all duration-300 border border-blue-100 hover:scale-105 w-96"
            onClick={() => setOpenIdx(projecten.indexOf(project))}
          >
            <h2 className="text-xl font-semibold text-blue-700 mb-2 flex items-center gap-2">
              {project.titel}
              {project.tags && project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="ml-1 bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </h2>
            <p className="text-gray-700 mb-2">{project.korteBeschrijving}</p>
          </div>
        ))}
      </div>

      {/* Overlay voor uitvergroot project */}
      {openIdx !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 overflow-auto">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-4xl w-full mx-4 relative animate-fadeIn">
            <button
              onClick={() => setOpenIdx(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-blue-700 text-2xl font-bold"
              aria-label="Sluiten"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
              {projecten[openIdx].titel}
              {projecten[openIdx].tags && projecten[openIdx].tags.map((tag, i) => (
                <span
                  key={i}
                  className="ml-1 bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </h2>
            <p className="mb-4 text-gray-800">{projecten[openIdx].beschrijving}</p>
            {/* Bullet points*/}
            {projecten[openIdx].bullets && (
              <div className="mb-4">
                <ul className="list-disc list-inside text-gray-700 text-sm">
                  {projecten[openIdx].bullets.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            <a
              href={projecten[openIdx].github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-4 text-blue-600 underline"
            >
              Bekijk op GitHub
            </a>
            <div className="flex flex-col gap-4 mb-6">
              {/* YouTube video indien aanwezig */}
              {projecten[openIdx].youtube && (
                <div className="w-full flex justify-center">
                  <iframe
                    width="720"
                    height="405"
                    src={projecten[openIdx].youtube}
                    title="YouTube video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-xl border max-w-full"
                    style={{ maxWidth: "100%" }}
                  ></iframe>
                </div>
              )}
              {/* Foto's indien aanwezig */}
              {projecten[openIdx].fotos && projecten[openIdx].fotos.length > 0 && (
                <div className="flex gap-4 flex-wrap justify-center">
                  {projecten[openIdx].fotos.map((foto, i) => (
                    <img
                      key={i}
                      src={foto}
                      alt={`Screenshot ${i + 1}`}
                      className="rounded border max-w-full h-auto"
                      style={{ maxHeight: "500px", objectFit: "contain" }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function StudiePage() {
  const stappen = [
    { 
      titel: "1ste Bachelor", 
      vakken: ["Inleiding Algoritmen en Programmeren", "Imperatief Programmeren", "Object georienteerd programmeren",
        "Problem solving", "Redeneren en Abstraheren", "Calculus", "Databases", "Computer- en communicatie systemen", 
        "Microprocessoren", "Beleidsinformatica", "Projectvaardigheden"
      ] // Vul zelf aan
    },
    { 
      titel: "2de Bachelor", 
      vakken: ["Algoritmen en datastructuren", "digitale elektronica", "Functioneel programmeren", "Natuurkunde en technologie",
        "Geavanceerd Object georienteerd programmeren", "Project en communicatievaardigheden 2", "Web programming",
        "Designing Interactive Systems", "Lineaire Algebra", "Computer Graphics & Visual computing", "Geavanceerde programmeertechnieken", 
      ] // Vul zelf aan
    },
    { 
      titel: "3de Bachelor", 
      vakken: ["Algemene bedrijfskunde", "Wetenschapsfilosofie", "Besturingssystemen", "... 2025-2026"] 
    },
    { 
      titel: "1ste Master", 
      vakken: ["// nog niet begonnen //"] // Vul zelf aan
    },
    { 
      titel: "2de Master", 
      vakken: ["// nog niet begonnen //"] // Vul zelf aan
    },
  ];

  const [hovered, setHovered] = useState(null);

  return (
    <section className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8 text-blue-700 flex items-center gap-2">
        <FaGraduationCap className="text-blue-500" /> UHasselt Informatica
      </h1>
      <div className="relative">
        {/* Verticale lijn */}
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
              {/* Bolletje */}
              <div className="absolute -left-1.5 w-8 h-8 flex items-center justify-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow"></div>
              </div>
              {/* Inhoud */}
              <div className="bg-white/90 rounded-lg shadow p-4 min-w-[220px]">
                <div className="font-semibold text-blue-700">{stap.titel}</div>
                {/* <div className="text-xs text-blue-900 mb-1">{stap.jaar}</div>
                <div className="text-gray-700 text-sm">{stap.beschrijving}</div> */}
              </div>
              {/* Pijl en vakken */}
              {hovered === idx && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 40 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex items-center absolute left-full ml-4 z-10"
                >
                  {/* Pijl */}
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
                  {/* Vakken */}
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

function OverMijPage() {
  return <h1 className="text-3xl font-bold">Over Mij</h1>;
}

// Hoofdcomponent
export default function HomePage() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="flex min-h-screen">
      <SidebarNav current={current} setCurrent={setCurrent} />
      <main className="flex-1 flex flex-col items-center justify-center">
        {current === 0 && <ProjectenPage />}
        {current === 1 && <StudiePage />}
        {current === 2 && <OverMijPage />}
      </main>
    </div>
  );
}