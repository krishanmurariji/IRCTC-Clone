import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    url: "https://images.pexels.com/photos/2031758/pexels-photo-2031758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    caption: "Red Train Passing Through Mountains",
  },
  {
    url: "https://images.pexels.com/photos/1192438/pexels-photo-1192438.jpeg?auto=compress&cs=tinysrgb&w=600",
    caption: "Steam Locomotive in Black and White",
  },
  {
    url: "https://images.pexels.com/photos/970763/pexels-photo-970763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    caption: "Freight Train on a Sunny Day",
  },
  {
    url: "https://images.pexels.com/photos/30807450/pexels-photo-30807450.jpeg?auto=compress&cs=tinysrgb&w=600",
    caption: "Train Traveling Through Scenic Landscape",
  },
  {
    url: "https://images.pexels.com/photos/2414926/pexels-photo-2414926.jpeg?auto=compress&cs=tinysrgb&w=600",
    caption: "Vintage Train Station with Steam Engine",
  },
];



const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-lg group">
      {/* Slide Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative"
        >
          <img
            src={slides[currentIndex].url}
            alt="Slider"
            className="w-full h-64 object-cover rounded-2xl"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          {/* Caption */}
          <div className="absolute bottom-4 left-4 text-white text-lg font-semibold bg-black/50 px-3 py-1 rounded-md">
            {slides[currentIndex].caption}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 hover:bg-black p-2 rounded-full text-white transition-opacity opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 hover:bg-black p-2 rounded-full text-white transition-opacity opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === index ? "bg-white" : "bg-gray-400 opacity-50"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
