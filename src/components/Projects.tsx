'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  Github, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Code2,
  Cpu,
  Layers,
  Star
} from 'lucide-react';
import { PROJECTS, Project } from '@/data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'AI & RAG', 'Java & Backend'];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeCategory === 'All') return true;
    return proj.category === activeCategory;
  });

  return (
    <section id="projects" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800/40 text-blue-700 dark:text-blue-400 text-xs font-mono mb-3"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-2 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm border border-blue-500/20'
                  : 'glass-panel text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {cat === 'AI & RAG' && <Cpu className="w-3.5 h-3.5 text-blue-200 dark:text-cyan-300" />}
              {cat === 'Java & Backend' && <Code2 className="w-3.5 h-3.5 text-indigo-200 dark:text-purple-300" />}
              {cat === 'All' && <Layers className="w-3.5 h-3.5 text-blue-200 dark:text-blue-300" />}
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 flex flex-col justify-between overflow-hidden group relative shadow-sm"
              >
                {/* Mock Screenshot Banner / Visual Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-slate-100 via-slate-200 to-blue-50 dark:from-slate-900 dark:via-slate-950 dark:to-blue-950 p-6 flex flex-col justify-between border-b border-slate-200 dark:border-slate-800 overflow-hidden">
                  {/* Decorative background grid pattern */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-30" />
                  
                  {/* Category Pill */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-white/90 dark:bg-slate-900/90 text-blue-700 dark:text-cyan-400 border border-slate-200 dark:border-slate-700 shadow-sm font-semibold">
                      {project.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-mono text-amber-700 dark:text-amber-400 bg-white/90 dark:bg-slate-900/80 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800 font-semibold shadow-sm">
                      <Star className="w-3 h-3 fill-amber-500 text-amber-500" /> {project.stars} stars
                    </span>
                  </div>

                  {/* Simulated Terminal Header on Banner */}
                  <div className="relative z-10 bg-white/90 dark:bg-slate-900/80 rounded-xl p-3 border border-slate-200 dark:border-slate-800 backdrop-blur-sm group-hover:border-blue-400/50 transition-colors shadow-sm">
                    <div className="text-[11px] font-mono text-slate-900 dark:text-slate-300 font-bold truncate">
                      {project.title}
                    </div>
                    <div className="text-[10px] font-mono text-indigo-600 dark:text-purple-400 truncate font-semibold">
                      {project.subtitle}
                    </div>
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Key Features Bullet Summary */}
                    <div className="space-y-1.5 mb-5">
                      {project.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-600 dark:text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies Tags */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 text-[10px] font-mono rounded-md bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-2 py-0.5 text-[10px] font-mono text-slate-500 dark:text-slate-400">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>

                    {/* Actions Row */}
                    <div className="flex items-center gap-2 pt-4 border-t border-slate-200 dark:border-slate-800/80">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-white font-semibold text-xs border border-slate-200 dark:border-slate-800 transition-all flex items-center justify-center gap-1.5 shadow-sm"
                      >
                        <Github className="w-3.5 h-3.5" /> GitHub
                      </a>

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-600 dark:to-purple-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-xs shadow-sm transition-all flex items-center justify-center gap-1.5"
                      >
                        <span>Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Project Details Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
