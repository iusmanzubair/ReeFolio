import React from 'react';
import type { HeroData } from '../types/portfolio';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

interface HeroProps {
  data: HeroData;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center px-4 relative overflow-hidden bg-theme-bg">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-theme-primary/10 rounded-full blur-[100px]" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {data.badge.isVisible && (
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mb-8 flex items-center gap-2 px-4 py-1.5 rounded-full border border-theme-primary/30 bg-theme-primary/10 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-theme-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-theme-primary"></span>
            </span>
            <span className="font-medium text-theme-accent tracking-wide uppercase text-xs">
              {data.badge.texts[0]}
            </span>
          </motion.div>
        )}

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-6xl md:text-8xl font-bold text-theme-text tracking-tighter mb-6"
        >
          {data.name}
        </motion.h1>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-theme-muted mb-10 max-w-2xl font-light"
        >
          <span className="text-theme-primary font-normal">{data.titlePrefix} {data.titleSuffixOptions[0]}</span>
          <span className="mx-2 opacity-50">•</span>
          {data.summary.split(',')[0]} 
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          {data.actions.map((action, idx) => (
            <a
              key={idx}
              href={action.url}
              className={`group px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 ${
                action.style === 'primary'
                  ? 'bg-theme-primary text-theme-bg hover:bg-theme-accent hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]'
                  : 'bg-theme-surface border border-theme-surface text-theme-text hover:border-theme-primary/50'
              }`}
            >
              {action.label}
              <ArrowDownRight className={`w-5 h-5 transition-transform group-hover:-rotate-45 duration-300`} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;