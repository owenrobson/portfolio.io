import { Github, Linkedin, Mail, } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 py-12 mt-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Web Dev Portfolio by Owen Robson<span className="text-primary">.</span></h3>
            <p className="text-muted-foreground max-w-xs">
              Crafting exceptional digital experiences through innovative design and development.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="#agency-projects" className="text-muted-foreground hover:text-primary transition-colors">Agency Projects</a></li>
              <li><a href="#individual-projects" className="text-muted-foreground hover:text-primary transition-colors">Individual Projects</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com/owenrobson" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/owen-robson/" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
            <p className="text-muted-foreground text-sm">contact@portfolio.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;