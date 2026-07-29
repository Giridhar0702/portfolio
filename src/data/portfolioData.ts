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
  title: "Computer Science Engineering Student | Java Developer | Generative AI Engineer",
  tagline: "Building AI-powered applications with LLMs, RAG, and Java.",
  email: "giridharsaravanakumar07@gmail.com",
  phone: "9360772070",
  formattedPhone: "+91 93607 72070",
  github: "https://github.com/Giridhar0702",
  linkedin: "https://linkedin.com/in/giridhar-s-k-",
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
    id: "prompt-eng-cert",
    title: "Prompt Engineering Certification",
    issuer: "Navigate Labs",
    date: "2024",
    skillsVerified: ["Prompt Engineering", "LLM Fine-Tuning", "System Design", "Few-Shot Prompting"],
    icon: "Award"
  },
  {
    id: "java-basic-cert",
    title: "Java (Basic) Skill Certification",
    issuer: "HackerRank",
    date: "2024",
    verifyUrl: "https://www.hackerrank.com/certificates",
    skillsVerified: ["Java Syntax", "Object-Oriented Design", "Exception Handling", "Data Types"],
    icon: "CheckCircle"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "understanding-rag",
    title: "Understanding RAG: The Bridge Between Static LLMs and Live Data",
    slug: "understanding-rag",
    excerpt: "Retrieval-Augmented Generation (RAG) revolutionizes how AI retrieves factual information from external knowledge bases before generating responses.",
    date: "July 2026",
    readTime: "5 min read",
    category: "Generative AI",
    tags: ["RAG", "LLMs", "Vector DB", "FAISS"],
    author: "Giridhar S K",
    content: `
### What is RAG?
Retrieval-Augmented Generation (RAG) is an architectural pattern in modern Artificial Intelligence that enhances Large Language Models (LLMs) by connecting them to external, dynamic datasets.

While standard LLMs rely solely on their pre-trained weights, RAG retrieves relevant facts from a custom knowledge base (like PDFs, DBs, or web pages) and feeds those facts as context into the prompt before generating an answer.

### Key Components of a RAG Pipeline:
1. **Document Ingestion & Chunking**: Splitting raw documents into optimal text passages (e.g. 500 tokens with 50-token overlap).
2. **Vector Embedding Generation**: Converting text chunks into dense mathematical vectors using models like SentenceTransformers.
3. **Vector Storage & Retrieval**: Storing embeddings in vector databases (FAISS, Chroma, Pinecone) and querying using Cosine Similarity or L2 distance.
4. **Prompt Augmentation & Generation**: Synthesizing a grounded response using LLMs with explicit context rules to eliminate hallucination.

### Why RAG Matters for Engineers:
RAG eliminates the immense cost of retraining LLMs while ensuring 100% data freshness, privacy control, and traceable citations for enterprise software.
    `
  },
  {
    id: "prompt-engineering-basics",
    title: "Prompt Engineering Basics: Unlocking Maximum Performance from LLMs",
    slug: "prompt-engineering-basics",
    excerpt: "Mastering the art of structuring instructions, role prompting, and chain-of-thought techniques to get deterministic AI outputs.",
    date: "June 2026",
    readTime: "4 min read",
    category: "Prompt Engineering",
    tags: ["Prompts", "LLM", "AI Engineering"],
    author: "Giridhar S K",
    content: `
### The Science of Prompting
Prompt Engineering is more than writing text; it is the discipline of structuring inputs so that language models produce accurate, formatted, and reliable answers.

### Essential Prompting Strategies:
- **Role Assignment**: Define the persona (e.g. *"You are a Principal Java Architect..."*).
- **Few-Shot Examples**: Provide 2-3 input-output pairs to guide format compliance.
- **Chain-of-Thought (CoT)**: Force the model to show step-by-step reasoning (*"Think step-by-step before answering..."*).
- **Delimiters & Guardrails**: Use XML tags or Markdown triples to isolate untrusted user inputs.
    `
  },
  {
    id: "what-are-llms",
    title: "What are LLMs? Understanding the Transformer Architecture",
    slug: "what-are-llms",
    excerpt: "A deep dive into Large Language Models, self-attention mechanisms, tokenization, and how AI understands human language.",
    date: "May 2026",
    readTime: "6 min read",
    category: "Artificial Intelligence",
    tags: ["LLM", "Transformers", "NLP", "AI"],
    author: "Giridhar S K",
    content: `
### Demystifying Transformers
At the heart of ChatGPT, Claude, and Llama lies the **Transformer Architecture**, introduced by Vaswani et al. in "Attention Is All You Need".

### Core Concepts:
- **Tokenization**: Converting words/subwords into numerical token IDs.
- **Self-Attention**: Allowing every token in a sequence to weigh the importance of all other tokens in context.
- **Next-Token Prediction**: Estimating the statistical probability distribution over vocabulary tokens to generate coherent sentences.
    `
  },
  {
    id: "semantic-search-explained",
    title: "Semantic Search Explained: Moving Beyond Simple Keyword Matches",
    slug: "semantic-search-explained",
    excerpt: "Discover how vector search captures conceptual meaning, synonyms, and context where traditional keyword search falls short.",
    date: "April 2026",
    readTime: "4 min read",
    category: "Information Retrieval",
    tags: ["Vector Search", "Embeddings", "FAISS", "Python"],
    author: "Giridhar S K",
    content: `
### Why Keyword Search Fails
Traditional SQL \`LIKE\` or BM25 keyword matching fails when a user searches for *"vehicle maintenance"* but the document says *"car repair"*.

### Enter Semantic Search
Semantic Search converts both queries and documents into dense high-dimensional vectors. In vector space, *"car repair"* and *"vehicle maintenance"* sit close to each other. Using distance metrics like Cosine Similarity, search engines return relevant results regardless of exact word overlap.
    `
  },
  {
    id: "embeddings-in-ai",
    title: "Embeddings in AI: Turning Concepts into High-Dimensional Vectors",
    slug: "embeddings-in-ai",
    excerpt: "How floating-point vector representations enable neural networks to compute semantic distance between words, images, and documents.",
    date: "March 2026",
    readTime: "5 min read",
    category: "Machine Learning",
    tags: ["Embeddings", "Math", "AI", "Python"],
    author: "Giridhar S K",
    content: `
### What is an Embedding?
An embedding is a representation of an object (like a word, sentence, image, or audio snippet) as a vector of floating-point numbers in a continuous vector space (e.g. 768 or 1536 dimensions).

### Geometric Meaning:
- **Dot Product & Cosine Distance**: Measures the angle between two vectors. A cosine similarity of ~1.0 means identical concept meaning.
- **Applications**: Recommendation engines, document similarity, clustering, and vector search indices.
    `
  },
  {
    id: "building-ai-applications",
    title: "Building AI Applications: Combining Java, Python, and LLM APIs",
    slug: "building-ai-applications",
    excerpt: "Best practices for architecting hybrid AI applications utilizing Java backend robustness alongside Python AI ecosystem pipelines.",
    date: "February 2026",
    readTime: "5 min read",
    category: "Software Engineering",
    tags: ["Java", "Python", "System Design", "Architecture"],
    author: "Giridhar S K",
    content: `
### The Hybrid Stack: Java + Python
In production environments, Java provides rock-solid backend services, transaction safety, and enterprise concurrency, while Python powers the AI/ML ecosystem.

### Architectural Best Practices:
1. **REST / gRPC Microservices**: Run Python vector search microservices behind Java Spring Boot / Core Java API Gateways.
2. **Asynchronous Task Queues**: Handle long-running LLM generation tasks asynchronously to keep user interfaces responsive.
3. **Robust Fallbacks**: Implement retry mechanisms and rate limiting when calling external LLM endpoints.
    `
  }
];
