import React, { useEffect, useState } from 'react';
import type { HeroData } from '../types/portfolio';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

interface HeroProps {
  data: HeroData;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % data.titleSuffixOptions.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [data.titleSuffixOptions]);

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 max-w-7xl mx-auto pt-20">
      {data.badge.isVisible && (
         <motion.div 
           initial={{ opacity: 0, y: -10 }}
           animate={{ opacity: 1, y: 0 }}
           className="mb-6 w-fit"
         >
           <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium border border-cyan-500/20">
             {data.badge.texts[0]}
           </span>
         </motion.div>
      )}

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-bold text-slate-100 mb-6"
      >
        Hi, I'm {data.name}. <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
           {data.titlePrefix} {data.titleSuffixOptions[textIndex]}
        </span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-slate-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
      >
        {data.summary}
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-wrap gap-4"
      >
        {data.actions.map((action, idx) => (
          <a
            key={idx}
            href={action.url}
            className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
              action.style === 'primary' 
                ? 'bg-cyan-500 hover:bg-cyan-600 text-black' 
                : 'border border-slate-700 hover:border-cyan-500 text-slate-300 hover:text-cyan-400'
            }`}
          >
            {action.label}
            {action.style === 'primary' ? <ArrowRight size={18} /> : <Mail size={18} />}
          </a>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;