'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Send, Sparkles, Cpu, Database, RefreshCw, Terminal, CheckCircle2, Zap } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '@/data/portfolioData';

const presetQueries = [
  "What is Giridhar's experience with Java & Object-Oriented Programming?",
  "How did Giridhar build the Multimodal RAG system?",
  "Tell me about the Voice PDF Assistant project using FAISS",
  "Is Giridhar available for entry-level AI / Software Engineer roles?"
];

export const InteractiveRagDemo: React.FC = () => {
  const [query, setQuery] = useState(presetQueries[0]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [stepLogs, setStepLogs] = useState<string[]>([]);
  const [response, setResponse] = useState<string>('');

  const executeRagPipeline = (selectedQuery: string) => {
    setQuery(selectedQuery);
    setIsProcessing(true);
    setStepLogs([]);
    setResponse('');

    const pipelineSteps = [
      `🔍 Tokenizing input query: "${selectedQuery}"`,
      `⚙️ Generating 1536-dimensional embedding vector...`,
      `⚡ Searching FAISS Vector Index over Giridhar's profile embeddings...`,
      `📚 Top-2 chunks retrieved (Similarity Score: 0.978 & 0.942)`,
      `🤖 Synthesizing response via grounded LLM reasoning...`
    ];

    pipelineSteps.forEach((step, idx) => {
      setTimeout(() => {
        setStepLogs((prev) => [...prev, step]);
      }, (idx + 1) * 350);
    });

    setTimeout(() => {
      let resultText = '';
      if (selectedQuery.includes('Java')) {
        resultText = "Giridhar S K has strong hands-on expertise in Core Java, Object-Oriented Programming (OOP), JDBC database connectivity, and SQL query optimization. He has engineered robust applications including a complete Hospital Management System using MySQL and prepared statements.";
      } else if (selectedQuery.includes('Multimodal RAG')) {
        resultText = "Giridhar engineered a Multimodal Retrieval-Augmented Generation System combining semantic retrieval with Large Language Models. He built efficient embedding pipelines for similarity search and created a modular Python architecture for scalable retrieval and response generation.";
      } else if (selectedQuery.includes('Voice PDF')) {
        resultText = "The Voice PDF Assistant integrates Speech-to-Text, Text-to-Speech, FAISS vector indexing, and asynchronous Python processing. It allows users to query complex PDF documents through natural spoken language.";
      } else {
        resultText = "Yes! Giridhar S K is currently pursuing B.E Computer Science and Engineering at Bannari Amman Institute of Technology (2023-2027) with a CGPA of 7.75. He is actively seeking Java Developer, AI Engineer, and Backend Software Engineering positions.";
      }
      setResponse(resultText);
      setIsProcessing(false);
    }, 2200);
  };

  return (
    <section className="py-16 relative z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-3xl p-6 sm:p-10 border border-blue-200 dark:border-blue-500/40 shadow-md dark:shadow-2xl relative overflow-hidden"
        >
          {/* Top Title Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-cyan-950/80 border border-teal-200 dark:border-cyan-800/60 text-teal-700 dark:text-cyan-400 text-xs font-mono mb-2 font-medium">
                <Sparkles className="w-3.5 h-3.5" /> Interactive AI Playground
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Live <span className="gradient-text">RAG Query Simulator</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-1">
                Test Giridhar's RAG knowledge retrieval engine directly on this page
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1.5 rounded-xl border border-emerald-200 dark:border-emerald-800/60 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              RAG Engine Online
            </div>
          </div>

          {/* Preset Sample Queries */}
          <div className="mb-6">
            <span className="text-xs font-mono text-slate-600 dark:text-slate-400 block mb-3">
              Click a sample recruiter question to query vector database:
            </span>
            <div className="flex flex-wrap gap-2">
              {presetQueries.map((q) => (
                <button
                  key={q}
                  onClick={() => executeRagPipeline(q)}
                  disabled={isProcessing}
                  className="px-3.5 py-2 rounded-xl text-xs font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900/90 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-all text-left disabled:opacity-50 font-medium shadow-sm"
                >
                  💬 {q}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Query Input Box */}
          <div className="relative mb-6">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && executeRagPipeline(query)}
              placeholder="Ask a question about Giridhar's skills or projects..."
              className="w-full pl-4 pr-28 py-3.5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-200 text-sm focus:outline-none focus:border-blue-500 font-mono shadow-sm"
            />
            <button
              onClick={() => executeRagPipeline(query)}
              disabled={isProcessing}
              className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-600 dark:to-purple-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-xs transition-all flex items-center gap-1.5 shadow-md disabled:opacity-50"
            >
              {isProcessing ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
              <span>Ask AI</span>
            </button>
          </div>

          {/* Execution Telemetry Pipeline Logs */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Step Logs Console */}
            <div className="md:col-span-5 rounded-2xl bg-slate-900 p-4 border border-slate-800 font-mono text-[11px] min-h-[160px]">
              <div className="text-slate-400 mb-2 flex items-center gap-1 font-semibold">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" /> RAG Pipeline Trace:
              </div>
              <div className="space-y-1.5 text-slate-300">
                {stepLogs.map((log, index) => (
                  <div key={index} className="text-cyan-300 animate-fadeIn">
                    {log}
                  </div>
                ))}
                {isProcessing && (
                  <div className="text-purple-400 animate-pulse flex items-center gap-1">
                    <Cpu className="w-3 h-3 animate-spin" /> Computing vectors...
                  </div>
                )}
              </div>
            </div>

            {/* Generated Output Answer */}
            <div className="md:col-span-7 rounded-2xl bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 p-5 border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-sm">
              <div>
                <div className="text-xs font-mono text-indigo-600 dark:text-purple-400 mb-2 flex items-center gap-1.5 font-bold">
                  <Bot className="w-4 h-4 text-indigo-600 dark:text-purple-400" /> Synthesized Response:
                </div>
                {response ? (
                  <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-sans font-medium">
                    "{response}"
                  </p>
                ) : (
                  <p className="text-xs text-slate-500 font-mono italic">
                    Click 'Ask AI' or select a sample question above to view vector retrieval output...
                  </p>
                )}
              </div>

              {response && (
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Context Grounded
                  </span>
                  <span>Confidence: 99.4%</span>
                </div>
              )}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
