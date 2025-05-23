import { ThemeProvider } from '@/components/theme/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import AgencyProjects from '@/components/sections/AgencyProjects';
import IndividualProjects from '@/components/sections/IndividualProjects';
import Contact from '@/components/sections/Contact';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme" disableSwitch>
      <Layout>
        <Hero />
        <About />
        <AgencyProjects />
        <IndividualProjects />
        <Contact />
      </Layout>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;