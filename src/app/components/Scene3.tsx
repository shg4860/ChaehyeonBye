import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import Guit from "../../assets/Guit.jpg";
import OOO from "../../assets/OOO.png";
import head from "../../assets/head.jpg";
import Smile from "../../assets/Smile.jpg";
import VVV from "../../assets/VVVV.jpg";
import study from "../../assets/study.png";

const memories = [
  {
    id: 1,
    image: Guit,
    title: "기타를 잘 치는 그대",
    date: "2024.09.06",
    comment: "오빠가 기타 알려줄까?ㅋㅋ",
  },
  {
    id: 2,
    image: OOO,
    title: "시험공부보다 중요한 건 간식배부",
    date: "2025.04.10",
    comment: "당신 없으니까 맛집에 못 가",
  },
  {
    id: 3,
    image: head,
    title: "레드버튼",
    date: "2025.11.12",
    comment: "그날 Queen이 되기도 했는데",
  },
  {
    id: 4,
    image: Smile,
    title: "아름다움",
    date: "2025.09.14",
    comment: "조크 빼고 웃는 모습이 아름다우심",
  },
  {
    id: 5,
    image: VVV,
    title: "인천드가",
    date: "2026.01.15",
    comment: "어떻게 저 사진에 나(희경) 빼고 다 사라짐?",
  },
  {
    id: 6,
    image: study,
    title: "지리는 라인업",
    date: "2025년 여름",
    comment: "돌아가기는 원치 않지만 그립다",
  },
];

export function Scene3() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % memories.length);
    }
  };

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + memories.length) % memories.length);
    }
  };

  const handleContinue = () => {
    navigate("/letter");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8E7] to-[#FFE6E6] py-16 px-4 overflow-y-auto">
      {/* Paper texture background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-medium text-center mb-4 text-gray-800"
          style={{ fontFamily: "'Nanum Pen Script', cursive" }}
        >
          당신의 흔적들 ✨
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-600 mb-12"
        >
          사진을 클릭하면 코멘트를 볼 수 있어요
        </motion.p>

        {/* Scrapbook grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                rotate: index % 2 === 0 ? -2 : 2
              }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 0,
                zIndex: 10
              }}
              onClick={() => setSelectedImage(index)}
              className="cursor-pointer relative group"
            >
              {/* Polaroid frame */}
              <div className="bg-white p-4 pb-16 shadow-xl rounded-sm relative">
                {/* Masking tape */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-amber-200/60 opacity-70 rotate-1 rounded-sm" />
                
                {/* Image */}
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img 
                    src={memory.image} 
                    alt={memory.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Caption */}
                <div className="mt-4 text-center">
                  <p className="font-medium text-gray-800 mb-1">{memory.title}</p>
                  <p className="text-sm text-gray-500">{memory.date}</p>
                </div>

                {/* Decorative sticker */}
                <div className="absolute -right-2 -bottom-2 text-3xl rotate-12 group-hover:scale-110 transition-transform">
                  {index % 6 === 0 && "⭐"}
                  {index % 6 === 1 && "💖"}
                  {index % 6 === 2 && "🌸"}
                  {index % 6 === 3 && "🎀"}
                  {index % 6 === 4 && "✨"}
                  {index % 6 === 5 && "🌈"}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Continue button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <button
            onClick={handleContinue}
            className="bg-gradient-to-r from-rose-400 to-pink-400 text-white px-12 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            다음으로 →
          </button>
        </motion.div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-8 rounded-2xl max-w-3xl w-full relative"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            <img
              src={memories[selectedImage].image}
              alt={memories[selectedImage].title}
              className="w-full h-96 object-cover rounded-lg mb-6"
            />

            <h3 className="text-2xl font-medium text-gray-800 mb-2">
              {memories[selectedImage].title}
            </h3>
            <p className="text-gray-500 mb-4">{memories[selectedImage].date}</p>
            <p className="text-lg text-gray-700">{memories[selectedImage].comment}</p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
