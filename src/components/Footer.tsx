import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { NavItem } from '../types';

interface FooterProps {
  navItems: NavItem[];
  setActiveTab: (id: string) => void;
  logoText: string;
  logoColorGold: string;
  logoColorDark: string;
}

export const Footer: React.FC<FooterProps> = ({
  navItems,
  setActiveTab,
  logoText,
  logoColorGold,
  logoColorDark
}) => {
  return (
    <footer className="w-full bg-transparent border-t border-[#E6E6E6]/60 pt-20 pb-10 mt-16 font-sans">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        
        {/* Main Grid areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-12 gap-x-8">
          
          {/* Col 1: Brand & socials */}
          <div className="lg:col-span-4 space-y-6">
            <div 
              onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="relative w-8 h-8 overflow-hidden flex-shrink-0 transition-transform group-hover:rotate-6">
                <svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path 
                    d="M0 27C0 12.0883 12.0883 0 27 0C41.9117 0 54 12.0883 54 27V54H27C12.0883 54 0 41.9117 0 27Z" 
                    fill={logoColorGold} 
                  />
                  <path 
                    d="M17 35C17 25.0589 25.0589 17 35 17C44.9411 17 53 25.0589 53 35V53H35C25.0589 53 17 44.9411 17 35Z" 
                    fill="#FFFFFF" 
                  />
                </svg>
              </div>

              <span 
                className="font-serif text-[32px] leading-none tracking-tight font-medium"
                style={{ color: logoColorDark }}
              >
                {logoText}
              </span>
            </div>

            <p className="text-neutral-500 font-light text-sm leading-relaxed max-w-xs">
              We design physical habitats that balance luxury, ergonomics, and structural tranquility.
            </p>

            {/* Social icons row */}
            <div className="flex items-center gap-4 pt-1">
              {[
                { icon: Facebook, href: '#facebook' },
                { icon: Twitter, href: '#twitter' },
                { icon: Linkedin, href: '#linkedin' },
                { icon: Instagram, href: '#instagram' }
              ].map((soc, idx) => (
                <a 
                  key={idx} 
                  href={soc.href}
                  className="p-2 border border-neutral-200/60 rounded-full hover:border-[#CDA274] hover:bg-neutral-50 text-neutral-500 hover:text-primary-gold transition-colors"
                >
                  <soc.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation link lists */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-serif text-lg font-medium text-primary-dark">
              Pages
            </h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveTab(item.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-neutral-500 hover:text-primary-gold font-light text-sm text-left transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services short-summary */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-serif text-lg font-medium text-primary-dark">
              Focus Areas
            </h4>
            <ul className="space-y-3 text-sm font-light text-neutral-500">
              <li>Project Design</li>
              <li>Living Areas</li>
              <li>Chic Kitchens</li>
              <li>Outdoor Gardens</li>
            </ul>
          </div>

          {/* Col 4: Contact details */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-serif text-lg font-medium text-primary-dark">
              Contact Studio
            </h4>
            <div className="space-y-4 text-sm font-light text-neutral-500">
              <p className="leading-relaxed">
                85 Broadway Avenue, Studio 4A, New York, NY 10003
              </p>
              <p className="hover:text-primary-gold transition-colors">
                contact@interno.com
              </p>
              <p className="font-semibold text-primary-dark">
                (555) 732-9020
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-16 pt-8 border-t border-neutral-100 text-center text-xs text-neutral-400 font-light flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            Copyright © Interno | Architectural Design Studio. All legal rights reserved.
          </p>
          <p className="font-medium">
            Designed by <span className="text-secondary-gold">VictorFlow</span> | Built with pixel-perfection in <span className="text-primary-gold" style={{ color: logoColorGold }}>AI Studio</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
