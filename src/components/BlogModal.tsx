'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Calendar, User, Tag, Sparkles, BookOpen } from 'lucide-react';
import { BlogPost } from '@/data/portfolioData';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 dark:bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          className="relative w-full max-w-3xl glass-panel rounded-3xl border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden my-8 bg-white dark:bg-[#0B1120] text-slate-900 dark:text-slate-100"
        >
          {/* Header Banner */}
          <div className="relative p-6 sm:p-8 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-purple-950 dark:to-blue-950 border-b border-slate-200 dark:border-slate-800">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-xl bg-white dark:bg-slate-900/80 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 transition-all z-10 shadow-sm"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-blue-700 dark:text-cyan-400 mb-3 font-semibold">
              <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/20 border border-blue-200 dark:border-blue-400/30">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-slate-600 dark:text-slate-300">
                <Clock className="w-3.5 h-3.5" /> {post.readTime}
              </span>
              <span className="flex items-center gap-1 text-slate-600 dark:text-slate-300">
                <Calendar className="w-3.5 h-3.5" /> {post.date}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight mb-2">
              {post.title}
            </h3>

            <div className="flex items-center gap-2 text-xs font-mono text-indigo-700 dark:text-purple-300 mt-3 font-medium">
              <User className="w-3.5 h-3.5 text-indigo-600 dark:text-purple-400" /> By {post.author}
            </div>
          </div>

          {/* Body Article Content */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
            <p className="text-slate-800 dark:text-slate-300 text-base font-semibold leading-relaxed border-l-4 border-blue-600 pl-4 py-1 bg-blue-50 dark:bg-blue-950/20 rounded-r-xl">
              {post.excerpt}
            </p>

            <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-sm leading-relaxed whitespace-pre-line font-sans">
              {post.content}
            </div>

            {/* Article Tags */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <span className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 block mb-2 flex items-center gap-1 font-bold">
                <Tag className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" /> Topic Keywords:
              </span>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Action */}
          <div className="p-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-white font-semibold text-xs border border-slate-300 dark:border-slate-700 transition-all shadow-sm"
            >
              Close Article
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
