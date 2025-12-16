import React from 'react';
import type { UserInfoData } from '../types/portfolio';
import SectionWrapper from './SectionWrapper';

interface UserInfoProps {
  data: UserInfoData;
  title: string;
  description: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ data, title, description }) => {
  return (
    <SectionWrapper id="contact" title={title} description={description}>
      <div className="bg-gradient-to-tr from-theme-surface to-theme-bg p-1 rounded-3xl">
        <div className="bg-theme-bg rounded-[22px] p-8 md:p-16 text-center border border-white/5">
            <h2 className="text-3xl md:text-4xl font-bold text-theme-text mb-8">
              Ready to create something <span className="text-theme-primary">extraordinary?</span>
            </h2>
            
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
               <a href={`mailto:${data.email}`} className="px-8 py-4 rounded-xl bg-theme-text text-theme-bg font-bold hover:bg-white transition-colors">
                 Send an Email
               </a>
               <a href={`https://${data.linkedin}`} className="px-8 py-4 rounded-xl border border-white/10 text-theme-text font-bold hover:bg-white/5 transition-colors">
                 Connect on LinkedIn
               </a>
            </div>

            <div className="flex justify-center gap-8 text-theme-muted text-sm font-mono border-t border-white/5 pt-8">
               <span>{data.location}</span>
               <span>•</span>
               <span>{data.email}</span>
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default UserInfo;