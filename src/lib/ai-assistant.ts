import { portfolioKnowledge } from '@/data/portfolio';

/*
 * Ask Mohit AI Assistant
 * ─────────────────────────────────────────────────────────
 * Answers questions about Mohit's portfolio using:
 * 1. Configured AI API (if available)
 * 2. Local Q&A knowledge base (fallback)
 *
 * Environment variables (all optional):
 * - VITE_AI_PROVIDER: 'gemini' | 'openai' (default: 'local')
 * - VITE_AI_API_KEY: API key for the configured provider
 * - VITE_AI_MODEL: Model to use (optional, uses provider default)
 *
 * The assistant ONLY answers questions about portfolio information.
 * It does NOT make up facts, experience, or achievements.
 */

const AI_PROVIDER = import.meta.env.VITE_AI_PROVIDER as string | undefined;
const AI_API_KEY = import.meta.env.VITE_AI_API_KEY as string | undefined;
const AI_MODEL = import.meta.env.VITE_AI_MODEL as string | undefined;

const SYSTEM_PROMPT = `You are "Ask Mohit" — a helpful AI assistant on Mohit Mundke's personal portfolio website.

You ONLY answer questions based on the following verified portfolio information. Do NOT invent, fabricate, or guess any information not present below.

PORTFOLIO INFORMATION:
Name: ${portfolioKnowledge.name}
Role: ${portfolioKnowledge.role}
Education: ${portfolioKnowledge.education}
Experience: ${portfolioKnowledge.experience}
Skills: ${portfolioKnowledge.skills}
Projects: ${portfolioKnowledge.projects}
Achievements: ${portfolioKnowledge.achievements}
Contact: ${portfolioKnowledge.contact}
Location: ${portfolioKnowledge.location}
Opportunities: ${portfolioKnowledge.opportunities}

RULES:
- Only use the above information to answer questions.
- If a question is outside this scope, say "I can only answer questions about Mohit's portfolio. Try asking about his skills, projects, education, or experience."
- Be friendly, concise, and professional.
- Do NOT make up statistics, numbers, or achievements.
- Keep responses to 2–4 sentences when possible.
- If asked about contact, share the email and LinkedIn profile.`;

/* ─── Local Q&A Fallback ─────────────────────────────────── */
const localQA: { keywords: string[]; answer: string }[] = [
  {
    keywords: ['skill', 'tech', 'language', 'know', 'programming', 'work with'],
    answer: `Mohit's skills include: **Programming** — C, C++, Python, JavaScript, HTML, CSS. **Frameworks** — React, Node.js, Flask. **AI & Data** — Machine Learning, Generative AI, Pandas, NumPy. **Tools** — Git, GitHub, VS Code, Figma, Antigravity, Gemini.`,
  },
  {
    keywords: ['project', 'build', 'made', 'built', 'focusnext', 'wellness', 'soilosync', 'soil', 'app', 'portfolio'],
    answer: `Mohit's featured projects include:\n\n1. 🧘‍♂️ **Wellness Healthcare (FocusNext)**: Flagship remote worker wellness healthcare platform engineered with React, TypeScript, and automated 20-20-20 screen fatigue assistance.\n\n2. 🌱 **soilOsync**: Smart soil monitoring platform designed to provide real-time soil insights and support technology-driven decision-making in agriculture (React, TypeScript, Vite, Tailwind CSS, Radix UI, Google Gemini AI).\n\n3. 🚀 **Personal Portfolio & GenAI Assistant**: Interactive web portal with Recruiter Mode and client-side conversational AI.`,
  },
  {
    keywords: ['gallery', 'pixel', 'nptel', 'aws', 'certificate', 'moment', 'event', 'photo'],
    answer: `Mohit's **Gallery** showcases verified achievements including: **Pixel War 2k26 UI/UX Design Battle** (1st Runner Up), **Fundamentals of ML and AI** (AWS Certification), **Python for Data Science** (NPTEL · IIT Madras), **C & C++ Programming** (Imarticus Learning), **Google Gemini AI Ambassador Milestones**, and **Full Stack Development Internship** (Thiranex).`,
  },
  {
    keywords: ['education', 'study', 'college', 'university', 'degree', 'btech', 'score'],
    answer: `Mohit is pursuing a **B.Tech in Computer Science Engineering (AI & Data Science)** at Dr. D. Y. Patil College of Engineering and Innovation, Varale, Pune (2025–2029). He scored **87.00%** in 10th SSC and **77.50%** in 12th HSC Science.`,
  },
  {
    keywords: ['google', 'ambassador', 'gid', '5314', 'bronze'],
    answer: `Mohit is a **Google Student Ambassador 2026** (GID: 5314, Bronze Badge). His role involves community engagement, promoting Gemini and AI technologies, organizing events, technology education, and student leadership.`,
  },
  {
    keywords: ['contact', 'email', 'reach', 'hire', 'connect', 'message'],
    answer: `You can reach Mohit at **mohitmundke20@gmail.com** or via [LinkedIn](https://www.linkedin.com/in/mohit-mundke-239439352). He's open to Full-Stack Development and Software Engineering internships, AI/ML opportunities, and collaborations.`,
  },
  {
    keywords: ['opportunit', 'internship', 'job', 'looking for', 'open to', 'hire'],
    answer: `Mohit is open to **Full-Stack Development** and **Software Engineering internships** (primary interest), as well as AI/ML, Data Science, and Web Development internships. He's also interested in freelance collaborations and technology community involvement.`,
  },
  {
    keywords: ['location', 'where', 'pune', 'india'],
    answer: `Mohit is based in **Pune, India**. He's open to both local and remote opportunities.`,
  },
  {
    keywords: ['hello', 'hi', 'hey', 'what can you', 'help'],
    answer: `Hi! I'm Ask Mohit — your guide to Mohit's portfolio. Ask me about his **skills**, **projects**, **education**, **Google Student Ambassador** experience, or how to **contact** him!`,
  },
];

function localFallbackAnswer(question: string): string {
  const q = question.toLowerCase();

  for (const qa of localQA) {
    if (qa.keywords.some((kw) => q.includes(kw))) {
      return qa.answer;
    }
  }

  return `I can only answer questions about Mohit's portfolio. Try asking about his **skills**, **projects** (FocusNext Wellness), **education**, **Google Student Ambassador** experience, or how to **contact** him.`;
}

/* ─── Gemini API ─────────────────────────────────────────── */
async function askGemini(question: string): Promise<string> {
  const model = AI_MODEL ?? 'gemini-1.5-flash';
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${AI_API_KEY}`;

  const body = {
    contents: [
      {
        parts: [
          { text: `${SYSTEM_PROMPT}\n\nUser question: ${question}` },
        ],
      },
    ],
    generationConfig: {
      maxOutputTokens: 300,
      temperature: 0.3,
    },
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!response.ok) throw new Error('Gemini API error');

  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) throw new Error('Non-JSON response from Gemini API');

  const data = await response.json() as {
    candidates?: { content?: { parts?: { text?: string }[] } }[];
  };

  return data.candidates?.[0]?.content?.parts?.[0]?.text ?? localFallbackAnswer(question);
}

/* ─── OpenAI API ─────────────────────────────────────────── */
async function askOpenAI(question: string): Promise<string> {
  const model = AI_MODEL ?? 'gpt-4o-mini';
  const url = 'https://api.openai.com/v1/chat/completions';

  const body = {
    model,
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      { role: 'user', content: question },
    ],
    max_tokens: 300,
    temperature: 0.3,
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${AI_API_KEY}`,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) throw new Error('OpenAI API error');

  const openAiContentType = response.headers.get('content-type') || '';
  if (!openAiContentType.includes('application/json')) throw new Error('Non-JSON response from OpenAI API');

  const data = await response.json() as {
    choices?: { message?: { content?: string } }[];
  };

  return data.choices?.[0]?.message?.content ?? localFallbackAnswer(question);
}

/* ─── Main exported function ─────────────────────────────── */
export async function askMohit(question: string): Promise<string> {
  if (!question.trim()) return localFallbackAnswer('hello');

  // If no API key configured, use local fallback
  if (!AI_API_KEY || !AI_PROVIDER) {
    return localFallbackAnswer(question);
  }

  try {
    switch (AI_PROVIDER.toLowerCase()) {
      case 'gemini':
        return await askGemini(question);
      case 'openai':
        return await askOpenAI(question);
      default:
        return localFallbackAnswer(question);
    }
  } catch (error) {
    console.warn('AI API error, using local fallback:', error);
    return localFallbackAnswer(question);
  }
}

export const suggestedQuestions = [
  "What skills does Mohit have?",
  "Tell me about FocusNext Wellness.",
  "What is his Google Student Ambassador experience?",
  "What opportunities is Mohit looking for?",
  "How can I contact Mohit?",
  "What is Mohit's education?",
];
