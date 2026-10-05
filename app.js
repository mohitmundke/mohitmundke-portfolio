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
  return (typeof window !== 'undefined' && window.PORTFOLIO_RESUME_PDF) || './resume.pdf';
}

/* ─── AUTHENTIC PERSONAL DATA ─── */
const personalInfo = {
  name: 'MOHIT MUNDKE',
  title: 'AI & Data Science Student · Builder · Designer · Community Leader',
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

/* ─── JOURNEY DATA ─── */
const journeyEpochs = [
  {
    year: '2024',
    title: 'THE BEGINNING',
    tag: 'FOUNDATION',
    summary: 'Started exploring programming, technology and problem solving.',
    bullets: ['Algorithms & Discrete Logic', 'C / C++ Systems Programming', 'Foundational Mathematics'],
    accent: '#ffffff'
  },
  {
    year: '2025',
    title: 'FROM LEARNING TO BUILDING',
    tag: 'DEVELOPMENT',
    summary: 'Started working on projects involving programming, UI/UX, web development and AI.',
    bullets: ['React & Component Architecture', 'UI/UX Interactive Prototypes', 'Full-Stack Software Workflows'],
    accent: '#38bdf8'
  },
  {
    year: '2026',
    title: 'GOOGLE GEMINI',
    tag: 'AI ERA',
    summary: 'Became a Google Gemini AI Student Ambassador and started exploring Generative AI, AI tools and real-world applications.',
    bullets: ['Campus AI Evangelism', 'Prompt Architecture & LLMs', 'Enabling Peer Builders'],
    accent: '#4285F4'
  },
  {
    year: '2026',
    title: 'AWS ECOSYSTEM',
    tag: 'CLOUD',
    summary: 'Started exploring AWS, cloud computing and the wider developer ecosystem.',
    bullets: ['Cloud Foundations & Storage', 'Serverless & Compute Primitives', 'Scalable Architectures'],
    accent: '#FF9900'
  },
  {
    year: '2026',
    title: 'BUILDING THE BUILDERS',
    tag: 'LEADERSHIP',
    summary: 'Became the Student Builder Group Leader of AWS Student Builder Group DYPCOEI for AY 2026-27.',
    bullets: ['Heading 6-Person Core Team', 'Faculty Collaboration', 'Campus Builder Culture'],
    accent: '#FFA724'
  },
  {
    year: 'NOW',
    title: 'STILL BUILDING',
    tag: 'FUTURE',
    summary: 'Continuing to learn, build, lead and experiment with AI, cloud, software and design.',
    bullets: ['Active Intelligent Systems', 'Product Design Systems', 'Next Horizon'],
    accent: '#a855f7'
  }
];

/* ─── GOOGLE GEMINI STEPS & PILLARS ─── */
const googleSteps = [
  { num: '01', key: 'DISCOVER', desc: 'Unpacking multimodal intelligence, transformer reasoning, and prompt interfaces.' },
  { num: '02', key: 'EXPERIMENT', desc: 'Prototyping practical AI agents, context pipelines, and generative workflows.' },
  { num: '03', key: 'LEARN', desc: 'Mastering the Google Gemini API, system tokens, and responsible AI safety boundaries.' },
  { num: '04', key: 'SHARE', desc: 'Hosting high-energy campus demos, student workshops, and technical deep dives.' },
  { num: '05', key: 'ENABLE', desc: 'Equipping student engineers with AI literacy to dramatically multiply their output.' }
];

/* ─── AWS PROGRESSION STAGES ─── */
const awsStages = [
  { num: '01', title: 'EXPLORE', desc: 'Grasping global cloud infrastructure, IAM security, and architectural fundamentals.' },
  { num: '02', title: 'LEARN', desc: 'Deep-diving into compute, serverless paradigms, scalable storage, and managed databases.' },
  { num: '03', title: 'BUILD', desc: 'Architecting working prototypes, container pipelines, and cloud automation.' },
  { num: '04', title: 'LEAD', desc: 'Assuming responsibility as Student Builder Group Leader for DYPCOEI.' },
  { num: '05', title: 'CREATE COMMUNITY', desc: 'Empowering a campus ecosystem of engineers through hands-on builder bootcamps.' }
];

/* ─── AWS CORE TEAM (EXACT OFFICIAL MEMBERS) ─── */
const awsCoreTeam = [
  {
    role: 'LEADER',
    name: 'Mohit Mundke',
    title: 'Student Builder Group Leader',
    dept: '2nd Year · AI & Data Science',
    accent: '#FF9900',
    desc: 'Leading community vision, technical workshop agendas, and developer enablement culture across DYPCOEI.'
  },
  {
    role: 'DIRECTOR OF EVENTS',
    name: 'Dnyanada Dhavale',
    title: 'Director of Events',
    dept: '3rd Year · Computer Engineering',
    accent: '#FFB84D',
    desc: 'Orchestrating technical bootcamps, speaker sessions, and cloud hackathons.'
  },
  {
    role: 'DIRECTOR OF MARKETING',
    name: 'Akanksha Mirge',
    title: 'Director of Marketing',
    dept: '3rd Year · Computer Engineering',
    accent: '#FF9900',
    desc: 'Directing community outreach, brand presence, and student recruitment.'
  },
  {
    role: 'TECHNICAL LEAD',
    name: 'Mayuresh Thorve',
    title: 'Technical Lead',
    dept: '3rd Year · Computer Engineering',
    accent: '#38BDF8',
    desc: 'Leading hands-on cloud architecture labs, code reviews, and technical tracks.'
  },
  {
    role: 'MULTIMEDIA HEAD',
    name: 'Ishwari Bhope',
    title: 'Multimedia Head',
    dept: '2nd Year · AI-ML',
    accent: '#A855F7',
    desc: 'Crafting visual brand design, event media, and digital broadcast assets.'
  },
  {
    role: 'DOCUMENTATION HEAD',
    name: 'Vaishnavee Sutar',
    title: 'Documentation Head',
    dept: '2nd Year · AI-ML',
    accent: '#818CF8',
    desc: 'Maintaining event registries, technical whitepapers, and knowledge repositories.'
  }
];

/* ─── PROJECTS DATA (CINEMATIC FULL-SCREEN) ─── */
const projectsData = [
  {
    id: 'focusnext',
    number: '01',
    name: 'FOCUSNEXT WELLNESS',
    subtitle: 'A wellness and productivity-focused digital experience.',
    tagline: 'Engineering digital health for deep work',
    technologies: ['AI', 'UI/UX', 'Web', 'React', 'TypeScript', 'Tailwind CSS'],
    category: 'DIGITAL WELLNESS / AI',
    githubUrl: 'https://github.com/mohitmundke/FocusNext-Wellness.git',
    description: 'A comprehensive wellness companion engineered to combat digital eye strain, poor ergonomic posture, and fatigue during prolonged coding and screen sessions. Implements smart break intervals, posture prompts, and habit analytics.',
    caseStudy: {
      problem: 'Remote workers, developers, and students endure 8–12 hours of screen exposure daily without physical cues to rest, resulting in severe computer vision syndrome and burnout.',
      solution: 'An intuitive digital health companion featuring an automated 20-20-20 rule timer, real-time posture reminders, session tracking, and localized wellness metrics.',
      architecture: [
        'Modular component hierarchy in React 18 & TypeScript',
        'Fluid state management with zero external latency',
        'Accessible glassmorphism UI with responsive design tokens'
      ]
    }
  },
  {
    id: 'soilosync',
    number: '02',
    name: 'SOILOSYNC',
    subtitle: 'A technology-focused project exploring intelligent solutions.',
    tagline: 'Precision telemetry & AI for sustainable agriculture',
    technologies: ['AI', 'Data', 'Web', 'IoT', 'Google Gemini AI', 'TypeScript'],
    category: 'SMART AGRICULTURE / IOT',
    githubUrl: 'https://github.com/mohitmundke/soilOsync',
    description: 'A smart soil monitoring solution designed to provide real-time soil telemetry and support data-driven decision making in agriculture. Combines telemetry sensors (moisture, temperature, electrical conductivity) with an intelligent AI Agricultural Assistant powered by Google Gemini.',
    caseStudy: {
      problem: 'Traditional farming relies heavily on manual soil estimates, causing imprecise irrigation, nutrient degradation, and reduced agricultural yield.',
      solution: 'Combines multi-parameter soil sensing with predictive trend dashboards and a conversational Google Gemini AI crop advisor to recommend data-grounded farming interventions.',
      architecture: [
        'Real-time telemetry ingestion pipelines',
        'Interactive sensor trends & moisture analytics',
        'Integrated Google Gemini conversational reasoning module'
      ]
    }
  },
  {
    id: 'inventory',
    number: '03',
    name: 'HYBRID INVENTORY MANAGER',
    subtitle: 'A C/C++ based inventory management concept.',
    tagline: 'High-performance algorithmic systems software',
    technologies: ['C', 'C++', 'Systems', 'Algorithms'],
    category: 'SYSTEMS & ALGORITHMS',
    githubUrl: 'https://github.com/mohitmundke',
    description: 'A systems-oriented inventory management application engineered in C and C++. Demonstrates low-level memory control, efficient algorithmic indexing, linked structures, and binary file persistence for instant item lookups and inventory auditing.',
    caseStudy: {
      problem: 'Standard enterprise inventory setups are frequently bloated with heavy runtime dependencies when lightweight embedded or low-resource system performance is required.',
      solution: 'Architected a deterministic C/C++ memory model utilizing binary search trees, hashed indexes, and structured file streams to maintain speed and data integrity.',
      architecture: [
        'Direct pointer management with zero memory leaks',
        'Fast logarithmic index lookups on structured records',
        'Persistent binary serialization protocol'
      ]
    }
  },
  {
    id: 'portfolio',
    number: '04',
    name: 'PERSONAL PORTFOLIO',
    subtitle: 'My evolving digital identity and experimentation space.',
    tagline: 'Story-driven dark tech digital experience',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
    category: 'DIGITAL IDENTITY / WEB',
    githubUrl: 'https://github.com/mohitmundke',
    description: 'An editorial personal portfolio engineered from first principles. Features responsive storytelling, ambient dark-tech aesthetics, client-side intelligence, and verified credential presentation.',
    caseStudy: {
      problem: 'Static PDF resumes fail to convey personality, technical narrative, leadership drive, and living proof of hands-on community leadership.',
      solution: 'A cinematic, story-first interactive web presence detailing technical progression, Google & AWS community impact, and verified academic milestones.',
      architecture: [
        'React component tree with smooth micro-interactions',
        'Custom design system with AWS Orange and deep charcoal',
        'Zero-dependency client resilience'
      ]
    }
  }
];

/* ─── TYPOGRAPHY WALL SKILLS ─── */
const skillWall = [
  { word: 'AI', accent: '#38bdf8', category: 'Intelligence' },
  { word: 'PYTHON', accent: '#38bdf8', category: 'Core Language' },
  { word: 'JAVASCRIPT', accent: '#f59e0b', category: 'Web' },
  { word: 'REACT', accent: '#38bdf8', category: 'Frontend' },
  { word: 'AWS', accent: '#FF9900', category: 'Cloud' },
  { word: 'GENAI', accent: '#a855f7', category: 'Intelligence' },
  { word: 'FIGMA', accent: '#ec4899', category: 'Design' },
  { word: 'C++', accent: '#60a5fa', category: 'Systems' },
  { word: 'NODE', accent: '#22c55e', category: 'Backend' },
  { word: 'FLASK', accent: '#ffffff', category: 'Backend' },
  { word: 'PANDAS', accent: '#38bdf8', category: 'Data Science' },
  { word: 'NUMPY', accent: '#60a5fa', category: 'Data Science' },
  { word: 'GITHUB', accent: '#ffffff', category: 'DevOps' },
  { word: 'C', accent: '#60a5fa', category: 'Systems' },
  { word: 'HTML5', accent: '#f97316', category: 'Web' },
  { word: 'CSS3', accent: '#38bdf8', category: 'Styling' }
];

/* ─── INTERACTIVE HERO BACKGROUND CANVAS ─── */
function HeroCanvas({ mousePos }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes
    const particles = Array.from({ length: 48 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 1.5 + 0.8,
      baseAlpha: Math.random() * 0.4 + 0.2
    }));

    let frame = 0;
    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Subtle 3D-horizon grid tilted with mouse offset
      const offsetX = (mousePos.x / width - 0.5) * 24;
      const offsetY = (mousePos.y / height - 0.5) * 24;

      ctx.save();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
      ctx.lineWidth = 1;

      const gridSize = 70;
      for (let x = -gridSize; x < width + gridSize; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x - offsetX, 0);
        ctx.lineTo(x + offsetX, height);
        ctx.stroke();
      }

      for (let y = -gridSize; y < height + gridSize; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y - offsetY);
        ctx.lineTo(width, y + offsetY);
        ctx.stroke();
      }
      ctx.restore();

      // Render drifting particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Subtle reaction to mouse
        const dx = mousePos.x - p.x;
        const dy = mousePos.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let alpha = p.baseAlpha;
        if (dist < 180) {
          alpha += (1 - dist / 180) * 0.5;
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos]);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />;
}

/* ─── GOOGLE ORBITAL CANVAS ─── */
function GoogleOrbitalCanvas({ mousePos }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let frameId;

    let width = (canvas.width = canvas.parentElement ? canvas.parentElement.clientWidth : 600);
    let height = (canvas.height = 420);

    const handleResize = () => {
      if (canvas.parentElement) {
        width = canvas.width = canvas.parentElement.clientWidth;
      }
    };
    window.addEventListener('resize', handleResize);

    const nodes = [
      { color: '#4285F4', label: 'BLUE', r: 130, speed: 0.015, angle: 0, size: 8 },
      { color: '#EA4335', label: 'RED', r: 100, speed: -0.018, angle: Math.PI / 2, size: 7 },
      { color: '#FBBC05', label: 'YELLOW', r: 160, speed: 0.012, angle: Math.PI, size: 7.5 },
      { color: '#34A853', label: 'GREEN', r: 70, speed: -0.022, angle: (Math.PI * 3) / 2, size: 6.5 }
    ];

    let t = 0;
    const render = () => {
      t += 0.01;
      ctx.clearRect(0, 0, width, height);
      const cx = width / 2;
      const cy = height / 2;

      // Mouse tilt offset
      const tiltX = (mousePos.x / (window.innerWidth || 1) - 0.5) * 30;
      const tiltY = (mousePos.y / (window.innerHeight || 1) - 0.5) * 30;

      // Orbital ellipse guide tracks
      [70, 100, 130, 160].forEach((radius) => {
        ctx.save();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 5]);
        ctx.beginPath();
        ctx.ellipse(cx + tiltX, cy + tiltY, radius, radius * 0.45, Math.PI / 6, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      });

      // Central GEMINI Core
      ctx.save();
      const pulse = Math.sin(t * 3) * 4;
      const grad = ctx.createRadialGradient(cx + tiltX, cy + tiltY, 0, cx + tiltX, cy + tiltY, 40 + pulse);
      grad.addColorStop(0, 'rgba(66, 133, 244, 0.35)');
      grad.addColorStop(1, 'rgba(66, 133, 244, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx + tiltX, cy + tiltY, 40 + pulse, 0, Math.PI * 2);
      ctx.fill();

      // Core text
      ctx.fillStyle = '#ffffff';
      ctx.font = '700 13px "Space Grotesk", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('GEMINI', cx + tiltX, cy + tiltY);
      ctx.restore();

      // Draw Orbiting Planetary Nodes
      nodes.forEach((node) => {
        node.angle += node.speed;
        const x = cx + tiltX + Math.cos(node.angle) * node.r;
        const y = cy + tiltY + Math.sin(node.angle) * (node.r * 0.45);

        // Connecting filament to center
        ctx.save();
        ctx.strokeStyle = node.color + '25';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(cx + tiltX, cy + tiltY);
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.restore();

        // Node Glow
        ctx.save();
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 14;
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(x, y, node.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      frameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
    };
  }, [mousePos]);

  return <canvas ref={canvasRef} className="w-full h-[420px] pointer-events-none" />;
}

/* ─── AWS INTERACTIVE NODE NETWORK CANVAS ─── */
function AwsNetworkCanvas({ mousePos }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let frameId;

    let width = (canvas.width = canvas.parentElement ? canvas.parentElement.clientWidth : 700);
    let height = (canvas.height = 420);

    const handleResize = () => {
      if (canvas.parentElement) {
        width = canvas.width = canvas.parentElement.clientWidth;
      }
    };
    window.addEventListener('resize', handleResize);

    const nodeLabels = ['LEARN', 'BUILD', 'LEAD', 'COMMUNITY', 'EVENTS', 'AI', 'CLOUD'];
    const nodes = nodeLabels.map((lbl, idx) => {
      const angle = (idx / nodeLabels.length) * Math.PI * 2;
      const radius = 135;
      return {
        label: lbl,
        targetX: Math.cos(angle) * radius,
        targetY: Math.sin(angle) * radius,
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        r: 6
      };
    });

    let t = 0;
    const render = () => {
      t += 0.015;
      ctx.clearRect(0, 0, width, height);
      const cx = width / 2;
      const cy = height / 2;

      // Mouse reaction
      const mx = (mousePos.x / (window.innerWidth || 1) - 0.5) * 50;
      const my = (mousePos.y / (window.innerHeight || 1) - 0.5) * 50;

      // Central Hub
      ctx.save();
      ctx.fillStyle = '#FF9900';
      ctx.shadowColor = '#FF9900';
      ctx.shadowBlur = 18;
      ctx.beginPath();
      ctx.arc(cx + mx, cy + my, 12, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      ctx.fillStyle = '#ffffff';
      ctx.font = '800 11px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText('AWS SBG', cx + mx, cy + my + 24);

      // Connect nodes to center and to each other
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        const n1x = cx + mx + n1.targetX + Math.sin(t + i) * 6;
        const n1y = cy + my + n1.targetY + Math.cos(t + i) * 6;

        // Line to center
        ctx.strokeStyle = 'rgba(255, 153, 0, 0.2)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(cx + mx, cy + my);
        ctx.lineTo(n1x, n1y);
        ctx.stroke();

        // Line to next node
        const nextNode = nodes[(i + 1) % nodes.length];
        const n2x = cx + mx + nextNode.targetX + Math.sin(t + i + 1) * 6;
        const n2y = cy + my + nextNode.targetY + Math.cos(t + i + 1) * 6;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.beginPath();
        ctx.moveTo(n1x, n1y);
        ctx.lineTo(n2x, n2y);
        ctx.stroke();

        // Node dot
        ctx.save();
        ctx.fillStyle = '#FF9900';
        ctx.shadowColor = '#FF9900';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(n1x, n1y, n1.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Label
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.font = '700 10px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.fillText(n1.label, n1x, n1y - 12);
      }

      frameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
    };
  }, [mousePos]);

  return <canvas ref={canvasRef} className="w-full h-[420px] pointer-events-none" />;
}

/* ─── MAIN AWARD-STYLE PORTFOLIO APPLICATION ─── */
function App() {
  // Loading Sequence State (~1.5s)
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(1);

  // Mouse Coordinates for Parallax & Cursor
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorRingPos, setCursorRingPos] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState({ hover: false, text: '', variant: 'default' });

  // Navigation & Interactive Sections
  const [activeNav, setActiveNav] = useState('hero');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [contactDrawerOpen, setContactDrawerOpen] = useState(false);
  const [contactFormData, setContactFormData] = useState({ name: '', email: '', message: '' });
  const [contactStatus, setContactStatus] = useState('');
  const [activeAwsStage, setActiveAwsStage] = useState(0);
  const [activeGoogleStep, setActiveGoogleStep] = useState(0);
  const [activeSkillWord, setActiveSkillWord] = useState(null);
  const [hoveredTeamMember, setHoveredTeamMember] = useState(null);

  // Horizontal Journey Scroll Ref
  const journeyTrackRef = useRef(null);

  // 1. Cinematic Loading Sequence (~1.5 seconds)
  useEffect(() => {
    let current = 1;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 6) + 3;
      if (current >= 100) {
        current = 100;
        setLoadProgress(100);
        clearInterval(interval);
        setTimeout(() => setLoading(false), 350);
      } else {
        setLoadProgress(current);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  // 2. Initialize Lenis Smooth Scroll if available
  useEffect(() => {
    if (typeof window.Lenis !== 'undefined') {
      const lenis = new window.Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        smoothTouch: false
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      return () => lenis.destroy();
    }
  }, []);

  // 3. Global Mouse & Custom Cursor Lerp
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Spring Lerp for Outer Cursor Ring
    let animationId;
    let rx = -100;
    let ry = -100;
    const lerpRing = () => {
      rx += (cursorPos.x - rx) * 0.18;
      ry += (cursorPos.y - ry) * 0.18;
      setCursorRingPos({ x: rx, y: ry });
      animationId = requestAnimationFrame(lerpRing);
    };
    animationId = requestAnimationFrame(lerpRing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [cursorPos.x, cursorPos.y]);

  // 4. Cursor Hover Detection Helpers
  const handleCursorEnter = (text, variant = 'default') => {
    setCursorState({ hover: true, text, variant });
  };
  const handleCursorLeave = () => {
    setCursorState({ hover: false, text: '', variant: 'default' });
  };

  // 5. Scroll Handler for Active Navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'identity', 'about', 'journey', 'google', 'aws', 'team', 'leadership', 'projects', 'skills', 'building', 'achievements', 'contact'];
      const scrollPos = window.scrollY + 300;
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const top = el.offsetTop;
          const h = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + h) {
            setActiveNav(s);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactFormData.name || !contactFormData.email || !contactFormData.message) {
      setContactStatus('Please fill in all fields.');
      return;
    }
    setContactStatus('Sending...');

    fetch('https://formsubmit.co/ajax/mohitmundke20@gmail.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        name: contactFormData.name,
        email: contactFormData.email,
        message: contactFormData.message,
        _subject: `Portfolio Message from ${contactFormData.name}`
      })
    })
      .then((r) => r.json())
      .then(() => {
        setContactStatus('Message transmitted successfully. Mohit will reply soon.');
        setContactFormData({ name: '', email: '', message: '' });
        setTimeout(() => setContactDrawerOpen(false), 2000);
      })
      .catch(() => {
        window.location.href = `mailto:mohitmundke20@gmail.com?subject=Contact from ${encodeURIComponent(contactFormData.name)}&body=${encodeURIComponent(contactFormData.message)}`;
        setContactStatus('Opened your mail client.');
      });
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#f1f5f9] overflow-x-hidden selection:bg-[#FF9900]/30 selection:text-white">
      
      {/* ─── 00. CINEMATIC LOADING SEQUENCE (~1.5s) ─── */}
      {loading && (
        <div className="fixed inset-0 z-[999999] bg-[#050505] flex flex-col justify-between p-8 sm:p-14 select-none transition-opacity duration-500">
          <div className="flex items-center justify-between font-mono text-xs text-slate-500 tracking-widest">
            <span>DYPCOEI PUNE · AY 2026</span>
            <span>SYSTEM INIT</span>
          </div>

          <div className="max-w-4xl">
            <p className="font-mono text-xs text-[#FF9900] tracking-widest uppercase mb-3">
              PORTFOLIO EXPERIENCE
            </p>
            <h1 className="font-syne font-extrabold text-4xl sm:text-7xl md:text-8xl text-white tracking-editorial uppercase">
              MOHIT MUNDKE
            </h1>
            <p className="font-mono text-xs sm:text-sm text-slate-400 mt-2">
              BUILDER · AI &amp; DATA SCIENCE · AWS SBG LEADER
            </p>
          </div>

          <div className="flex items-end justify-between border-t border-white/10 pt-6">
            <span className="font-mono text-xs text-slate-500 tracking-wider">
              LOADING ASSETS &amp; INTERACTIONS
            </span>
            <span className="font-mono font-bold text-3xl sm:text-5xl text-white tracking-widest">
              {String(loadProgress).padStart(3, '0')}%
            </span>
          </div>
        </div>
      )}

      {/* ─── GLOBAL CUSTOM CURSOR (DESKTOP) ─── */}
      <div
        className="cursor-dot hidden lg:block"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`
        }}
      />
      <div
        className={`cursor-ring hidden lg:flex ${
          cursorState.hover ? (cursorState.variant === 'aws' ? 'hover-aws' : 'hover-active') : ''
        }`}
        style={{
          left: `${cursorRingPos.x}px`,
          top: `${cursorRingPos.y}px`
        }}
      >
        {cursorState.hover && cursorState.text && (
          <span className="cursor-ring-text">{cursorState.text}</span>
        )}
      </div>

      {/* ─── MINIMAL FLOATING NAVIGATION BAR ─── */}
      <header className="fixed top-6 inset-x-0 z-50 px-4 sm:px-8 pointer-events-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo Monogram */}
          <button
            onClick={() => scrollTo('hero')}
            onMouseEnter={() => handleCursorEnter('HOME')}
            onMouseLeave={handleCursorLeave}
            className="pointer-events-auto px-4 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/10 backdrop-blur-xl border border-white/15 flex items-center gap-2.5 transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF9900] animate-pulse"></span>
            <span className="font-syne font-bold text-xs tracking-wider text-white">MOHIT MUNDKE</span>
          </button>

          {/* Center Links (Desktop) */}
          <nav className="pointer-events-auto hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/15">
            {[
              { id: 'identity', label: 'Identity' },
              { id: 'about', label: 'About' },
              { id: 'journey', label: 'Journey' },
              { id: 'google', label: 'Google' },
              { id: 'aws', label: 'AWS' },
              { id: 'projects', label: 'Work' },
              { id: 'skills', label: 'Skills' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                onMouseEnter={() => handleCursorEnter('GO')}
                onMouseLeave={handleCursorLeave}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all ${
                  activeNav === item.id ? 'bg-white text-black font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Quick CTA */}
          <div className="pointer-events-auto flex items-center gap-2">
            <a
              href={getResumePdfSrc()}
              download="Mohit_Mundke_Resume.pdf"
              onMouseEnter={() => handleCursorEnter('PDF')}
              onMouseLeave={handleCursorLeave}
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/10 border border-white/15 text-xs font-mono text-slate-300 transition-all"
            >
              RESUME ↓
            </a>

            <button
              onClick={() => setContactDrawerOpen(true)}
              onMouseEnter={() => handleCursorEnter('OPEN', 'aws')}
              onMouseLeave={handleCursorLeave}
              className="px-5 py-2 rounded-full bg-[#FF9900] hover:bg-[#FFA724] text-black font-syne font-extrabold text-xs tracking-wider transition-transform hover:scale-105"
            >
              CONNECT
            </button>
          </div>

        </div>
      </header>

      {/* ─── HERO (THE MOST IMPRESSIVE FULL-VIEWPORT PART) ─── */}
      <section
        id="hero"
        className="relative h-screen min-h-[700px] flex flex-col justify-between p-6 sm:p-12 md:p-16 overflow-hidden bg-horizon-grid select-none"
      >
        <HeroCanvas mousePos={mousePos} />

        {/* Top Empty Space for Header Alignment */}
        <div className="pt-16"></div>

        {/* Center / Dominant Typographic Lockup */}
        <div className="relative z-10 max-w-7xl mx-auto w-full my-auto">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF9900]"></span>
            <span className="font-mono text-[11px] text-slate-300 tracking-widest uppercase">
              AI &amp; DATA SCIENCE · BUILDER / DESIGNER / COMMUNITY LEADER
            </span>
          </div>

          <h1
            className="font-syne font-extrabold text-huge-display text-white uppercase tracking-editorial leading-[0.84]"
            style={{
              transform: `translate3d(${(mousePos.x / (window.innerWidth || 1) - 0.5) * 12}px, ${(mousePos.y / (window.innerHeight || 1) - 0.5) * 12}px, 0)`
            }}
          >
            MOHIT<br />
            MUNDKE
          </h1>

          <div className="mt-8 pt-8 border-t border-white/15 max-w-3xl">
            <p className="font-display font-medium text-lg sm:text-2xl text-slate-300 tracking-tight leading-snug">
              &ldquo;I BUILD AT THE INTERSECTION<br />
              <span className="text-white font-bold">OF AI, CLOUD &amp; DESIGN.&rdquo;</span>
            </p>
          </div>

        </div>

        {/* Bottom Hero Bar: Status & Vertical Scroll Indicator */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex items-end justify-between border-t border-white/10 pt-4 text-xs font-mono text-slate-400">
          <div className="hidden sm:flex items-center gap-3">
            <span>DYPCOEI PUNE</span>
            <span>·</span>
            <span className="text-[#FF9900]">AWS SBG LEADER</span>
            <span>·</span>
            <span>GSA 2026</span>
          </div>

          <div
            onClick={() => scrollTo('identity')}
            onMouseEnter={() => handleCursorEnter('EXPLORE')}
            onMouseLeave={handleCursorLeave}
            className="flex items-center gap-3 cursor-pointer group hover:text-white transition-colors ml-auto sm:ml-0"
          >
            <span className="tracking-widest uppercase text-[11px]">SCROLL TO EXPLORE</span>
            <span className="w-6 h-6 rounded-full border border-white/20 group-hover:border-white flex items-center justify-center transition-colors">
              ↓
            </span>
          </div>
        </div>
      </section>

      {/* ─── SECTION 01: IDENTITY (EDITORIAL FULL-SCREEN) ─── */}
      <section
        id="identity"
        className="min-h-screen py-32 sm:py-44 px-6 sm:px-14 border-t border-white/10 flex flex-col justify-center relative bg-[#060608]"
      >
        <div className="max-w-7xl mx-auto w-full">
          
          <div className="font-mono text-xs text-[#FF9900] tracking-widest uppercase mb-10">
            01 / IDENTITY
          </div>

          <h2 className="font-syne font-extrabold text-scene-title text-white uppercase leading-[0.9] max-w-5xl">
            NOT JUST<br />
            ANOTHER<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-300 to-slate-500">
              DEVELOPER.
            </span>
          </h2>

          <div className="mt-20 space-y-6">
            {[
              { text: 'AI & DATA SCIENCE STUDENT', num: '01' },
              { text: 'BUILDER', num: '02' },
              { text: 'DESIGNER', num: '03' },
              { text: 'COMMUNITY LEADER', num: '04' }
            ].map((role) => (
              <div
                key={role.text}
                onMouseEnter={() => handleCursorEnter('DISCOVER')}
                onMouseLeave={handleCursorLeave}
                className="py-5 border-b border-white/15 flex items-baseline justify-between group cursor-default transition-all hover:pl-4"
              >
                <span className="font-syne font-extrabold text-2xl sm:text-5xl md:text-6xl text-slate-300 group-hover:text-white tracking-tight uppercase">
                  {role.text}
                </span>
                <span className="font-mono text-xs sm:text-base text-slate-500 group-hover:text-[#FF9900]">
                  [{role.num}]
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── SECTION 02: ABOUT (IMMERSIVE TEXT COMPOSITION) ─── */}
      <section
        id="about"
        className="min-h-screen py-32 sm:py-44 px-6 sm:px-14 border-t border-white/10 flex flex-col justify-center relative bg-[#050505]"
      >
        <div className="max-w-7xl mx-auto w-full">
          
          <div className="flex items-center justify-between mb-12">
            <span className="font-mono text-xs text-slate-400 tracking-widest uppercase">
              ABOUT ME / 01
            </span>
            <span className="font-mono text-xs text-[#FF9900] tracking-widest uppercase">
              2ND YEAR · DYPCOEI
            </span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-6xl md:text-7xl text-white tracking-editorial uppercase leading-tight max-w-5xl">
            &ldquo;I&apos;M A SECOND YEAR<br />
            AI &amp; DATA SCIENCE<br />
            STUDENT WHO LIKES<br />
            <span className="text-[#FF9900]">TO BUILD.&rdquo;</span>
          </h2>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-8">
              <p className="font-sans text-lg sm:text-2xl text-slate-300 font-light leading-relaxed max-w-3xl">
                Turning ambitious ideas into products, experimenting with emerging models, engineering intuitive digital experiences, and creating student-led communities around technology.
              </p>

              {/* Dynamic Interactive Keywords */}
              <div className="mt-12">
                <p className="font-mono text-xs uppercase tracking-widest text-slate-500 mb-4">
                  CORE TECHNICAL DISCIPLINES [HOVER TO EXPAND]
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { word: 'AI', color: '#38bdf8', desc: 'Predictive modeling & machine intelligence' },
                    { word: 'GENAI', color: '#a855f7', desc: 'Google Gemini & generative prompt engineering' },
                    { word: 'AWS', color: '#FF9900', desc: 'Cloud infrastructure & student builder leadership' },
                    { word: 'WEB', color: '#ffffff', desc: 'High-performance React & responsive architecture' },
                    { word: 'DESIGN', color: '#ec4899', desc: 'Editorial typography & UI/UX motion systems' },
                    { word: 'COMMUNITY', color: '#34d399', desc: 'Leading peer developers & tech initiatives' }
                  ].map((kw) => (
                    <div
                      key={kw.word}
                      onMouseEnter={() => {
                        setActiveSkillWord(kw);
                        handleCursorEnter(kw.word, kw.word === 'AWS' ? 'aws' : 'default');
                      }}
                      onMouseLeave={() => {
                        setActiveSkillWord(null);
                        handleCursorLeave();
                      }}
                      className="px-5 py-2.5 rounded-full border border-white/15 bg-white/[0.03] hover:border-white hover:bg-white/10 transition-all cursor-pointer"
                    >
                      <span className="font-syne font-extrabold text-sm text-white tracking-wider">
                        {kw.word}
                      </span>
                    </div>
                  ))}
                </div>

                {activeSkillWord && (
                  <div className="mt-4 p-4 rounded-xl bg-white/[0.04] border border-white/10 max-w-xl animate-fadeIn">
                    <span className="font-mono text-xs uppercase font-bold" style={{ color: activeSkillWord.color }}>
                      {activeSkillWord.word}
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-slate-300 mt-1">
                      {activeSkillWord.desc}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Asymmetrical Frame with Photo */}
            <div className="lg:col-span-4">
              <div
                onMouseEnter={() => handleCursorEnter('EXPLORE')}
                onMouseLeave={handleCursorLeave}
                className="relative rounded-2xl overflow-hidden border border-white/15 p-2 bg-[#0a0a0e] group cursor-pointer"
              >
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-black">
                  <img
                    src={getImageSrc('/images/mohit-profile.jpg')}
                    alt="Mohit Mundke"
                    className="w-full h-full object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = getImageSrc('/images/mohit-profile.png');
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                </div>

                <div className="p-3 font-mono text-[11px] text-slate-400 flex items-center justify-between">
                  <span>PUNE, IN</span>
                  <span className="text-[#FF9900]">18.5204° N, 73.8567° E</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─── SECTION 03: THE JOURNEY (HORIZONTAL PINNED TIMELINE) ─── */}
      <section
        id="journey"
        className="py-32 sm:py-44 px-6 sm:px-14 border-t border-white/10 relative bg-[#070709]"
      >
        <div className="max-w-7xl mx-auto w-full">
          
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="font-mono text-xs text-[#FF9900] tracking-widest uppercase">
                03 / TIMELINE
              </span>
              <h2 className="font-syne font-extrabold text-scene-title text-white uppercase mt-2">
                THE JOURNEY
              </h2>
            </div>
            <p className="hidden md:block font-mono text-xs text-slate-400 max-w-xs text-right">
              [HORIZONTAL PAN · 2024 TO NOW]
            </p>
          </div>

          {/* Horizontal Track Container */}
          <div
            ref={journeyTrackRef}
            className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-thin scrollbar-thumb-white/20 select-none"
          >
            {journeyEpochs.map((epoch, idx) => (
              <div
                key={epoch.year + idx}
                onMouseEnter={() => handleCursorEnter(epoch.year, epoch.year === '2026' ? 'aws' : 'default')}
                onMouseLeave={handleCursorLeave}
                className="w-[310px] sm:w-[380px] flex-shrink-0 p-8 rounded-3xl bg-white/[0.03] border border-white/15 hover:border-white/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs text-slate-400">EPOCH 0{idx + 1}</span>
                    <span 
                      className="font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded border"
                      style={{ color: epoch.accent, borderColor: epoch.accent + '40', backgroundColor: epoch.accent + '10' }}
                    >
                      {epoch.tag}
                    </span>
                  </div>

                  <h3 className="font-syne font-extrabold text-5xl sm:text-6xl text-white tracking-tight">
                    {epoch.year}
                  </h3>

                  <h4 className="font-display font-bold text-lg text-slate-200 uppercase mt-4">
                    {epoch.title}
                  </h4>

                  <p className="font-sans text-sm text-slate-400 font-light mt-3 leading-relaxed">
                    {epoch.summary}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 space-y-1.5 font-mono text-xs text-slate-400">
                  {epoch.bullets.map((b, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-[#FF9900]">✦</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── GOOGLE GEMINI EXPERIENCE (ATMOSPHERIC SHIFT) ─── */}
      <section
        id="google"
        className="py-32 sm:py-44 px-6 sm:px-14 border-t border-white/10 relative bg-[#060810]"
      >
        <div className="max-w-7xl mx-auto w-full">
          
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-[#4285F4] tracking-widest uppercase">
              GOOGLE GEMINI ECOSYSTEM
            </span>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#4285F4]"></span>
              <span className="w-2 h-2 rounded-full bg-[#EA4335]"></span>
              <span className="w-2 h-2 rounded-full bg-[#FBBC05]"></span>
              <span className="w-2 h-2 rounded-full bg-[#34A853]"></span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Editorial Statement */}
            <div className="lg:col-span-7">
              <h2 className="font-syne font-extrabold text-scene-title text-white uppercase leading-none">
                FROM<br />
                EXPLORING AI<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC05]">
                  TO SHARING IT.
                </span>
              </h2>

              <div className="mt-6 inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/15">
                <span className="text-xl">✨</span>
                <span className="font-mono text-xs text-white font-bold uppercase">
                  GOOGLE GEMINI AI STUDENT AMBASSADOR · 2026
                </span>
              </div>

              <p className="mt-8 font-sans text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl">
                As a Google Gemini AI Student Ambassador, I explored Generative AI and helped bring AI awareness, experimentation and learning into my college community through hands-on labs and prompt architectures.
              </p>

              {/* 5-Step Typographic Journey */}
              <div className="mt-12">
                <p className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-4">
                  THE 5-PHASE ENABLING JOURNEY
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                  {googleSteps.map((s, idx) => (
                    <div
                      key={s.key}
                      onClick={() => setActiveGoogleStep(idx)}
                      onMouseEnter={() => handleCursorEnter(s.key)}
                      onMouseLeave={handleCursorLeave}
                      className={`p-3 rounded-xl border cursor-pointer transition-all ${
                        activeGoogleStep === idx 
                          ? 'bg-[#4285F4]/15 border-[#4285F4] text-white' 
                          : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-white'
                      }`}
                    >
                      <span className="font-mono text-[10px] text-slate-500 block">{s.num}</span>
                      <span className="font-syne font-bold text-xs uppercase block mt-1">{s.key}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <p className="font-mono text-xs text-[#4285F4] font-bold">
                    PHASE: {googleSteps[activeGoogleStep].key}
                  </p>
                  <p className="font-sans text-xs sm:text-sm text-slate-300 mt-1">
                    {googleSteps[activeGoogleStep].desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Google Planetary Orbital Visual */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full relative rounded-3xl bg-black/60 border border-white/15 p-4 overflow-hidden">
                <GoogleOrbitalCanvas mousePos={mousePos} />
                <div className="p-3 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-slate-400">
                  <span>ORBITAL SIMULATION</span>
                  <span className="text-[#4285F4]">4 NODES ACTIVE</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─── GOOGLE → AWS DRAMATIC TRANSITION ─── */}
      <section className="py-24 px-6 border-t border-white/10 bg-[#050505] relative flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="w-full max-w-4xl mx-auto">
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF9900] to-transparent mb-8"></div>
          <span className="font-mono text-xs uppercase tracking-widest text-slate-500 block mb-3">
            SHIFTING HORIZONS
          </span>
          <h3 className="font-syne font-extrabold text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-editorial leading-tight">
            &ldquo;THEN I STARTED<br />
            BUILDING THE<br />
            <span className="text-[#FF9900]">BUILDERS.&rdquo;</span>
          </h3>
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF9900] to-transparent mt-8"></div>
        </div>
      </section>

      {/* ─── AWS EXPERIENCE (CLOUD / NETWORK SCENE) ─── */}
      <section
        id="aws"
        className="py-32 sm:py-44 px-6 sm:px-14 border-t border-white/10 relative bg-aws-dark"
      >
        <div className="max-w-7xl mx-auto w-full">
          
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-[#FF9900] tracking-widest uppercase">
              AWS CLOUD &amp; STUDENT BUILDER GROUP
            </span>
            <span className="w-2 h-2 rounded-full bg-[#FF9900] animate-pulse"></span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Monumental Headline */}
            <div className="lg:col-span-7">
              <h2 className="font-syne font-extrabold text-scene-title text-white uppercase leading-none">
                AWS<br />
                <span className="text-[#FF9900]">STUDENT BUILDER</span><br />
                GROUP
              </h2>

              <p className="font-mono text-sm sm:text-base text-slate-300 mt-4 uppercase tracking-wider">
                DYPCOEI · AY 2026-27
              </p>

              <div className="mt-8 p-6 rounded-2xl bg-[#FF9900]/10 border border-[#FF9900]/30 max-w-2xl">
                <p className="font-mono text-xs text-[#FF9900] uppercase font-bold tracking-widest mb-1">
                  LEADERSHIP RESPONSIBILITY
                </p>
                <p className="font-syne font-bold text-xl text-white uppercase">
                  MOHIT MUNDKE · STUDENT BUILDER GROUP LEADER
                </p>
                <p className="font-sans text-sm text-slate-300 font-light mt-2 leading-relaxed">
                  &ldquo;A student-led technical community focused on AWS, cloud computing, AI and innovation.&rdquo;
                </p>
              </div>

              {/* Faculty / Leadership Context */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <p className="font-mono text-[10px] text-slate-500 uppercase">COORDINATOR</p>
                  <p className="font-sans font-bold text-xs text-white mt-1">Mr. Suraj Bhoite</p>
                  <p className="font-mono text-[10px] text-slate-400">Faculty Coordinator</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <p className="font-mono text-[10px] text-slate-500 uppercase">EDUCATOR</p>
                  <p className="font-sans font-bold text-xs text-white mt-1">Dr. Dipannita Mondal</p>
                  <p className="font-mono text-[10px] text-slate-400">AWS Academy Educator</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <p className="font-mono text-[10px] text-slate-500 uppercase">HEAD OF DEPT</p>
                  <p className="font-sans font-bold text-xs text-white mt-1">Dr. Dipannita Mondal</p>
                  <p className="font-mono text-[10px] text-slate-400">HOD</p>
                </div>
              </div>
            </div>

            {/* Right Column: AWS Interactive Node Network Canvas */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full relative rounded-3xl bg-[#090b10] border border-[#FF9900]/30 p-4 overflow-hidden">
                <AwsNetworkCanvas mousePos={mousePos} />
                <div className="p-3 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-slate-400">
                  <span>CLOUD TOPOLOGY</span>
                  <span className="text-[#FF9900]">7 NODES INTERCONNECTED</span>
                </div>
              </div>
            </div>

          </div>

          {/* AWS Interactive 5-Stage Takeover Progression */}
          <div className="mt-20 pt-16 border-t border-white/10">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF9900] block mb-6">
              THE 5-STAGE CLOUD JOURNEY
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {awsStages.map((stg, idx) => (
                <div
                  key={stg.num}
                  onClick={() => setActiveAwsStage(idx)}
                  onMouseEnter={() => handleCursorEnter(stg.title, 'aws')}
                  onMouseLeave={handleCursorLeave}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                    activeAwsStage === idx
                      ? 'bg-[#FF9900]/20 border-[#FF9900] text-white shadow-xl shadow-[#FF9900]/10'
                      : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  <span className="font-mono text-xs text-slate-500 block">{stg.num}</span>
                  <h4 className="font-syne font-bold text-base uppercase mt-2 text-white">{stg.title}</h4>
                  <p className="font-sans text-xs text-slate-400 font-light mt-2 leading-relaxed">
                    {stg.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ─── AWS CORE TEAM (HORIZONTAL SHOWCASE) ─── */}
      <section
        id="team"
        className="py-32 sm:py-44 px-6 sm:px-14 border-t border-white/10 relative bg-[#060608]"
      >
        <div className="max-w-7xl mx-auto w-full">
          
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="font-mono text-xs text-[#FF9900] tracking-widest uppercase">
                COMMUNITY LEADERSHIP
              </span>
              <h2 className="font-syne font-extrabold text-scene-title text-white uppercase mt-2">
                BUILDING THE BUILDERS
              </h2>
              <p className="font-mono text-xs sm:text-sm text-slate-400 uppercase mt-1">
                AY 2026-27 CORE TEAM · AWS STUDENT BUILDER GROUP DYPCOEI
              </p>
            </div>
            <p className="hidden md:block font-mono text-xs text-slate-500">
              [HOVER TO HIGHLIGHT]
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awsCoreTeam.map((mem) => {
              const isHovered = hoveredTeamMember === mem.name;
              return (
                <div
                  key={mem.name}
                  onMouseEnter={() => {
                    setHoveredTeamMember(mem.name);
                    handleCursorEnter(mem.role, 'aws');
                  }}
                  onMouseLeave={() => {
                    setHoveredTeamMember(null);
                    handleCursorLeave();
                  }}
                  className={`p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                    isHovered
                      ? 'bg-[#FF9900]/15 border-[#FF9900] shadow-2xl scale-[1.02]'
                      : 'bg-white/[0.03] border-white/15'
                  }`}
                >
                  <div>
                    <span 
                      className="font-mono text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded"
                      style={{ backgroundColor: mem.accent + '20', color: mem.accent }}
                    >
                      {mem.role}
                    </span>
                    <h3 className="font-syne font-bold text-2xl text-white uppercase mt-4">
                      {mem.name}
                    </h3>
                    <p className="font-mono text-xs text-slate-300 mt-1">
                      {mem.title}
                    </p>
                    <p className="font-mono text-[11px] text-slate-500">
                      {mem.dept}
                    </p>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-slate-400 font-light mt-6 leading-relaxed border-t border-white/10 pt-4">
                    {mem.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─── LEADERSHIP SECTION ─── */}
      <section
        id="leadership"
        className="py-32 sm:py-44 px-6 sm:px-14 border-t border-white/10 relative bg-[#050505]"
      >
        <div className="max-w-7xl mx-auto w-full text-center">
          
          <span className="font-mono text-xs text-[#FF9900] tracking-widest uppercase block mb-6">
            LEADERSHIP PHILOSOPHY
          </span>

          <h2 className="font-syne font-extrabold text-scene-title text-white uppercase max-w-4xl mx-auto leading-tight">
            &ldquo;I DON&apos;T JUST BUILD PRODUCTS.<br />
            <span className="text-[#FF9900]">I BUILD COMMUNITIES.&rdquo;</span>
          </h2>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
            <div className="p-7 rounded-2xl bg-white/[0.03] border border-white/10">
              <span className="font-mono text-xs text-[#FF9900] font-bold block mb-1">AWS COMMUNITY</span>
              <h3 className="font-syne font-bold text-lg text-white">AWS Student Builder Group</h3>
              <p className="font-mono text-xs text-slate-400 mt-1">Student Builder Group Leader · AY 2026-27</p>
            </div>
            <div className="p-7 rounded-2xl bg-white/[0.03] border border-white/10">
              <span className="font-mono text-xs text-[#4285F4] font-bold block mb-1">GOOGLE ECOSYSTEM</span>
              <h3 className="font-syne font-bold text-lg text-white">Google Gemini</h3>
              <p className="font-mono text-xs text-slate-400 mt-1">AI Student Ambassador · 2026</p>
            </div>
            <div className="p-7 rounded-2xl bg-white/[0.03] border border-white/10">
              <span className="font-mono text-xs text-slate-400 font-bold block mb-1">COLLEGE INITIATIVES</span>
              <h3 className="font-syne font-bold text-lg text-white">DYPCOEI Technical Initiatives</h3>
              <p className="font-mono text-xs text-slate-400 mt-1">Student Leadership &amp; Hackathons</p>
            </div>
          </div>

        </div>
      </section>

      {/* ─── PROJECTS (~90VH CINEMATIC SHOWCASES) ─── */}
      <section
        id="projects"
        className="py-32 sm:py-44 px-6 sm:px-14 border-t border-white/10 relative bg-[#070709]"
      >
        <div className="max-w-7xl mx-auto w-full">
          
          <div className="flex items-end justify-between mb-20">
            <div>
              <span className="font-mono text-xs text-[#FF9900] tracking-widest uppercase">
                SELECTED WORK
              </span>
              <h2 className="font-syne font-extrabold text-scene-title text-white uppercase mt-2">
                THINGS I&apos;VE BUILT
              </h2>
            </div>
            <p className="hidden md:block font-mono text-xs text-slate-400">
              [04 CURATED CASE STUDIES]
            </p>
          </div>

          <div className="space-y-24">
            {projectsData.map((proj) => (
              <div
                key={proj.id}
                onMouseEnter={() => handleCursorEnter('VIEW', 'aws')}
                onMouseLeave={handleCursorLeave}
                className="min-h-[70vh] rounded-3xl p-8 sm:p-14 border border-white/15 bg-white/[0.02] hover:border-white/30 transition-all flex flex-col justify-between"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  
                  {/* Left Column: Number & Titles */}
                  <div className="lg:col-span-7">
                    <span className="font-mono font-bold text-3xl sm:text-5xl text-[#FF9900]">
                      {proj.number}
                    </span>

                    <h3 className="font-syne font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight mt-4">
                      {proj.name}
                    </h3>

                    <p className="font-mono text-xs sm:text-sm text-slate-300 mt-2">
                      {proj.subtitle}
                    </p>

                    <p className="font-sans text-sm sm:text-base text-slate-400 font-light mt-6 leading-relaxed max-w-xl">
                      {proj.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {proj.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-3.5 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/10 text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Blueprint Preview & Action */}
                  <div className="lg:col-span-5 h-full flex flex-col justify-between">
                    <div className="p-6 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs space-y-3">
                      <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-white/10">
                        <span>ARCHITECTURE</span>
                        <span className="text-[#FF9900]">VERIFIED</span>
                      </div>
                      <p className="text-slate-300 font-semibold">{proj.tagline}</p>
                      <div className="text-slate-400 space-y-1">
                        <div>• {proj.caseStudy.problem.slice(0, 90)}...</div>
                        <div>• {proj.caseStudy.solution.slice(0, 90)}...</div>
                      </div>
                    </div>

                    <div className="mt-8 flex items-center gap-4">
                      <button
                        onClick={() => setSelectedCaseStudy(proj)}
                        className="px-6 py-3 rounded-full bg-white text-black font-syne font-bold text-xs uppercase tracking-wider hover:bg-slate-200 transition-colors"
                      >
                        VIEW CASE STUDY ↗
                      </button>

                      {proj.githubUrl && (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 rounded-full bg-white/[0.05] hover:bg-white/10 border border-white/15 text-white font-mono text-xs uppercase transition-colors"
                        >
                          GITHUB ↗
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── SKILLS (INTERACTIVE TYPOGRAPHY WALL) ─── */}
      <section
        id="skills"
        className="py-32 sm:py-44 px-6 sm:px-14 border-t border-white/10 relative bg-[#050505] select-none"
      >
        <div className="max-w-7xl mx-auto w-full text-center">
          
          <span className="font-mono text-xs text-[#FF9900] tracking-widest uppercase block mb-6">
            WHAT I BUILD WITH
          </span>

          <h2 className="font-syne font-extrabold text-scene-title text-white uppercase mb-16">
            TECHNICAL REPERTOIRE
          </h2>

          {/* Interactive Typography Wall */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-12 gap-y-6 sm:gap-y-10 max-w-5xl mx-auto">
            {skillWall.map((item) => (
              <span
                key={item.word}
                onMouseEnter={() => handleCursorEnter(item.category, item.word === 'AWS' ? 'aws' : 'default')}
                onMouseLeave={handleCursorLeave}
                className="font-syne font-extrabold text-3xl sm:text-6xl md:text-7xl text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer uppercase tracking-tight"
                style={{
                  textShadow: '0 0 20px rgba(255,255,255,0.05)'
                }}
              >
                {item.word}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* ─── CURRENTLY BUILDING ─── */}
      <section
        id="building"
        className="py-32 sm:py-44 px-6 sm:px-14 border-t border-white/10 relative bg-[#060608]"
      >
        <div className="max-w-7xl mx-auto w-full text-center">
          
          <span className="font-mono text-xs text-[#FF9900] tracking-widest uppercase block mb-6">
            CURRENTLY BUILDING
          </span>

          <h2 className="font-syne font-extrabold text-scene-title text-white uppercase max-w-4xl mx-auto leading-tight">
            &ldquo;THE NEXT VERSION<br />
            IS ALWAYS<br />
            <span className="text-[#FF9900]">IN PROGRESS.&rdquo;</span>
          </h2>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
            {[
              { title: 'AWS SBG DYPCOEI', desc: 'Building a stronger student technology community and cloud workshops.', tag: 'COMMUNITY' },
              { title: 'AI & LLM AGENTS', desc: 'Exploring practical applications of Generative AI, prompt architecture, and tools.', tag: 'INTELLIGENCE' },
              { title: 'DIGITAL EXPERIENCES', desc: 'Designing and developing high-fidelity user interfaces and software.', tag: 'PRODUCTS' }
            ].map((obj) => (
              <div
                key={obj.title}
                className="p-8 rounded-3xl bg-white/[0.03] border border-white/15 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[10px] uppercase font-bold text-[#FF9900] px-2 py-0.5 rounded bg-[#FF9900]/10 border border-[#FF9900]/20">
                    {obj.tag}
                  </span>
                  <h3 className="font-syne font-bold text-xl text-white uppercase mt-4">
                    {obj.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-400 font-light mt-2 leading-relaxed">
                    {obj.desc}
                  </p>
                </div>
                <span className="font-mono text-[11px] text-slate-500 mt-6 pt-4 border-t border-white/10">
                  STATUS: ACTIVE
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── ACHIEVEMENTS (MONUMENTAL NUMBERS) ─── */}
      <section
        id="achievements"
        className="py-32 sm:py-44 px-6 sm:px-14 border-t border-white/10 relative bg-[#050505]"
      >
        <div className="max-w-7xl mx-auto w-full">
          
          <span className="font-mono text-xs text-[#FF9900] tracking-widest uppercase block mb-12">
            VERIFIED MILESTONES
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { val: '8.02', label: 'FIRST SEM SGPA', sub: 'Verified Academic Track' },
              { val: '7.32', label: 'SECOND SEM SGPA', sub: 'Verified Academic Track' },
              { val: '2026', label: 'GOOGLE GEMINI', sub: 'AI Student Ambassador' },
              { val: '2026', label: 'AWS SBG LEADER', sub: 'DYPCOEI AY 2026-27' }
            ].map((m) => (
              <div key={m.label} className="border-t border-white/20 pt-6">
                <span className="font-syne font-extrabold text-5xl sm:text-7xl text-white tracking-tight block">
                  {m.val}
                </span>
                <span className="font-mono font-bold text-xs sm:text-sm text-slate-200 uppercase mt-2 block">
                  {m.label}
                </span>
                <span className="font-mono text-[11px] text-slate-500 block mt-1">
                  {m.sub}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── CONTACT (EXTREMELY MINIMAL, MONUMENTAL) ─── */}
      <section
        id="contact"
        className="min-h-screen py-32 sm:py-44 px-6 sm:px-14 border-t border-white/10 flex flex-col justify-between relative bg-[#050505]"
      >
        <div className="max-w-7xl mx-auto w-full my-auto">
          
          <span className="font-mono text-xs text-[#FF9900] tracking-widest uppercase block mb-8">
            LET&apos;S TALK
          </span>

          <h2 className="font-syne font-extrabold text-huge-display text-white uppercase leading-[0.88] max-w-5xl">
            LET&apos;S<br />
            BUILD<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#FF9900]">
              SOMETHING.
            </span>
          </h2>

          <div className="mt-14 pt-10 border-t border-white/15 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <p className="font-syne font-bold text-2xl text-white uppercase">MOHIT MUNDKE</p>
              <p className="font-mono text-xs sm:text-sm text-slate-400 mt-1">
                AI &amp; DATA SCIENCE · BUILDER · DESIGNER · LEADER
              </p>
              <p className="font-mono text-xs text-slate-500 mt-0.5">
                PUNE, MAHARASHTRA, INDIA · {personalInfo.email}
              </p>
            </div>

            <button
              onClick={() => setContactDrawerOpen(true)}
              onMouseEnter={() => handleCursorEnter('CONNECT', 'aws')}
              onMouseLeave={handleCursorLeave}
              className="px-8 py-4 rounded-full bg-[#FF9900] hover:bg-[#FFA724] text-black font-syne font-extrabold text-sm uppercase tracking-wider transition-transform hover:scale-105 shadow-2xl shadow-[#FF9900]/30"
            >
              START A CONVERSATION →
            </button>
          </div>

        </div>

        {/* Minimal Footer Lockup */}
        <div className="max-w-7xl mx-auto w-full pt-16 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
          <div>
            <span>MOHIT MUNDKE · PUNE, INDIA · 2026</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LINKEDIN ↗
            </a>
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GITHUB ↗
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-white transition-colors"
            >
              EMAIL ↗
            </a>
          </div>

          <div className="text-slate-400">
            &ldquo;BUILT WITH CURIOSITY.&rdquo;
          </div>
        </div>
      </section>

      {/* ─── CASE STUDY MODAL ─── */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-2xl">
          <div className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#090b10] border border-white/20 p-8 sm:p-12 relative shadow-2xl">
            <button
              onClick={() => setSelectedCaseStudy(null)}
              className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center font-mono text-sm"
            >
              ✕
            </button>

            <span className="font-mono text-xs text-[#FF9900] uppercase tracking-widest font-bold">
              {selectedCaseStudy.category}
            </span>

            <h3 className="font-syne font-extrabold text-3xl sm:text-5xl text-white uppercase mt-2">
              {selectedCaseStudy.name}
            </h3>

            <p className="font-mono text-xs sm:text-sm text-slate-300 mt-2">
              {selectedCaseStudy.subtitle}
            </p>

            <div className="my-8 h-[1px] bg-white/15"></div>

            <div className="space-y-8 text-sm text-slate-300 font-light">
              <div>
                <h4 className="font-mono text-xs text-[#FF9900] uppercase font-bold tracking-widest mb-2">
                  PROBLEM DEFINITION
                </h4>
                <p className="leading-relaxed">{selectedCaseStudy.caseStudy.problem}</p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-[#FF9900] uppercase font-bold tracking-widest mb-2">
                  ENGINEERED SOLUTION
                </h4>
                <p className="leading-relaxed">{selectedCaseStudy.caseStudy.solution}</p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-[#FF9900] uppercase font-bold tracking-widest mb-3">
                  SYSTEM ARCHITECTURE
                </h4>
                <ul className="space-y-2 font-mono text-xs text-slate-400">
                  {selectedCaseStudy.caseStudy.architecture.map((a, i) => (
                    <li key={i}>• {a}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-xs text-[#FF9900] uppercase font-bold tracking-widest mb-3">
                  TECHNOLOGY STACK
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCaseStudy.technologies.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-white">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/15 flex items-center justify-between">
              {selectedCaseStudy.githubUrl && (
                <a
                  href={selectedCaseStudy.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-[#FF9900] text-black font-syne font-bold text-xs uppercase"
                >
                  OPEN REPOSITORY ↗
                </a>
              )}
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="font-mono text-xs text-slate-400 hover:text-white"
              >
                CLOSE [ESC]
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── CONTACT DRAWER ─── */}
      {contactDrawerOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl">
          <div className="w-full max-w-xl rounded-3xl bg-[#090b10] border border-white/20 p-8 sm:p-12 relative shadow-2xl">
            <button
              onClick={() => setContactDrawerOpen(false)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center font-mono text-sm"
            >
              ✕
            </button>

            <span className="font-mono text-xs text-[#FF9900] uppercase tracking-widest">
              DIRECT DISPATCH
            </span>
            <h3 className="font-syne font-extrabold text-3xl text-white uppercase mt-1">
              START A CONVERSATION
            </h3>
            <p className="font-mono text-xs text-slate-400 mt-1 mb-8">
              Delivered straight to {personalInfo.email}.
            </p>

            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-[11px] uppercase text-slate-400 mb-1.5">NAME</label>
                <input
                  type="text"
                  required
                  value={contactFormData.name}
                  onChange={(e) => setContactFormData({ ...contactFormData, name: e.target.value })}
                  placeholder="Jane Doe"
                  className="w-full rounded-xl bg-white/[0.04] border border-white/15 px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#FF9900]"
                />
              </div>

              <div>
                <label className="block font-mono text-[11px] uppercase text-slate-400 mb-1.5">EMAIL</label>
                <input
                  type="email"
                  required
                  value={contactFormData.email}
                  onChange={(e) => setContactFormData({ ...contactFormData, email: e.target.value })}
                  placeholder="jane@example.com"
                  className="w-full rounded-xl bg-white/[0.04] border border-white/15 px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#FF9900]"
                />
              </div>

              <div>
                <label className="block font-mono text-[11px] uppercase text-slate-400 mb-1.5">MESSAGE</label>
                <textarea
                  required
                  rows={4}
                  value={contactFormData.message}
                  onChange={(e) => setContactFormData({ ...contactFormData, message: e.target.value })}
                  placeholder="Tell me about your initiative or inquiry..."
                  className="w-full rounded-xl bg-white/[0.04] border border-white/15 px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#FF9900]"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-full bg-[#FF9900] hover:bg-[#FFA724] text-black font-syne font-extrabold text-xs uppercase tracking-wider"
                >
                  TRANSMIT MESSAGE →
                </button>
                {contactStatus && (
                  <span className="font-mono text-xs text-[#FF9900]">{contactStatus}</span>
                )}
              </div>
            </form>
          </div>
        </div>
      )}

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
