'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Coffee, 
  Sparkles, 
  Cpu, 
  Database, 
  Zap, 
  Code2, 
  Award, 
  CheckCircle,
  GraduationCap
} from 'lucide-react';
import { PERSONAL_INFO, SKILL_CATEGORIES, CERTIFICATIONS } from '@/data/portfolioData';

const highlightIcons: Record<string, React.ReactNode> = {
  Coffee: <Coffee className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-indigo-600 dark:text-purple-400" />,
  Cpu: <Cpu className="w-5 h-5 text-blue-600 dark:text-cyan-400" />,
  Database: <Database className="w-5 h-5 text-teal-600 dark:text-blue-400" />,
  Zap: <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
};

const totalSkillsCount = SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0);
const certsCount = CERTIFICATIONS.length;

const counterStats = [
  { label: 'CGPA Score', value: '7.75', subtext: 'Bannari Amman Inst. of Tech' },
  { label: 'Featured Projects', value: '3+', subtext: 'Multimodal RAG & Java Applications' },
  { label: 'AI & CS Skills', value: `${totalSkillsCount}+`, subtext: 'Java, Python, FAISS, LLMs' },
  { label: 'Certifications', value: `${certsCount}`, subtext: 'Oracle, HackerRank & Navigate Labs' },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800/40 text-blue-700 dark:text-blue-400 text-xs font-mono mb-3"
          >
            <User className="w-3.5 h-3.5" />
            <span>Discover My Background</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Top Grid: Photo Card, Bio & Skill Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left Column: Portrait Photo Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 glass-panel rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-xl flex flex-col justify-between items-center relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

            <div className="relative w-full aspect-[4/5] rounded-2xl p-[3px] bg-gradient-to-tr from-blue-600 via-indigo-600 to-teal-500 dark:from-blue-500 dark:via-purple-500 dark:to-cyan-400 shadow-md overflow-hidden mb-4">
              <div className="w-full h-full rounded-[13px] overflow-hidden bg-slate-900">
                <img 
                  src={PERSONAL_INFO.avatar} 
                  alt={PERSONAL_INFO.name} 
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src.includes('.jpeg')) {
                      target.src = '/profile.jpg';
                    } else if (target.src.includes('.jpg')) {
                      target.src = '/profile.png';
                    }
                  }}
                  style={{ objectPosition: '50% 25%' }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
            </div>

            <div className="text-center w-full">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-xs font-mono text-blue-600 dark:text-cyan-400 mb-2 font-semibold">
                Computer Science & Engineering
              </p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-600 dark:text-slate-400">
                <span>📍</span>
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Box & Skill Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 glass-panel rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="gradient-text">AI Software Engineering</span> Aspirant
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4 text-base">
                "I am a Computer Science and Engineering undergraduate with strong knowledge of Java, Object-Oriented Programming, and backend development. I enjoy building AI-powered applications using Large Language Models, Retrieval-Augmented Generation (RAG), semantic search, and modern AI frameworks.
              </p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base mb-6">
                I continuously explore emerging AI technologies and enjoy solving real-world problems through scalable software solutions. My goal is to become an AI Software Engineer building intelligent applications that create real impact."
              </p>

              {/* Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                {PERSONAL_INFO.highlights.slice(0, 4).map((highlight) => (
                  <div 
                    key={highlight.title}
                    className="glass-card rounded-xl p-3 flex items-center gap-3 border border-slate-200 dark:border-slate-800/80 hover:border-blue-500/40 transition-colors shadow-sm"
                  >
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex-shrink-0">
                      {highlightIcons[highlight.icon] || <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                        {highlight.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                        {highlight.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1.5 text-blue-700 dark:text-blue-400 font-medium">
                <GraduationCap className="w-4 h-4" /> Bannari Amman Inst. of Tech (2023 - 2027)
              </span>
              <span className="flex items-center gap-1.5 text-teal-700 dark:text-cyan-400 font-medium">
                <CheckCircle className="w-4 h-4" /> B.E Computer Science & Engineering
              </span>
            </div>
          </motion.div>

        </div>

        {/* Counter Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {counterStats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel rounded-2xl p-6 text-center border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 transition-all shadow-sm"
            >
              <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-700 via-indigo-600 to-teal-600 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-slate-200 mb-1">{stat.label}</div>
              <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">{stat.subtext}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
