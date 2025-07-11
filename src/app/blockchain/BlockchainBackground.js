import React from "react";

// SVG animatie met blokjes en lijnen (blockchain-style)
// Gebruikt alleen standaard Tailwind animaties (animate-bounce, animate-pulse)
export default function BlockchainBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
    >
      {/* Geanimeerde SVG lijnen en blokjes */}
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1920 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Lijnen met lichte animatie */}
        <AnimatedLine x1={300} y1={250} x2={1620} y2={250} color="#38bdf8" />
        <AnimatedLine x1={500} y1={500} x2={1420} y2={500} color="#818cf8" />
        <AnimatedLine x1={700} y1={750} x2={1220} y2={750} color="#f472b6" />
        {/* Blokjes met bounce animatie */}
        <AnimatedBlock x={300} y={250} delay={0} />
        <AnimatedBlock x={700} y={250} delay={0.2} />
        <AnimatedBlock x={1100} y={250} delay={0.4} />
        <AnimatedBlock x={1500} y={250} delay={0.6} />
        <AnimatedBlock x={500} y={500} delay={0.8} />
        <AnimatedBlock x={900} y={500} delay={1.0} />
        <AnimatedBlock x={1300} y={500} delay={1.2} />
        <AnimatedBlock x={700} y={750} delay={1.4} />
        <AnimatedBlock x={1000} y={750} delay={1.6} />
      </svg>
      {/* Glowing crypto cirkels */}
      <div className="absolute top-1/4 left-1/3 w-40 h-40 rounded-full bg-blue-400 opacity-30 blur-2xl animate-pulse" />
      <div className="absolute top-2/3 left-2/3 w-32 h-32 rounded-full bg-purple-400 opacity-20 blur-2xl animate-pulse" />
      <div className="absolute top-1/2 left-1/5 w-28 h-28 rounded-full bg-pink-400 opacity-20 blur-2xl animate-pulse" />
    </div>
  );
}

// Geanimeerde lijn component (lichte opacity, geen custom animatie)
function AnimatedLine({ x1, y1, x2, y2, color }) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={color}
      strokeWidth="6"
      strokeDasharray="40 20"
      className="opacity-30"
    />
  );
}

// Geanimeerd blokje component (Tailwind animate-bounce)
function AnimatedBlock({ x, y, delay }) {
  return (
    <rect
      x={x - 20}
      y={y - 20}
      width="40"
      height="40"
      rx="8"
      fill="#fff"
      stroke="#2563eb"
      strokeWidth="4"
      className="opacity-70 animate-bounce"
      style={{
        filter: "drop-shadow(0 0 16px #2563eb88)",
        animationDelay: `${delay}s`
      }}
    />
  );
}