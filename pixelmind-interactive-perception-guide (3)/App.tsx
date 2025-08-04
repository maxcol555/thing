import React, { useState, useEffect, useRef } from 'react';
import { DOCUMENT_SECTIONS } from './constants';
import type { SectionData } from './types';
import Sidebar from './components/Sidebar';
import Section from './components/Section';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSectionId, setActiveSectionId] = useState<string>(DOCUMENT_SECTIONS[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSectionId(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );

    const currentRefs = sectionRefs.current;
    Object.values(currentRefs).forEach((sectionEl) => {
      if (sectionEl) {
        observer.observe(sectionEl);
      }
    });

    return () => {
      Object.values(currentRefs).forEach((sectionEl) => {
        if (sectionEl) {
          observer.unobserve(sectionEl);
        }
      });
    };
  }, []);

  const activePage = DOCUMENT_SECTIONS.find(sec => sec.id === activeSectionId)?.page || 1;

  return (
    <div className="flex min-h-screen font-sans bg-gray-100 text-gray-800">
      <Sidebar sections={DOCUMENT_SECTIONS} activeSectionId={activeSectionId} />
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24 space-y-24">
            {DOCUMENT_SECTIONS.map((section: SectionData) => (
              <div
                key={section.id}
                id={section.id}
                ref={(el) => {
                  if (el) sectionRefs.current[section.id] = el;
                }}
              >
                <Section {...section} />
              </div>
            ))}
          </div>
        </main>
        <Footer currentPage={activePage} totalPages={DOCUMENT_SECTIONS.length} />
      </div>
    </div>
  );
};

export default App;