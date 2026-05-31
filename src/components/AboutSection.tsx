import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, User, HelpCircle, MessageSquare } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

interface AboutSectionProps {
  onContactClick: () => void;
  activeColor: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick, activeColor }) => {
  return (
    <div className="w-full space-y-16 py-6">
      
      {/* Intro section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Editorial Double Overlapping Photo Layout */}
        <div className="lg:col-span-6 relative flex flex-col items-center pb-12 lg:pb-0">
          <div className="w-[85%] rounded-[20px] md:rounded-[30px] overflow-hidden shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" 
              alt="Luxury Interior Construction" 
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="w-[60%] rounded-[20px] md:rounded-[30px] overflow-hidden shadow-xl border-4 border-white absolute -bottom-10 right-4">
            <img 
              src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=600" 
              alt="Designer choosing textures" 
              className="w-full h-52 object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Right Side: Philosophy and narrative */}
        <div className="lg:col-span-6 space-y-6 lg:pl-4 mt-8 lg:mt-0">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[45px] text-primary-dark leading-snug font-medium tracking-tight">
            We Create Spaces That Reflect Your Soul
          </h2>
          
          <p className="text-neutral-500 font-light text-sm sm:text-base leading-relaxed">
            At Interno, we reject the notion of pre-packaged, standardized interior layouts. We believe a home, office, or studio is a deeply personal extension of your identity, values, and energy.
          </p>
          <p className="text-neutral-500 font-light text-sm sm:text-base leading-relaxed">
            Founded by a collective of European artisans and tech advisors, our works integrate mastercraft timber joins with sound-dampened acoustics and sustainable smart-controls.
          </p>

          {/* Bullet checkpoints */}
          <div className="space-y-3 pt-2">
            {[
              '100% bespoke spatial schematics, never reused',
              'Collaborative material mood boards on day one',
              'Full oversight from raw stone to customized curtains',
              'Lifetime material warranties on premium hardwoods'
            ].map((bullet, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: activeColor }} />
                <span className="text-sm font-medium text-neutral-700">{bullet}</span>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <button
              onClick={onContactClick}
              style={{ backgroundColor: activeColor }}
              className="flex items-center gap-2.5 px-6 py-3.5 text-white text-xs font-bold rounded-xl shadow-md cursor-pointer hover:shadow-lg transition-all"
            >
              <span>Get Free Spatial Draft</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials Block */}
      <div className="pt-10 space-y-8">
        <div className="text-center max-w-lg mx-auto">
          <h3 className="font-serif text-2xl md:text-3xl text-primary-dark font-medium pb-2">
            Loved By Tastemakers
          </h3>
          <p className="text-neutral-400 text-xs sm:text-sm font-light">
            Here is what global designers and luxury homeowners say about their collaborative experience with the Interno crew.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div 
              key={t.id} 
              className="p-8 border border-neutral-100 rounded-[30px] bg-slate-50/50 flex flex-col justify-between space-y-6 relative"
            >
              <div className="absolute top-6 right-8 opacity-10">
                <MessageSquare className="w-12 h-12 text-primary-dark" />
              </div>
              
              <p className="text-neutral-600 font-light italic text-sm sm:text-base leading-relaxed">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4 border-t border-neutral-100 pt-5">
                <img 
                  src={t.avatarUrl} 
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-neutral-200"
                />
                <div>
                  <h4 className="font-serif text-base font-semibold text-primary-dark">
                    {t.name}
                  </h4>
                  <p className="text-neutral-400 text-[11px] uppercase tracking-wide">
                    {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
