'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Download, Mail, Phone, Github, Linkedin, CheckCircle2, GraduationCap, Award, FolderGit2 } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, CERTIFICATIONS, SKILL_CATEGORIES } from '@/data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
<<<<<<< HEAD
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 dark:bg-black/85 backdrop-blur-md">
=======
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
>>>>>>> 17a2389de4f74c8b871733a1d870939a78d9bd57
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
<<<<<<< HEAD
          className="relative w-full max-w-4xl glass-panel rounded-3xl border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden my-6 bg-white dark:bg-[#0B1120] text-slate-900 dark:text-slate-100"
        >
          {/* Top Bar Actions */}
          <div className="p-4 sm:p-6 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="font-mono text-xs text-slate-700 dark:text-slate-300 font-semibold">
=======
          className="relative w-full max-w-4xl glass-panel rounded-3xl border border-slate-700 shadow-2xl overflow-hidden my-6 bg-[#0B1120] text-slate-100"
        >
          {/* Top Bar Actions */}
          <div className="p-4 sm:p-6 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="font-mono text-xs text-slate-300 font-semibold">
>>>>>>> 17a2389de4f74c8b871733a1d870939a78d9bd57
                Giridhar_S_K_Resume.pdf
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
<<<<<<< HEAD
                className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md transition-colors"
=======
                className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md transition-colors"
>>>>>>> 17a2389de4f74c8b871733a1d870939a78d9bd57
              >
                <Printer className="w-3.5 h-3.5" /> Print / Save PDF
              </button>
              <button
                onClick={onClose}
<<<<<<< HEAD
                className="p-2 rounded-xl bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors border border-slate-200 dark:border-slate-700"
=======
                className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
>>>>>>> 17a2389de4f74c8b871733a1d870939a78d9bd57
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Printable Resume Document Sheet */}
<<<<<<< HEAD
          <div className="p-8 sm:p-12 space-y-8 max-h-[75vh] overflow-y-auto font-sans bg-white dark:bg-[#0F172A] text-slate-900 dark:text-slate-100">
            
            {/* Header */}
            <div className="border-b border-slate-200 dark:border-slate-700 pb-6 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1">
                  {PERSONAL_INFO.title}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">
=======
          <div className="p-8 sm:p-12 space-y-8 max-h-[75vh] overflow-y-auto font-sans bg-[#0F172A]">
            
            {/* Header */}
            <div className="border-b border-slate-700 pb-6 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-black text-white tracking-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-sm font-semibold text-blue-400 mt-1">
                  {PERSONAL_INFO.title}
                </p>
                <p className="text-xs text-slate-400 mt-1 font-mono">
>>>>>>> 17a2389de4f74c8b871733a1d870939a78d9bd57
                  {PERSONAL_INFO.tagline}
                </p>
              </div>

<<<<<<< HEAD
              <div className="text-xs font-mono text-slate-700 dark:text-slate-300 space-y-1 sm:text-right">
=======
              <div className="text-xs font-mono text-slate-300 space-y-1 sm:text-right">
>>>>>>> 17a2389de4f74c8b871733a1d870939a78d9bd57
                <div>Email: {PERSONAL_INFO.email}</div>
                <div>Phone: {PERSONAL_INFO.phone}</div>
                <div>GitHub: github.com/Giridhar0702</div>
                <div>LinkedIn: linkedin.com/in/giridhar-s-k-</div>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
<<<<<<< HEAD
              <h2 className="text-xs font-mono uppercase font-bold text-blue-700 dark:text-cyan-400 tracking-wider mb-2 border-b border-slate-200 dark:border-slate-800 pb-1">
                Professional Objective & Overview
              </h2>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
=======
              <h2 className="text-xs font-mono uppercase font-bold text-cyan-400 tracking-wider mb-2 border-b border-slate-800 pb-1">
                Professional Objective & Overview
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed">
>>>>>>> 17a2389de4f74c8b871733a1d870939a78d9bd57
                Computer Science and Engineering undergraduate with strong knowledge of Java, Object-Oriented Programming, and backend development. Experienced in building AI-powered applications using Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), semantic search, and FAISS vector databases. Seeking an entry-level Java Developer or AI Software Engineer position.
              </p>
            </div>

            {/* Education */}
            <div>
<<<<<<< HEAD
              <h2 className="text-xs font-mono uppercase font-bold text-blue-700 dark:text-cyan-400 tracking-wider mb-3 border-b border-slate-200 dark:border-slate-800 pb-1 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> Education
              </h2>
              <div className="flex justify-between items-start text-xs">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">{PERSONAL_INFO.degree}</h3>
                  <p className="text-indigo-700 dark:text-purple-300 font-semibold">{PERSONAL_INFO.college}</p>
                </div>
                <div className="text-right font-mono text-slate-600 dark:text-slate-400">
                  <div>{PERSONAL_INFO.graduationYear}</div>
                  <div className="text-emerald-700 dark:text-emerald-400 font-bold">CGPA: {PERSONAL_INFO.cgpa}</div>
=======
              <h2 className="text-xs font-mono uppercase font-bold text-cyan-400 tracking-wider mb-3 border-b border-slate-800 pb-1 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-blue-400" /> Education
              </h2>
              <div className="flex justify-between items-start text-xs">
                <div>
                  <h3 className="font-bold text-white text-sm">{PERSONAL_INFO.degree}</h3>
                  <p className="text-purple-300">{PERSONAL_INFO.college}</p>
                </div>
                <div className="text-right font-mono text-slate-400">
                  <div>{PERSONAL_INFO.graduationYear}</div>
                  <div className="text-emerald-400 font-bold">CGPA: {PERSONAL_INFO.cgpa}</div>
>>>>>>> 17a2389de4f74c8b871733a1d870939a78d9bd57
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
<<<<<<< HEAD
              <h2 className="text-xs font-mono uppercase font-bold text-blue-700 dark:text-cyan-400 tracking-wider mb-3 border-b border-slate-200 dark:border-slate-800 pb-1">
=======
              <h2 className="text-xs font-mono uppercase font-bold text-cyan-400 tracking-wider mb-3 border-b border-slate-800 pb-1">
>>>>>>> 17a2389de4f74c8b871733a1d870939a78d9bd57
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {SKILL_CATEGORIES.map((cat) => (
<<<<<<< HEAD
                  <div key={cat.title} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                    <strong className="text-slate-900 dark:text-white block mb-1 text-[11px] font-mono text-indigo-700 dark:text-purple-300">
                      {cat.title}:
                    </strong>
                    <span className="text-slate-700 dark:text-slate-300">
=======
                  <div key={cat.title} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <strong className="text-white block mb-1 text-[11px] font-mono text-purple-300">
                      {cat.title}:
                    </strong>
                    <span className="text-slate-300">
>>>>>>> 17a2389de4f74c8b871733a1d870939a78d9bd57
                      {cat.skills.map((s) => s.name).join(', ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div>
<<<<<<< HEAD
              <h2 className="text-xs font-mono uppercase font-bold text-blue-700 dark:text-cyan-400 tracking-wider mb-3 border-b border-slate-200 dark:border-slate-800 pb-1 flex items-center gap-1.5">
                <FolderGit2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> Key Projects
              </h2>
              <div className="space-y-4">
                {PROJECTS.map((proj) => (
                  <div key={proj.id} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-slate-900 dark:text-white text-sm">{proj.title}</h3>
                      <span className="font-mono text-[10px] text-blue-700 dark:text-cyan-300 px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 font-medium">
                        {proj.category}
                      </span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 mb-2">{proj.description}</p>
                    <div className="font-mono text-[10px] text-slate-500 dark:text-slate-400">
=======
              <h2 className="text-xs font-mono uppercase font-bold text-cyan-400 tracking-wider mb-3 border-b border-slate-800 pb-1 flex items-center gap-1.5">
                <FolderGit2 className="w-3.5 h-3.5 text-blue-400" /> Key Projects
              </h2>
              <div className="space-y-4">
                {PROJECTS.map((proj) => (
                  <div key={proj.id} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-white text-sm">{proj.title}</h3>
                      <span className="font-mono text-[10px] text-cyan-300 px-2 py-0.5 rounded bg-blue-950">
                        {proj.category}
                      </span>
                    </div>
                    <p className="text-slate-300 mb-2">{proj.description}</p>
                    <div className="font-mono text-[10px] text-slate-400">
>>>>>>> 17a2389de4f74c8b871733a1d870939a78d9bd57
                      Tech: {proj.technologies.join(' • ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
<<<<<<< HEAD
              <h2 className="text-xs font-mono uppercase font-bold text-blue-700 dark:text-cyan-400 tracking-wider mb-3 border-b border-slate-200 dark:border-slate-800 pb-1 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" /> Certifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.id} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                    <div className="font-bold text-slate-900 dark:text-white">{cert.title}</div>
                    <div className="text-slate-500 dark:text-slate-400 text-[11px] font-mono">{cert.issuer} • {cert.date}</div>
=======
              <h2 className="text-xs font-mono uppercase font-bold text-cyan-400 tracking-wider mb-3 border-b border-slate-800 pb-1 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" /> Certifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.id} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="font-bold text-white">{cert.title}</div>
                    <div className="text-slate-400 text-[11px] font-mono">{cert.issuer} • {cert.date}</div>
>>>>>>> 17a2389de4f74c8b871733a1d870939a78d9bd57
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Close Action */}
<<<<<<< HEAD
          <div className="p-4 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-xs font-semibold border border-slate-200 dark:border-slate-700"
=======
          <div className="p-4 bg-slate-900 border-t border-slate-800 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold"
>>>>>>> 17a2389de4f74c8b871733a1d870939a78d9bd57
            >
              Close Resume Viewer
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
