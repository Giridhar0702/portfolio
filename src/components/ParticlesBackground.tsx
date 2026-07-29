'use client';

import React, { useEffect, useRef } from 'react';

export const ParticlesBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

<<<<<<< HEAD
    const particleCount = Math.min(Math.floor(width / 22), 55);
=======
    const particleCount = Math.min(Math.floor(width / 18), 65);
>>>>>>> 17a2389de4f74c8b871733a1d870939a78d9bd57
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      alpha: number;
    }> = [];

<<<<<<< HEAD
    const colors = ['#2563EB', '#6366F1', '#0D9488', '#3B82F6'];
=======
    const colors = ['#3B82F6', '#8B5CF6', '#06B6D4', '#60A5FA'];
>>>>>>> 17a2389de4f74c8b871733a1d870939a78d9bd57

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
<<<<<<< HEAD
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.4 + 0.2,
=======
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.3,
>>>>>>> 17a2389de4f74c8b871733a1d870939a78d9bd57
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

<<<<<<< HEAD
      const isDark = document.documentElement.classList.contains('dark');
      const lineColor = isDark ? '#3B82F6' : '#2563EB';
      const mouseLineColor = isDark ? '#8B5CF6' : '#4F46E5';

=======
>>>>>>> 17a2389de4f74c8b871733a1d870939a78d9bd57
      // Render & update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
<<<<<<< HEAD
        ctx.globalAlpha = isDark ? p.alpha : p.alpha * 0.7;
        ctx.shadowBlur = isDark ? 8 : 4;
=======
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 8;
>>>>>>> 17a2389de4f74c8b871733a1d870939a78d9bd57
        ctx.shadowColor = p.color;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

<<<<<<< HEAD
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = lineColor;
            ctx.globalAlpha = (1 - dist / 120) * (isDark ? 0.15 : 0.08);
=======
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = '#3B82F6';
            ctx.globalAlpha = (1 - dist / 130) * 0.15;
>>>>>>> 17a2389de4f74c8b871733a1d870939a78d9bd57
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Connect to mouse
        const mdx = p.x - mouseX;
        const mdy = p.y - mouseY;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
<<<<<<< HEAD
        if (mdist < 140) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = mouseLineColor;
          ctx.globalAlpha = (1 - mdist / 140) * (isDark ? 0.35 : 0.18);
          ctx.lineWidth = 1;
=======
        if (mdist < 160) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = '#8B5CF6';
          ctx.globalAlpha = (1 - mdist / 160) * 0.35;
          ctx.lineWidth = 1.2;
>>>>>>> 17a2389de4f74c8b871733a1d870939a78d9bd57
          ctx.stroke();
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
<<<<<<< HEAD
      className="fixed inset-0 pointer-events-none z-0 opacity-70 dark:opacity-60"
=======
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
>>>>>>> 17a2389de4f74c8b871733a1d870939a78d9bd57
    />
  );
};
