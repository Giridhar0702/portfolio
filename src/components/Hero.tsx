'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  FileText, 
  Mail, 
  Github, 
  Linkedin, 
  Terminal, 
  CheckCircle2, 
  Cpu, 
  Code2, 
  Database, 
  Zap, 
  Bot, 
  Play
} from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

interface HeroProps {
  openResumeModal: () => void;
}

const typingRoles = [
  "Java Developer",
  "Generative AI Engineer",
  "RAG Systems Developer",
  "Backend Software Engineer",
  "LLM & Semantic Search Architect"
];

export const Hero: React.FC<HeroProps> = ({ openResumeModal }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [simulatedLog, setSimulatedLog] = useState<string[]>([]);
  const [simRunning, setSimRunning] = useState(false);

  // Typing effect logic
  useEffect(() => {
    const currentRole = typingRoles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % typingRoles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  // Terminal RAG simulation
  const runRagSimulation = () => {
    if (simRunning) return;
    setSimRunning(true);
    setSimulatedLog([]);

    const steps = [
      "⚡ [Init] Initializing Multimodal RAG Engine v2.4...",
      "🔍 [Query] 'Explain Giridhar's Java & RAG expertise'",
      "📊 [Embed] Embedding query via SentenceTransformer (1536 dim)...",
      "📚 [Vector Search] FAISS Index search -> Top-3 chunks retrieved (Cosine: 0.962)",
      "🤖 [LLM Context] Grounding prompt with candidate profile...",
      "✨ [Result] Candidate has strong Java OOP + RAG pipeline mastery!"
    ];

    steps.forEach((step, idx) => {
      setTimeout(() => {
        setSimulatedLog((prev) => [...prev, step]);
        if (idx === steps.length - 1) setSimRunning(false);
      }, (idx + 1) * 600);
    });
  };

  useEffect(() => {
    runRagSimulation();
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Ambient background glow spheres */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/10 dark:bg-purple-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 dark:bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 dark:bg-slate-900/80 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-cyan-400 text-xs font-mono mb-6 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 dark:bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-cyan-500"></span>
              </span>
              <span>Available for Software Engineering & AI Roles</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
              Hi, I'm{' '}
              <span className="gradient-text font-black">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            {/* Dynamic Animated Role Subheading */}
            <div className="h-10 sm:h-12 mb-6 flex items-center">
              <span className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300 font-mono flex items-center">
                <span className="text-blue-600 dark:text-blue-400 mr-2">&gt;</span>
                <span className="text-indigo-600 dark:text-purple-300">{displayedText}</span>
                <span className="typing-cursor" />
              </span>
            </div>

            {/* Paragraph Subtitle */}
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-normal">
              Computer Science Engineering undergraduate passionate about{' '}
              <strong className="text-blue-600 dark:text-blue-400 font-semibold">Java Development</strong>,{' '}
              <strong className="text-indigo-600 dark:text-purple-400 font-semibold">Generative AI</strong>, Large Language Models,{' '}
              <strong className="text-teal-600 dark:text-cyan-400 font-semibold">Retrieval-Augmented Generation (RAG)</strong>, and Backend Development.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              {/* View Projects */}
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 dark:from-blue-600 dark:via-blue-500 dark:to-purple-600 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold text-sm shadow-md shadow-blue-500/20 transition-all duration-300 flex items-center justify-center gap-2 group border border-blue-500/20"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Download Resume */}
              <button
                onClick={openResumeModal}
                className="px-6 py-3.5 rounded-xl glass-panel text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-white hover:border-blue-400/50 font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 group shadow-sm"
              >
                <FileText className="w-4 h-4 text-blue-600 dark:text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>Download Resume</span>
              </button>

              {/* Contact Me */}
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Mail className="w-4 h-4 text-indigo-600 dark:text-purple-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social & GitHub Links */}
            <div className="flex items-center gap-5 pt-4 border-t border-slate-200 dark:border-slate-800/80 w-full">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Connect:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all shadow-sm"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all shadow-sm"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </a>
              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900/80 text-amber-600 dark:text-amber-400 hover:text-amber-500 dark:hover:text-amber-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all shadow-sm"
                title="LeetCode Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a4.994 4.994 0 0 0-3.85-1.472c-1.387 0-2.697.553-3.67 1.526l-4.319 4.381A5.153 5.153 0 0 0 2.213 14.3c0 1.387.553 2.697 1.526 3.67l4.332 4.363c.973.973 2.283 1.526 3.67 1.526s2.697-.553 3.67-1.526l2.609-2.607c.514-.514.496-1.365-.039-1.901-.535-.535-1.386-.552-1.9-.038zM20.811 13.01H10.666c-.702 0-1.27.568-1.27 1.27s.568 1.27 1.27 1.27h10.145c.702 0 1.27-.568 1.27-1.27s-.568-1.27-1.27-1.27z"/>
                </svg>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all shadow-sm"
                title="Email Giridhar"
              >
                <Mail className="w-4 h-4 text-teal-600 dark:text-cyan-400" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Profile Picture Card & Animated Code Terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Glassmorphic Profile Card */}
            <div className="relative rounded-3xl p-6 glass-panel border border-slate-200 dark:border-slate-800 shadow-lg overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

              <div className="flex items-center gap-5 mb-5">
                {/* Minimal Profile Avatar */}
                <div className="relative w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-blue-600 via-indigo-600 to-teal-500 dark:from-blue-500 dark:via-purple-500 dark:to-cyan-400 shadow-sm flex-shrink-0">
                  <div className="w-full h-full bg-slate-900 dark:bg-slate-950 rounded-full overflow-hidden flex items-center justify-center relative">
                    <img 
                      src={PERSONAL_INFO.avatar} 
                      alt={PERSONAL_INFO.name} 
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src.includes('.jpeg')) {
                          target.src = '/profile.jpg';
                        } else if (target.src.includes('.jpg')) {
                          target.src = '/profile.png';
                        }
                      }}
                      style={{ objectPosition: '50% 25%' }}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" 
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white dark:border-slate-950 flex items-center justify-center shadow-sm" title="Active">
                    <CheckCircle2 className="w-2 h-2 text-white" />
                  </div>
                </div>

                {/* Profile Details */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-wide">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-xs font-mono text-blue-600 dark:text-cyan-400 mb-1 font-semibold">
                    B.E Computer Science & Engineering
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    Bannari Amman Institute of Tech
                  </p>
                </div>
              </div>

              {/* Quick Tech Badges */}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-200 dark:border-slate-800">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/50 flex items-center gap-1 font-medium">
                  <Code2 className="w-3 h-3 text-blue-600 dark:text-blue-400" /> Core Java
                </span>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-indigo-50 dark:bg-purple-950/60 text-indigo-700 dark:text-purple-300 border border-indigo-200 dark:border-purple-800/50 flex items-center gap-1 font-medium">
                  <Bot className="w-3 h-3 text-indigo-600 dark:text-purple-400" /> RAG & LLMs
                </span>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-teal-50 dark:bg-cyan-950/60 text-teal-700 dark:text-cyan-300 border border-teal-200 dark:border-cyan-800/50 flex items-center gap-1 font-medium">
                  <Database className="w-3 h-3 text-teal-600 dark:text-cyan-400" /> FAISS Vector DB
                </span>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50 flex items-center gap-1 font-medium">
                  <Zap className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> Python & SQL
                </span>
              </div>
            </div>

            {/* Live Interactive Code Terminal / AI Engine Simulator */}
            <div className="rounded-2xl bg-slate-900 dark:bg-slate-950/90 border border-slate-700 dark:border-slate-800 shadow-xl overflow-hidden font-mono text-xs">
              {/* Terminal Titlebar */}
              <div className="bg-slate-950/90 dark:bg-slate-900/90 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-slate-300 ml-2 text-[11px] flex items-center gap-1.5 font-medium">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    rag_engine_simulator.py
                  </span>
                </div>
                <button
                  onClick={runRagSimulation}
                  disabled={simRunning}
                  className="px-2 py-1 rounded bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 hover:text-white transition-colors text-[10px] flex items-center gap-1 border border-blue-500/30 disabled:opacity-50"
                  title="Run RAG Pipeline Simulation"
                >
                  <Play className="w-2.5 h-2.5" /> {simRunning ? 'Running...' : 'Re-Run Demo'}
                </button>
              </div>

              {/* Terminal Screen Output */}
              <div className="p-4 space-y-2 min-h-[160px] max-h-[220px] overflow-y-auto text-slate-300 leading-relaxed">
                {simulatedLog.map((log, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={
                      log.includes('Result')
                        ? 'text-emerald-400 font-semibold'
                        : log.includes('FAISS')
                        ? 'text-cyan-300'
                        : log.includes('Embed')
                        ? 'text-purple-300'
                        : 'text-slate-300'
                    }
                  >
                    {log}
                  </motion.div>
                ))}
                {simRunning && (
                  <div className="flex items-center gap-1.5 text-blue-400 animate-pulse">
                    <Cpu className="w-3 h-3 animate-spin" /> Processing RAG vectors...
                  </div>
                )}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
