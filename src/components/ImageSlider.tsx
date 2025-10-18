import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    url: "https://images.pexels.com/photos/2031758/pexels-photo-2031758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    caption: "Scenic Mountain Railways",
    description: "Experience breathtaking views"
  },
  {
    url: "https://images.pexels.com/photos/1192438/pexels-photo-1192438.jpeg?auto=compress&cs=tinysrgb&w=600",
    caption: "Heritage Steam Trains",
    description: "Journey through history"
  },
  {
    url: "https://images.pexels.com/photos/970763/pexels-photo-970763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    caption: "Modern Express Services",
    description: "Fast and comfortable travel"
  },
  {
    url: "https://images.pexels.com/photos/30807450/pexels-photo-30807450.jpeg?auto=compress&cs=tinysrgb&w=600",
    caption: "Coastal Rail Routes",
    description: "Beautiful seaside journeys"
  },
  {
    url: "https://images.pexels.com/photos/2414926/pexels-photo-2414926.jpeg?auto=compress&cs=tinysrgb&w=600",
    caption: "Vintage Railway Stations",
    description: "Architectural marvels"
  },
];

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-3xl shadow-2xl group">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="relative w-full"
        >
          <img
            src={slides[currentIndex].url}
            alt={slides[currentIndex].caption}
            className="w-full h-[500px] object-cover"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          
          {/* Caption */}
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h3 className="text-3xl font-bold mb-2">{slides[currentIndex].caption}</h3>
            <p className="text-lg text-white/90">{slides[currentIndex].description}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 p-3 rounded-full text-white transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 p-3 rounded-full text-white transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all ${
              currentIndex === index 
                ? "w-12 h-3 bg-white" 
                : "w-3 h-3 bg-white/50 hover:bg-white/75"
            } rounded-full`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
