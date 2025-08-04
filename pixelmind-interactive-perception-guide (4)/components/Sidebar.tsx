import React from 'react';
import type { SectionData } from '../types';

interface SidebarProps {
  sections: SectionData[];
  activeSectionId: string;
}

const LogoIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14C0 6.26801 6.26801 0 14 0Z" fill="url(#paint0_linear_1_2)"/>
        <path d="M14 6.81812C17.9599 6.81812 21.1818 9.92497 21.1818 13.7272V14.2727C21.1818 18.075 17.9599 21.1818 14 21.1818C10.0401 21.1818 6.81818 18.075 6.81818 14.2727V13.7272C6.81818 9.92497 10.0401 6.81812 14 6.81812Z" fill="white" fillOpacity="0.2"/>
        <circle cx="14" cy="14" r="3.18182" fill="white"/>
        <defs>
            <linearGradient id="paint0_linear_1_2" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0EA5E9"/>
                <stop offset="1" stopColor="#2563EB"/>
            </linearGradient>
        </defs>
    </svg>
);


const Sidebar: React.FC<SidebarProps> = ({ sections, activeSectionId }) => {
  return (
    <aside className="sticky top-0 h-screen w-64 flex-shrink-0 bg-white border-r border-gray-200 hidden lg:flex flex-col">
      <div className="flex items-center gap-3 h-24 border-b border-gray-200 px-6">
        <LogoIcon className="w-8 h-8" />
        <h1 className="text-lg font-bold text-gray-800">PixelMind Guide</h1>
      </div>
      <nav className="flex-1 px-6 py-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">Contents</p>
        <ul className="space-y-1">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`flex items-center gap-4 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSectionId === section.id
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <span className={`w-2 h-2 rounded-full transition-colors ${activeSectionId === section.id ? 'bg-white/70' : 'bg-gray-400'}`}></span>
                <span className="flex-1">{section.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="px-6 py-4 border-t border-gray-200 text-xs text-gray-500">
        &copy; {new Date().getFullYear()} PixelMind Studios
      </div>
    </aside>
  );
};

export default Sidebar;