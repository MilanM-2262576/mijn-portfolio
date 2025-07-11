import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InfoPopup({ show, onClose }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0, y: -50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.7, opacity: 0, y: -50 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-gradient-to-br from-blue-100 to-blue-300 border-4 border-blue-200 rounded-2xl shadow-2xl px-10 py-8 flex flex-col items-center max-w-lg"
          >
            <motion.div
              initial={{ rotate: -10, scale: 0.8 }}
              animate={{ rotate: 0, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
              className="mb-4"
            >
              <svg width="64" height="64" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="#2563eb" />
                <text x="12" y="17" textAnchor="middle" fontSize="2.5rem" fill="#fff" fontFamily="Arial" fontWeight="bold">i</text>
              </svg>
            </motion.div>
            <h2 className="text-2xl font-bold text-blue-800 mb-2 drop-shadow-lg">Hoe werkt deze blockchain demo?</h2>
            <ul className="text-black text-base mb-4 list-disc list-inside text-left">
              <li>
                Deze website gebruikt een <b>Rust backend</b> die draait op <b>Render.com</b>.
              </li>
              <li>
                Je kunt blokken toevoegen met transacties, en de geldigheid van de blockchain controleren.
              </li>
              <li>
                Soms kan het <b>even duren</b> voordat de server reageert, omdat Render de backend soms uit slaapstand moet halen.
              </li>
              <li>
                Alles wat je ziet is <b>live</b> verbonden met de backend via REST API.
              </li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.08, backgroundColor: "#2563eb", color: "#fff" }}
              whileTap={{ scale: 0.96 }}
              className="mt-2 px-6 py-2 bg-blue-200 text-blue-800 font-semibold rounded shadow hover:bg-blue-400 transition"
              onClick={onClose}
            >
              Sluiten
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}