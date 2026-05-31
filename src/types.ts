export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface HeaderConfig {
  logoText: string;
  logoColorGold: string; // e.g. '#CDA274'
  logoColorDark: string; // e.g. '#292F36'
  activeColor: string; // e.g. '#CDA274'
  inactiveColor: string; // e.g. '#292F36'
  showBackdropGrid: boolean;
  gridLineCount: number;
  letterSpacing: 'tracking-normal' | 'tracking-wide' | 'tracking-wider' | 'tracking-widest';
  fontWeight: 'font-normal' | 'font-medium' | 'font-semibold' | 'font-bold';
  navStyle: 'classic' | 'modern-dot' | 'underline' | 'pill';
  navGap: 'gap-6' | 'gap-8' | 'gap-10' | 'gap-12';
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  avatarUrl: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
