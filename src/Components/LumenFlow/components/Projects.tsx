import React from 'react';
import type { ProjectItem } from '../types/portfolio';
import SectionWrapper from './SectionWrapper';
import { Github, Globe } from 'lucide-react';

interface ProjectsProps {
  data: ProjectItem[];
  title: string;
  description: string;
}

const Projects: React.FC<ProjectsProps> = ({ data, title, description }) => {
  return (
    <SectionWrapper id="projects" title={title} description={description}>
      <div className="space-y-12">
        {data.map((project, idx) => (
          <div 
            key={idx} 
            className="group grid grid-cols-1 lg:grid-cols-12 gap-0 border border-theme-surface/50 rounded-3xl overflow-hidden bg-theme-surface/30 hover:border-theme-primary/30 transition-all duration-500"
          >
            {/* Image Side */}
            <div className={`lg:col-span-7 relative h-64 lg:h-auto overflow-hidden ${idx % 2 === 1 ? 'lg:order-last' : ''}`}>
              <div className="absolute inset-0 bg-theme-primary/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500" />
              <img 
                src={project.projectImage} 
                alt={project.projectName} 
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
              />
            </div>

            {/* Content Side */}
            <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center justify-between mb-6">
                 <h3 className="text-2xl font-bold text-theme-text">{project.projectTitle}</h3>
                 <div className="flex gap-3">
                   <a href={project.githubLink} className="p-2 rounded-full bg-theme-bg hover:text-theme-primary transition-colors border border-white/5"><Github size={18} /></a>
                   <a href={project.liveLink} className="p-2 rounded-full bg-theme-bg hover:text-theme-primary transition-colors border border-white/5"><Globe size={18} /></a>
                 </div>
              </div>

              <p className="text-theme-muted mb-8 leading-relaxed">
                {project.projectDescription}
              </p>

              <div className="mt-auto">
                <p className="text-xs font-mono text-theme-primary mb-3 uppercase tracking-wider">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 text-sm rounded-lg bg-theme-bg border border-white/5 text-theme-text/80">
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;