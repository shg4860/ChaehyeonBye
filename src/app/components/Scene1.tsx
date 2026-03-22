import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { Sparkles, Star, Heart } from "lucide-react";
import { useState } from "react";

export function Scene1() {
  const navigate = useNavigate();
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(() => {
      navigate("/avatar");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF5E6] via-[#E6F3FF] to-[#FFE6F0] flex items-center justify-center overflow-hidden relative">
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            {i % 3 === 0 ? (
              <Star className="text-yellow-300 opacity-40" size={16} />
            ) : i % 3 === 1 ? (
              <Heart className="text-pink-300 opacity-40" size={14} />
            ) : (
              <Sparkles className="text-blue-300 opacity-40" size={12} />
            )}
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <motion.div
          animate={
            isOpening
              ? {
                  rotateX: 180,
                  scale: 1.2,
                  opacity: 0,
                }
              : {
                  y: [0, -10, 0],
                  rotate: [0, 2, -2, 0],
                }
          }
          transition={
            isOpening
              ? { duration: 1.5 }
              : {
                  y: { duration: 3, repeat: Infinity },
                  rotate: { duration: 4, repeat: Infinity },
                }
          }
          className="bg-white rounded-2xl shadow-2xl p-12 max-w-md mx-4"
          style={{
            boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center space-y-8"
          >
            <div className="text-6xl mb-4">💌</div>
            <h1 className="text-2xl font-medium text-gray-800">
              지난 추억을
              <br />
              열어보시겠습니까?
            </h1>
            
            <motion.button
              onClick={handleOpen}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-10 py-4 rounded-full text-lg font-medium shadow-lg relative overflow-hidden"
            >
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-white/20"
              />
              <span className="relative z-10">열기</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Opening animation particles */}
        {isOpening && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute top-1/2 left-1/2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                  x: (Math.random() - 0.5) * 400,
                  y: (Math.random() - 0.5) * 400,
                }}
                transition={{ duration: 1.5, delay: Math.random() * 0.3 }}
              >
                <Sparkles className="text-yellow-400" size={20} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
