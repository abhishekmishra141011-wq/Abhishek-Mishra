import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DEFAULT_NAV_ITEMS } from './data';
import { HeaderConfig } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PagesSection } from './components/PagesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

// Starting configuration representing the exact pixel header of the uploaded user snapshot
const INITIAL_HEADER_CONFIG: HeaderConfig = {
  logoText: 'Interno',
  logoColorGold: '#CDA274', // Sand/Taupe gold accent
  logoColorDark: '#292F36', // Elegant charcoal
  activeColor: '#CDA274',
  inactiveColor: '#292F36',
  showBackdropGrid: true, // Backdrop architectural grids default on for extreme styling premiumness
  gridLineCount: 4,
  letterSpacing: 'tracking-normal',
  fontWeight: 'font-normal',
  navStyle: 'classic', // "Home About Us Services Pages Contact Us" as shown literally in image
  navGap: 'gap-10' // Spacious gap
};

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [headerConfig, setHeaderConfig] = useState<HeaderConfig>(INITIAL_HEADER_CONFIG);
  
  // Generate architectural background lines array
  const renderBackgroundGridLines = () => {
    if (!headerConfig.showBackdropGrid) return null;
    const lines = [];
    const count = headerConfig.gridLineCount;
    // Distribute lines evenly across width
    for (let i = 1; i <= count; i++) {
      const positionPercent = (i * 100) / (count + 1);
      lines.push(
        <div
          key={i}
          className="fixed inset-y-0 border-l border-neutral-100/70 z-0 pointer-events-none transition-all duration-500"
          style={{ left: `${positionPercent}%` }}
        />
      );
    }
    return lines;
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] relative flex flex-col selection:bg-primary-gold/20 selection:text-primary-dark">
      
      {/* Structural Architectural background grids lines overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {renderBackgroundGridLines()}
      </div>

      {/* Accurate Pixel Header Component */}
      <Header
        navItems={DEFAULT_NAV_ITEMS}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        config={headerConfig}
      />

      {/* Main viewport Container */}
      <main className="flex-grow max-w-[1240px] w-full mx-auto px-10 lg:px-16 mt-10 relative z-10">
        
        {/* Dynamic active page routing render with premium framer-motion transitions! */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="w-full h-full"
          >
            {activeTab === 'home' && (
              <HeroSection 
                onExploreProjects={() => setActiveTab('pages')} 
                activeColor={headerConfig.activeColor}
              />
            )}

            {activeTab === 'about' && (
              <AboutSection 
                onContactClick={() => setActiveTab('contact')} 
                activeColor={headerConfig.activeColor}
              />
            )}

            {activeTab === 'services' && (
              <ServicesSection 
                activeColor={headerConfig.activeColor}
              />
            )}

            {activeTab === 'pages' && (
              <PagesSection 
                activeColor={headerConfig.activeColor}
              />
            )}

            {activeTab === 'contact' && (
              <ContactSection 
                activeColor={headerConfig.activeColor}
              />
            )}
          </motion.div>
        </AnimatePresence>

      </main>

      {/* Footer component */}
      <Footer
        navItems={DEFAULT_NAV_ITEMS}
        setActiveTab={setActiveTab}
        logoText={headerConfig.logoText}
        logoColorGold={headerConfig.logoColorGold}
        logoColorDark={headerConfig.logoColorDark}
      />

    </div>
  );
}
