import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Simple AOS (Animate on Scroll) implementation
function AOSInit() {
  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll('[data-aos]');
      
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // If element is in viewport
        if (rect.top <= windowHeight * 0.85) {
          element.classList.add('aos-animate');
        }
      });
    };
    
    // Run once on initial load
    setTimeout(animateElements, 100);
    
    // Add scroll event listener
    window.addEventListener('scroll', animateElements);
    window.addEventListener('resize', animateElements);
    
    return () => {
      window.removeEventListener('scroll', animateElements);
      window.removeEventListener('resize', animateElements);
    };
  }, []);
  
  return null;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AOSInit />
    <App />
  </StrictMode>
);