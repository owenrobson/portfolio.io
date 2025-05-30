import eis from '@/components/images/eis.png';
import monkeyshoulder from '@/components/images/monkeyshoulder.png';
import canadianaffair from '@/components/images/canadianaffair.png';
import tektura from '@/components/images/tektura.png';
import personalab from '@/components/images/personalab.png';


export interface Project {
  id: string;
  title: string;
  description: string;
  type: 'agency' | 'individual';
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
  featured?: boolean;
  date: string;
}

export const projects: Project[] = [
  // Agency Projects
  {
    id: 'agency-1',
    title: 'Event Insurance Services',
    description: 'Contriubted to a comprehensive redesign and development of the website and CRM, implementing enhancements and optimising efficiency.',
    type: 'agency',
    image: eis,
    technologies: ['React', 'Tailwind', 'Vite', 'ShadCn', 'Laravel', 'InertiaJS', 'SQL', 'AWS'],
    link: 'https://www.events-insurance.co.uk/',
    featured: true,
    date: 'Dec 2024'
  },
  {
    id: 'agency-2',
    title: 'William Grant & Sons',
    description: 'Worked on the Monkey Shoulder website, a whiskey product by William Grant & Sons. I contributed to front-end development, optimised responsive design, implemented interactive features, and ensured cross-browser compatibility to enhance user experience.',
    type: 'agency',
    image: monkeyshoulder,
    technologies: ['React', 'Next.js', 'Tailwind', 'Laravel'],
    link: 'https://www.monkeyshoulder.com/en-gb',
    date: 'November 2024'
  },
  {
    id: 'agency-3',
    title: 'Canadian Affair',
    description: 'Helped senior developers on the front-end and backend development of the Canadian Affair website, improving responsive layouts, implementing new UI components, optimising performance, and testing the booking system by using unit tests',
    type: 'agency',
    image: canadianaffair,
    technologies: ['React', 'Next.js', 'Tailwind', 'Laravel', 'AWS'],
    link: 'https://www.canadianaffair.com/',
    date: 'February 2025'
  },
  {
    id: 'agency-4',
    title: 'Tektura',
    description: 'Contributed to improving the sample checkout process by refining user interactions, optimising form validation, and integrating backend logic to ensure a smoother, more efficient user experience.',
    type: 'agency',
    image: tektura,
    technologies: ['React', 'Tailwind', 'Laravel', 'AWS'],
    link: 'https://www.tektura.com/',
    date: 'April 2025'
  },

  // Individual Projects
  {
    id: 'individual-1',
    title: 'PersonaLab',
    description: 'An idea for a AI tool that builds detailed buyer personas from web traffic, CRM data, or survey results using clustering and natural language insights.',
    type: 'individual',
    image: personalab,
    technologies: ['React', 'Tailwind', 'Vite', 'Typescript', 'openai'],
    link: 'https://example.com',
    github: 'https://github.com',
    featured: true,
    date: 'April 2023'
  },
  // {
  //   id: 'individual-2',
  //   title: 'Weather Visualization Dashboard',
  //   description: 'Interactive weather dashboard that displays current and historical weather data with beautiful visualizations and location-based forecasting.',
  //   type: 'individual',
  //   image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   technologies: ['Vue.js', 'D3.js', 'OpenWeather API', 'Netlify', 'PWA'],
  //   link: 'https://example.com',
  //   github: 'https://github.com',
  //   date: 'January 2023'
  // },
  // {
  //   id: 'individual-3',
  //   title: 'Markdown Note Taking App',
  //   description: 'A minimalist markdown editor with cloud sync, dark mode, and tag-based organization. Built as a PWA for offline functionality.',
  //   type: 'individual',
  //   image: 'https://images.pexels.com/photos/4068291/pexels-photo-4068291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   technologies: ['React', 'IndexedDB', 'Firebase', 'Marked.js', 'Workbox'],
  //   link: 'https://example.com',
  //   github: 'https://github.com',
  //   date: 'October 2022'
  // },
  // {
  //   id: 'individual-4',
  //   title: 'Personal Finance Tracker',
  //   description: 'An application to track personal finances, visualize spending patterns, and set budgeting goals with expense categorization.',
  //   type: 'individual',
  //   image: 'https://images.pexels.com/photos/3943723/pexels-photo-3943723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   technologies: ['React', 'Chart.js', 'Supabase', 'TailwindCSS', 'Vite'],
  //   link: 'https://example.com',
  //   github: 'https://github.com',
  //   date: 'July 2022'
  // }
];