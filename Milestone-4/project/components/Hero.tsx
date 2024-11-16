'use client';
import { useState, useEffect } from "react";
import Image from "next/image";

const Hero = () => {
  const images = [
    "/images/image1.jpg",  
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
          layout="fill"  // Use layout="fill" to make the image fully responsive
          objectFit="cover"  // Ensure the image covers the container
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 md:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Welcome to Our Shop</h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6">Find the best deals on your favorite products.</p>
      </div>
      
      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-lg hover:bg-gray-200 transition-all duration-200 ease-in-out"
      >
        &#8592;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-lg hover:bg-gray-200 transition-all duration-200 ease-in-out"
      >
        &#8594;
      </button>
    </div>
  );
};

export default Hero;
