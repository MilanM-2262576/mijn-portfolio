import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BlockchainUIPage() {
  const [chain, setChain] = useState([]);
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [showValidPopup, setShowValidPopup] = useState(false);
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [newBlockData, setNewBlockData] = useState("");
  const [isMining, setIsMining] = useState(false);

  const [sender, setSender] = useState("");
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState(1);

  // Blockchain ophalen
  useEffect(() => {
    fetch("http://milanmuroni.be")   //fetch("http://127.0.0.1:8080/chain")
      .then((res) => res.json())
      .then((data) => setChain(data));
  }, []);

  // Validiteit-popup automatisch sluiten
  useEffect(() => {
    if (showValidPopup) {
      const timer = setTimeout(() => setShowValidPopup(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showValidPopup]);

  const handleAddBlock = (e) => {
    e.preventDefault();
    setIsMining(true);
    const newTransactions = [
      { sender, recipient, amount: Number(amount) }
    ];
    fetch("http://127.0.0.1:8080/add_block", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTransactions),
    })
      .then((res) => res.json())
      .then((updatedChain) => {
        setChain(updatedChain);
        setIsMining(false);
        setShowAddPopup(false);
        setSender("");
        setRecipient("");
        setAmount(1);
      });
  };

  return (
    <section className="flex flex-col items-center w-full min-h-screen pt-28">
      {/* Navbar */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-3xl rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 px-6 shadow-2xl z-40 border border-blue-300">
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold tracking-wide flex items-center gap-2">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="inline-block mr-2"><circle cx="12" cy="12" r="10" fill="#2563eb"/><path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Blockchain Dashboard
          </span>
          <div className="flex gap-3">
            <button
              className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-400 transition font-semibold shadow"
              onClick={() => {
                fetch("http://127.0.0.1:8080/is_valid")
                  .then(res => res.json())
                  .then(isValid => {
                    if (isValid) {
                      setShowValidPopup(true);
                    } else {
                      alert("Blockchain is NIET geldig!");
                    }
                  });
              }}
            >
              Check validiteit blockchain
            </button>
            <button
              className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-400 transition font-semibold shadow"
              onClick={() => setShowAddPopup(true)}
            >
              Add block
            </button>
          </div>
        </div>
      </div>

      {/* Geldig-popup */}
      <AnimatePresence>
        {showValidPopup && (
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
                onClick={() => setShowValidPopup(false)}
                className="mt-2 px-4 py-2 bg-white/80 text-blue-700 font-semibold rounded shadow hover:bg-white"
              >
                Sluiten
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add block popup */}
      <AnimatePresence>
        {showAddPopup && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.form
              onSubmit={handleAddBlock}
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
                  disabled={isMining} // Toevoegen en Annuleren zijn disabled tijdens minen
                >
                  Toevoegen
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition font-semibold"
                  onClick={() => setShowAddPopup(false)}
                  disabled={isMining} // Toevoegen en Annuleren zijn disabled tijdens minen
                >
                  Annuleren
                </button>
              </div>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-700 mt-16 mb-4 text-center">
        mini-blockchain UI
      </h1>

    {/* Blockchain weergave */}
    <div className="w-full p-4">
      <div
        className="grid gap-4"
        style={{
          gridTemplateColumns: "repeat(6, minmax(200px, 1fr))",
          width: "fit-content",
          margin: "0 auto"
        }}
      >
        {chain.map((block) => (
          <div
            key={block.index}
            onClick={() => setSelectedBlock(block)}
            className="flex flex-col items-center bg-white border border-gray-300 rounded-lg shadow-md p-4 min-w-[200px] cursor-pointer hover:bg-gray-100 transition"
          >
            <p className="text-sm font-bold text-gray-700">Blok {block.index}</p>
          </div>
        ))}
      </div>
    </div>

      {/* Geselecteerd blok details */}
     {selectedBlock && (
      <div className="mt-8 p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-xl font-bold text-blue-700 mb-4">
          Details van Blok {selectedBlock.index}
        </h2>
        <strong className="text-black">Transacties:</strong>
        <ul>
          {selectedBlock.transactions.map((tx, i) => (
            <li key={i} className="text-black">
              {tx.sender} → {tx.recipient}: {tx.amount}
            </li>
          ))}
        </ul>
        <p className="text-sm text-black">
          <strong>Hash:</strong> {selectedBlock.hash}
        </p>
        <p className="text-sm text-black">
          <strong>Previous Hash:</strong> {selectedBlock.prev_hash}
        </p>
        <p className="text-sm text-black">
          <strong>Timestamp:</strong> {selectedBlock.timestamp || "N/A"}
        </p>
        <button
          onClick={() => setSelectedBlock(null)}
          className="mt-4 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition"
        >
          Sluiten
        </button>
      </div>
    )}
    </section>
  );
}