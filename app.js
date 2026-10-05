const { useState, useEffect, useRef } = window.React || (typeof React !== 'undefined' ? React : {});

/* ─── ZERO-404 EMBEDDED IMAGE & RESUME RESOLVER ─── */
function getImageSrc(path) {
  if (!path) return '';
  if (typeof window !== 'undefined' && window.PORTFOLIO_IMAGES) {
    if (window.PORTFOLIO_IMAGES[path]) return window.PORTFOLIO_IMAGES[path];
    const clean = path.startsWith('/') ? path.slice(1) : `/${path}`;
    if (window.PORTFOLIO_IMAGES[clean]) return window.PORTFOLIO_IMAGES[clean];
    const filename = path.split('/').pop();
    if (window.PORTFOLIO_IMAGES[filename]) return window.PORTFOLIO_IMAGES[filename];
  }
  return path;
}

function getResumePdfSrc() {
  return (typeof window !== 'undefined' && window.PORTFOLIO_RESUME_PDF) || '/resume.pdf';
}

/* ─── AUTHENTIC PERSONAL DATA ─── */
const personalInfo = {
  name: 'MOHIT MUNDKE',
  role: 'AI & Data Science Student · Builder · Designer · Community Leader',
  institution: 'Dr. D.Y. Patil College of Engineering and Innovation, Pune (DYPCOEI)',
  year: '2nd Year B.Tech',
  specialization: 'Artificial Intelligence & Data Science',
  location: 'Pune, Maharashtra, India',
  email: 'mohitmundke20@gmail.com',
  phone: '+91 9767969701',
  social: {
    linkedin: 'https://www.linkedin.com/in/mohit-mundke-239439352',
    github: 'https://github.com/mohitmundke',
    instagram: 'https://www.instagram.com/w3b.m0hit',
    whatsapp: 'https://wa.me/919767969701?text=Hi%20Mohit,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect!'
  }
};

/* ─── TIMELINE ENTRIES (03. MY JOURNEY) ─── */
const journeyTimeline = [
  {
    year: '2024',
    title: 'THE BEGINNING',
    highlight: 'Curiosity & Algorithmic Foundations',
    text: 'Started exploring programming, technology and problem solving.',
    tag: 'Foundations'
  },
  {
    year: '2025',
    title: 'FROM LEARNING TO BUILDING',
    highlight: 'Product & System Development',
    text: 'Started working on projects involving programming, UI/UX, web development and AI.',
    tag: 'Full-Stack & Systems'
  },
  {
    year: '2026',
    title: 'THE AI ERA',
    highlight: 'Google Gemini AI Student Ambassador',
    text: 'Became a Google Gemini AI Student Ambassador and started exploring Generative AI, AI tools and real-world applications.',
    tag: 'AI Evangelism'
  },
  {
    year: '2026',
    title: 'ENTERING THE AWS ECOSYSTEM',
    highlight: 'Cloud Architecture & Infrastructure',
    text: 'Started exploring AWS, cloud computing and the wider developer ecosystem.',
    tag: 'Cloud Computing'
  },
  {
    year: '2026',
    title: 'BUILDING THE BUILDERS',
    highlight: 'Student Builder Group Leader · AY 2026-27',
    text: 'Became the Student Builder Group Leader of AWS Student Builder Group DYPCOEI for AY 2026-27.',
    tag: 'Leadership'
  },
  {
    year: '2026 → NOW',
    title: 'STILL BUILDING',
    highlight: 'Continuous Evolution',
    text: 'Continuing to learn, build, lead and experiment with AI, cloud, software and design.',
    tag: 'In Progress'
  }
];

/* ─── 04. GOOGLE GEMINI JOURNEY DATA ─── */
const googleJourneySteps = [
  { step: '01', title: 'DISCOVER', desc: 'Unpacking multimodal AI paradigms, prompt architectures, and intelligent systems.' },
  { step: '02', title: 'LEARN', desc: 'Mastering Google Gemini API capabilities, tool integrations, and ethical AI development.' },
  { step: '03', title: 'EXPERIMENT', desc: 'Building prototype workflows combining LLMs with real-world student and developer use cases.' },
  { step: '04', title: 'SHARE', desc: 'Delivering technical demos and hosting campus sessions to demystify generative AI.' },
  { step: '05', title: 'ENABLE OTHERS', desc: 'Equipping peers with prompt literacy and AI productivity tools to accelerate their engineering.' }
];

const googlePillars = [
  { name: 'Gemini', desc: 'Multimodal AI & contextual reasoning' },
  { name: 'Generative AI', desc: 'Prompt engineering & creative synthesis' },
  { name: 'AI Productivity', desc: 'Accelerating developer & student workflows' },
  { name: 'AI Awareness', desc: 'Demystifying machine intelligence on campus' },
  { name: 'Student Community', desc: 'Collaborative builder meetups & peer learning' },
  { name: 'AI Learning Initiatives', desc: 'Hands-on practical workshops & tutorials' }
];

/* ─── 05. AWS JOURNEY DATA ─── */
const awsProgressionSteps = [
  { num: '01', title: 'EXPLORE AWS', desc: 'Grasping foundational cloud models, global infrastructure, and security.' },
  { num: '02', title: 'LEARN', desc: 'Diving into compute, serverless primitives, object storage, and databases.' },
  { num: '03', title: 'BUILD', desc: 'Architecting hands-on cloud workflows and testing scalable software patterns.' },
  { num: '04', title: 'LEAD', desc: 'Taking responsibility as Student Builder Group Leader for DYPCOEI.' },
  { num: '05', title: 'CREATE COMMUNITY', desc: 'Cultivating an ecosystem of builders, workshops, and cloud innovation.' }
];

/* ─── 06. AWS CORE TEAM (EXACT OFFICIAL MEMBERS) ─── */
const awsCoreTeam = [
  {
    role: 'LEADER',
    name: 'Mohit Mundke',
    title: 'Student Builder Group Leader',
    dept: '2nd Year · AI & Data Science',
    accent: '#FF9900',
    bio: 'Guiding community strategy, technical workshops, and cloud builder culture across the college.'
  },
  {
    role: 'DIRECTOR OF EVENTS',
    name: 'Dnyanada Dhavale',
    title: 'Director of Events',
    dept: '3rd Year · Computer Engineering',
    accent: '#FFB84D',
    bio: 'Orchestrating technical symposiums, hands-on bootcamps, and developer gatherings.'
  },
  {
    role: 'DIRECTOR OF MARKETING',
    name: 'Akanksha Mirge',
    title: 'Director of Marketing',
    dept: '3rd Year · Computer Engineering',
    accent: '#FF9900',
    bio: 'Driving outreach, brand presence, and student participation across all community activities.'
  },
  {
    role: 'TECHNICAL LEAD',
    name: 'Mayuresh Thorve',
    title: 'Technical Lead',
    dept: '3rd Year · Computer Engineering',
    accent: '#38BDF8',
    bio: 'Overseeing technical tracks, cloud architecture demos, and code-level mentoring.'
  },
  {
    role: 'MULTIMEDIA HEAD',
    name: 'Ishwari Bhope',
    title: 'Multimedia Head',
    dept: '2nd Year · AI-ML',
    accent: '#A855F7',
    bio: 'Creating visual identity assets, session media, and graphic communication.'
  },
  {
    role: 'DOCUMENTATION HEAD',
    name: 'Vaishnavee Sutar',
    title: 'Documentation Head',
    dept: '2nd Year · AI-ML',
    accent: '#818CF8',
    bio: 'Maintaining project registries, event records, and technical knowledge archives.'
  }
];

/* ─── 07. SELECTED WORK PROJECTS ─── */
const selectedProjects = [
  {
    id: 'focusnext-wellness',
    title: 'FOCUSNEXT WELLNESS',
    subtitle: 'A wellness and productivity-focused digital experience.',
    tagline: 'Engineering digital health for deep work',
    technologies: ['AI', 'UI/UX', 'Web', 'React', 'TypeScript', 'Tailwind CSS'],
    category: 'Digital Wellness & AI',
    githubUrl: 'https://github.com/mohitmundke/FocusNext-Wellness.git',
    description: 'A comprehensive wellness companion engineered to combat digital eye strain, poor ergonomic posture, and fatigue during prolonged coding and screen sessions. Implements smart break intervals, posture prompts, and habit analytics.',
    caseStudy: {
      problem: 'Remote workers, developers, and students endure 8–12 hours of screen exposure daily without physical cues to rest, resulting in severe computer vision syndrome and burnout.',
      solution: 'An intuitive digital health companion featuring an automated 20-20-20 rule timer, real-time posture reminders, session tracking, and localized wellness metrics.',
      architecture: ['Modular component hierarchy in React 18 & TypeScript', 'Fluid state management with zero external latency', 'Accessible glassmorphism UI with responsive design tokens']
    }
  },
  {
    id: 'soilosync',
    title: 'SOILOSYNC',
    subtitle: 'A technology-focused project exploring intelligent solutions.',
    tagline: 'Precision telemetry & AI for sustainable agriculture',
    technologies: ['AI', 'Data', 'Web', 'IoT', 'Google Gemini AI', 'TypeScript'],
    category: 'Smart Agriculture / AI',
    githubUrl: 'https://github.com/mohitmundke/soilOsync',
    description: 'A smart soil monitoring solution designed to provide real-time soil telemetry and support data-driven decision making in agriculture. Combines telemetry sensors (moisture, temperature, electrical conductivity) with an intelligent AI Agricultural Assistant powered by Google Gemini.',
    caseStudy: {
      problem: 'Traditional farming relies heavily on manual soil estimates, causing imprecise irrigation, nutrient degradation, and reduced agricultural yield.',
      solution: 'Combines multi-parameter soil sensing with predictive trend dashboards and a conversational Google Gemini AI crop advisor to recommend data-grounded farming interventions.',
      architecture: ['Real-time telemetry ingestion pipelines', 'Interactive sensor trends & moisture analytics', 'Integrated Google Gemini conversational reasoning module']
    }
  },
  {
    id: 'hybrid-inventory-manager',
    title: 'HYBRID INVENTORY MANAGER',
    subtitle: 'A C/C++ based inventory management concept.',
    tagline: 'High-performance algorithmic systems software',
    technologies: ['C', 'C++'],
    category: 'Systems & Algorithms',
    githubUrl: 'https://github.com/mohitmundke',
    description: 'A systems-oriented inventory management application engineered in C and C++. Demonstrates low-level memory control, efficient algorithmic indexing, linked structures, and binary file persistence for instant item lookups and inventory auditing.',
    caseStudy: {
      problem: 'Standard enterprise inventory setups are frequently bloated with heavy runtime dependencies when lightweight embedded or low-resource system performance is required.',
      solution: 'Architected a deterministic C/C++ memory model utilizing binary search trees, hashed indexes, and structured file streams to maintain speed and data integrity.',
      architecture: ['Direct pointer management with zero memory leaks', 'Fast logarithmic index lookups on structured records', 'Persistent binary serialization protocol']
    }
  },
  {
    id: 'personal-portfolio',
    title: 'PERSONAL PORTFOLIO',
    subtitle: 'My evolving digital identity and experimentation space.',
    tagline: 'Story-driven dark tech digital experience',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    category: 'Digital Identity & Web',
    githubUrl: 'https://github.com/mohitmundke',
    description: 'An editorial personal portfolio engineered from first principles. Features responsive storytelling, ambient dark-tech aesthetics, client-side intelligence, and verified credential presentation.',
    caseStudy: {
      problem: 'Static PDF resumes fail to convey personality, technical narrative, leadership drive, and living proof of hands-on community leadership.',
      solution: 'A cinematic, story-first interactive web presence detailing technical progression, Google & AWS community impact, and verified academic milestones.',
      architecture: ['React component tree with smooth micro-interactions', 'Custom design system with AWS Orange and deep charcoal', 'Zero-dependency client resilience']
    }
  }
];

/* ─── 08. WHAT I BUILD WITH (CATEGORIES & 16 TECHNOLOGIES) ─── */
const buildCategories = [
  {
    title: 'AI & GENERATIVE AI',
    desc: 'Exploring intelligent systems, AI tools and GenAI.',
    accent: '#38BDF8'
  },
  {
    title: 'DEVELOPMENT',
    desc: 'Building web applications and software experiences.',
    accent: '#FFFFFF'
  },
  {
    title: 'UI / UX',
    desc: 'Designing interfaces and digital experiences.',
    accent: '#A855F7'
  },
  {
    title: 'CLOUD & AWS',
    desc: 'Learning and building with cloud technologies.',
    accent: '#FF9900'
  },
  {
    title: 'COMMUNITY',
    desc: 'Creating student-led technical communities.',
    accent: '#34A853'
  },
  {
    title: 'LEADERSHIP',
    desc: 'Organizing, coordinating and leading technical initiatives.',
    accent: '#FFB84D'
  }
];

const technologiesList = [
  { name: 'C', category: 'Language' },
  { name: 'C++', category: 'Language' },
  { name: 'Python', category: 'Language' },
  { name: 'JavaScript', category: 'Language' },
  { name: 'HTML', category: 'Web' },
  { name: 'CSS', category: 'Web' },
  { name: 'React', category: 'Web' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Flask', category: 'Backend' },
  { name: 'Machine Learning', category: 'AI/ML' },
  { name: 'Generative AI', category: 'AI/ML' },
  { name: 'Pandas', category: 'Data' },
  { name: 'NumPy', category: 'Data' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Figma', category: 'Design' },
  { name: 'GitHub', category: 'Tool' }
];

/* ─── 09. LEADERSHIP & EXPERIENCE ─── */
const experienceList = [
  {
    period: '2026',
    role: 'AI Student Ambassador',
    org: 'GOOGLE GEMINI',
    badge: 'Google Ambassador',
    accent: '#4285F4',
    desc: 'Selected to champion Generative AI awareness, host student workshops on Google Gemini, and empower peers with modern AI productivity workflows on campus.'
  },
  {
    period: 'AY 2026-27',
    role: 'Student Builder Group Leader',
    org: 'AWS STUDENT BUILDER GROUP DYPCOEI',
    badge: 'AWS SBG Leader',
    accent: '#FF9900',
    desc: 'Leading the student technical community focused on cloud computing, AWS architecture, hands-on builder projects, and peer knowledge sharing under faculty guidance.'
  },
  {
    period: '2025 – Present',
    role: 'Student Leadership & Tech Initiatives',
    org: 'COLLEGE TECHNICAL & STUDENT INITIATIVES',
    badge: 'Campus Builder',
    accent: '#818CF8',
    desc: 'Active leadership in organizing campus technical events, hackathons, and design initiatives including Fund My Crazy, Career Glow-up Night, and collaborative developer sessions.'
  },
  {
    period: 'Internship',
    role: 'Full Stack Development Intern',
    org: 'THIRANEX',
    badge: 'Engineering Intern',
    accent: '#38BDF8',
    desc: 'Worked on modern frontend components, responsive layouts, web application integration, and agile software development workflows.'
  }
];

/* ─── 10. CURRENTLY BUILDING (4 BENTO PANELS) ─── */
const currentlyBuildingItems = [
  {
    title: 'AWS Student Builder Group',
    desc: 'Building a stronger student technology community.',
    status: 'In Progress · AY 2026-27',
    tag: 'Community & Cloud',
    icon: '☁️',
    accent: '#FF9900'
  },
  {
    title: 'AI Projects',
    desc: 'Exploring practical applications of AI and Generative AI.',
    status: 'Prototyping & Research',
    tag: 'Intelligence & LLMs',
    icon: '✨',
    accent: '#38BDF8'
  },
  {
    title: 'Digital Experiences',
    desc: 'Designing and developing better interfaces and products.',
    status: 'Iterating & Crafting',
    tag: 'UI/UX & Frontend',
    icon: '⚡',
    accent: '#A855F7'
  },
  {
    title: 'Personal Growth',
    desc: 'Continuously learning cloud, AI, development and design.',
    status: 'Lifelong Trajectory',
    tag: 'Engineering Craft',
    icon: '🌱',
    accent: '#34A853'
  }
];

/* ─── 11. VERIFIED ACHIEVEMENTS / MILESTONES ─── */
const verifiedMilestones = [
  {
    value: '8.02',
    label: 'First Semester SGPA',
    sub: 'B.Tech AI & Data Science',
    verified: true
  },
  {
    value: '7.32',
    label: 'Second Semester SGPA',
    sub: 'B.Tech AI & Data Science',
    verified: true
  },
  {
    value: 'GOOGLE GEMINI',
    label: 'AI Student Ambassador',
    sub: 'Official Campus Ambassador (2026)',
    verified: true
  },
  {
    value: 'AWS SBG',
    label: 'Student Builder Group Leader',
    sub: 'DYPCOEI · AY 2026-27',
    verified: true
  }
];

/* ─── MAIN APP COMPONENT ─── */
function App() {
  const [activeNav, setActiveNav] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [selectedPhotoModal, setSelectedPhotoModal] = useState(null);
  const [contactStatus, setContactStatus] = useState('');
  const [aiAssistantOpen, setAiAssistantOpen] = useState(false);
  const [activeGoogleStep, setActiveGoogleStep] = useState(0);
  const [activeAwsStep, setActiveAwsStep] = useState(0);

  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // AI Assistant Chat State
  const [aiChat, setAiChat] = useState([
    { sender: 'assistant', text: "Hello! I am Mohit's AI assistant. Ask me about his AWS Leadership, Google Gemini Ambassador role, projects like FocusNext, or his tech stack!" }
  ]);
  const [aiInput, setAiInput] = useState('');

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'journey', 'google', 'aws', 'team', 'work', 'skills', 'leadership', 'building', 'milestones', 'contact'];
      const scrollPos = window.scrollY + 250;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveNav(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setContactStatus('Please fill in all fields.');
      return;
    }
    setContactStatus('Sending...');

    // Using FormSubmit API or mailto fallback
    fetch('https://formsubmit.co/ajax/mohitmundke20@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        _subject: `New Portfolio Message from ${formData.name}`
      })
    })
      .then((res) => res.json())
      .then((data) => {
        setContactStatus('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        // Mailto fallback
        window.location.href = `mailto:mohitmundke20@gmail.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.email)}`;
        setContactStatus('Opened your mail client to send directly.');
      });
  };

  const handleAiSend = (query) => {
    const text = query || aiInput;
    if (!text.trim()) return;

    const newChat = [...aiChat, { sender: 'user', text }];
    setAiChat(newChat);
    setAiInput('');

    // Client-side grounded knowledge matching
    setTimeout(() => {
      const q = text.toLowerCase();
      let response = "I don't have that specific detail yet, but feel free to connect with Mohit directly via email at mohitmundke20@gmail.com or on LinkedIn!";

      if (q.includes('aws') || q.includes('cloud') || q.includes('sbg') || q.includes('builder')) {
        response = "Mohit is the Student Builder Group Leader of AWS Student Builder Group DYPCOEI for AY 2026-27. The community is focused on AWS, cloud computing, AI and student innovation, guided by AWS Faculty Coordinator Mr. Suraj Bhoite and HOD Dr. Dipannita Mondal.";
      } else if (q.includes('google') || q.includes('gemini') || q.includes('ambassador') || q.includes('gsa')) {
        response = "Mohit is an official Google Gemini AI Student Ambassador (2026). In this role, he explores Generative AI and helps bring AI awareness, experimentation and learning into his college community through workshops and hands-on sessions.";
      } else if (q.includes('focusnext') || q.includes('wellness')) {
        response = "FocusNext Wellness is a digital wellness platform built with React, TypeScript, and Tailwind CSS. It features an intelligent 20-20-20 screen fatigue timer, posture alerts, and habit tracking for engineers and remote workers.";
      } else if (q.includes('soilosync') || q.includes('soil') || q.includes('agriculture')) {
        response = "soilOsync is a smart soil monitoring solution that integrates real-time telemetry (moisture, temperature, EC) with an intelligent AI Agricultural Assistant powered by Google Gemini.";
      } else if (q.includes('inventory') || q.includes('c++') || q.includes('hybrid')) {
        response = "Hybrid Inventory Manager is a C/C++ systems project exploring low-level memory efficiency, algorithmic indexing, and structured data persistence.";
      } else if (q.includes('college') || q.includes('education') || q.includes('sgpa') || q.includes('grade')) {
        response = "Mohit is a 2nd Year B.Tech student in Artificial Intelligence & Data Science at Dr. D.Y. Patil College of Engineering and Innovation (DYPCOEI), Pune. His verified academic SGPA is 8.02 (Sem 1) and 7.32 (Sem 2).";
      } else if (q.includes('skills') || q.includes('tech') || q.includes('stack') || q.includes('languages')) {
        response = "Mohit works with C, C++, Python, JavaScript, HTML, CSS, React, Node.js, Flask, Machine Learning, Generative AI, Pandas, NumPy, AWS, Figma, and GitHub across AI, web, and cloud domains.";
      } else if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('hire')) {
        response = "You can contact Mohit at mohitmundke20@gmail.com or by phone at +91 9767969701. He is based in Pune, Maharashtra, India, and is open to opportunities and builder collaborations.";
      }

      setAiChat((prev) => [...prev, { sender: 'assistant', text: response }]);
    }, 400);
  };

  return (
    <div className="relative min-h-screen bg-[#05070a] text-[#f1f5f9] selection:bg-[#FF9900]/25 selection:text-white">
      
      {/* ─── STICKY MINIMAL NAVIGATION ─── */}
      <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
          <nav className="glass-panel rounded-2xl px-5 py-3.5 flex items-center justify-between border border-white/[0.08] shadow-2xl shadow-black/80">
            
            {/* Brand Monogram & Name */}
            <button 
              onClick={() => scrollTo('hero')} 
              className="flex items-center gap-3 group text-left transition-transform hover:scale-[1.02]"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/15 flex items-center justify-center font-display font-extrabold text-xs tracking-wider text-white group-hover:border-[#FF9900]/50 group-hover:text-[#FF9900] transition-colors">
                MM
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-sm tracking-wider text-white group-hover:text-white/90">
                  MOHIT MUNDKE
                </span>
                <span className="text-[10px] font-mono tracking-widest text-slate-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  BUILDER · AI &amp; CLOUD
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {[
                { id: 'journey', label: 'Journey' },
                { id: 'google', label: 'Google' },
                { id: 'aws', label: 'AWS' },
                { id: 'work', label: 'Work' },
                { id: 'skills', label: 'Skills' },
                { id: 'leadership', label: 'Leadership' },
                { id: 'contact', label: 'Contact' },
              ].map((item) => {
                const isActive = activeNav === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium font-sans tracking-wide transition-all ${
                      isActive 
                        ? 'text-white bg-white/10 border border-white/15 shadow-sm' 
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Quick Action Button & Mobile Hamburger */}
            <div className="flex items-center gap-3">
              <a
                href={getResumePdfSrc()}
                download="Mohit_Mundke_Resume.pdf"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all"
              >
                <span>RESUME</span>
                <span className="text-[10px]">↓</span>
              </a>

              <button
                onClick={() => scrollTo('contact')}
                className="btn-editorial-aws px-4 py-1.5 rounded-lg text-xs font-bold font-sans tracking-wide shadow-md shadow-[#FF9900]/20"
              >
                LET&apos;S TALK
              </button>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
                aria-label="Toggle Menu"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
                  )}
                </svg>
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mx-4 mt-2 p-5 rounded-2xl glass-panel border border-white/15 shadow-2xl flex flex-col gap-2.5">
            {[
              { id: 'journey', label: 'Journey' },
              { id: 'google', label: 'Google Gemini' },
              { id: 'aws', label: 'AWS Community' },
              { id: 'team', label: 'AWS Core Team' },
              { id: 'work', label: 'Selected Work' },
              { id: 'skills', label: 'What I Build With' },
              { id: 'leadership', label: 'Leadership & Experience' },
              { id: 'contact', label: 'Contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="w-full text-left px-3 py-2 rounded-lg text-sm font-sans text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <a
                href={getResumePdfSrc()}
                download
                className="text-xs font-mono text-[#FF9900] hover:underline"
              >
                Download Resume (PDF)
              </a>
              <span className="text-[11px] text-slate-400">DYPCOEI Pune</span>
            </div>
          </div>
        )}
      </header>

      {/* ─── 01. HERO SECTION (CINEMATIC OPENING) ─── */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-tech-grid overflow-hidden">
        
        {/* Subtle Ambient Vignettes (Controlled, Non-distracting) */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-b from-[#FF9900]/10 via-[#38BDF8]/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#818CF8]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="mx-auto max-w-6xl w-full relative z-10">
          
          {/* Metadata Micro-badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#FF9900] animate-pulse"></span>
            <span className="font-mono text-xs text-slate-300 tracking-wider">
              DYPCOEI PUNE · 2ND YEAR B.TECH AI &amp; DATA SCIENCE
            </span>
          </div>

          {/* Large Headline */}
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-editorial text-white uppercase leading-[0.98] max-w-5xl">
            I DON&apos;T JUST LEARN TECHNOLOGY.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
              I BUILD WITH IT.
            </span>
          </h1>

          {/* Below Lockup: Name & Identity */}
          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-wider uppercase">
                MOHIT MUNDKE
              </p>
              <p className="font-mono text-sm sm:text-base text-[#FF9900] mt-1 font-medium tracking-wide">
                AI &amp; Data Science Student · Builder · Designer · Community Leader
              </p>
              <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed font-sans font-normal">
                &ldquo;Exploring AI, cloud, design and technology while building products, communities and experiences.&rdquo;
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => scrollTo('journey')}
                className="btn-editorial-primary px-6 py-3.5 rounded-xl font-sans font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <span>EXPLORE MY JOURNEY</span>
                <span>↓</span>
              </button>

              <button
                onClick={() => scrollTo('work')}
                className="btn-editorial-outline px-6 py-3.5 rounded-xl font-sans font-semibold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer"
              >
                <span>VIEW MY WORK</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Minimal Key Indicators */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/[0.06]">
            <div>
              <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">ECOSYSTEM 01</p>
              <p className="font-sans font-semibold text-sm text-white mt-1">Google Gemini</p>
              <p className="text-xs text-slate-400">AI Student Ambassador &apos;26</p>
            </div>
            <div>
              <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">ECOSYSTEM 02</p>
              <p className="font-sans font-semibold text-sm text-[#FF9900] mt-1">AWS Student Builders</p>
              <p className="text-xs text-slate-400">SBG Leader · AY 2026-27</p>
            </div>
            <div>
              <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">FOCUS</p>
              <p className="font-sans font-semibold text-sm text-white mt-1">Generative AI &amp; Cloud</p>
              <p className="text-xs text-slate-400">Intelligent Products</p>
            </div>
            <div>
              <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">BASE</p>
              <p className="font-sans font-semibold text-sm text-white mt-1">Pune, India</p>
              <p className="text-xs text-slate-400">DYPCOEI Engineering</p>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 flex items-center gap-3">
            <div className="w-8 h-[2px] bg-[#FF9900]/60"></div>
            <span className="font-mono text-[11px] tracking-widest text-slate-400 uppercase">
              SCROLL TO EXPLORE STORY
            </span>
          </div>

        </div>
      </section>

      {/* ─── 02. INTRO / ABOUT (EDITORIAL STATEMENT) ─── */}
      <section id="about" className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] relative">
        <div className="mx-auto max-w-6xl">
          
          {/* Section Numbering */}
          <div className="flex items-center gap-3 mb-10">
            <span className="font-mono text-xs text-[#FF9900] tracking-widest">02 / IDENTITY</span>
            <div className="h-[1px] w-12 bg-white/20"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Massive Editorial Heading & Story */}
            <div className="lg:col-span-8">
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-editorial text-white uppercase leading-tight">
                A STUDENT.<br />
                A BUILDER.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                  A COMMUNITY LEADER.
                </span>
              </h2>

              <p className="mt-8 font-sans text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl font-light">
                I&apos;m a second-year Artificial Intelligence &amp; Data Science student who enjoys turning ideas into products, experimenting with emerging technology, designing digital experiences and building communities around technology.
              </p>

              {/* Dynamic Animated Keyword Matrix */}
              <div className="mt-12">
                <p className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-4">
                  CORE INTERESTS &amp; DISCIPLINES
                </p>
                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  {[
                    'AI',
                    'Generative AI',
                    'Cloud Computing',
                    'AWS',
                    'Web Development',
                    'UI/UX',
                    'Product Building',
                    'Community Leadership'
                  ].map((kw, i) => (
                    <span
                      key={kw}
                      className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium font-sans bg-white/[0.04] border border-white/10 text-slate-200 hover:border-[#FF9900]/50 hover:bg-[#FF9900]/10 hover:text-white transition-all cursor-default"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Editorial Photo Frame with Coordinates */}
            <div className="lg:col-span-4">
              <div className="glass-panel rounded-2xl p-3 border border-white/10 relative group">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#0c101a]">
                  <img
                    src={getImageSrc('/images/mohit-profile.jpg')}
                    alt="Mohit Mundke"
                    className="w-full h-full object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700"
                    onError={(e) => {
                      e.target.src = getImageSrc('/images/mohit-profile.png');
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-transparent opacity-80"></div>
                  
                  {/* Photo Overlay Tag */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#05070a]/80 backdrop-blur-md border border-white/10">
                    <p className="font-display font-bold text-xs text-white">MOHIT MUNDKE</p>
                    <p className="font-mono text-[10px] text-slate-400">18.5204° N, 73.8567° E · PUNE</p>
                  </div>
                </div>

                <div className="mt-3 px-1 py-1 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>DYPCOEI · AY 2026-27</span>
                  <span className="text-[#FF9900]">GSA &amp; AWS LEAD</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 03. MY JOURNEY (IMMERSIVE TIMELINE) ─── */}
      <section id="journey" className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] relative">
        <div className="mx-auto max-w-5xl">
          
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-[#FF9900] tracking-widest">03 / TIMELINE</span>
            <div className="h-[1px] w-12 bg-white/20"></div>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-editorial text-white uppercase">
            THE JOURNEY
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl font-light">
            A chronological progression from foundational curiosity to high-impact community leadership and intelligent systems.
          </p>

          {/* Timeline Rail & Nodes */}
          <div className="mt-16 relative pl-6 sm:pl-10 border-l border-white/15 space-y-12">
            
            {journeyTimeline.map((item, index) => (
              <div key={index} className="relative group">
                
                {/* Timeline Node Dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#05070a] border-2 border-[#FF9900] group-hover:scale-125 group-hover:bg-[#FF9900] transition-all"></div>

                <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-[#FF9900]/40 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-mono font-bold text-xs sm:text-sm text-[#FF9900] tracking-wider">
                      {item.year}
                    </span>
                    <span className="font-mono text-[10px] uppercase px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl text-white uppercase tracking-wide">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-400 text-xs sm:text-sm font-mono mt-1 text-slate-300/80">
                    {item.highlight}
                  </p>

                  <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed font-light">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ─── 04. GOOGLE GEMINI JOURNEY ─── */}
      <section id="google" className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] relative bg-gradient-to-b from-[#05070a] via-[#080d1a] to-[#05070a]">
        <div className="mx-auto max-w-6xl">
          
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-[#4285F4] tracking-widest">04 / GOOGLE ECOSYSTEM</span>
            <div className="h-[1px] w-12 bg-[#4285F4]/30"></div>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-editorial text-white uppercase">
                MY GOOGLE JOURNEY
              </h2>
              <p className="text-slate-300 text-base sm:text-lg mt-2 font-light">
                &ldquo;From exploring AI to helping others explore it.&rdquo;
              </p>
            </div>

            {/* Google 4-Color Accent Dots & Role Badge */}
            <div className="glass-panel px-4 py-2.5 rounded-xl border border-white/10 flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4285F4]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#EA4335]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#FBBC05]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#34A853]"></span>
              </div>
              <div className="border-l border-white/15 pl-3 font-mono text-xs text-white">
                GOOGLE GEMINI AI STUDENT AMBASSADOR · 2026
              </div>
            </div>
          </div>

          {/* Core Story Statement */}
          <div className="glass-card p-8 rounded-2xl border border-white/15 mb-14 bg-white/[0.02]">
            <p className="font-sans text-base sm:text-xl text-slate-200 leading-relaxed font-light">
              &ldquo;As a Google Gemini AI Student Ambassador, I explored Generative AI and helped bring AI awareness, experimentation and learning into my college community.&rdquo;
            </p>
          </div>

          {/* Interactive Visual Journey: Discover → Learn → Experiment → Share → Enable Others */}
          <div className="mb-16">
            <p className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-6">
              THE 5-PHASE ENABLING JOURNEY
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {googleJourneySteps.map((step, idx) => {
                const isActive = activeGoogleStep === idx;
                return (
                  <div
                    key={step.step}
                    onClick={() => setActiveGoogleStep(idx)}
                    className={`rounded-xl p-5 border cursor-pointer transition-all ${
                      isActive 
                        ? 'bg-[#4285F4]/10 border-[#4285F4] shadow-lg shadow-[#4285F4]/15' 
                        : 'bg-white/[0.03] border-white/10 hover:border-white/25'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs text-slate-400">{step.step}</span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-[#4285F4]"></span>}
                    </div>
                    <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 6 Key Focus Areas */}
          <div>
            <p className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-6">
              CORE WORK AREAS
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {googlePillars.map((p) => (
                <div key={p.name} className="glass-card p-5 rounded-xl border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]"></span>
                    <h4 className="font-display font-bold text-sm text-white">{p.name}</h4>
                  </div>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Badge Card */}
          <div className="mt-14 p-6 sm:p-8 rounded-2xl glass-panel border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center text-3xl">
                ✨
              </div>
              <div>
                <p className="font-mono text-[10px] text-[#4285F4] uppercase tracking-widest font-bold">OFFICIAL BADGE</p>
                <h4 className="font-display font-extrabold text-xl text-white uppercase tracking-wider">
                  GOOGLE GEMINI · AI STUDENT AMBASSADOR
                </h4>
                <p className="text-xs text-slate-400 font-mono mt-0.5">RECOGNITION YEAR: 2026 · GID: 5314</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setSelectedPhotoModal('/images/gsa-badge.png')}
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-mono text-slate-300 hover:text-white transition-all"
              >
                VIEW BADGE ASSET ↗
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ─── 05. AWS JOURNEY (FLAGSHIP SECTION) ─── */}
      <section id="aws" className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] relative bg-aws-grid">
        
        {/* Ambient AWS Orange Glow */}
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#FF9900]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="mx-auto max-w-6xl relative z-10">
          
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-[#FF9900] tracking-widest">05 / CLOUD INFRASTRUCTURE</span>
            <div className="h-[1px] w-12 bg-[#FF9900]/40"></div>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-editorial text-white uppercase">
                MY AWS JOURNEY
              </h2>
              <p className="text-slate-300 text-base sm:text-lg mt-2 font-light">
                &ldquo;From learning cloud technology to building a community around it.&rdquo;
              </p>
            </div>

            <div className="glass-card-aws px-4 py-2.5 rounded-xl border border-[#FF9900]/30 flex items-center gap-3">
              <span className="text-xl">☁️</span>
              <div className="font-mono text-xs text-white">
                <span className="text-[#FF9900] font-bold">AWS STUDENT BUILDER GROUP LEADER</span> · DYPCOEI AY 2026-27
              </div>
            </div>
          </div>

          {/* Narrative Story Block */}
          <div className="glass-card-aws p-8 sm:p-10 rounded-2xl border border-[#FF9900]/25 mb-14 bg-[#0a0e1a]/80">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF9900] block mb-2 font-semibold">
              THE RESPONSIBILITY &amp; VISION
            </span>
            <p className="font-sans text-lg sm:text-2xl text-white leading-relaxed font-light">
              &ldquo;My AWS journey evolved from exploring cloud technology into taking responsibility for building a student-led technical community.&rdquo;
            </p>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-display font-bold text-base text-white">
                  AWS STUDENT BUILDER GROUP DYPCOEI
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  &ldquo;A student-led technical community focused on AWS, cloud computing, AI and innovation.&rdquo;
                </p>
              </div>

              <div className="text-left sm:text-right">
                <p className="font-mono text-xs text-[#FF9900] font-semibold">STUDENT BUILDER GROUP LEADER</p>
                <p className="font-display font-bold text-sm text-white">MOHIT MUNDKE</p>
              </div>
            </div>
          </div>

          {/* 5-Step Progression: Explore AWS → Learn → Build → Lead → Create Community */}
          <div className="mb-16">
            <p className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-6">
              THE PROGRESSION PATH
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {awsProgressionSteps.map((step, idx) => {
                const isActive = activeAwsStep === idx;
                return (
                  <div
                    key={step.num}
                    onClick={() => setActiveAwsStep(idx)}
                    className={`rounded-xl p-5 border cursor-pointer transition-all ${
                      isActive 
                        ? 'bg-[#FF9900]/15 border-[#FF9900] shadow-lg shadow-[#FF9900]/20' 
                        : 'bg-white/[0.03] border-white/10 hover:border-[#FF9900]/30'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs text-slate-400">{step.num}</span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-[#FF9900]"></span>}
                    </div>
                    <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Faculty / Leadership Context (Exact Information) */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div>
                <p className="font-mono text-xs text-[#FF9900] uppercase tracking-widest font-semibold">
                  FACULTY &amp; INSTITUTIONAL LEADERSHIP
                </p>
                <h4 className="font-display font-bold text-lg text-white mt-1">
                  Dr. D.Y. Patil College of Engineering and Innovation, Pune
                </h4>
              </div>
              <span className="font-mono text-xs text-slate-400">AY 2026-27</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">FACULTY COORDINATOR</p>
                <p className="font-display font-bold text-base text-white mt-1">Mr. Suraj Bhoite</p>
                <p className="text-xs text-slate-400 mt-0.5">AWS Faculty Coordinator</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">ACADEMY EDUCATOR</p>
                <p className="font-display font-bold text-base text-white mt-1">Dr. Dipannita Mondal</p>
                <p className="text-xs text-slate-400 mt-0.5">AWS Academy Educator</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">DEPARTMENT LEADERSHIP</p>
                <p className="font-display font-bold text-base text-white mt-1">Dr. Dipannita Mondal</p>
                <p className="text-xs text-slate-400 mt-0.5">Head of Department (HOD)</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── 06. AWS CORE TEAM (LEADERSHIP SHOWCASE) ─── */}
      <section id="team" className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] relative">
        <div className="mx-auto max-w-6xl">
          
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-[#FF9900] tracking-widest">06 / COMMUNITY</span>
            <div className="h-[1px] w-12 bg-white/20"></div>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-editorial text-white uppercase">
            BUILDING THE BUILDERS
          </h2>
          <p className="font-mono text-sm sm:text-base text-[#FF9900] mt-2 font-medium tracking-wide">
            AY 2026-27 CORE TEAM · AWS STUDENT BUILDER GROUP DYPCOEI
          </p>
          <p className="text-slate-400 text-sm max-w-2xl mt-1 font-light">
            A student-led leadership showcase driving cloud education, workshops, and builder initiatives.
          </p>

          {/* 6 Profile Cards Grid */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awsCoreTeam.map((member) => (
              <div
                key={member.name}
                className="glass-card-aws rounded-2xl p-6 border border-white/10 group cursor-default"
              >
                <div className="flex items-center justify-between mb-4">
                  <span 
                    className="font-mono text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md"
                    style={{ backgroundColor: `${member.accent}15`, color: member.accent, border: `1px solid ${member.accent}30` }}
                  >
                    {member.role}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-[#FF9900] transition-colors"></span>
                </div>

                <h3 className="font-display font-bold text-xl text-white group-hover:text-[#FF9900] transition-colors">
                  {member.name}
                </h3>
                
                <p className="font-mono text-xs text-slate-300 font-medium mt-1">
                  {member.title}
                </p>

                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  {member.dept}
                </p>

                <p className="text-xs text-slate-400 mt-4 leading-relaxed font-light border-t border-white/5 pt-3">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── 07. SELECTED WORK (LARGE EDITORIAL CARDS) ─── */}
      <section id="work" className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] relative">
        <div className="mx-auto max-w-6xl">
          
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-[#FF9900] tracking-widest">07 / SELECTED WORK</span>
            <div className="h-[1px] w-12 bg-white/20"></div>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-editorial text-white uppercase">
            THINGS I&apos;VE BUILT
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl font-light">
            Selected products, software architectures, and intelligent digital applications.
          </p>

          {/* Large Editorial Project Cards */}
          <div className="mt-16 space-y-12">
            {selectedProjects.map((p, idx) => (
              <div
                key={p.id}
                className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 hover:border-white/20 transition-all relative overflow-hidden group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Project Details */}
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-xs text-[#FF9900] font-bold">0{idx + 1}</span>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 px-2 py-0.5 rounded bg-white/5 border border-white/10">
                        {p.category}
                      </span>
                    </div>

                    <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-wide uppercase">
                      {p.title}
                    </h3>

                    <p className="text-slate-300 font-mono text-xs sm:text-sm mt-2">
                      {p.subtitle}
                    </p>

                    <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed font-light">
                      {p.description}
                    </p>

                    {/* Technology Pills */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/10 text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action CTAs */}
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => setSelectedCaseStudy(p)}
                        className="btn-editorial-primary px-5 py-2.5 rounded-xl font-sans font-bold text-xs uppercase tracking-wider cursor-pointer"
                      >
                        EXPLORE CASE STUDY ↗
                      </button>

                      {p.githubUrl && (
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-editorial-outline px-5 py-2.5 rounded-xl font-sans font-semibold text-xs uppercase tracking-wider flex items-center gap-2"
                        >
                          <span>GITHUB REPO</span>
                          <span className="text-[10px]">↗</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Architectural Schematic / Preview */}
                  <div className="lg:col-span-5">
                    <div className="h-full rounded-2xl bg-[#080c14] border border-white/10 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-slate-400">
                          <span>SYSTEM BLUEPRINT</span>
                          <span className="text-emerald-400">STATUS: VERIFIED</span>
                        </div>
                        
                        <div className="mt-5 space-y-3">
                          <p className="font-mono text-xs text-slate-300 font-semibold uppercase">KEY FOCUS:</p>
                          <p className="text-xs text-slate-400 leading-relaxed font-light">
                            {p.tagline}
                          </p>
                          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 text-xs font-mono text-slate-300">
                            <div>• Problem: {p.caseStudy.problem.slice(0, 110)}...</div>
                            <div>• Solution: {p.caseStudy.solution.slice(0, 110)}...</div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-500">
                        <span>MOHIT MUNDKE</span>
                        <span className="text-[#FF9900]">PROJECT #{idx + 1}</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── 08. WHAT I DO ("WHAT I BUILD WITH") ─── */}
      <section id="skills" className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] relative">
        <div className="mx-auto max-w-6xl">
          
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-[#FF9900] tracking-widest">08 / CAPABILITIES</span>
            <div className="h-[1px] w-12 bg-white/20"></div>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-editorial text-white uppercase">
            WHAT I BUILD WITH
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl font-light">
            Core engineering disciplines, technologies, and paradigms shaping my projects.
          </p>

          {/* 6 Disciplines / Categories */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buildCategories.map((cat) => (
              <div
                key={cat.title}
                className="glass-card rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.accent }}></span>
                  <h3 className="font-display font-bold text-base text-white tracking-wide">
                    {cat.title}
                  </h3>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Exact 16 Technologies Display */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <p className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-6">
              TECHNOLOGIES &amp; TOOLS
            </p>

            <div className="flex flex-wrap gap-3">
              {technologiesList.map((tech) => (
                <div
                  key={tech.name}
                  className="px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#FF9900]/50 hover:bg-white/[0.06] transition-all flex items-center gap-2.5 group cursor-default"
                >
                  <span className="font-mono text-xs text-[#FF9900] group-hover:scale-110 transition-transform">✦</span>
                  <span className="font-display font-bold text-sm text-white">{tech.name}</span>
                  <span className="font-mono text-[10px] text-slate-500 uppercase">{tech.category}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ─── 09. LEADERSHIP & EXPERIENCE ─── */}
      <section id="leadership" className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] relative">
        <div className="mx-auto max-w-5xl">
          
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-[#FF9900] tracking-widest">09 / TRACK RECORD</span>
            <div className="h-[1px] w-12 bg-white/20"></div>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-editorial text-white uppercase">
            LEADERSHIP &amp; EXPERIENCE
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl font-light">
            Real responsibilities, community stewardship, and engineering practice.
          </p>

          <div className="mt-16 space-y-6">
            {experienceList.map((exp, idx) => (
              <div
                key={exp.org}
                className="glass-card rounded-2xl p-7 border border-white/10 hover:border-white/20 transition-all flex flex-col md:flex-row md:items-start justify-between gap-6"
              >
                <div className="md:w-1/3">
                  <span className="font-mono text-xs text-[#FF9900] font-bold block mb-1">
                    {exp.period}
                  </span>
                  <h3 className="font-display font-bold text-lg text-white uppercase tracking-wide">
                    {exp.org}
                  </h3>
                  <span 
                    className="inline-block mt-2 font-mono text-[10px] uppercase font-semibold px-2 py-0.5 rounded border"
                    style={{ backgroundColor: `${exp.accent}15`, color: exp.accent, borderColor: `${exp.accent}30` }}
                  >
                    {exp.badge}
                  </span>
                </div>

                <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
                  <p className="font-display font-bold text-base text-white">
                    {exp.role}
                  </p>
                  <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed font-light">
                    {exp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── 10. CURRENTLY BUILDING ─── */}
      <section id="building" className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] relative bg-gradient-to-b from-[#05070a] via-[#090e18] to-[#05070a]">
        <div className="mx-auto max-w-6xl">
          
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-[#FF9900] tracking-widest">10 / IN PROGRESS</span>
            <div className="h-[1px] w-12 bg-white/20"></div>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-editorial text-white uppercase">
            CURRENTLY BUILDING
          </h2>
          <p className="font-display font-bold text-xl sm:text-2xl text-[#FF9900] mt-2 uppercase tracking-wide">
            &ldquo;THE NEXT VERSION IS ALWAYS IN PROGRESS.&rdquo;
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentlyBuildingItems.map((item) => (
              <div
                key={item.title}
                className="glass-card rounded-2xl p-7 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{item.icon}</span>
                    <span 
                      className="font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded border"
                      style={{ backgroundColor: `${item.accent}15`, color: item.accent, borderColor: `${item.accent}30` }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-300 text-sm mt-2 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>STATUS</span>
                  <span className="text-white">{item.status}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── 11. ACHIEVEMENTS / MILESTONES (MINIMAL & VERIFIED) ─── */}
      <section id="milestones" className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] relative">
        <div className="mx-auto max-w-5xl">
          
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-[#FF9900] tracking-widest">11 / VERIFIED MILESTONES</span>
            <div className="h-[1px] w-12 bg-white/20"></div>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-editorial text-white uppercase">
            VERIFIED MILESTONES
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl font-light">
            Minimal, verified numbers and leadership milestones from my academic journey.
          </p>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
            {verifiedMilestones.map((m) => (
              <div
                key={m.label}
                className="glass-card rounded-2xl p-6 border border-white/10 text-center flex flex-col justify-between"
              >
                <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest">
                  VERIFIED ✓
                </span>

                <div className="my-4">
                  <p className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                    {m.value}
                  </p>
                  <p className="font-sans font-bold text-xs sm:text-sm text-slate-200 mt-1">
                    {m.label}
                  </p>
                </div>

                <p className="font-mono text-[10px] text-slate-500">
                  {m.sub}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── 12. CONTACT SECTION (HUGE EDITORIAL CTA) ─── */}
      <section id="contact" className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] relative bg-tech-grid">
        <div className="mx-auto max-w-5xl">
          
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-[#FF9900] tracking-widest">12 / REACH OUT</span>
            <div className="h-[1px] w-12 bg-white/20"></div>
          </div>

          {/* Huge Editorial Headline */}
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-editorial text-white uppercase leading-[0.95]">
            LET&apos;S BUILD<br />
            SOMETHING<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9900] via-[#FFA724] to-white">
              WORTH REMEMBERING.
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-xl mt-6 font-light max-w-2xl">
            Have an idea, project or collaboration in mind?
          </p>

          {/* Direct Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-3.5">
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn-editorial-aws px-6 py-3.5 rounded-xl font-sans font-bold text-xs uppercase tracking-wider flex items-center gap-2"
            >
              <span>EMAIL DIRECTLY</span>
              <span>✉</span>
            </a>

            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial-outline px-6 py-3.5 rounded-xl font-sans font-semibold text-xs uppercase tracking-wider flex items-center gap-2"
            >
              <span>LINKEDIN</span>
              <span>↗</span>
            </a>

            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial-outline px-6 py-3.5 rounded-xl font-sans font-semibold text-xs uppercase tracking-wider flex items-center gap-2"
            >
              <span>GITHUB</span>
              <span>↗</span>
            </a>

            <a
              href={personalInfo.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial-outline px-6 py-3.5 rounded-xl font-sans font-semibold text-xs uppercase tracking-wider flex items-center gap-2"
            >
              <span>WHATSAPP</span>
              <span>↗</span>
            </a>
          </div>

          {/* Embedded Contact Form */}
          <div className="mt-16 glass-card rounded-3xl p-8 sm:p-12 border border-white/10">
            <h3 className="font-display font-bold text-xl text-white uppercase tracking-wider mb-2">
              SEND A DIRECT MESSAGE
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm font-light mb-8">
              Delivered straight to Mohit&apos;s personal inbox ({personalInfo.email}).
            </p>

            <form onSubmit={handleContactSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#FF9900]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#FF9900]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-2">Your Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your idea, collaboration, or initiative..."
                  className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#FF9900]"
                ></textarea>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="submit"
                  className="btn-editorial-primary px-8 py-3.5 rounded-xl font-sans font-bold text-xs uppercase tracking-wider cursor-pointer"
                >
                  TRANSMIT MESSAGE →
                </button>

                {contactStatus && (
                  <span className="font-mono text-xs text-[#FF9900]">{contactStatus}</span>
                )}
              </div>
            </form>
          </div>

          {/* Quick Footer Metadata */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
            <div>
              <span>MOHIT MUNDKE · PUNE, MAHARASHTRA, INDIA</span>
            </div>
            <div>
              <span>DESIGNED WITH INTENTION · &copy; 2026</span>
            </div>
          </div>

        </div>
      </section>

      {/* ─── CASE STUDY MODAL ─── */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-fadeIn">
          <div className="glass-panel w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-10 border border-white/20 shadow-2xl relative">
            <button
              onClick={() => setSelectedCaseStudy(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-sm"
            >
              ✕
            </button>

            <span className="font-mono text-xs text-[#FF9900] uppercase tracking-widest font-bold">
              {selectedCaseStudy.category}
            </span>

            <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white uppercase mt-2">
              {selectedCaseStudy.title}
            </h3>

            <p className="text-slate-300 font-mono text-xs sm:text-sm mt-1">
              {selectedCaseStudy.subtitle}
            </p>

            <div className="my-6 h-[1px] bg-white/10"></div>

            <div className="space-y-6 text-sm text-slate-300 font-light">
              <div>
                <h4 className="font-mono text-xs text-[#FF9900] uppercase font-bold tracking-wider mb-1">THE PROBLEM</h4>
                <p className="leading-relaxed">{selectedCaseStudy.caseStudy.problem}</p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-[#FF9900] uppercase font-bold tracking-wider mb-1">THE SOLUTION</h4>
                <p className="leading-relaxed">{selectedCaseStudy.caseStudy.solution}</p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-[#FF9900] uppercase font-bold tracking-wider mb-2">SYSTEM ARCHITECTURE</h4>
                <ul className="space-y-2 font-mono text-xs text-slate-400">
                  {selectedCaseStudy.caseStudy.architecture.map((a, i) => (
                    <li key={i}>• {a}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-xs text-[#FF9900] uppercase font-bold tracking-wider mb-2">TECHNOLOGIES USED</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCaseStudy.technologies.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-white">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              {selectedCaseStudy.githubUrl && (
                <a
                  href={selectedCaseStudy.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-editorial-primary px-5 py-2.5 rounded-xl font-sans font-bold text-xs uppercase"
                >
                  OPEN ON GITHUB ↗
                </a>
              )}
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="text-xs font-mono text-slate-400 hover:text-white"
              >
                CLOSE [ESC]
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── PHOTO / BADGE LIGHTBOX MODAL ─── */}
      {selectedPhotoModal && (
        <div 
          onClick={() => setSelectedPhotoModal(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
        >
          <div className="relative max-w-xl max-h-[85vh] p-2 glass-panel rounded-2xl border border-white/20">
            <button
              onClick={() => setSelectedPhotoModal(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center text-xs"
            >
              ✕
            </button>
            <img
              src={getImageSrc(selectedPhotoModal)}
              alt="Credential Asset"
              className="max-h-[80vh] w-auto rounded-xl object-contain mx-auto"
            />
          </div>
        </div>
      )}

      {/* ─── FLOATING ASK MOHIT AI ASSISTANT ─── */}
      <div className="fixed bottom-6 right-6 z-40">
        {!aiAssistantOpen ? (
          <button
            onClick={() => setAiAssistantOpen(true)}
            className="group flex items-center gap-2 px-4 py-3 rounded-full glass-panel border border-[#FF9900]/40 shadow-2xl hover:border-[#FF9900] transition-all bg-[#080d1a]/90 cursor-pointer"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-mono text-xs text-white font-medium">ASK MOHIT AI</span>
            <span className="text-sm">✨</span>
          </button>
        ) : (
          <div className="glass-panel w-80 sm:w-96 rounded-2xl border border-white/20 shadow-2xl p-4 flex flex-col h-[460px] animate-fadeIn bg-[#080d1a]/95">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="font-display font-bold text-xs text-white uppercase tracking-wider">
                  MOHIT&apos;S AI ASSISTANT
                </span>
              </div>
              <button
                onClick={() => setAiAssistantOpen(false)}
                className="text-slate-400 hover:text-white text-xs p-1"
              >
                ✕
              </button>
            </div>

            {/* Quick Queries */}
            <div className="py-2 border-b border-white/5 flex flex-wrap gap-1.5 text-[10px] font-mono">
              <button 
                onClick={() => handleAiSend('Tell me about your AWS Journey and SBG Leader role')} 
                className="px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-slate-300"
              >
                AWS SBG?
              </button>
              <button 
                onClick={() => handleAiSend('What was your Google Gemini Ambassador role?')} 
                className="px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-slate-300"
              >
                Google GSA?
              </button>
              <button 
                onClick={() => handleAiSend('What are your main projects?')} 
                className="px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-slate-300"
              >
                Projects?
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto py-3 space-y-3 text-xs font-sans">
              {aiChat.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-xl leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#FF9900] text-black font-semibold rounded-br-none'
                        : 'bg-white/[0.06] border border-white/10 text-slate-200 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Form */}
            <div className="pt-2 border-t border-white/10 flex gap-2">
              <input
                type="text"
                value={aiInput}
                onChange={(e) => setAiInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAiSend()}
                placeholder="Ask about AWS, Google, projects..."
                className="flex-1 bg-white/[0.04] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF9900]"
              />
              <button
                onClick={() => handleAiSend()}
                className="btn-editorial-aws px-3 py-2 rounded-lg text-xs font-bold"
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}

/* ─── CLIENT MOUNT ─── */
const rootElement = document.getElementById('root');
if (rootElement) {
  const createRoot = (window.ReactDOM && window.ReactDOM.createRoot) || (typeof ReactDOM !== 'undefined' ? ReactDOM.createRoot : null);
  if (createRoot) {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = App;
}
