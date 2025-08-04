import React from 'react';
import type { SectionData } from '../types';

const Section: React.FC<SectionData> = ({ title, subtitle, content }) => {
  return (
    <section className="space-y-4">
      <header>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter text-gray-900">{title}</h1>
        {subtitle && (
          <p className="mt-2 text-xl sm:text-2xl text-blue-600 font-medium">{subtitle}</p>
        )}
      </header>
      <div className="prose max-w-none prose-p:text-gray-600 prose-strong:text-gray-800 prose-em:text-gray-700">
        <div className="space-y-6 text-lg leading-relaxed">
            {content.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Section;