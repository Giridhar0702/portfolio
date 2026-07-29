'use client';

import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 pt-12 pb-8 text-slate-600 dark:text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800/80">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#home" className="text-lg font-extrabold text-slate-900 dark:text-white mb-1">
              Giridhar <span className="text-blue-600 dark:text-blue-500">S K</span>
            </a>
            <p className="text-slate-500 dark:text-slate-400 text-xs max-w-sm">
              {PERSONAL_INFO.tagline}
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 transition-all shadow-sm"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 transition-all shadow-sm"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-white border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 transition-all shadow-sm"
              title="Email"
            >
              <Mail className="w-4 h-4 text-teal-600 dark:text-cyan-400" />
            </a>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-all flex items-center gap-1.5 shadow-sm"
            title="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
          </button>
        </div>

        {/* Copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-500 dark:text-slate-400 text-center sm:text-left">
          <div>
            © 2026 Giridhar S K. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            Built with Next.js, React, Tailwind CSS, and Framer Motion.
          </div>
        </div>

      </div>
    </footer>
  );
};
