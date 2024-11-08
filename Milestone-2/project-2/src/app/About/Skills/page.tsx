'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <div className='w-full h-full p-5 bg-gray-900'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <h1 className='text-5xl border-b-4 border-pink-600 inline text-white text-center mb-8'>
          Skills
        </h1>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6'>
          <motion.div
            className='bg-white rounded-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg'
            tabIndex={0}
            role="button"
            aria-label="Learn more about HTML"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Image src="/images/html.png" width={100} height={100} alt="HTML logo" />
            <p className='mt-2 text-center text-gray-800 font-semibold'>HTML</p>
          </motion.div>

          <motion.div
            className='bg-white rounded-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg'
            tabIndex={0}
            role="button"
            aria-label="Learn more about CSS3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Image src="/images/css3.webp" width={100} height={100} alt="CSS3 logo" />
            <p className='mt-2 text-center text-gray-800 font-semibold'>CSS3</p>
          </motion.div>

          <motion.div
            className='bg-white rounded-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg'
            tabIndex={0}
            role="button"
            aria-label="Learn more about JavaScript"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Image src="/images/javascript.png" width={100} height={100} alt="JavaScript logo" />
            <p className='mt-2 text-center text-gray-800 font-semibold'>JavaScript</p>
          </motion.div>

          <motion.div
            className='bg-white rounded-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg'
            tabIndex={0}
            role="button"
            aria-label="Learn more about TypeScript"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Image src="/images/typescript.png" width={100} height={100} alt="TypeScript logo" />
            <p className='mt-2 text-center text-gray-800 font-semibold'>TypeScript</p>
          </motion.div>

          <motion.div
            className='bg-white rounded-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg'
            tabIndex={0}
            role="button"
            aria-label="Learn more about React"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <Image src="/images/react.webp" width={100} height={100} alt="React logo" />
            <p className='mt-2 text-center text-gray-800 font-semibold'>React</p>
          </motion.div>

          <motion.div
            className='bg-white rounded-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg'
            tabIndex={0}
            role="button"
            aria-label="Learn more about Tailwind CSS"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <Image src="/images/tailwind.svg" width={100} height={100} alt="Tailwind CSS logo" />
            <p className='mt-2 text-center text-gray-800 font-semibold'>Tailwind</p>
          </motion.div>

          <motion.div
            className='bg-white rounded-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg'
            tabIndex={0}
            role="button"
            aria-label="Learn more about NextJS"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.7 }}
          >
            <Image src="/images/next.jpeg" width={100} height={100} alt="NextJS logo" />
            <p className='mt-2 text-center text-gray-800 font-semibold'>NextJS</p>
          </motion.div>

          <motion.div
            className='bg-white rounded-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg'
            tabIndex={0}
            role="button"
            aria-label="Learn more about Figma"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
          >
            <Image src="/images/figma.jpg" width={100} height={100} alt="Figma logo" />
            <p className='mt-2 text-center text-gray-800 font-semibold'>Figma</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
