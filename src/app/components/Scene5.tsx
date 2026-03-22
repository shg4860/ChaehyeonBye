import { motion } from "motion/react";
import { Plane, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

import Adel from "../../assets/Adel.png";


export function Scene5() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Avatar appears and waves
    setTimeout(() => setStage(1), 500);
    
    // Letter rolls up
    setTimeout(() => setStage(2), 2500);
    
    // Plane flies
    setTimeout(() => setStage(3), 4000);
    
    // Boston appears
    setTimeout(() => setStage(4), 6000);
    
    // Final message
    setTimeout(() => setStage(5), 7500);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6F3FF] via-[#B8E0F6] to-[#87CEEB] overflow-hidden relative">
      {/* Clouds */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-6xl opacity-60"
          initial={{ x: -200, y: Math.random() * 400 + 50 }}
          animate={{ x: window.innerWidth + 200 }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            delay: i * 2,
          }}
        >
          ☁️
        </motion.div>
      ))}

      <div className="relative z-10 h-screen flex flex-col items-center justify-center">
        {/* Avatar waving */}
        {stage >= 1 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: stage >= 2 ? 0 : 1, 
              y: stage >= 2 ? -100 : 0,
              scale: stage >= 2 ? 0.5 : 1,
              rotate: stage >= 2 ? 360 : 0
            }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <img 
              src={Adel} 
              alt="Adel waving"
              />

          </motion.div>
        )}

        {/* Letter rolling and flying */}
        {stage >= 2 && stage < 4 && (
          <motion.div
            initial={{ scale: 1, y: 0 }}
            animate={
              stage === 2
                ? { scaleX: 0.1, scaleY: 0.3, rotateZ: 90 }
                : {
                    x: window.innerWidth,
                    y: -200,
                    scale: 0.3,
                  }
            }
            transition={{ duration: 1.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="bg-white w-48 h-32 rounded-lg shadow-2xl flex items-center justify-center text-6xl">
              💌
            </div>
          </motion.div>
        )}

        {/* Flying plane */}
        {stage >= 3 && (
          <motion.div
            initial={{ x: -200, y: 200 }}
            animate={{ 
              x: stage >= 4 ? window.innerWidth * 0.7 : window.innerWidth / 2,
              y: stage >= 4 ? 100 : 150
            }}
            transition={{ duration: 2 }}
            className="absolute"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Plane size={64} className="text-white" />
            </motion.div>
          </motion.div>
        )}

        {/* Boston skyline */}
        {stage >= 4 && (
          <motion.div
            initial={{ x: window.innerWidth + 200, opacity: 0 }}
            animate={{ x: window.innerWidth * 0.7, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute bottom-32 right-0"
          >
            <div className="relative">
              {/* Simple city silhouette */}
              <div className="flex items-end gap-2">
                <div className="w-12 h-32 bg-gray-700 rounded-t-lg" />
                <div className="w-16 h-40 bg-gray-800 rounded-t-lg" />
                <div className="w-10 h-24 bg-gray-700 rounded-t-lg" />
                <div className="w-14 h-36 bg-gray-800 rounded-t-lg" />
                <div className="w-12 h-28 bg-gray-700 rounded-t-lg" />
              </div>
              
              {/* Boston marker */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -top-16 left-1/2 -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
              >
                <MapPin size={20} />
                <span className="font-bold">Boston</span>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Final message */}
        {stage >= 5 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl max-w-2xl mx-4">
              <motion.h1
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent"
              >
                Don’t forget about me. ✈️
              </motion.h1>
              
              <div className="space-y-4 text-lg text-gray-700">
                <p> 보스턴에서도 반짝반짝 빛나길 ✨</p>
                <p> 많이 웃을 수 있길 (웃는 얼굴이 예쁘심) 💕</p>
                <p> And 잼얘 썰 많이 주세요 💕</p>
                <p className="text-2xl font-medium text-pink-600 mt-6">
                  See you again in Korea 🇰🇷
                </p>
              </div>

              {/* Decorative sparkles */}
              <div className="mt-8 flex justify-center gap-4 text-3xl">
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  ⭐
                </motion.span>
                <motion.span
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  💖
                </motion.span>
                <motion.span
                  animate={{ rotate: [0, -360] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  ✨
                </motion.span>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Sun in the corner */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-8 right-8 text-7xl"
      >
        ☀️
      </motion.div>
    </div>
  );
}
