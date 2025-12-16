import type { Config } from './types/portfolio';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Technologies from './components/Technologies';
import UserInfo from './components/UserInfo';

export const NeoSparkHome = ({ portfolioConfig }: { portfolioConfig: Config }) => {
  return (
    <main className="bg-[#000000] min-h-screen text-slate-200 selection:bg-cyan-500/30">
      {portfolioConfig.sections.map((section, index) => {
        switch (section.type) {
          case 'hero':
            return <Hero key={index} data={section.data} />;
          case 'projects':
            return (
              <Projects 
                key={index} 
                data={section.data} 
                title={section.sectionTitle} 
                description={section.sectionDescription} 
              />
            );
          case 'experience':
            return (
              <Experience 
                key={index} 
                data={section.data} 
                title={section.sectionTitle} 
                description={section.sectionDescription} 
              />
            );
          case 'technologies':
            return (
              <Technologies 
                key={index} 
                data={section.data} 
                title={section.sectionTitle} 
                description={section.sectionDescription} 
              />
            );
          case 'userInfo':
            return (
              <UserInfo 
                key={index} 
                data={section.data} 
                title={section.sectionTitle} 
                description={section.sectionDescription} 
              />
            );
          default:
            return null;
        }
      })}
    </main>
  );
};
