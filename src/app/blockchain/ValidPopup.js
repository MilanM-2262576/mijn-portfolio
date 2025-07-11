import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ValidPopup({ show, onClose }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-gradient-to-br from-blue-600 to-green-400 border-4 border-blue-200 rounded-2xl shadow-2xl px-10 py-8 flex flex-col items-center"
          >
            <motion.svg
              className="mb-4"
              width="64"
              height="64"
              fill="none"
              viewBox="0 0 24 24"
              initial={{ scale: 0 }}
              animate={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300, damping: 10, delay: 0.2 }}
            >
              <circle cx="12" cy="12" r="10" fill="#22c55e"/>
              <path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </motion.svg>
            <h2 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">Blockchain is geldig!</h2>
            <p className="text-white mb-2">Alles ziet er perfect uit 🎉</p>
            <button
              onClick={onClose}
              className="mt-2 px-4 py-2 bg-white/80 text-blue-700 font-semibold rounded shadow hover:bg-white"
            >
              Sluiten
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}