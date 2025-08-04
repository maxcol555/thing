import React, { useState } from 'react';

const FlipIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 4v5h5M5.523 9.778a8 8 0 112.475 5.697m-3.44-2.043l-2.553 2.553"
    />
  </svg>
);


const InteractiveIllusion: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  // Using a NASA image of craters on Mars which demonstrates the illusion well.
  const imageUrl = "https://www.cnet.com/a/img/resize/96c08cd117400bf8f1ca398b0e252e9c6fae8667/hub/2022/07/12/cccd49bd-908e-484f-b3b4-a4970c420e37/hirisecollapsepitmay22.jpg?auto=webp&width=1920";

  return (
    <div className="my-8">
      <div className="relative group overflow-hidden rounded-xl shadow-xl shadow-gray-900/10 border border-gray-200">
        <img
          src={imageUrl}
          alt="Craters and bumps on a planetary surface"
          className={`w-full h-auto object-cover transition-transform duration-700 ease-in-out ${isFlipped ? 'rotate-180' : ''}`}
        />
         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-50 group-hover:opacity-30 transition-opacity"></div>
      </div>
      <div className="text-center mt-6">
          <p className="text-sm italic text-gray-500 mb-4">Credit: NASA/JPL-Caltech/University of Arizona</p>
          <button
            onClick={() => setIsFlipped(!isFlipped)}
            className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 transition-all transform hover:scale-105"
            aria-label={isFlipped ? 'Flip image back' : 'Flip image upside down'}
          >
            <FlipIcon className="w-5 h-5"/>
            {isFlipped ? 'Flip Back' : 'Flip Image'}
          </button>
      </div>
    </div>
  );
};

export default InteractiveIllusion;