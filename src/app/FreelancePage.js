import { useState } from "react";
import { FaBriefcase, FaLightbulb, FaComments, FaCode, FaRocket, FaCheckCircle, FaInfoCircle, FaEuroSign } from "react-icons/fa";

export default function FreelancePage() {
  const [showInfo, setShowInfo] = useState(false);
  const [showPriceInfo, setShowPriceInfo] = useState(false);

  return (
    <section className="flex flex-col items-center w-full min-h-screen bg-gradient-to-br from-blue-950 via-gray-950 to-purple-950">
      {/* Titel */}
      <div className="flex gap-2 sm:gap-4 mt-8 mb-6 sm:mb-10">
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-t-lg font-bold text-base sm:text-lg transition-colors duration-200 bg-white text-blue-900 shadow-lg"
          type="button"
        >
          <FaBriefcase />
          Website Ontwikkeling
        </button>
      </div>

      {/* Prijs badge + info knop */}
      <div className="flex items-center gap-3 mb-4 relative">
        <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 font-bold px-5 py-2 rounded-full shadow-lg text-lg sm:text-2xl animate-bounce">
          <span className="text-2xl sm:text-3xl font-extrabold">+/- €300</span> voor je website!
        </span>
        <button
          onClick={() => setShowPriceInfo((v) => !v)}
          className={`ml-2 text-green-600 hover:text-green-800 transition-colors focus:outline-none animate-bounce ${showPriceInfo ? "animate-none" : ""}`}
          aria-label="Prijsopbouw info"
          type="button"
        >
          <FaInfoCircle className="text-xl sm:text-2xl drop-shadow" />
        </button>
        {/* Info popup animatie */}
        {showPriceInfo && (
          <div className="absolute left-1/2 top-14 -translate-x-1/2 w-[340px] sm:w-[400px] bg-white border border-green-200 rounded-xl shadow-2xl p-5 z-30 animate-fadeIn">
            <div className="flex items-center gap-2 mb-2">
              <FaEuroSign className="text-green-500" />
              <span className="font-bold text-green-700">Prijsopbouw van €300</span>
            </div>
            <div className="bg-green-50 border border-green-100 rounded-lg p-3 mb-2 text-green-800 text-xs sm:text-sm">
              <span className="font-semibold">Let op:</span> <br />
              <span>
                <span className="font-bold">Een eenvoudige, statische website</span> (zoals een visitekaartje of portfolio) valt meestal binnen dit tarief.<br />
                <span className="font-bold">Wil je meer pagina’s, dynamische functies</span> Dan wordt de prijs in overleg aangepast. <br />
                <span className="font-bold">Fullstack website? </span> Dan loopt de prijs op tot +/- €700
              </span>
            </div>
            <p className="text-xs text-green-700">
              Alles inbegrepen: van eerste gesprek tot livegang en nazorg. Geen verborgen kosten!
            </p>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="w-full flex-1">
        <div className="flex flex-col items-center w-full flex-1 py-8 px-2">
          <h1 className="text-2xl xs:text-3xl sm:text-5xl font-extrabold text-blue-200 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3 drop-shadow-lg text-center">
            <FaBriefcase className="text-blue-400" /> Website Ontwikkeling: Mijn Aanpak
          </h1>
          <p className="text-gray-200 text-center max-w-xl sm:max-w-2xl mb-8 sm:mb-12 text-base sm:text-lg">
            Wil je een goedkope, snelle en moderne website? Hieronder lees je stap voor stap hoe ik jouw project aanpak – transparant, gestructureerd en met oog voor kwaliteit!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full max-w-4xl">
            {/* Stap 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col items-center border-t-4 border-blue-400 hover:scale-105 transition-transform duration-300">
              <FaLightbulb className="text-yellow-400 text-3xl sm:text-4xl mb-3 sm:mb-4" />
              <h2 className="text-base sm:text-xl font-bold mb-1 sm:mb-2 text-blue-900 text-center">1. Kennismaking & Analyse</h2>
              <p className="text-gray-700 text-center text-xs sm:text-base">
                We bespreken jouw wensen, doelen en doelgroep. Samen bepalen we de look & feel, functionaliteiten en het doel van de website.
              </p>
            </div>
            {/* Stap 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col items-center border-t-4 border-purple-400 hover:scale-105 transition-transform duration-300">
              <FaComments className="text-purple-400 text-3xl sm:text-4xl mb-3 sm:mb-4" />
              <h2 className="text-base sm:text-xl font-bold mb-1 sm:mb-2 text-blue-900 text-center">2. Voorstel & Design</h2>
              <p className="text-gray-700 text-center text-xs sm:text-base">
                Je ontvangt een visueel ontwerp (wireframe/mockup) en een duidelijke offerte. We stemmen samen af tot alles naar wens is.
              </p>
            </div>
            {/* Stap 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col items-center border-t-4 border-green-400 hover:scale-105 transition-transform duration-300">
              <FaCode className="text-green-400 text-3xl sm:text-4xl mb-3 sm:mb-4" />
              <h2 className="text-base sm:text-xl font-bold mb-1 sm:mb-2 text-blue-900 text-center">3. Ontwikkeling</h2>
              <p className="text-gray-700 text-center text-xs sm:text-base">
                Ik bouw de website met moderne technieken (React, Next.js, Tailwind CSS). Je krijgt tussentijds previews en kunt feedback geven.
              </p>
            </div>
            {/* Stap 4 */}
            <div className={`bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col items-center border-t-4 border-pink-400 hover:scale-105 transition-transform duration-300 relative ${showInfo ? "sm:row-span-2" : ""}`}>
              {/* Info knop rechtsboven */}
              <button
                onClick={() => setShowInfo((v) => !v)}
                className={`absolute top-3 right-3 sm:top-4 sm:right-4 text-blue-500 hover:text-blue-700 focus:outline-none animate-bounce ${showInfo ? "animate-none" : ""}`}
                aria-label="Meer info over hosting"
                type="button"
                style={{ zIndex: 2 }}
              >
                <FaInfoCircle className="text-xl sm:text-2xl drop-shadow" />
              </button>
              <div className="flex items-center gap-2 mb-1 w-full justify-center">
                <FaRocket className="text-pink-400 text-3xl sm:text-4xl" />
              </div>
              <h2 className="text-base sm:text-xl font-bold mb-1 sm:mb-2 text-blue-900 text-center">4. Oplevering & Nazorg</h2>
              <p className="text-gray-700 text-center text-xs sm:text-base mb-2">
                Na jouw akkoord wordt de site live gezet. Je krijgt uitleg, documentatie en ik bied support voor vragen of kleine aanpassingen.
              </p>
              {/* Info tekst in de card */}
              {showInfo && (
                <div className="w-full bg-blue-50 border border-blue-200 rounded-lg p-4 mt-2 text-xs sm:text-sm text-blue-900 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <FaInfoCircle className="text-blue-400" />
                    <span className="font-semibold">Hosting & Beheer via Vercel</span>
                  </div>
                  <p className="mb-1">
                    Ik host jouw website standaard op <span className="font-semibold text-blue-600">Vercel</span>. Dit is een moderne, snelle en veilige hostingdienst speciaal voor Next.js en React websites.
                  </p>
                  <ul className="list-disc list-inside mb-1 pl-3">
                    <li>Als klant krijg je toegang tot het <span className="font-semibold">Vercel dashboard</span>.</li>
                    <li>Hiermee kun je eenvoudig je site beheren, statistieken bekijken en zelfs zelf kleine aanpassingen doen.</li>
                    <li>Updates en nieuwe versies worden automatisch en snel uitgerold.</li>
                  </ul>
                  <p>
                    Vercel maakt het beheer van je website super eenvoudig, zonder technische kennis!
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="mt-12 sm:mt-16 flex flex-col items-center w-full">
            <FaCheckCircle className="text-green-400 text-4xl sm:text-5xl mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-2xl font-bold text-blue-200 mb-1 sm:mb-2 text-center">Klaar om samen te werken?</h3>
            <p className="text-gray-200 text-center max-w-xs sm:max-w-xl mb-3 sm:mb-4 text-sm sm:text-lg">
              Neem vrijblijvend contact op voor een kennismaking. Samen maken we jouw online droom werkelijkheid!
            </p>
            <form
              action="https://formspree.io/f/xgvyqgdr"
              method="POST"
              className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4 mb-8"
            >
              <label className="font-semibold text-blue-900">
                Naam
                <input
                  type="text"
                  name="naam"
                  required
                  className="mt-1 w-full border rounded px-3 py-2 text-gray-900"
                  autoComplete="name"
                />
              </label>
              <label className="font-semibold text-blue-900">
                E-mail
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 w-full border rounded px-3 py-2 text-gray-900"
                  autoComplete="email"
                />
              </label>
              <label className="font-semibold text-blue-900">
                Bericht
                <textarea
                  name="bericht"
                  required
                  rows={4}
                  className="mt-1 w-full border rounded px-3 py-2 text-gray-900"
                />
              </label>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-colors duration-200 text-base"
              >
                Verstuur bericht
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}