import React from 'react';
import type { TechItem } from '../types/portfolio';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';

interface TechnologiesProps {
  data: TechItem[];
  title: string;
  description: string;
}

const Technologies: React.FC<TechnologiesProps> = ({ data, title, description }) => {
  return (
    <SectionWrapper title={title} description={description}>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {data.map((tech, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center justify-center p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-cyan-500/30 transition-colors"
          >
            <img src={tech.logo} alt={tech.name} className="w-12 h-12 mb-4" />
            <span className="text-slate-300 font-medium">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Technologies;