import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Technologies from './components/Technologies';
import UserInfo from './components/UserInfo';
import type { Config } from './types/portfolio';

export const LumenFlowHome = ({ portfolioConfig }: { portfolioConfig: Config }) => {
  return (
    <main className="bg-theme-bg min-h-screen text-theme-text selection:bg-theme-primary selection:text-white">
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
