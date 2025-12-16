import React from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  id?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, description, children, className = "" }) => {
  return (
    <section id={id} className={`py-24 px-4 md:px-8 max-w-6xl mx-auto relative ${className}`}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-transparent to-theme-primary/30" />
      
      {(title || description) && (
        <div className="mb-16 text-center max-w-2xl mx-auto">
          {title && (
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-bold text-theme-text tracking-tight mb-4"
            >
              {title}
            </motion.h2>
          )}
          {description && (
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-theme-muted text-lg font-light"
            >
              {description}
            </motion.p>
          )}
          <div className="w-12 h-1 bg-theme-primary mx-auto mt-6 rounded-full" />
        </div>
      )}
      {children}
    </section>
  );
};

export default SectionWrapper;