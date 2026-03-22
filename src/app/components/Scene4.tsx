import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { useState } from "react";

export function Scene4() {
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);

  ///const message = "채현아 조심해서 잘 다녀와! 재미있는 추억도 많이 쌓고 내 기념품도 푸짐히 사오는 거 잊지마!";
  const lines = [
    "채띠!! 조심해서 잘 다녀와야 해!!",
    "경험과 추억 많이 쌓고",
    "안온하시기를... 잘 할 거라 믿음",
    "힘들어도 이 또한 지나가리...",
  ];

  setTimeout(() => {
    if (!showButton) setShowButton(true);
  }, 3000);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8E7] via-[#FFE6F0] to-[#E6F3FF] flex items-center justify-center p-4 overflow-hidden relative">
      {/* Floating hearts */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl opacity-20"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 50,
          }}
          animate={{
            y: -100,
            x: Math.random() * window.innerWidth,
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        >
          💕
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative max-w-2xl w-full"
      >
        {/* Letter paper */}
        <div 
          className="bg-white rounded-lg shadow-2xl p-12 md:p-16 relative"
          style={{
            backgroundImage: `linear-gradient(transparent 31px, #E5E7EB 31px, #E5E7EB 32px, transparent 32px)`,
            backgroundSize: '100% 32px',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
          }}
        >
          {/* Paper clip decoration */}
          <div className="absolute -top-4 right-12 w-12 h-16 border-4 border-gray-400 rounded-full opacity-60" />

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl mb-8 text-gray-800 text-left"
            style={{ fontFamily: "'Nanum Pen Script', cursive" }}
          >
            💌 채현에게
          </motion.h1>

          {/* Message with typing effect */}
          <div className="space-y-6 mb-12">
            {lines.map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.6 }}
                className="text-xl md:text-2xl text-gray-700 leading-relaxed"
              >
                {line}
              </motion.p>
            ))}
          </div>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="text-right"
          >
            <p className="text-lg text-gray-600">사랑하는 그니 & 미소가... 💝</p>
          </motion.div>

          {/* Button */}
          {showButton && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mt-12"
            >
              <button
                onClick={() => navigate("/ending")}
                className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-12 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                다 읽었음 ✓
              </button>
            </motion.div>
          )}
        </div>

        {/* Decorative elements */}
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -top-8 -left-8 text-6xl"
        >
          🌟
        </motion.div>
        <motion.div
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-8 -right-8 text-6xl"
        >
          💖
        </motion.div>
      </motion.div>
    </div>
  );
}
