import { Button } from '@/components/ui/button';
import { ArrowRight, Code, User } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[60%] h-[70%] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-[60%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container relative z-10 flex justify-center">
        <div className="flex flex-col gap-6 max-w-xl text-center">
          <div
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mx-auto"
            data-aos="fade-up"
          >
            <Code size={16} />
            <span>Available for new projects</span>
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span className="text-primary">Owen Robson</span>
            <p>Front End Developer</p>
          </h1>

          <p
            className="text-muted-foreground text-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            I design responsive, high-performing HTML emails and templates with a strong foundation in web development. Leveraging modern front-end principles, I create visually engaging, accessible, and conversion-driven email experiences that align with brand goalss.          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 mt-4 justify-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <a href="#agency-projects">
              <Button size="lg" className="group">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="#about">
              <Button size="lg" variant="outline">
                <User className="mr-2 h-4 w-4" />
                About Me
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
