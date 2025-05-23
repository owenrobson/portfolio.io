import { ProjectCard } from '@/components/ui/project-card';
import { Building } from 'lucide-react';
import { projects } from '@/data/projects';

// Get only agency projects
const agencyProjects = projects.filter(project => project.type === 'agency');

const AgencyProjects = () => {
  const featuredProject = agencyProjects.find(project => project.featured);
  const regularProjects = agencyProjects.filter(project => !project.featured);
  
  return (
    <section id="agency-projects" className="py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center mb-4 gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
              <Building size={16} />
              <span>Professional Work</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Agency Projects</h2>
            <p className="text-muted-foreground max-w-2xl">
              Showcasing collaborative work developed for clients through agencies. These projects demonstrate my ability to deliver high-quality solutions in professional environments.
            </p>
          </div>
        </div>
        
        <div className="space-y-8">
          {/* Featured project */}
          {featuredProject && (
            <div className="mb-12">
              <ProjectCard project={featuredProject} variant="featured" />
            </div>
          )}
          
          {/* Regular projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyProjects;