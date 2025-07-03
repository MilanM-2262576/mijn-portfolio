import { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectenPage() {
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
      youtube: "https://www.youtube.com/embed/GlYGgni5DZ8",
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
      titel: "Portfolio website",
      tags: ["Javascript", "HTML", "React"],
      korteBeschrijving: "Portfolio website",
      beschrijving: `De website waarop je nu zit. Eenvoudige website die een overzicht geeft van al mijn lopende/afgeronde projecten
        deze is zeer snel in elkaar gestoken zonder al te veel complexiteit.  
      `,
      bullets: [],
      github: "https://github.com/MilanM-2262576/mijn-portfolio",
      youtube: "",
      finished: true,
    },
    // Voeg meer projecten toe...
  ];

  const [openIdx, setOpenIdx] = useState(null);

  const finished = projecten.filter(p => p.finished);
  const notFinished = projecten.filter(p => !p.finished);

  return (
     <section className="flex flex-col items-center w-full pb-20">
      <motion.h1
        className="text-4xl sm:text-5xl font-extrabold mb-10 text-blue-700 text-center tracking-tight drop-shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
          Mijn Projecten
        </span>
      </motion.h1>

      <h2 className="text-2xl font-bold mt-4 mb-2 text-green-700">Afgerond</h2>
     <div className="flex flex-wrap gap-6 justify-center w-full">
        {finished.map((project, idx) => (
          <div
            key={project.titel}
            className="bg-white rounded-lg shadow-lg p-6 cursor-pointer transition-all duration-300 border border-blue-100 hover:scale-105 w-full max-w-xs sm:max-w-sm md:w-96"
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
            className="bg-white rounded-lg shadow-lg p-6 cursor-pointer transition-all duration-300 border border-blue-100 hover:scale-105 w-full max-w-xs sm:max-w-sm md:w-96"
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
         <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 overflow-auto py-8">
            <div className="bg-white rounded-xl shadow-2xl p-4 sm:p-8 max-w-full w-full sm:max-w-4xl mx-2 sm:mx-4 relative animate-fadeIn">
            <button
                onClick={() => setOpenIdx(null)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 text-gray-500 hover:text-blue-700 text-3xl sm:text-2xl font-bold bg-white/80 rounded-full w-10 h-10 flex items-center justify-center shadow-md border border-gray-200"
                aria-label="Sluiten"
                >
                &times;
            </button>
            <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2 flex-wrap">
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
            <p className="mb-4 text-gray-800 text-sm sm:text-base">{projecten[openIdx].beschrijving}</p>
            {/* Bullet points*/}
            {projecten[openIdx].bullets && (
              <div className="mb-4">
                <ul className="list-disc list-inside text-gray-700 text-xs sm:text-sm">
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
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      src={projecten[openIdx].youtube}
                      title="YouTube video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full rounded-xl border"
                    ></iframe>
                  </div>
                </div>
              )}
              {/* Foto's indien aanwezig */}
              {projecten[openIdx].fotos && projecten[openIdx].fotos.length > 0 && (
                <div className="flex gap-2 flex-wrap justify-center">
                  {projecten[openIdx].fotos.map((foto, i) => (
                    <img
                      key={i}
                      src={foto}
                      alt={`Screenshot ${i + 1}`}
                      className="rounded border max-w-full h-auto"
                      style={{ maxHeight: "250px", objectFit: "contain" }}
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