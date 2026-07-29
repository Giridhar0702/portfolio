'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';
import { CERTIFICATIONS } from '@/data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
<<<<<<< HEAD
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800/40 text-amber-700 dark:text-amber-400 text-xs font-mono mb-3"
=======
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/50 border border-amber-800/40 text-amber-400 text-xs font-mono mb-3"
>>>>>>> 17a2389de4f74c8b871733a1d870939a78d9bd57
          >
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
<<<<<<< HEAD
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Industry <span className="gradient-text">Certifications</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-purple-500 mx-auto mt-4 rounded-full" />
=======
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Industry <span className="gradient-text">Certifications</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
>>>>>>> 17a2389de4f74c8b871733a1d870939a78d9bd57
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -6 }}
<<<<<<< HEAD
              className="glass-card rounded-3xl p-8 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 flex flex-col justify-between group relative overflow-hidden shadow-sm dark:shadow-xl bg-white dark:bg-slate-900/70"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 via-indigo-600 to-blue-600 dark:from-amber-500 dark:via-purple-600 dark:to-blue-500 p-[2px] shadow-md">
                    <div className="w-full h-full bg-slate-900 dark:bg-slate-950 rounded-[14px] flex items-center justify-center">
                      <Award className="w-7 h-7 text-amber-400" />
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 flex items-center gap-1.5 font-semibold">
=======
              className="glass-card rounded-3xl p-8 border border-slate-800 hover:border-blue-500/50 flex flex-col justify-between group relative overflow-hidden shadow-xl"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-amber-500/10 via-purple-500/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform pointer-events-none" />

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 via-purple-600 to-blue-500 p-[2px] shadow-lg">
                    <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                      <Award className="w-7 h-7 text-amber-400" />
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 flex items-center gap-1.5">
>>>>>>> 17a2389de4f74c8b871733a1d870939a78d9bd57
                    <ShieldCheck className="w-3.5 h-3.5" /> Verified
                  </span>
                </div>

                {/* Title & Issuer */}
<<<<<<< HEAD
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm font-semibold text-indigo-700 dark:text-purple-300 mb-6 flex items-center gap-2">
                  <span>Issued by {cert.issuer}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-500 font-mono">{cert.date}</span>
=======
                <h3 className="text-2xl font-extrabold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm font-semibold text-purple-300 mb-6 flex items-center gap-2">
                  <span>Issued by {cert.issuer}</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-400 font-mono">{cert.date}</span>
>>>>>>> 17a2389de4f74c8b871733a1d870939a78d9bd57
                </p>

                {/* Skills Verified Tags */}
                <div className="mb-6">
<<<<<<< HEAD
                  <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400 block mb-2 font-bold">
=======
                  <span className="text-[11px] font-mono uppercase text-slate-400 block mb-2">
>>>>>>> 17a2389de4f74c8b871733a1d870939a78d9bd57
                    Competencies Tested:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {cert.skillsVerified.map((skill) => (
                      <span
                        key={skill}
<<<<<<< HEAD
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 flex items-center gap-1 font-medium"
                      >
                        <CheckCircle className="w-3 h-3 text-blue-600 dark:text-cyan-400" />
=======
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800 flex items-center gap-1"
                      >
                        <CheckCircle className="w-3 h-3 text-cyan-400" />
>>>>>>> 17a2389de4f74c8b871733a1d870939a78d9bd57
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              {cert.verifyUrl ? (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
<<<<<<< HEAD
                  className="w-full py-3 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-white font-semibold text-xs border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 transition-all flex items-center justify-center gap-2 mt-2 shadow-sm"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" /> Verify Credential Online
                </a>
              ) : (
                <div className="py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 text-slate-500 dark:text-slate-400 text-center font-mono text-xs border border-slate-200 dark:border-slate-800/60 mt-2">
=======
                  className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs border border-slate-800 hover:border-blue-500/40 transition-all flex items-center justify-center gap-2 mt-2"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" /> Verify Credential Online
                </a>
              ) : (
                <div className="py-2.5 rounded-xl bg-slate-900/60 text-slate-400 text-center font-mono text-xs border border-slate-800/60 mt-2">
>>>>>>> 17a2389de4f74c8b871733a1d870939a78d9bd57
                  Official Institution Issued Certificate
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
