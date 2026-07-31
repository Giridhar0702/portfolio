'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  FileText, 
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

interface ContactProps {
  openResumeModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ openResumeModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1200);
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800/40 text-blue-700 dark:text-blue-400 text-xs font-mono mb-3"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Let's Connect</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Let's discuss <span className="gradient-text">opportunities</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-8">
                I am actively seeking Java Developer, Generative AI, and RAG Software Engineer opportunities. Feel free to send a message, email, or call me directly.
              </p>

              {/* Email Quick Copy Box */}
              <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 flex items-center justify-between mb-4 group shadow-sm bg-white dark:bg-slate-900/70">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block font-medium">Direct Email</span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-all shadow-sm"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Quick Copy Box */}
              <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 flex items-center justify-between mb-4 group shadow-sm bg-white dark:bg-slate-900/70">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-indigo-50 dark:bg-purple-950/80 border border-indigo-200 dark:border-purple-800 text-indigo-700 dark:text-purple-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block font-medium">Phone Number</span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      {PERSONAL_INFO.formattedPhone} ({PERSONAL_INFO.phone})
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-all shadow-sm"
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Social Links Cards */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card rounded-2xl p-4 border border-slate-200 dark:border-slate-800 flex items-center gap-3 hover:border-blue-500/50 group shadow-sm bg-white dark:bg-slate-900/70"
                >
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-400">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      LinkedIn
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 block">Connect profile</span>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card rounded-2xl p-4 border border-slate-200 dark:border-slate-800 flex items-center gap-3 hover:border-indigo-500/50 group shadow-sm bg-white dark:bg-slate-900/70"
                >
                  <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-purple-950 text-indigo-700 dark:text-purple-400">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-purple-400 transition-colors">
                      GitHub
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 block">@Giridhar0702</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Resume Button inside Contact Info */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/60 dark:to-purple-950/60 border border-blue-200 dark:border-blue-800/40 flex items-center justify-between shadow-sm">
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Need a PDF Resume?</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-mono">View or print Giridhar's complete CV</p>
              </div>
              <button
                onClick={openResumeModal}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-600 dark:to-purple-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-xs transition-all shadow-md flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5" /> Download
              </button>
            </div>

          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-panel rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-2xl bg-white dark:bg-slate-900/70"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Send a Direct Message
            </h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-center space-y-3"
              >
                <CheckCircle2 className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mx-auto animate-bounce" />
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Message Sent Successfully!</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-mono max-w-md mx-auto">
                  Thank you for reaching out. Giridhar will respond to your inquiry via email promptly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 font-medium">
                      Your Name <span className="text-blue-600 dark:text-blue-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Recruiter Name"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs placeholder:text-slate-400 focus:outline-none focus:border-blue-500 transition-all shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 font-medium">
                      Your Email <span className="text-blue-600 dark:text-blue-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="recruiter@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs placeholder:text-slate-400 focus:outline-none focus:border-blue-500 transition-all shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Java / AI Engineer Position Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs placeholder:text-slate-400 focus:outline-none focus:border-blue-500 transition-all shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 font-medium">
                    Message <span className="text-blue-600 dark:text-blue-400">*</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message or project opportunity details here..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs placeholder:text-slate-400 focus:outline-none focus:border-blue-500 transition-all shadow-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 dark:from-blue-600 dark:via-blue-500 dark:to-purple-600 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold text-xs shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
