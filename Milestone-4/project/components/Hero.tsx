'use client';
import { useState, useEffect } from "react";
import Image from "next/image";

const Hero = () => {
  const images = [
    "/images/image1.jpg", // Replace with your image paths
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image4.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
 
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);  

    return () => clearInterval(interval); 
  }, []);
  return (
    <div className="relative w-full h-screen bg-gray-100 overflow-hidden">
      {/* Image */}
      <div className="absolute inset-0 transition-transform duration-700 ease-in-out">
        <Image
          src={images[currentIndex]}
          alt={`Hero ${currentIndex + 1}`}
          width={500}
          height={500}
          className="w-full h-full object-cover lg:w-full"
        />
      </div>
      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Shop</h1>
        <p className="text-lg md:text-xl mb-6">Find the best deals on your favorite products.</p>
         
      </div>
      {/* Navigation */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-lg hover:bg-gray-200"
      >
        &#8592;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-lg hover:bg-gray-200"
      >
        &#8594;
      </button>
    </div>
  );
};

export default Hero;
