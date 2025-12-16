import React from 'react';
import type { ExperienceItem } from '../types/portfolio';
import SectionWrapper from './SectionWrapper';

interface ExperienceProps {
  data: ExperienceItem[];
  title: string;
  description: string;
}

const Experience: React.FC<ExperienceProps> = ({ data, title, description }) => {
  return (
    <SectionWrapper title={title} description={description} className="bg-slate-900/20">
      <div className="space-y-8 relative border-l border-slate-800 ml-3 md:ml-6">
        {data.map((job, idx) => (
          <div key={idx} className="relative pl-8 md:pl-12">
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
            
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold text-slate-100">{job.role}</h3>
                <p className="text-cyan-400 font-medium">{job.companyName}</p>
              </div>
              <div className="text-sm text-slate-500 mt-1 md:mt-0 font-mono">
                {job.startDate} — {job.endDate}
              </div>
            </div>
            
            <p className="text-slate-500 text-sm mb-4">{job.location}</p>
            <p className="text-slate-300 leading-relaxed mb-4">{job.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {job.techStack.map((tech, tIdx) => (
                <div key={tIdx} className="flex items-center gap-1.5 px-2 py-1 rounded bg-slate-800/50 border border-slate-700/50">
                  <img src={tech.logo} alt={tech.name} className="w-4 h-4" />
                  <span className="text-xs text-slate-300">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;