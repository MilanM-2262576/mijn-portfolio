import React from "react";

export default function BlockchainGrid({ chain, setSelectedBlock }) {
  return (
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
          <p className="text-sm font-bold text-black">Blok {block.index}</p>
        </div>
      ))}
    </div>
  );
}