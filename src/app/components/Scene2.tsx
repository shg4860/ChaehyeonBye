import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { Sparkles } from "lucide-react";
import { useState } from "react";

export function Scene2() {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      navigate("/memories");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFE6F0] via-[#E6F3FF] to-[#FFF5E6] flex flex-col items-center justify-center overflow-hidden relative">
      {/* Spotlight effects */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute top-1/4 w-96 h-96 bg-yellow-300 rounded-full blur-3xl opacity-30"
      />
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1.2, 1, 1.2],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-30"
      />

      {/* Dancing avatar */}
      <motion.div
        onClick={handleClick}
        animate={
          clicked
            ? {
                scale: [1, 1.3, 0],
                rotate: [0, 360],
                opacity: [1, 1, 0],
              }
            : {
                y: [0, -20, 0],
                rotate: [-5, 5, -5],
                scale: [1, 1.05, 1],
              }
        }
        transition={
          clicked
            ? { duration: 1 }
            : {
                y: { duration: 1.5, repeat: Infinity },
                rotate: { duration: 2, repeat: Infinity },
                scale: { duration: 1, repeat: Infinity },
              }
        }
        whileHover={{ scale: 1.1 }}
        className="relative z-10 cursor-pointer"
      >
        {/* Character container */}
        <div className="relative">
          {/* Body - Red T-shirt */}
          <div className="relative w-48 h-64 flex flex-col items-center">
            {/* Back Hair */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-28 h-40 bg-[#2C1810] rounded-t-full" />
            {/* Head */}
            <motion.div
              animate={{ rotate: [-3, 3, -3] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="w-24 h-24 bg-[#FFD4B8] rounded-full mb-2 relative z-10"
            >
              {/* Front Hair */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-28 h-15 bg-[#2C1810] rounded-t-full" />
              {/* Eyes */}
              <div className="absolute top-8 left-6 w-3 h-3 bg-[#2C1810] rounded-full" />
              <div className="absolute top-8 right-6 w-3 h-3 bg-[#2C1810] rounded-full" />
              {/* Smile */}
              <motion.div
                animate={{ scaleX: [1, 1.1, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="absolute top-12 left-1/2 -translate-x-1/2 w-8 h-4 border-b-2 border-[#2C1810] rounded-b-full"
              />
            </motion.div>

            {/* Red T-shirt body */}
            <div className="w-32 h-28 bg-[#E63946] rounded-t-3xl relative">
              {/* Shirt text */}
              <span className="absolute top-8 left-1/3 -translate-x-1/2 text-white text-sm font-bold tracking-wide select-none">
                Adelante
              </span>
              {/* Arms L */ }
              <motion.div
                animate={{ rotate: [-20, 20, -20] }}
                transition={{ duration: 0.6, repeat: Infinity }}
                className="absolute -left-8 top-2 w-8 h-20  overflow-hidden rounded-full origin-top">
                    <div className="w-full h-7 bg-[#E63946]" />
                    <div className="w-full h-15 bg-[#F5D2BC]" /> 
                </motion.div>
              
              
              {/* Arms R */ }  
              <motion.div
                animate={{ rotate: [20, -20, 20] }}
                transition={{ duration: 0.6, repeat: Infinity }}
                className="absolute -right-8 top-2 w-8 h-20  overflow-hidden rounded-full origin-top">
                    <div className="w-full h-7 bg-[#E63946]" />
                    <div className="w-full h-15 bg-[#F5D2BC]" /> 
                </motion.div>
            </div>

            {/* Legs */}
            <div className="flex gap-2 mt-1">
              <motion.div
                animate={{ scaleY: [1, 0.95, 1] }}
                transition={{ duration: 0.6, repeat: Infinity }}
                className="w-8 h-16 bg-[#457B9D] rounded-b-xl"
              />
              <motion.div
                animate={{ scaleY: [1, 0.95, 1] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }}
                className="w-8 h-16 bg-[#457B9D] rounded-b-xl"
              />
            </div>
          </div>

          {/* Sparkle effects */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              <Sparkles className="text-yellow-400" size={16} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-12 bg-white px-8 py-4 rounded-full shadow-lg relative z-10"
      >
        <p className="text-lg text-gray-700 font-medium">
          블랙맘바 채현이를 눌러줘! 💃
        </p>
        {/* Speech bubble tail */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45" />
      </motion.div>

      {/* Pointing hand indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="mt-8 text-4xl"
      >
        ☝️
      </motion.div>
    </div>
  );
}