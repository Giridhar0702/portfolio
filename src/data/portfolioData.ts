export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  category: 'AI & RAG' | 'Java & Backend' | 'All';
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  stars: number;
  featured: boolean;
  architectureDiagram?: string;
  codeSnippet?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level: number; // percentage
    description: string;
    tag?: string;
  }[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  author: string;
  linkedinUrl?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyUrl?: string;
  skillsVerified: string[];
  icon: string;
}

export const PERSONAL_INFO = {
  name: "Giridhar S K",
  avatar: "/profile.jpeg",
  title: "Computer Science Engineering Student | Java Developer | Generative AI Engineer",
  tagline: "Building AI-powered applications with LLMs, RAG, and Java.",
  email: "giridharsaravanakumar07@gmail.com",
  emailServiceId: "service_pm091xp",
  phone: "9360772070",
  formattedPhone: "+91 93607 72070",
  github: "https://github.com/Giridhar0702",
  linkedin: "https://linkedin.com/in/giridhar-s-k-",
  leetcode: "https://leetcode.com/u/giridharsaravanakumar07/",
  location: "Tamil Nadu, India",
  college: "Bannari Amman Institute of Technology",
  degree: "B.E Computer Science and Engineering",
  graduationYear: "2023 - 2027",
  cgpa: "7.75 / 10.0",
  bio: `I am a Computer Science and Engineering undergraduate with strong knowledge of Java, Object-Oriented Programming, and backend development. I enjoy building AI-powered applications using Large Language Models, Retrieval-Augmented Generation (RAG), semantic search, and modern AI frameworks.\n\nI continuously explore emerging AI technologies and enjoy solving real-world problems through scalable software solutions. My goal is to become an AI Software Engineer building intelligent applications that create real impact.`,
  highlights: [
    { title: "Java Developer", desc: "Core Java, OOPs, JDBC, Data Structures & Algorithms", icon: "Coffee" },
    { title: "AI Enthusiast", desc: "Generative AI, Transformers, NLP & Agentic Workflows", icon: "Sparkles" },
    { title: "RAG Developer", desc: "Vector Databases, FAISS, Semantic Retrieval & Embeddings", icon: "Cpu" },
    { title: "Backend Developer", desc: "DBMS, SQL Queries, Microservices Architecture & APIs", icon: "Database" },
    { title: "Fast Learner", desc: "Adaptable to new frameworks, libraries & engineering patterns", icon: "Zap" },
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "multimodal-rag-system",
    title: "Multimodal Retrieval-Augmented Generation (RAG) System",
    subtitle: "Enterprise Semantic Retrieval & AI Reasoning Pipeline",
    description: "Built a multimodal Retrieval-Augmented Generation system combining semantic retrieval with Large Language Models. Developed efficient embedding pipelines for similarity search and created a modular architecture for scalable retrieval and response generation.",
    fullDescription: "This state-of-the-art Multimodal RAG System bridges raw unstructured data (text, tabular, and document images) with LLMs. Utilizing advanced chunking techniques and vector similarity search via FAISS, it achieves high precision retrieval with minimal latency. Built with modular Python micro-services designed for clean integration into enterprise workflows.",
    category: "AI & RAG",
    technologies: ["Python", "LLM", "Embeddings", "Vector Database", "RAG", "Semantic Search", "FAISS", "LangChain"],
    features: [
      "Multimodal document chunking and indexing for accurate context extraction",
      "Semantic similarity search powered by high-dimensional vector embeddings",
      "Modular Python architecture supporting interchangeable LLM backends (OpenAI, HuggingFace, Ollama)",
      "Strict context grounding to prevent hallucinations in generated responses",
      "Sub-second query response times with optimized FAISS indexing"
    ],
    githubUrl: "https://github.com/Giridhar0702/Multimodal-RAG-System",
    liveUrl: "#rag-demo",
    stars: 18,
    featured: true,
    codeSnippet: `def retrieve_and_generate(query: str, top_k: int = 3):
    # Step 1: Generate Query Embedding
    query_vector = embedding_model.encode([query])
    
    # Step 2: Vector Search in FAISS Index
    distances, indices = faiss_index.search(query_vector, top_k)
    retrieved_chunks = [documents[i] for i in indices[0]]
    
    # Step 3: Prompt Construction & LLM Synthesis
    prompt = f"Context:\\n{'\\n'.join(retrieved_chunks)}\\n\\nQuestion: {query}"
    return llm.generate(prompt)`
  },
  {
    id: "rag-voice-pdf-assistant",
    title: "RAG-Based Voice PDF Assistant",
    subtitle: "Interactive Voice & Speech AI Document Companion",
    description: "Developed a voice-enabled AI assistant capable of answering questions from PDF documents using Retrieval-Augmented Generation and FAISS.",
    fullDescription: "An intelligent speech-interactive document reader that enables users to query complex PDF reports, manuals, and papers using natural voice commands. Features real-time Speech-to-Text conversion, async document chunking, FAISS vector indexing, and Text-to-Speech audio feedback.",
    category: "AI & RAG",
    technologies: ["Python", "Speech-to-Text", "Text-to-Speech", "PDF Processing", "FAISS", "RAG", "AsyncIO", "PyPDF2"],
    features: [
      "Hands-free Voice interaction via Speech-to-Text (STT) and Text-to-Speech (TTS)",
      "Fast PDF document understanding with automatic header-aware chunking",
      "Parallel & Asynchronous query processing for instantaneous audio response",
      "Semantic retrieval with cosine similarity filtering for pinpoint precision",
      "Natural audio response synthesis tuned for clear voice readout"
    ],
    githubUrl: "https://github.com/Giridhar0702/Voice-PDF-Assistant-RAG",
    liveUrl: "#voice-demo",
    stars: 24,
    featured: true,
    codeSnippet: `async def process_voice_query(audio_stream):
    text_query = await stt_engine.transcribe(audio_stream)
    context = faiss_store.similarity_search(text_query)
    answer = await llm_engine.aquery(text_query, context=context)
    audio_response = await tts_engine.synthesize(answer)
    return audio_response`
  },
  {
    id: "hospital-management-system",
    title: "Hospital Management System",
    subtitle: "Robust Java & Database Driven Healthcare Console Application",
    description: "Developed a Java console application for managing patients, doctors, appointments, and hospital records with secure MySQL persistent storage.",
    fullDescription: "A comprehensive enterprise-patterned Java application engineered using Object-Oriented Design Principles. Implements parameterized PreparedStatement SQL queries, transaction safety, structured menu navigation, patient admission history, doctor scheduling, and appointment booking.",
    category: "Java & Backend",
    technologies: ["Java", "MySQL", "JDBC", "PreparedStatement", "OOP", "Data Structures", "SQL"],
    features: [
      "Full CRUD operations for Patient records, Doctor shifts, and Appointment logs",
      "SQL Injection prevention using Java PreparedStatement and parametrized queries",
      "Relational Database Schema design with Foreign Key constraints and automated triggers",
      "Clean separation of concerns adhering to DAO (Data Access Object) design pattern",
      "Consolidated bill generation and medical history retrieval features"
    ],
    githubUrl: "https://github.com/Giridhar0702/Hospital-Management-System-Java",
    stars: 15,
    featured: true,
    codeSnippet: `public boolean bookAppointment(int patientId, int doctorId, String date) {
    String sql = "INSERT INTO appointments (patient_id, doctor_id, appointment_date) VALUES (?, ?, ?)";
    try (PreparedStatement pstmt = connection.prepareStatement(sql)) {
        pstmt.setInt(1, patientId);
        pstmt.setInt(2, doctorId);
        pstmt.setString(3, date);
        return pstmt.executeUpdate() > 0;
    } catch (SQLException e) {
        e.printStackTrace();
        return false;
    }
}`
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    iconName: "Code",
    skills: [
      { name: "Java", level: 90, description: "Core Java, OOPs, Collections, Exception Handling, Streams", tag: "Primary" },
      { name: "Python", level: 88, description: "Data Analysis, AI Scripting, LangChain, AsyncIO, NumPy", tag: "Primary" },
      { name: "SQL", level: 85, description: "Relational Queries, Joins, Indexing, Schema Design", tag: "Backend" }
    ]
  },
  {
    title: "Artificial Intelligence & RAG",
    iconName: "Brain",
    skills: [
      { name: "Large Language Models", level: 92, description: "Prompt Tuning, Fine-Tuning concepts, Context Windows", tag: "Core AI" },
      { name: "Retrieval-Augmented Generation", level: 95, description: "Hybrid Search, RERANKING, Grounding, Multi-Query RAG", tag: "Core AI" },
      { name: "Natural Language Processing", level: 85, description: "Text Preprocessing, Sentiment, Tokenization, N-grams", tag: "AI" },
      { name: "Agentic AI", level: 82, description: "Multi-agent workflows, Tool calling, ReAct patterns", tag: "AI" },
      { name: "Prompt Engineering", level: 95, description: "Few-shot, Chain-of-Thought, System Prompts, Guardrails", tag: "Core AI" },
      { name: "Embeddings & Vectors", level: 90, description: "SentenceTransformers, Cosine Similarity, Dense Vectors", tag: "Core AI" },
      { name: "Chunking & Tokenization", level: 88, description: "Recursive Character, Sentence-level, Tiktoken", tag: "RAG" },
      { name: "Semantic Search", level: 92, description: "Vector-based Information Retrieval & BM25 hybrid", tag: "RAG" },
      { name: "Vector Databases (FAISS)", level: 88, description: "FAISS Indexing, FlatL2, HNSW, Similarity Search", tag: "RAG" }
    ]
  },
  {
    title: "Backend & Core CS",
    iconName: "Server",
    skills: [
      { name: "OOP (Object-Oriented Programming)", level: 92, description: "Encapsulation, Inheritance, Polymorphism, Abstraction", tag: "Core CS" },
      { name: "DBMS (Database Systems)", level: 88, description: "Relational Modeling, Normalization, ACID Properties", tag: "Core CS" },
      { name: "JDBC (Java Database Connectivity)", level: 85, description: "Connections, PreparedStatements, Transaction Management", tag: "Java" },
      { name: "Data Structures & Algorithms", level: 80, description: "Arrays, Linked Lists, Trees, Graphs, Sorting", tag: "Core CS" }
    ]
  },
  {
    title: "Web Technologies",
    iconName: "Globe",
    skills: [
      { name: "HTML5", level: 90, description: "Semantic tags, Accessibility (WCAG), SEO structure", tag: "Frontend" },
      { name: "CSS3", level: 88, description: "Flexbox, Grid, Glassmorphism, Responsive layout", tag: "Frontend" },
      { name: "JavaScript", level: 82, description: "ES6+, Async/Await, DOM Manipulation, Promises", tag: "Frontend" }
    ]
  },
  {
    title: "Tools & Developer Ecosystem",
    iconName: "Wrench",
    skills: [
      { name: "Git", level: 90, description: "Version Control, Branching strategies, Commit standards", tag: "Tools" },
      { name: "GitHub", level: 92, description: "Repositories, Pull Requests, GitHub Actions, Pages", tag: "Tools" },
      { name: "Vercel", level: 85, description: "Next.js Deployment, CI/CD preview builds, Domain config", tag: "Tools" },
      { name: "Figma", level: 80, description: "UI Mockups, Wireframing, Component Prototyping", tag: "Tools" },
      { name: "Responsive Design", level: 90, description: "Mobile-First Design, Media Queries, Fluid Layouts", tag: "Design" }
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "oracle-java-se-17",
    title: "Oracle Certified Professional: Java SE 17 Developer",
    issuer: "Oracle",
    date: "2026",
    verifyUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=F1BA2AD7037ECBDD7CC21ACE9A121B3964477C8A8919F8A2EBD0D8D987FC987C",
    skillsVerified: ["Java SE 17", "Object-Oriented Design", "Streams & Lambdas", "JVM & Concurrency"],
    icon: "Award"
  },
  {
    id: "prompt-eng-cert",
    title: "Prompt Engineering Certification",
    issuer: "Navigate Labs",
    date: "2026",
    skillsVerified: ["Prompt Engineering", "LLM Fine-Tuning", "System Design", "Few-Shot Prompting"],
    icon: "Award"
  },
  {
    id: "java-basic-cert",
    title: "Java (Basic) Skill Certification",
    issuer: "HackerRank",
    date: "2026",
    verifyUrl: "https://www.hackerrank.com/certificates/3505b25f061c",
    skillsVerified: ["Java Syntax", "Object-Oriented Design", "Exception Handling", "Data Types"],
    icon: "CheckCircle"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "langchain-generative-ai",
    title: "LangChain & Generative AI: Building Production-Ready LLM Pipelines",
    slug: "langchain-generative-ai",
    excerpt: "An in-depth guide on utilizing LangChain to build resilient, stateful Retrieval-Augmented Generation workflows and autonomous LLM agents.",
    date: "LinkedIn Article",
    readTime: "4 min read",
    category: "Generative AI",
    tags: ["LangChain", "GenerativeAI", "LLM", "RAG"],
    author: "Giridhar S K",
    linkedinUrl: "https://www.linkedin.com/posts/giridhar-s-k-_langchain-generativeai-llm-ugcPost-7479561353150504961-l0t6/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEyQdXMB1ftYswNIJrF8wdOQRK7fGBhMO7E",
    content: `
### Building Enterprise Generative AI Workflows with LangChain

Building production-ready LLM applications requires robust orchestration beyond simple API requests. LangChain provides a comprehensive framework to chain prompts, manage vector retrieval, and integrate tool execution into scalable pipelines.

### Core Architecture Highlights:
1. **Sequential & Routing Chains**: Managing complex multi-step reasoning pipelines.
2. **Vector Indexing & Semantic Search**: Integrating high-dimensional vector stores for contextual precision.
3. **Guardrails & Structured Parsing**: Enforcing output formatting and preventing model hallucinations.
    `
  },
  {
    id: "ai-agents-autonomous-workflows",
    title: "Autonomous AI Agents: The Next Evolution in Artificial Intelligence",
    slug: "ai-agents-autonomous-workflows",
    excerpt: "Exploring agentic AI patterns, tool execution, multi-agent collaboration, and how autonomous agents plan and execute complex tasks.",
    date: "LinkedIn Article",
    readTime: "5 min read",
    category: "AI Agents",
    tags: ["AIAgents", "ArtificialIntelligence", "AgenticAI", "LLM"],
    author: "Giridhar S K",
    linkedinUrl: "https://www.linkedin.com/posts/giridhar-s-k-_ai-aiagents-artificialintelligence-ugcPost-7439334484937854977-Iv7U/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEyQdXMB1ftYswNIJrF8wdOQRK7fGBhMO7E",
    content: `
### The Rise of Autonomous Agentic Workflows

AI Agents transition language models from passive conversational assistants into active problem solvers capable of autonomous planning and tool invocation.

### Key Pillars of Agentic Design:
- **ReAct (Reason + Act)**: Interleaving reasoning steps with real-world tool execution.
- **Stateful Memory & Context**: Retaining conversation history across complex sub-goals.
- **Multi-Agent Orchestration**: Delegating specialized tasks across focused subagent workers.
    `
  },
  {
    id: "mastering-prompt-engineering",
    title: "Mastering Prompt Engineering: Crafting High-Precision AI Instructions",
    slug: "mastering-prompt-engineering",
    excerpt: "Practical prompt design strategies including system personas, few-shot learning, XML delimiters, and structured output formatting.",
    date: "LinkedIn Article",
    readTime: "4 min read",
    category: "Prompt Engineering",
    tags: ["PromptEngineering", "LLM", "GenerativeAI", "AI"],
    author: "Giridhar S K",
    linkedinUrl: "https://www.linkedin.com/posts/giridhar-s-k-_promptblog-ugcPost-7437087782377857024-eeuv/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEyQdXMB1ftYswNIJrF8wdOQRK7fGBhMO7E",
    content: `
### The Engineering Behind Effective Prompts

Prompt Engineering is the discipline of structuring inputs to ensure Large Language Models produce accurate, structured, and reliable responses consistently.

### Key Techniques:
- **System Persona Definition**: Defining clear operational scope and domain expertise.
- **Few-Shot Formatting**: Providing concrete input-output pairs to mandate desired response schemas.
- **Chain-of-Thought Prompting**: Forcing explicit step-by-step reasoning before output generation.
    `
  },
  {
    id: "transformers-and-deep-learning",
    title: "Understanding Transformers & Machine Learning Fundamentals",
    slug: "transformers-and-deep-learning",
    excerpt: "A deep dive into self-attention mechanisms, neural network architectures, and the foundation of modern Machine Learning.",
    date: "LinkedIn Article",
    readTime: "6 min read",
    category: "Machine Learning",
    tags: ["ArtificialIntelligence", "Transformers", "MachineLearning", "DeepLearning"],
    author: "Giridhar S K",
    linkedinUrl: "https://www.linkedin.com/posts/giridhar-s-k-_artificialintelligence-transformers-machinelearning-ugcPost-7410553888866631680-mJsv/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEyQdXMB1ftYswNIJrF8wdOQRK7fGBhMO7E",
    content: `
### Demystifying the Transformer Architecture

The Transformer architecture powers state-of-the-art AI by leveraging self-attention mechanisms to model relationships between sequences in parallel.

### Architectural Foundations:
1. **Self-Attention Mechanism**: Quantifying token dependencies across entire context windows.
2. **Positional Encodings**: Injecting sequence order without recursive bottlenecking.
3. **Scalable Pre-Training**: Foundation model training across high-volume text corpora.
    `
  }
];
