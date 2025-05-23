import { ProjectCard } from '@/components/ui/project-card';
import { Code2 } from 'lucide-react';
import { projects } from '@/data/projects';

// Get only individual projects
const individualProjects = projects.filter(project => project.type === 'individual');

const IndividualProjects = () => {
  const featuredProject = individualProjects.find(project => project.featured);
  const regularProjects = individualProjects.filter(project => !project.featured);
  
  return (
    <section id="individual-projects" className="py-20 bg-muted/30">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center mb-4 gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
              <Code2 size={16} />
              <span>Personal Projects</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Individual Projects</h2>
            <p className="text-muted-foreground max-w-2xl">
              A collection of personal projects and side ventures that showcase my passions, experimentation with new technologies, and creative problem-solving skills.
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

export default IndividualProjects;