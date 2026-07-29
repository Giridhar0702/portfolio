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
  GitCommit, 
  Award, 
  CheckCircle,
  GraduationCap
} from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

const highlightIcons: Record<string, React.ReactNode> = {
  Coffee: <Coffee className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-indigo-600 dark:text-purple-400" />,
  Cpu: <Cpu className="w-5 h-5 text-blue-600 dark:text-cyan-400" />,
  Database: <Database className="w-5 h-5 text-teal-600 dark:text-blue-400" />,
  Zap: <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
};

const counterStats = [
  { label: 'CGPA Score', value: '7.75', subtext: 'Bannari Amman Inst. of Tech' },
  { label: 'Featured Projects', value: '3+', subtext: 'Multimodal RAG & Java Applications' },
  { label: 'AI & CS Skills', value: '25+', subtext: 'Java, Python, FAISS, LLMs' },
  { label: 'Certifications', value: '2', subtext: 'HackerRank Java & Navigate Labs' },
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

        {/* Top Grid: Bio Paragraphs & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* Bio Box */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="gradient-text">AI Software Engineering</span> Aspirant
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6 text-base">
                "I am a Computer Science and Engineering undergraduate with strong knowledge of Java, Object-Oriented Programming, and backend development. I enjoy building AI-powered applications using Large Language Models, Retrieval-Augmented Generation (RAG), semantic search, and modern AI frameworks.
              </p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base">
                I continuously explore emerging AI technologies and enjoy solving real-world problems through scalable software solutions. My goal is to become an AI Software Engineer building intelligent applications that create real impact."
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1.5 text-blue-700 dark:text-blue-400 font-medium">
                <GraduationCap className="w-4 h-4" /> Bannari Amman Inst. of Tech (2023 - 2027)
              </span>
              <span className="flex items-center gap-1.5 text-teal-700 dark:text-cyan-400 font-medium">
                <CheckCircle className="w-4 h-4" /> B.E Computer Science & Engineering
              </span>
            </div>
          </motion.div>

          {/* Key Skill Highlights Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between gap-3"
          >
            {PERSONAL_INFO.highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-4 flex items-center gap-4 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 group cursor-default shadow-sm"
              >
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 group-hover:scale-110 transition-transform">
                  {highlightIcons[highlight.icon] || <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    {highlight.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-normal">
                    {highlight.desc}
                  </p>
                </div>
              </motion.div>
            ))}
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

        {/* GitHub Activity Grid Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <GitCommit className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                GitHub Contribution & Code Activity
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                Active commits across Java, RAG Systems, & Open Source Projects
              </p>
            </div>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-xs font-mono text-blue-700 dark:text-cyan-400 hover:text-blue-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all w-fit font-medium"
            >
              @Giridhar0702 on GitHub →
            </a>
          </div>

          {/* GitHub Activity Heatmap Grid Visualization */}
          <div className="bg-slate-900 dark:bg-slate-950/80 rounded-2xl p-4 border border-slate-800 overflow-x-auto">
            <div className="flex items-center justify-between text-xs font-mono text-slate-300 dark:text-slate-400 mb-3 min-w-[500px]">
              <span>Jan - Jul 2026 Code Contributions</span>
              <div className="flex items-center gap-1.5 text-[10px]">
                <span>Less</span>
                <span className="w-2.5 h-2.5 rounded-sm bg-slate-800 border border-slate-700" />
                <span className="w-2.5 h-2.5 rounded-sm bg-blue-900/60" />
                <span className="w-2.5 h-2.5 rounded-sm bg-blue-600/80" />
                <span className="w-2.5 h-2.5 rounded-sm bg-cyan-400" />
                <span>More</span>
              </div>
            </div>

            <div className="grid grid-flow-col grid-rows-7 gap-1.5 min-w-[650px] py-1">
              {Array.from({ length: 140 }).map((_, i) => {
                const intensity = (i * 7 + (i % 5) * 11) % 4;
                const colors = [
                  'bg-slate-800/80 border border-slate-700/50',
                  'bg-blue-950/80 border border-blue-900/40',
                  'bg-blue-600/70 border border-blue-500/50',
                  'bg-cyan-400 border border-cyan-300/80 shadow-[0_0_6px_rgba(6,182,212,0.4)]',
                ];
                return (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-sm ${colors[intensity]} transition-all hover:scale-125 hover:z-10`}
                    title={`Day ${i + 1}: ${intensity * 3 + 1} contributions`}
                  />
                );
              })}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
