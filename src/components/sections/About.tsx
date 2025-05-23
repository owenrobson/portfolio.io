import { Button } from '@/components/ui/button';
import { Download, Mail } from 'lucide-react';
import profileImage from '../images/linkedin.jpg'; // fixed import path

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
          {/* Image side */}
          <div className="relative w-full mx-auto max-w-[280px]"> {/* smaller container, centered on small */}
            <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-muted shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/10 to-background/5 mix-blend-overlay"></div>

              {/* Your image here */}
              <img
                src={profileImage}
                alt="Portrait of Owen"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">
                About Me
              </h2>
            </div>

            <div className="space-y-4">
              <p>
                I’m a front-end developer with two years of experience building responsive, visually engaging websites that blend form and function. Having completed a BCS Level 4 Software Development apprenticeship, I am now focused on further enhancing my front-end development skills and deepening my expertise in modern web technologies.
              </p>
              <p>
                I’ve worked in both agency environments and on solo projects, helping businesses elevate their digital presence. With a strong foundation in modern web technologies and a keen eye for design, I focus on crafting user-friendly experiences that are as effective as they are beautiful.
              </p>
            </div>


            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button>
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
