"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex items-center flex-col justify-center bg-gradient-to-b from-blue-900 to-purple-600 h-screen">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="bg-gradient-to-r from-cyan-300 text-center to-blue-800 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl font-serif font-bold shadow-lg"
      >
        I&apos;m Ahmed Raza, a Front-End Developer
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center text-xl md:text-2xl lg:text-3xl font-light mt-4 text-white shadow-md"
      >
        I build interactive, responsive, and visually appealing <br /> web
        applications
      </motion.h2>

      <div className="flex space-x-4 mt-20">
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center text-xl  lg:text-2xl font-medium mt-4 border-2 hover:scale-105 hover:shadow-2xl hover:shadow-black border-blue-800 rounded-3xl p-2 bg-blue-500 text-white shadow-md"
        >
          <Link href="/">Learn More</Link>
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
