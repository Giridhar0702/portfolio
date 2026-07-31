'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, CheckCircle2, Code2, Cpu, Terminal, Sparkles } from 'lucide-react';
import { Project } from '@/data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div 
        onClick={onClose}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 pt-24 pb-8 overflow-y-auto bg-slate-950/90 dark:bg-black/95 backdrop-blur-xl cursor-pointer"
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-3xl rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-auto bg-white dark:bg-[#0B1120] text-slate-900 dark:text-slate-100 cursor-default"
        >
          {/* Top Modal Header Banner */}
          <div className="relative p-6 sm:p-8 bg-gradient-to-r from-blue-50 via-indigo-50 to-teal-50 dark:from-blue-950 dark:via-slate-900 dark:to-purple-950 border-b border-slate-200 dark:border-slate-800">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-xl bg-white dark:bg-slate-900/80 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 transition-all z-10 shadow-sm"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-cyan-400 text-xs font-mono mb-3 border border-blue-200 dark:border-blue-400/30 font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              {project.category}
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
              {project.title}
            </h3>
            <p className="text-sm font-mono text-indigo-700 dark:text-purple-300 font-medium">
              {project.subtitle}
            </p>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
            {/* Description */}
            <div>
              <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-2 font-bold">
                Overview & Architecture
              </h4>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-3 font-bold">
                Key Engineering Highlights
              </h4>
              <ul className="space-y-2.5">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Code Snippet Preview */}
            {project.codeSnippet && (
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-2 flex items-center gap-1.5 font-bold">
                  <Terminal className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  Code Implementation Snippet
                </h4>
                <div className="rounded-2xl bg-slate-900 p-4 border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto">
                  <pre>{project.codeSnippet}</pre>
                </div>
              </div>
            )}

            {/* Technologies */}
            <div>
              <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-3 font-bold">
                Technologies & Libraries Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-900 text-blue-700 dark:text-cyan-300 border border-slate-200 dark:border-slate-800 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="p-6 bg-slate-50 dark:bg-slate-950/90 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-white font-semibold text-xs border border-slate-300 dark:border-slate-700 transition-all flex items-center gap-2 shadow-sm"
            >
              <Github className="w-4 h-4" /> View GitHub Repository
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-600 dark:to-purple-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-xs shadow-md transition-all flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" /> Live Interactive Demo
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
