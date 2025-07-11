import React from "react";

export default function BlockDetails({ block, onClose }) {
  return (
    <div className="mt-8 p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md w-full max-w-2xl">
      <h2 className="text-xl font-bold text-blue-700 mb-4">
        Details van Blok {block.index}
      </h2>
      <strong className="text-black">Transacties:</strong>
      <ul>
        {block.transactions.map((tx, i) => (
          <li key={i} className="text-black">
            {tx.sender} → {tx.recipient}: {tx.amount}
          </li>
        ))}
      </ul>
      <p className="text-sm text-black">
        <strong>Hash:</strong> {block.hash}
      </p>
      <p className="text-sm text-black">
        <strong>Previous Hash:</strong> {block.prev_hash}
      </p>
      <p className="text-sm text-black">
        <strong>Timestamp:</strong> {block.timestamp || "N/A"}
      </p>
      <button
        onClick={onClose}
        className="mt-4 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition"
      >
        Sluiten
      </button>
    </div>
  );
}