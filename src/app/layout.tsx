import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Giridhar S K | Java Developer & Generative AI Engineer',
  description: 'Portfolio of Giridhar S K - Computer Science Engineering undergraduate specializing in Core Java, Generative AI, RAG Systems, FAISS Vector Search, and Backend Engineering.',
  keywords: [
    'Giridhar S K',
    'Java Developer',
    'Generative AI Engineer',
    'RAG Systems',
    'Retrieval-Augmented Generation',
    'FAISS',
    'LLM',
    'Computer Science Student',
    'Bannari Amman Institute of Technology',
    'Backend Engineer',
    'Python',
    'MySQL'
  ],
  authors: [{ name: 'Giridhar S K', url: 'https://github.com/Giridhar0702' }],
  creator: 'Giridhar S K',
  openGraph: {
    title: 'Giridhar S K | Java Developer & Generative AI Engineer',
    description: 'Building AI-powered applications with LLMs, RAG, and Java.',
    url: 'https://giridhar-portfolio.vercel.app',
    siteName: 'Giridhar S K Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Giridhar S K | Java Developer & Generative AI Engineer',
    description: 'Building AI-powered applications with LLMs, RAG, and Java.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Giridhar S K',
    jobTitle: 'Computer Science Engineering Student & AI Developer',
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Bannari Amman Institute of Technology',
    },
    knowsAbout: [
      'Java',
      'Python',
      'Retrieval-Augmented Generation (RAG)',
      'Large Language Models (LLM)',
      'FAISS Vector Database',
      'SQL',
      'Backend Software Engineering',
    ],
    sameAs: [
      'https://github.com/Giridhar0702',
      'https://linkedin.com/in/giridhar-s-k-',
      'https://leetcode.com/u/giridharsaravanakumar07/',
    ],
    email: 'mailto:giridharsaravanakumar07@gmail.com',
  };

  return (
    <html lang="en" className="light scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-slate-50 dark:bg-[#0B1120] text-slate-800 dark:text-slate-100 antialiased transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
