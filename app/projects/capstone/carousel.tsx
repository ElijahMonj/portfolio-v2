'use client';
import { useState, useEffect, useRef, SetStateAction } from 'react';
import Image from 'next/image';
import image1 from '@/public/images/projects/capstone/1.jpg';
import image2 from '@/public/images/projects/capstone/2.jpg';
import image3 from '@/public/images/projects/capstone/3.jpg';

const images = [image1, image2, image3];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null); // Ref to store the timer

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const resetTimer = () => {
    stopTimer(); // Clear existing timer
    startTimer(); // Start a new timer
  };

  useEffect(() => {
    startTimer(); // Start the timer on mount

    return () => stopTimer(); // Cleanup the timer on unmount
  }, []);

  // Handle manual navigation
  const goToSlide = (index: SetStateAction<number>) => {
    setActiveIndex(index);
    resetTimer(); // Reset timer on button click
  };


  return (
    <div className="relative w-full max-w-4xl mx-auto">
    {/* Image Section */}
    <div className="relative overflow-hidden rounded-lg" style={{ aspectRatio: '16/9' }}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === activeIndex ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-full z-0'
          }`}
        >
          <Image
            src={image}
            alt={`Slide ${index + 1}`}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      ))}
    </div>
  
    {/* Pagination Indicators */}
    <div className="flex justify-center mt-4 space-x-2">
      {images.map((_, index) => (
        <div
          key={index}
          className={`h-1 w-8 cursor-pointer ${
            index === activeIndex ? 'bg-dark' : 'bg-gray'
          } transition-colors duration-300`}
          onClick={() => goToSlide(index)}
        ></div>
      ))}
    </div>
  </div>
  
  );
};

export default Carousel;
