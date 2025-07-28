'use client';

import { useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Samuel Varughese',
    feedback:
      'I had initial issue with stock availability and delivery. Once the product arrived on site the work has completed very fast(400ft.) Value for money and easy to install. Happy with the product',
    image:
      'https://plus.unsplash.com/premium_photo-1727942419945-1908baae3c8e?fm=jpg',
  },
  {
    name: 'Samuel Islam',
    feedback:
      'The delivery was delayed but the quality made up for it. Loved the easy installation process!',
    image:
      'https://plus.unsplash.com/premium_photo-1727942419945-1908baae3c8e?fm=jpg',
  },
  {
    name: 'Samuel Alam',
    feedback:
      'Product was perfect for our fencing needs. Highly recommended for durability and finish.',
    image:
      'https://plus.unsplash.com/premium_photo-1727942419945-1908baae3c8e?fm=jpg',
  },
];

// Variants for sliding animation
const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

export default function Testimonial() {
  const [[current, direction], setCurrent] = useState([0, 0]); // direction: 1 or -1

  const prevTestimonial = () => {
    setCurrent(([prev]) => [
      prev === 0 ? testimonials.length - 1 : prev - 1,
      -1,
    ]);
  };

  const nextTestimonial = () => {
    setCurrent(([prev]) => [
      prev === testimonials.length - 1 ? 0 : prev + 1,
      1,
    ]);
  };

  const { name, feedback, image } = testimonials[current];

  return (
    <div className="my-32 grid md:grid-cols-2 gap-6 p-6  rounded-md shadow-sm overflow-hidden">

      {/* Feedback with slide animation */}
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="relative bg-gray-50 p-6 rounded-md flex flex-col justify-between"
        >
          <FaQuoteLeft className="text-green-500 text-3xl mb-2" />
          <p className="text-gray-700 text-lg leading-relaxed mb-6">{feedback}</p>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-900">- {name}</span>
            <div className="flex gap-2">
              <button
                onClick={prevTestimonial}
                className="w-8 h-8 rounded-full cursor-pointer bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition"
              >
                <FaArrowLeftLong size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-8 h-8 cursor-pointer rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition"
              >
                <FaArrowRightLong size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Image with slide animation */}
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={current + "-img"}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center"
        >
          <Image
            width={260}
            height={340}
            src={image}
            alt={name}
            className="w-[260px] h-[340px] object-cover rounded-md border shadow-md"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
