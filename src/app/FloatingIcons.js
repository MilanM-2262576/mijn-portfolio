import { 
  FaJs, FaPython, FaJava, FaRust, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaDatabase 
} from "react-icons/fa";


export default function FloatingIcons() {
  const icons = [
    { icon: <FaJs />, style: "text-yellow-400", top: "10%", left: "15%", size: 48, delay: "animate-delay-0" },
    { icon: <FaPython />, style: "text-blue-400", top: "20%", left: "70%", size: 56, delay: "animate-delay-500" },
    { icon: <FaJava />, style: "text-red-500", top: "60%", left: "10%", size: 40, delay: "animate-delay-1000" },
    { icon: <FaRust />, style: "text-orange-800", top: "75%", left: "80%", size: 52, delay: "animate-delay-200" },
    { icon: <FaReact />, style: "text-cyan-400", top: "40%", left: "50%", size: 60, delay: "animate-delay-700" },
    { icon: <FaHtml5 />, style: "text-orange-500", top: "80%", left: "30%", size: 44, delay: "animate-delay-300" },
    { icon: <FaCss3Alt />, style: "text-blue-600", top: "15%", left: "85%", size: 50, delay: "animate-delay-900" },
    { icon: <FaNodeJs />, style: "text-green-600", top: "55%", left: "60%", size: 46, delay: "animate-delay-600" },
    { icon: <FaGitAlt />, style: "text-orange-600", top: "35%", left: "20%", size: 42, delay: "animate-delay-800" },
  ];

  return (
    <div className="pointer-events-none select-none absolute inset-0 w-full h-full overflow-hidden z-0">
      {icons.map((item, i) => (
        <span
          key={i}
          className={`
            absolute
            ${item.style}
            opacity-20
            animate-float
            ${item.delay}
          `}
          style={{
            top: item.top,
            left: item.left,
            fontSize: item.size,
            filter: "blur(0.5px)",
          }}
        >
          {item.icon}
        </span>
      ))}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px) scale(1) rotate(0deg);}
            50% { transform: translateY(-30px) scale(1.1) rotate(8deg);}
            100% { transform: translateY(0px) scale(1) rotate(0deg);}
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-delay-0 { animation-delay: 0s; }
          .animate-delay-100 { animation-delay: 0.1s; }
          .animate-delay-200 { animation-delay: 0.2s; }
          .animate-delay-300 { animation-delay: 0.3s; }
          .animate-delay-400 { animation-delay: 0.4s; }
          .animate-delay-500 { animation-delay: 0.5s; }
          .animate-delay-600 { animation-delay: 0.6s; }
          .animate-delay-700 { animation-delay: 0.7s; }
          .animate-delay-800 { animation-delay: 0.8s; }
          .animate-delay-900 { animation-delay: 0.9s; }
          .animate-delay-1000 { animation-delay: 1s; }
        `}
      </style>
    </div>
  );
}