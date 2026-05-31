import React from 'react';
import { motion } from 'motion/react';
import { Layout, Compass, Store, Sun, Flower, Layers, CheckSquare, Hammer, ShieldAlert, Sparkles, HelpCircle } from 'lucide-react';
import { SERVICES_DATA } from '../data';
import { Service } from '../types';

interface ServicesSectionProps {
  activeColor: string;
}

// Icon mapper helper
const getServiceIcon = (name: string, style: React.CSSProperties) => {
  switch (name) {
    case 'Layout':
      return <Layout className="w-5 h-5" style={style} />;
    case 'Compass':
      return <Compass className="w-5 h-5" style={style} />;
    case 'Store':
      return <Store className="w-5 h-5" style={style} />;
    case 'Sun':
      return <Sun className="w-5 h-5" style={style} />;
    case 'Flower':
      return <Flower className="w-5 h-5" style={style} />;
    case 'Layers':
      return <Layers className="w-5 h-5" style={style} />;
    default:
      return <Layout className="w-5 h-5" style={style} />;
  }
};

const STEPS_FLOW = [
  { step: '01', title: 'Concept Consultation', desc: 'We review site boundaries, light maps, and hear your dreams.' },
  { step: '02', title: 'Spatial Blueprints', desc: 'Precise CAD schematics outlining material weight distributions.' },
  { step: '03', title: 'Accents & Textile Pulls', desc: 'Curating exclusive stones, timbers, fabrics, and layout tones.' },
  { step: '04', title: 'Turnkey Installation', desc: 'Constructing with zero-loss structural tolerances and elite polish.' }
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ activeColor }) => {
  return (
    <div className="w-full space-y-16 py-6 font-sans">
      
      {/* Title */}
      <div className="text-center max-w-xl mx-auto space-y-3">
        <h2 className="font-serif text-3xl sm:text-4xl text-primary-dark font-medium tracking-tight">
          Services We Specialize In
        </h2>
        <p className="text-neutral-400 text-sm font-light">
          From residential real estate overhauls to luxury commercial retail lounges. We supply world-class spatial engineering with gorgeous styling.
        </p>
      </div>

      {/* Services Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES_DATA.map((service) => (
          <div 
            key={service.id}
            className="p-8 pb-10 border border-neutral-100 rounded-[30px] hover:border-primary-gold/30 hover:shadow-lg hover:shadow-[#CDA274]/5 bg-white transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary-light/70 flex items-center justify-center mb-6 group-hover:bg-primary-gold transition-all duration-300">
              {getServiceIcon(service.iconName, { color: activeColor })}
            </div>
            
            <h3 className="font-serif text-xl sm:text-[22px] font-medium text-primary-dark mb-3">
              {service.title}
            </h3>
            
            <p className="text-neutral-500 font-light text-sm leading-relaxed mb-6">
              {service.description}
            </p>

            <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-400 group-hover:text-primary-gold transition-colors">
              <span>Read services detail</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Internal timeline design step row */}
      <div className="pt-8 border-t border-neutral-100 space-y-10">
        <div className="text-center max-w-lg mx-auto">
          <span className="text-xs font-bold text-primary-gold uppercase tracking-widest" style={{ color: activeColor }}>Our Protocol</span>
          <h3 className="font-serif text-2xl md:text-3xl text-primary-dark font-medium mt-1">
            How Interno Crafts Masterpieces
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS_FLOW.map((f, idx) => (
            <div key={idx} className="relative p-6 bg-slate-50 border border-neutral-100/50 rounded-2xl flex flex-col justify-between items-start h-56 group">
              <span className="font-serif text-[42px] leading-none font-bold text-neutral-200 group-hover:text-primary-gold/40 transition-colors">
                {f.step}
              </span>
              <div>
                <h4 className="font-serif text-lg font-medium text-primary-dark mb-2">
                  {f.title}
                </h4>
                <p className="text-neutral-400 text-xs leading-relaxed font-light">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
