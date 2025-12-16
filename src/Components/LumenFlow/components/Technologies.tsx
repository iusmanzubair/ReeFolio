import React from 'react';
import type { TechItem } from '../types/portfolio';
import SectionWrapper from './SectionWrapper';

interface TechnologiesProps {
  data: TechItem[];
  title: string;
  description: string;
}

const Technologies: React.FC<TechnologiesProps> = ({ data, title, description }) => {
  return (
    <SectionWrapper title={title} description={description}>
      <div className="flex flex-wrap justify-center gap-3">
        {data.map((tech, idx) => (
          <div 
            key={idx}
            className="flex items-center gap-3 px-5 py-3 rounded-xl bg-theme-surface border border-white/5 hover:border-theme-primary/40 hover:bg-theme-surface/80 transition-all duration-300 cursor-default"
          >
            <img src={tech.logo} alt={tech.name} className="w-6 h-6 grayscale hover:grayscale-0 transition-all" />
            <span className="text-theme-text font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Technologies;