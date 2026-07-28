'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  Code, 
  Brain, 
  Server, 
  Globe, 
  Wrench, 
  Search, 
  Sparkles, 
  CheckCircle2,
  Terminal,
  Zap
} from 'lucide-react';
import { SKILL_CATEGORIES } from '@/data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code className="w-5 h-5 text-blue-400" />,
  Brain: <Brain className="w-5 h-5 text-purple-400" />,
  Server: <Server className="w-5 h-5 text-emerald-400" />,
  Globe: <Globe className="w-5 h-5 text-cyan-400" />,
  Wrench: <Wrench className="w-5 h-5 text-amber-400" />,
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', ...SKILL_CATEGORIES.map((cat) => cat.title)];

  const filteredCategories = SKILL_CATEGORIES.map((cat) => {
    if (selectedCategory !== 'All' && cat.title !== selectedCategory) {
      return null;
    }
    const matchingSkills = cat.skills.filter(
      (skill) =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (skill.tag && skill.tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    if (matchingSkills.length === 0) return null;

    return {
      ...cat,
      skills: matchingSkills,
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/50 border border-purple-800/40 text-purple-400 text-xs font-mono mb-3"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Skills & <span className="gradient-text">Technologies</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 max-w-full overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20 border border-blue-400/30'
                    : 'glass-panel text-slate-300 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat === 'All' && <Sparkles className="w-3.5 h-3.5 text-cyan-300" />}
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. RAG, FAISS, Java)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 text-xs placeholder:text-slate-400 focus:outline-none focus:border-blue-500 transition-all"
            />
          </div>
        </div>

        {/* Skills Cards Grid Grouped by Category */}
        <div className="space-y-12">
          <AnimatePresence mode="wait">
            {filteredCategories.map((category) => (
              <motion.div
                key={category!.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                    {iconMap[category!.iconName] || <Brain className="w-5 h-5 text-blue-400" />}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-wide">
                    {category!.title}
                  </h3>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 px-2.5 py-0.5 rounded-full">
                    {category!.skills.length} items
                  </span>
                </div>

                {/* Animated Skill Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {category!.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ y: -5 }}
                      className="glass-card rounded-2xl p-5 border border-slate-800 hover:border-blue-500/50 flex flex-col justify-between group relative overflow-hidden"
                    >
                      {/* Ambient corner glow */}
                      <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform pointer-events-none" />

                      <div>
                        {/* Top Skill Row */}
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h4 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                            {skill.name}
                          </h4>
                          {skill.tag && (
                            <span className="px-2 py-0.5 text-[10px] font-mono font-semibold rounded bg-purple-950/80 text-purple-300 border border-purple-800/60">
                              {skill.tag}
                            </span>
                          )}
                        </div>

                        {/* Description */}
                        <p className="text-xs text-slate-400 leading-relaxed mb-4">
                          {skill.description}
                        </p>
                      </div>

                      {/* Proficiency Progress Bar */}
                      <div>
                        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5">
                          <span>Proficiency</span>
                          <span className="text-blue-400 font-bold">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden p-[1px] border border-slate-800">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 rounded-full"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
