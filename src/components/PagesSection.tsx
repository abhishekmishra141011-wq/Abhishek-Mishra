import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Grid, LayoutList } from 'lucide-react';
import { PROJECTS_DATA } from '../data';
import { Project } from '../types';

interface PagesSectionProps {
  activeColor: string;
}

const CATEGORIES = ['All', 'Living Room', 'Bedroom', 'Kitchen', 'Bathroom'];

export const PagesSection: React.FC<PagesSectionProps> = ({ activeColor }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === selectedCategory);

  return (
    <div className="w-full space-y-12 py-6 font-sans">
      
      {/* Title block */}
      <div className="text-center max-w-xl mx-auto space-y-3">
        <h2 className="font-serif text-3xl sm:text-4xl text-primary-dark font-medium tracking-tight">
          Portfolio & Creative Showcase
        </h2>
        <p className="text-neutral-400 text-sm font-light">
          Browse through some of our most exclusive realisations. Filter by space type to experience curated ergonomics in action.
        </p>
      </div>

      {/* Category Filters row - gorgeous rounded outline styles */}
      <div className="flex flex-wrap items-center justify-center gap-2 border border-[#E6E6E6] rounded-2xl md:rounded-[20px] p-2.5 max-w-xl mx-auto bg-white shadow-sm/5">
        {CATEGORIES.map((cat) => {
          const isSel = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                isSel
                  ? 'text-white shadow-md'
                  : 'text-neutral-600 hover:text-primary-gold hover:bg-neutral-50'
              }`}
              style={isSel ? { backgroundColor: activeColor } : {}}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects Grid layout with Framer motion exit-entry animations! */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((p) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              key={p.id}
              className="group cursor-pointer"
            >
              
              {/* Photo Showcase Area */}
              <div className="relative overflow-hidden rounded-[30px] shadow-sm mb-5 aspect-[4/3] bg-neutral-100 hover:shadow-lg transition-all duration-300">
                <img 
                  src={p.imageUrl} 
                  alt={p.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay floating pill */}
                <div className="absolute top-4 left-4 px-3.5 py-1.5 bg-white/90 backdrop-blur-sm rounded-full border border-neutral-200">
                  <span className="text-[10px] font-bold text-primary-dark uppercase tracking-wide">
                    {p.category}
                  </span>
                </div>
              </div>

              {/* Text Description and Go button */}
              <div className="flex items-center justify-between px-2">
                <div>
                  <h3 className="font-serif text-[22px] font-medium text-primary-dark group-hover:text-primary-gold transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-neutral-400 text-xs mt-1 font-light uppercase tracking-widest">
                    Decor / Minimalism
                  </p>
                </div>

                {/* Exquisite round arrow action button */}
                <div 
                  className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center transition-all duration-300 md:group-hover:scale-110"
                  style={{ color: activeColor }}
                >
                  <ArrowUpRight className="w-5 h-5 text-neutral-700 transition-transform duration-300 group-hover:rotate-45" />
                </div>
              </div>

            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

    </div>
  );
};
