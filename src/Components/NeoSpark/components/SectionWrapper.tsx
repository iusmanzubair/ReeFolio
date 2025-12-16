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
    <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto ${className}`}>
      {(title || description) && (
        <div className="mb-12 space-y-2">
          {title && (
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-slate-100"
            >
              {title}
            </motion.h2>
          )}
          {description && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 text-lg"
            >
              {description}
            </motion.p>
          )}
        </div>
      )}
      {children}
    </section>
  );
};

export default SectionWrapper;