import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  variant?: 'default' | 'featured';
}

export function ProjectCard({ project, variant = 'default' }: ProjectCardProps) {
  const isFeatured = variant === 'featured';

  return (
    <Card className={`overflow-hidden group border-border/50 ${isFeatured ? 'lg:grid lg:grid-cols-2 gap-8' : ''
      }`}>
      <div className={`relative overflow-hidden ${isFeatured ? 'aspect-[16/9]' : 'aspect-[16/10]'
        }`}>
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform transition-filter duration-500 group-hover:scale-105 group-hover:brightness-100"
        />
        <div className="absolute inset-0" />
      </div>

      <CardContent className={`relative p-6 ${isFeatured ? 'lg:p-8' : ''}`}>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className={`font-semibold ${isFeatured ? 'text-2xl' : 'text-xl'}`}>
                {project.title}
              </h3>
              <span className="text-sm text-white">{project.date}</span>
            </div>
            <p className="text-muted-foreground">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <Badge key={index} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-3 pt-4">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}