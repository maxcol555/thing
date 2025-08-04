import React from 'react';

interface FooterProps {
  currentPage: number;
  totalPages: number;
}

const Footer: React.FC<FooterProps> = ({ currentPage, totalPages }) => {
  return (
    <footer className="sticky bottom-0 bg-white/80 backdrop-blur-sm border-t border-gray-200 lg:hidden">
      <div className="max-w-4xl mx-auto flex justify-between items-center px-6 h-14 text-sm text-gray-600">
        <span className="font-semibold">PixelMind Studios</span>
        <span className="font-medium">
          Page {currentPage} of {totalPages}
        </span>
      </div>
    </footer>
  );
};

export default Footer;