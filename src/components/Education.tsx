'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen, CheckCircle2, Sparkles, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-cyan-950/50 border border-teal-200 dark:border-cyan-800/40 text-teal-700 dark:text-cyan-400 text-xs font-mono mb-3"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Education & <span className="gradient-text">Academics</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Education Timeline Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-2xl relative overflow-hidden group"
          >
            {/* Background Ambient Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-transparent dark:from-blue-600/10 dark:via-purple-600/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-start gap-5">
                {/* Institution Icon Badge */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 dark:from-blue-600 dark:to-purple-600 p-[2px] flex-shrink-0 shadow-md">
                  <div className="w-full h-full bg-slate-900 dark:bg-slate-950 rounded-[14px] flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-cyan-400" />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-1">
                    {PERSONAL_INFO.degree}
                  </h3>
                  <h4 className="text-base font-semibold text-blue-700 dark:text-blue-400 mb-2 flex items-center gap-2">
                    {PERSONAL_INFO.college}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-3 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-indigo-600 dark:text-purple-400" /> {PERSONAL_INFO.graduationYear}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-teal-600 dark:text-cyan-400" /> Tamil Nadu, India
                    </span>
                  </p>
                </div>
              </div>

              {/* CGPA Badge */}
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-center flex-shrink-0 min-w-[140px] shadow-sm">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block mb-1">Cumulative CGPA</span>
                <span className="text-3xl font-black bg-gradient-to-r from-blue-700 via-indigo-600 to-teal-600 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
                  {PERSONAL_INFO.cgpa}
                </span>
              </div>
            </div>

            {/* Academic Highlights & Coursework */}
            <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-indigo-600 dark:text-purple-400" /> Core Engineering Coursework
                </h4>
                <ul className="space-y-2.5 font-mono text-xs text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" /> Object-Oriented Programming (Java)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" /> Data Structures & Algorithms
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" /> Database Management Systems (DBMS & SQL)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" /> Artificial Intelligence & Machine Learning
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-teal-600 dark:text-cyan-400" /> Key Specializations
                </h4>
                <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800">
                    <strong className="text-blue-700 dark:text-cyan-300 block mb-0.5 font-semibold">Generative AI & LLMs:</strong>
                    Building RAG pipelines, FAISS vector indexing, and embedding optimization.
                  </div>
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800">
                    <strong className="text-indigo-700 dark:text-purple-300 block mb-0.5 font-semibold">Backend Development:</strong>
                    Core Java architecture, MySQL JDBC persistence, and Object-Oriented system design.
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};
