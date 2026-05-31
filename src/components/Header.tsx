import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Copy, Check, Sliders } from 'lucide-react';
import { NavItem, HeaderConfig } from '../types';

interface HeaderProps {
  navItems: NavItem[];
  activeTab: string;
  setActiveTab: (id: string) => void;
  config: HeaderConfig;
}

export const Header: React.FC<HeaderProps> = ({
  navItems,
  activeTab,
  setActiveTab,
  config,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Parse nav style classes
  const getNavStyleClasses = (item: NavItem) => {
    const isActive = activeTab === item.id;
    const activeColorHex = config.activeColor;
    const inactiveColorHex = config.inactiveColor;

    let baseClass = 'relative text-[17px] transition-all duration-300 py-1.5 cursor-pointer select-none';
    
    // Set text colors
    const activeTextClass = `text-[${activeColorHex}]`;
    const inactiveTextClass = `text-[${inactiveColorHex}] hover:text-primary-gold`;

    return {
      baseClass,
      isActive,
      activeColorStyle: isActive ? { color: activeColorHex } : { color: inactiveColorHex },
    };
  };

  // Generate matching architectural layout grid lines inside the header background
  // This guarantees perfect vertical continuity while keeping them incredibly subtle (barely visible)
  const renderHeaderGridLines = () => {
    if (!config.showBackdropGrid) return null;
    const lines = [];
    const count = config.gridLineCount || 4;
    for (let i = 1; i <= count; i++) {
      const positionPercent = (i * 100) / (count + 1);
      lines.push(
        <div
          key={`header-line-${i}`}
          className="absolute top-0 bottom-0 border-l border-neutral-100 pointer-events-none opacity-60"
          style={{ left: `${positionPercent}%` }}
        />
      );
    }
    return lines;
  };

  // Render highly-refined concentric arch lines fanning and sweeping across the background
  // Exactly like luxury interior architectural blueprint accents or the classic luxury line wavy pattern
  const renderWavyLines = () => {
    return (
      <svg
        className="absolute inset-y-0 right-0 h-full w-[80%] max-w-[900px] pointer-events-none select-none z-0 opacity-70"
        viewBox="0 0 600 100"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {Array.from({ length: 22 }).map((_, index) => {
          const shift = index * 4.2;
          const strokeWidth = 0.35 + (index * 0.025);
          const opacity = 0.015 + (22 - index) * 0.0055; // Graceful outermost fading effect
          
          // Concentric nested bezier formula fanning out meticulously to the right
          const startX = 140 + shift * 1.1;
          const cp1x = 320 + shift * 1.3;
          const cp1y = -25 + shift * 0.25;
          const cp2x = 380 + shift * 0.9;
          const cp2y = 125 - shift * 0.15;
          const endX = 580 + shift * 0.7;
          const endY = 15 + shift * 0.2;
          
          return (
            <path
              key={`luxury-wave-line-${index}`}
              d={`M ${startX} 0 C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`}
              stroke={config.logoColorGold || "#CDA274"}
              strokeWidth={strokeWidth}
              strokeOpacity={opacity}
              fill="none"
            />
          );
        })}
      </svg>
    );
  };

  return (
    <header className="sticky top-0 w-full border-b border-[#E6E6E6]/60 bg-[#FAF9F6]/90 backdrop-blur-md z-50 shadow-[0_2px_15px_-5px_rgba(41,47,54,0.02)] overflow-hidden">
      <div className="relative max-w-[1240px] mx-auto px-10 lg:px-16 z-10">
        <div className="flex items-center justify-between h-[80px] md:h-[100px]">
          {/* Logo Section */}
          <div 
            onClick={() => setActiveTab('home')} 
            className="flex items-center gap-2 md:gap-3 cursor-pointer group"
          >
            {/* Elegant Golden Arch Logo */}
            <div className="relative w-8 h-8 md:w-10 md:h-10 overflow-hidden flex-shrink-0 transition-transform duration-500 group-hover:rotate-12">
              <svg 
                viewBox="0 0 54 54" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-full h-full"
              >
                {/* Main Golden/Taupe Arch */}
                <path 
                  d="M0 27C0 12.0883 12.0883 0 27 0C41.9117 0 54 12.0883 54 27V54H27C12.0883 54 0 41.9117 0 27Z" 
                  fill={config.logoColorGold} 
                />
                {/* Inside Cutout/White Arch Doorway Offset to right-bottom */}
                <path 
                  d="M17 35C17 25.0589 25.0589 17 35 17C44.9411 17 53 25.0589 53 35V53H35C25.0589 53 17 44.9411 17 35Z" 
                  fill="#FFFFFF" 
                />
              </svg>
            </div>

            {/* Logo Text: "Interno" in serif - scaled for small viewports */}
            <span 
              className="font-serif text-[28px] sm:text-[34px] md:text-[42px] leading-none select-none tracking-tight transition-colors duration-300"
              style={{ color: config.logoColorDark }}
            >
              {config.logoText}
            </span>
          </div>

          {/* Desktop Navigation Links - Aligned perfectly with the right boundary of the layout container */}
          <nav className={`hidden md:flex items-center ${config.navGap}`}>
            {navItems.map((item) => {
              const { baseClass, isActive, activeColorStyle } = getNavStyleClasses(item);
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`${baseClass} ${config.fontWeight} ${config.letterSpacing}`}
                  style={activeColorStyle}
                >
                  <span>{item.label}</span>
                  
                  {/* Underline Nav Style */}
                  {config.navStyle === 'underline' && isActive && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px]"
                      style={{ backgroundColor: config.activeColor }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Modern Dot Style */}
                  {config.navStyle === 'modern-dot' && isActive && (
                    <motion.div
                      layoutId="activeDot"
                      className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: config.activeColor }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Elegant Pill active border indicator */}
                  {config.navStyle === 'pill' && (
                    <div 
                      className={`absolute inset-x-3 -inset-y-1 -z-10 rounded-full opacity-0 transition-opacity duration-300 hover:opacity-100 ${isActive ? 'opacity-100 bg-[#CDA274]/10' : ''}`}
                    />
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile Navigation Toggle Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center p-2 rounded-lg border border-[#E6E6E6] hover:bg-primary-light transition-colors duration-300 pointer-events-auto"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-primary-dark" />
              ) : (
                <Menu className="w-6 h-6 text-primary-dark" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-100 bg-[#FAF9F6]"
          >
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left py-2 text-lg font-medium transition-all ${
                      isActive 
                        ? 'text-primary-gold pl-2 border-l-2' 
                        : 'text-primary-dark hover:text-primary-gold pl-0'
                    }`}
                    style={isActive ? { borderColor: config.activeColor, color: config.activeColor } : {}}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
