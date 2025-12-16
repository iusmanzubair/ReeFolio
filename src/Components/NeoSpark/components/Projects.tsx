import React from 'react';
import type { ProjectItem } from '../types/portfolio';
import SectionWrapper from './SectionWrapper';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectsProps {
  data: ProjectItem[];
  title: string;
  description: string;
}

const Projects: React.FC<ProjectsProps> = ({ data, title, description }) => {
  return (
    <SectionWrapper id="projects" title={title} description={description}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.map((project, idx) => (
          <div key={idx} className="group bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
            <div className="h-48 overflow-hidden relative">
               {/* Overlay */}
               <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-all duration-500 z-10" />
               <img 
                 src={project.projectImage} 
                 alt={project.projectName} 
                 className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
               />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                  {project.projectTitle}
                </h3>
                <div className="flex gap-3">
                  <a href={project.githubLink} className="text-slate-400 hover:text-white"><Github size={20} /></a>
                  <a href={project.liveLink} className="text-slate-400 hover:text-white"><ExternalLink size={20} /></a>
                </div>
              </div>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                {project.projectDescription}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, tIdx) => (
                  <span key={tIdx} className="px-2 py-1 text-xs rounded bg-slate-800 text-slate-300 border border-slate-700">
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;