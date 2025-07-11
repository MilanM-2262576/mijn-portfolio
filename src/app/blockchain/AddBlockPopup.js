import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AddBlockPopup({
  show, onClose, onSubmit,
  sender, setSender, recipient, setRecipient, amount, setAmount, isMining
}) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.form
            onSubmit={onSubmit}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-white border-4 border-blue-200 rounded-2xl shadow-2xl px-10 py-8 flex flex-col items-center"
          >
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Nieuw blok toevoegen</h2>
            <input
              type="text"
              className="mb-2 px-4 py-2 border rounded w-64 text-black"
              placeholder="Afzender"
              value={sender}
              onChange={e => setSender(e.target.value)}
              required
              disabled={isMining}
            />
            <input
              type="text"
              className="mb-2 px-4 py-2 border rounded w-64 text-black"
              placeholder="Ontvanger"
              value={recipient}
              onChange={e => setRecipient(e.target.value)}
              required
              disabled={isMining}
            />
            <input
              type="number"
              className="mb-4 px-4 py-2 border rounded w-64 text-black"
              placeholder="Bedrag"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              min={1}
              required
              disabled={isMining}
            />
            {isMining ? (
              <div className="mb-4 text-blue-700 font-semibold animate-pulse">Mining blok... ⛏️</div>
            ) : null}
            <div className="flex gap-4">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition font-semibold"
                disabled={isMining}
              >
                Toevoegen
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition font-semibold"
                onClick={onClose}
                disabled={isMining}
              >
                Annuleren
              </button>
            </div>
          </motion.form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}