import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, Sparkles, Award, Compass, ThumbsUp } from 'lucide-react';
import { BRAND_VALUES } from '../data';

interface HeroSectionProps {
  onExploreProjects: () => void;
  activeColor: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreProjects, activeColor }) => {
  return (
    <div className="w-full relative py-6">
      
      {/* Immersive Photo Hero banner with text inside it (magazine cover style) */}
      <div className="relative w-full rounded-[24px] md:rounded-[50px] overflow-hidden min-h-[500px] md:min-h-[640px] flex items-center bg-gray-50 border border-neutral-100">
        
        {/* Real photo background with elegant modern overlay to make text pop */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?auto=format&fit=crop&q=80&w=1600')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/75 to-white/60 md:bg-gradient-to-r md:from-white/90 md:via-white/65 md:to-white/10" />

        {/* Content Box */}
        <div className="relative max-w-[1240px] w-full mx-auto px-5 sm:px-8 lg:px-12 z-10 flex flex-col items-start justify-center py-10 md:py-12">
          {/* Top accent badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/90 border border-neutral-200/60 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-primary-gold mb-4 sm:mb-5 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" style={{ color: activeColor }} />
            <span>Award-Winning Architectural Studio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-[32px] sm:text-5xl md:text-[68px] leading-tight text-primary-dark max-w-lg md:max-w-xl font-medium tracking-tight"
          >
            Let Your Home Be Unique
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 sm:mt-5 text-xs sm:text-base md:text-lg text-neutral-600 max-w-xs sm:max-w-md md:max-w-lg font-light leading-relaxed"
          >
            We design physical habitats that balance luxury, ergonomics, and spatial tranquility. Your vision engineered by award-winning artisans.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8"
          >
            <button
              onClick={onExploreProjects}
              style={{ backgroundColor: activeColor }}
              className="flex items-center gap-2.5 px-7 py-4 text-white text-sm font-semibold rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <span>Explore Portfolio</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Feature grid: Highlights of core values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16">
        {[
          {
            title: 'Spatial Planning',
            desc: 'Maximizing ergonomic flow, structural durability, and spatial density optimization.',
            icon: Compass
          },
          {
            title: 'Artisanal Materials',
            desc: 'Exclusive access to direct-from-source timber, marbles, and tailored upholstery textiles.',
            icon: Sparkles
          },
          {
            title: 'Turnkey Realization',
            desc: 'Full cycle execution from initial CAD layouts to final decor handoff with precision checks.',
            icon: Award
          }
        ].map((feat, idx) => (
          <div key={idx} className="p-8 border border-[#E6E6E6] rounded-[30px] hover:border-primary-gold/40 transition-colors duration-450 bg-white group">
            <div className="w-12 h-12 rounded-2xl bg-primary-light flex items-center justify-center mb-6 group-hover:bg-primary-gold transition-colors duration-300">
              <feat.icon className="w-5 h-5 text-primary-gold group-hover:text-white transition-colors duration-300" style={{ color: activeColor }} />
            </div>
            <h3 className="font-serif text-[22px] font-medium text-primary-dark mb-3">
              {feat.title}
            </h3>
            <p className="text-neutral-500 text-sm leading-relaxed font-light">
              {feat.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Statistics Counter Row */}
      <div className="w-full bg-primary-light rounded-[24px] md:rounded-[40px] px-6 py-10 md:py-20 mt-4 border border-[#E6E6E6]/40">
        <div className="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 text-center divide-y-0 md:divide-x divide-neutral-200">
          {BRAND_VALUES.map((val) => (
            <div key={val.id} className="flex flex-col items-center justify-center p-2">
              <span className="font-serif text-4xl md:text-6xl font-medium" style={{ color: activeColor }}>
                {val.number}
              </span>
              <span className="text-neutral-500 text-[10px] md:text-sm uppercase tracking-widest mt-2">{val.text}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
