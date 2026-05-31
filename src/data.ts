import { NavItem, Project, Service, Testimonial } from './types';

export const DEFAULT_NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About Us', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'pages', label: 'Pages', href: '#pages' },
  { id: 'contact', label: 'Contact Us', href: '#contact' }
];

export const SERVICES_DATA: Service[] = [
  {
    id: 's1',
    title: 'Project Plan',
    description: 'We sketch out your space layout precisely, optimizing spatial flow, natural light entry, and ergonomic harmony.',
    iconName: 'Layout'
  },
  {
    id: 's2',
    title: 'Interior Design',
    description: 'Bespoke choices of colors, materials, textiles, and custom furniture curation that reflects your distinct style narrative.',
    iconName: 'Compass'
  },
  {
    id: 's3',
    title: 'Retail Design',
    description: 'Engineered commercial environments designed to optimize brand storytelling, foot traffic flow, and retail experiences.',
    iconName: 'Store'
  },
  {
    id: 's4',
    title: 'Lighting & Accents',
    description: 'Architectural lighting simulations that completely transform the spatial mood from day to night gradients.',
    iconName: 'Sun'
  },
  {
    id: 's5',
    title: 'Outdoor Lanscaping',
    description: 'Seamless integration of indoor-outdoor transitions, utilizing resilient biophilic features and green design.',
    iconName: 'Flower'
  },
  {
    id: 's6',
    title: 'Furniture & Curation',
    description: 'Sourcing ultra-exclusive vintage details, bespoke carpentry, and artisanal finishes directly from European creators.',
    iconName: 'Layers'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'p1',
    title: 'Minimalist Salon Oasis',
    category: 'Living Room',
    imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p2',
    title: 'Modern Japandi Bedroom',
    category: 'Bedroom',
    imageUrl: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p3',
    title: 'Classic Marble Kitchenette',
    category: 'Kitchen',
    imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p4',
    title: 'Urban Industrial Loft',
    category: 'Living Room',
    imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p5',
    title: 'Aura SPA & Bath Retreat',
    category: 'Bathroom',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p6',
    title: 'Midnight Lounge Studio',
    category: 'Kitchen',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'Natasha Chaudhury',
    location: 'New Delhi, India',
    text: 'Interno completely redefined the comfort of our home. Their attention to subtle textures and spatial light curation is masterclass level.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 't2',
    name: 'Raymond Palmer',
    location: 'London, UK',
    text: 'A highly professional service from design blueprints to finalized timber joinery. The architectural grid system and design clarity was flawless.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  }
];

export const BRAND_VALUES = [
  { id: 'v1', number: '12+', text: 'Years of Experience' },
  { id: 'v2', number: '85+', text: 'Complete Projects' },
  { id: 'v3', number: '15+', text: 'Active Design Awards' },
  { id: 'v4', number: '95+', text: 'Ecstatic Clients' }
];
