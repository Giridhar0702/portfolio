'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { InteractiveRagDemo } from '@/components/InteractiveRagDemo';
import { Education } from '@/components/Education';
import { Certifications } from '@/components/Certifications';
import { Blog } from '@/components/Blog';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ParticlesBackground } from '@/components/ParticlesBackground';
import { CustomCursor } from '@/components/CustomCursor';
import { ScrollProgress } from '@/components/ScrollProgress';
import { ResumeModal } from '@/components/ResumeModal';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  return (
    <main className="relative min-h-screen bg-[#0B1120] text-slate-100 font-sans selection:bg-purple-600/40 overflow-x-hidden">
      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Dynamic Canvas Particles */}
      <ParticlesBackground />

      {/* Glowing Desktop Custom Cursor */}
      <CustomCursor />

      {/* Glassmorphic Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        openResumeModal={() => setIsResumeOpen(true)}
      />

      {/* Page Sections */}
      <Hero openResumeModal={() => setIsResumeOpen(true)} />
      <About />
      <Skills />
      <Projects />
      <InteractiveRagDemo />
      <Education />
      <Certifications />
      <Blog />
      <Contact openResumeModal={() => setIsResumeOpen(true)} />
      <Footer />

      {/* Global Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </main>
  );
}
