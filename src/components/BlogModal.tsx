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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          className="relative w-full max-w-3xl glass-panel rounded-3xl border border-slate-700 shadow-2xl overflow-hidden my-8"
        >
          {/* Header Banner */}
          <div className="relative p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-purple-950 to-blue-950 border-b border-slate-800">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900/80 text-slate-400 hover:text-white border border-slate-700 transition-all z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-cyan-400 mb-3">
              <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-slate-300">
                <Clock className="w-3.5 h-3.5" /> {post.readTime}
              </span>
              <span className="flex items-center gap-1 text-slate-300">
                <Calendar className="w-3.5 h-3.5" /> {post.date}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-2">
              {post.title}
            </h3>

            <div className="flex items-center gap-2 text-xs font-mono text-purple-300 mt-3">
              <User className="w-3.5 h-3.5 text-purple-400" /> By {post.author}
            </div>
          </div>

          {/* Body Article Content */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
            <p className="text-slate-300 text-base font-semibold leading-relaxed border-l-4 border-blue-500 pl-4 py-1 bg-blue-950/20 rounded-r-xl">
              {post.excerpt}
            </p>

            <div className="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed whitespace-pre-line font-sans">
              {post.content}
            </div>

            {/* Article Tags */}
            <div className="pt-6 border-t border-slate-800">
              <span className="text-xs font-mono uppercase text-slate-400 block mb-2 flex items-center gap-1">
                <Tag className="w-3.5 h-3.5 text-cyan-400" /> Topic Keywords:
              </span>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Action */}
          <div className="p-4 bg-slate-950 border-t border-slate-800 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs border border-slate-700 transition-all"
            >
              Close Article
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
