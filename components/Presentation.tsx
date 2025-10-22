
import React, { useState, useEffect, useCallback } from 'react';
import { SlideContent } from '../types';
import Slide from './Slide';
import ProgressBar from './ProgressBar';
import Navigation from './Navigation';

interface PresentationProps {
  slides: SlideContent[];
}

const Presentation: React.FC<PresentationProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        handleNext();
      } else if (event.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleNext, handlePrev]);

  return (
    <div className="h-screen w-screen flex flex-col bg-gray-900 shadow-2xl overflow-hidden">
      <div className="flex-grow relative">
        <Slide key={currentSlide} slide={slides[currentSlide]} />
      </div>
      <div className="flex-shrink-0">
        <ProgressBar current={currentSlide} total={slides.length} />
        <Navigation
          current={currentSlide}
          total={slides.length}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      </div>
    </div>
  );
};

export default Presentation;
