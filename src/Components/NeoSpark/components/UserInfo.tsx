import React from 'react';
import type { UserInfoData } from '../types/portfolio';
import SectionWrapper from './SectionWrapper';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

interface UserInfoProps {
  data: UserInfoData;
  title: string;
  description: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ data, title, description }) => {
  return (
    <SectionWrapper id="contact" title={title} description={description} className="mb-20">
      <div className="bg-gradient-to-br from-slate-900 to-black p-8 md:p-12 rounded-2xl border border-slate-800 text-center">
        <h3 className="text-2xl font-bold text-white mb-8">{data.title}</h3>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          <a href={`mailto:${data.email}`} className="flex flex-col items-center gap-3 group">
            <div className="p-4 rounded-full bg-slate-800 group-hover:bg-cyan-500 transition-colors">
              <Mail className="w-6 h-6 text-cyan-400 group-hover:text-black" />
            </div>
            <span className="text-slate-300 group-hover:text-white">{data.email}</span>
          </a>

          <a href={`https://${data.github}`} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-3 group">
            <div className="p-4 rounded-full bg-slate-800 group-hover:bg-cyan-500 transition-colors">
              <Github className="w-6 h-6 text-cyan-400 group-hover:text-black" />
            </div>
            <span className="text-slate-300 group-hover:text-white">GitHub</span>
          </a>

          <a href={`https://${data.linkedin}`} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-3 group">
            <div className="p-4 rounded-full bg-slate-800 group-hover:bg-cyan-500 transition-colors">
              <Linkedin className="w-6 h-6 text-cyan-400 group-hover:text-black" />
            </div>
            <span className="text-slate-300 group-hover:text-white">LinkedIn</span>
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex items-center justify-center gap-2 text-slate-500">
          <MapPin size={16} />
          <span>{data.location}</span>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default UserInfo;