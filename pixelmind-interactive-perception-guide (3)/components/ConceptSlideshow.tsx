import React, { useState } from 'react';

interface Slide {
  element: React.ReactNode;
  caption: string;
}

interface ConceptSlideshowProps {
  slides: Slide[];
}

const ArrowLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
);

const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
);

const ConceptSlideshow: React.FC<ConceptSlideshowProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl border-2 border-gray-200 shadow-lg my-6 w-full max-w-lg mx-auto">
      <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden flex items-center justify-center bg-gray-100">
        {slides[currentIndex].element}
      </div>
      <div className="text-center min-h-[4em] flex items-center justify-center">
        <p className="text-gray-600 italic">{slides[currentIndex].caption}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={goToPrevious}
          className="p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-300"
          aria-label="Previous slide"
        >
          <ArrowLeftIcon className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
            {slides.map((_, slideIndex) => (
                <div 
                    key={slideIndex}
                    className={`h-2 w-2 rounded-full transition-all ${currentIndex === slideIndex ? 'bg-blue-500 w-4' : 'bg-gray-300'}`}
                    aria-current={currentIndex === slideIndex}
                />
            ))}
        </div>
        <button
          onClick={goToNext}
          className="p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-300"
          aria-label="Next slide"
        >
          <ArrowRightIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ConceptSlideshow;