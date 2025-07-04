import { useState } from "react";
import { FaBriefcase, FaLightbulb, FaComments, FaCode, FaRocket, FaCheckCircle, FaInfoCircle, FaMobileAlt } from "react-icons/fa";

const TABS = [
  { key: "website", label: "Website Ontwikkeling", icon: <FaBriefcase /> },
  { key: "app", label: "App Ontwikkeling", icon: <FaMobileAlt /> },
];

export default function FreelancePage() {
  const [activeTab, setActiveTab] = useState("website");
  const [showInfo, setShowInfo] = useState(false);
  const [showAppInfo, setShowAppInfo] = useState(false);

  return (
    <section className="flex flex-col items-center w-full min-h-screen bg-gradient-to-br from-blue-950 via-gray-950 to-purple-950">
      {/* Tabs */}
      <div className="flex gap-2 sm:gap-4 mt-8 mb-6 sm:mb-10">
        {TABS.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-t-lg font-bold text-base sm:text-lg transition-colors duration-200
              ${activeTab === tab.key
                ? "bg-white text-blue-900 shadow-lg"
                : "bg-blue-900 text-blue-200 hover:bg-blue-800"}
            `}
            type="button"
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="w-full flex-1">
        {activeTab === "website" && (
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
                {/* In plaats van popup: info tekst in de card */}
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
        )}

        {activeTab === "app" && (
          <div className="flex flex-col items-center w-full flex-1 py-8 px-2">
            <h1 className="text-2xl xs:text-3xl sm:text-5xl font-extrabold text-blue-200 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3 drop-shadow-lg text-center">
              <FaMobileAlt className="text-blue-400" /> App Ontwikkeling: Mijn Werkwijze
            </h1>
            <p className="text-gray-200 text-center max-w-xl sm:max-w-2xl mb-8 sm:mb-12 text-base sm:text-lg">
              Wil je goedkoop een mobiele app laten maken? Ook daarvoor heb ik een gestructureerde aanpak!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full max-w-4xl">
              {/* Stap 1 */}
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col items-center border-t-4 border-blue-400">
                <FaLightbulb className="text-yellow-400 text-3xl sm:text-4xl mb-3 sm:mb-4" />
                <h2 className="text-base sm:text-xl font-bold mb-1 sm:mb-2 text-blue-900 text-center">1. Kennismaking & Analyse</h2>
                <p className="text-gray-700 text-center text-xs sm:text-base">
                  We bespreken jouw app-idee en gewenste functionaliteiten.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col items-center border-t-4 border-purple-400">
                <FaComments className="text-purple-400 text-3xl sm:text-4xl mb-3 sm:mb-4" />
                <h2 className="text-base sm:text-xl font-bold mb-1 sm:mb-2 text-blue-900 text-center">2. Voorstel en design</h2>
                <p className="text-gray-700 text-center text-xs sm:text-base">
                  Je ontvangt een prototype/wireframe en een duidelijke offerte.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col items-center border-t-4 border-green-400">
                <FaCode className="text-green-400 text-3xl sm:text-4xl mb-3 sm:mb-4" />
                <h2 className="text-base sm:text-xl font-bold mb-1 sm:mb-2 text-blue-900 text-center">3. Ontwikkeling</h2>
                <p className="text-gray-700 text-center text-xs sm:text-base">
                  Ik ontwikkel de app met moderne technologieën (Flutter, Dart). Je krijgt regelmatig updates.
                </p>
              </div>
              <div className={`bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col items-center border-t-4 border-pink-400 relative ${showAppInfo ? "sm:row-span-2" : ""}`}>
                <button
                  onClick={() => setShowAppInfo((v) => !v)}
                  className={`absolute top-3 right-3 sm:top-4 sm:right-4 text-blue-500 hover:text-blue-700 focus:outline-none animate-bounce ${showAppInfo ? "animate-none" : ""}`}
                  aria-label="Meer info over app deployment"
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
                  Na oplevering help ik je met publicatie in de app stores of als web-app. Support inbegrepen!
                </p>
                {showAppInfo && (
                  <div className="w-full bg-blue-50 border border-blue-200 rounded-lg p-4 mt-2 text-xs sm:text-sm text-blue-900 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <FaInfoCircle className="text-blue-400" />
                      <span className="font-semibold">App Deployment & Beheer</span>
                    </div>
                    <p>
                      Ik begeleid je bij het publiceren van je app in de Apple App Store, Google Play Store.
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-12 sm:mt-16 flex flex-col items-center w-full">
              <FaCheckCircle className="text-green-400 text-4xl sm:text-5xl mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-2xl font-bold text-blue-200 mb-1 sm:mb-2 text-center">Interesse in een app?</h3>
              <p className="text-gray-200 text-center max-w-xs sm:max-w-xl mb-3 sm:max-w-4 text-sm sm:text-lg">
                Neem vrijblijvend contact op en ontdek de mogelijkheden voor jouw app!
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
        )}
      </div>
    </section>
  );
}