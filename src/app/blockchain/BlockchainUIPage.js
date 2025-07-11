import React, { useEffect, useState } from "react";
import BlockchainGrid from "./BlockchainGrid";
import BlockDetails from "./BlockDetails";
import InfoPopup from "./InfoPopup";
import AddBlockPopup from "./AddBlockPopup";
import ValidPopup from "./ValidPopup";
import BlockchainBackground from "./BlockchainBackground";

export default function BlockchainUIPage() {
  const API_BASE = "https://mini-blockchain.onrender.com";

  const [chain, setChain] = useState([]);
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [showValidPopup, setShowValidPopup] = useState(false);
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showInfoPopup, setShowInfoPopup] = useState(false);
  const [isMining, setIsMining] = useState(false);
  const [sender, setSender] = useState("");
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    fetch(`${API_BASE}/chain`)
      .then((res) => res.json())
      .then((data) => setChain(data));
  }, []);

  useEffect(() => {
    if (showValidPopup) {
      const timer = setTimeout(() => setShowValidPopup(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showValidPopup]);

  const handleAddBlock = (e) => {
    e.preventDefault();
    setIsMining(true);
    const newTransactions = [{ sender, recipient, amount: Number(amount) }];
    fetch(`${API_BASE}/add_block`, {
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
      <button
        onClick={() => setShowInfoPopup(true)}
        className="fixed top-5 left-30 z-40 flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg shadow hover:bg-blue-200 transition font-semibold"
        style={{ minWidth: 80 }}
      >
        <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="2" fill="#dbeafe" />
          <path d="M12 8v2m0 4h.01" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Info
      </button>

      <InfoPopup show={showInfoPopup} onClose={() => setShowInfoPopup(false)} />

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
                fetch(`${API_BASE}/is_valid`)
                  .then(res => res.json())
                  .then(isValid => {
                    if (isValid) setShowValidPopup(true);
                    else alert("Blockchain is NIET geldig!");
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

      <ValidPopup show={showValidPopup} onClose={() => setShowValidPopup(false)} />

      <AddBlockPopup
        show={showAddPopup}
        onClose={() => setShowAddPopup(false)}
        onSubmit={handleAddBlock}
        sender={sender}
        setSender={setSender}
        recipient={recipient}
        setRecipient={setRecipient}
        amount={amount}
        setAmount={setAmount}
        isMining={isMining}
      />

      <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-700 mt-16 mb-4 text-center">
        mini-blockchain UI
      </h1>

      <div className="w-full p-4">
        <BlockchainGrid chain={chain} setSelectedBlock={setSelectedBlock} />
      </div>

      {selectedBlock && (
        <BlockDetails block={selectedBlock} onClose={() => setSelectedBlock(null)} />
      )}
    </section>
  );
}