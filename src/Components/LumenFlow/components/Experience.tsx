import React from 'react';
import type { ExperienceItem } from '../types/portfolio';
import SectionWrapper from './SectionWrapper';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceProps {
  data: ExperienceItem[];
  title: string;
  description: string;
}

const Experience: React.FC<ExperienceProps> = ({ data, title, description }) => {
  return (
    <SectionWrapper title={title} description={description}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((job, idx) => (
          <div 
            key={idx} 
            className={`p-8 rounded-3xl border border-white/5 bg-theme-surface hover:bg-theme-surface/80 hover:border-theme-primary/20 transition-all duration-300 ${idx === 0 ? 'md:col-span-2' : ''}`}
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-theme-text mb-1">{job.role}</h3>
                <span className="text-theme-primary font-medium">{job.companyName}</span>
              </div>
              <div className="flex flex-col items-start md:items-end gap-1 mt-4 md:mt-0 text-sm text-theme-muted font-mono">
                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  <span>{job.startDate} — {job.endDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} />
                  <span>{job.location}</span>
                </div>
              </div>
            </div>

            <p className="text-theme-muted/80 leading-relaxed mb-6">
              {job.description}
            </p>

            {job.techStack.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                {job.techStack.map((tech, tIdx) => (
                  <span key={tIdx} className="text-xs font-mono text-theme-accent">
                    #{tech.name}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;