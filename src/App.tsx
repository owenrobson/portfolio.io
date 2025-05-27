import { lazy, Suspense } from 'react';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';

// Lazy load non-critical sections
const About = lazy(() => import('@/components/sections/About'));
const AgencyProjects = lazy(() => import('@/components/sections/AgencyProjects'));
const IndividualProjects = lazy(() => import('@/components/sections/IndividualProjects'));
const Contact = lazy(() => import('@/components/sections/Contact'));

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme" disableSwitch>
      <Layout>
        <Hero />
        <Suspense fallback={<div className="h-screen" />}>
          <About />
          <AgencyProjects />
          <IndividualProjects />
          <Contact />
        </Suspense>
      </Layout>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;