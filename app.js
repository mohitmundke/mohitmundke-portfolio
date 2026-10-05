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

/* ─── 03. HORIZONTAL CINEMATIC JOURNEY SCENES ─── */
const journeyScenes = [
  {
    year: '2024',
    title: 'THE BEGINNING',
    scene: 'PROGRAMMING',
    accent: '#ffffff',
    desc: 'Started exploring programming, technology, and algorithmic logic from first principles.',
    codeSnippet: 'int main() { printf("Hello, World\\n"); return 0; }',
    bullets: ['Algorithms & Complexity', 'C/C++ Low-Level Systems', 'Problem Solving Foundations']
  },
  {
    year: '2025',
    title: 'FROM LEARNING TO BUILDING',
    scene: 'BUILDING',
    accent: '#38bdf8',
    desc: 'Started working on projects involving programming, UI/UX, web development and AI.',
    codeSnippet: '<Component onBuild={() => launchProduct()} />',
    bullets: ['React & Component Trees', 'UI/UX Interactive Prototypes', 'Full-Stack Software Architecture']
  },
  {
    year: '2026',
    title: 'GOOGLE GEMINI',
    scene: 'AI ERA',
    accent: '#4285F4',
    desc: 'Became a Google Gemini AI Student Ambassador and started exploring Generative AI, AI tools and real-world applications.',
    codeSnippet: 'const model = genAI.getGenerativeModel({ model: "gemini" });',
    bullets: ['Campus AI Evangelism', 'Prompt Engineering Architecture', 'Enabling Student Developers']
  },
  {
    year: '2026',
    title: 'AWS ECOSYSTEM',
    scene: 'CLOUD',
    accent: '#FF9900',
    desc: 'Started exploring AWS, cloud computing, serverless architectures and the developer ecosystem.',
    codeSnippet: 'AWSTemplateFormatVersion: "2010-09-09"\nTransform: AWS::Serverless',
    bullets: ['Cloud Foundations & IAM', 'Serverless & Object Storage', 'Scalable Cloud Primitives']
  },
  {
    year: '2026',
    title: 'BUILDING THE BUILDERS',
    scene: 'LEADERSHIP',
    accent: '#FFA724',
    desc: 'Became the Student Builder Group Leader of AWS Student Builder Group DYPCOEI for AY 2026-27.',
    codeSnippet: 'AWS.Community.lead({ group: "DYPCOEI", AY: "2026-27" })',
    bullets: ['Leading 6-Person Core Team', 'Faculty Collaboration', 'Campus Builder Culture']
  },
  {
    year: 'NOW',
    title: 'STILL BUILDING',
    scene: 'HORIZON',
    accent: '#a855f7',
    desc: 'Continuing to learn, build, lead and experiment with AI, cloud, software and design.',
    codeSnippet: 'while (alive) { learn(); build(); lead(); }',
    bullets: ['Intelligent Product Labs', 'Next-Gen Interfaces', 'Lifelong Trajectory']
  }
];

/* ─── AWS CORE TEAM (EXACT OFFICIAL MEMBERS & AUTHENTIC ASSETS) ─── */
const awsCoreTeam = [
  {
    role: 'LEADER',
    name: 'Mohit Mundke',
    title: 'Student Builder Group Leader',
    dept: '2nd Year · AI & Data Science',
    photo: '/images/mohit-profile.jpg',
    accent: '#FF9900',
    bio: 'Guiding community strategy, technical workshops, and cloud builder culture across DYPCOEI.'
  },
  {
    role: 'DIRECTOR OF EVENTS',
    name: 'Dnyanada Dhavale',
    title: 'Director of Events',
    dept: '3rd Year · Computer Engineering',
    photo: null,
    accent: '#FFB84D',
    bio: 'Orchestrating technical bootcamps, speaker symposiums, and hands-on developer hackathons.'
  },
  {
    role: 'DIRECTOR OF MARKETING',
    name: 'Akanksha Mirge',
    title: 'Director of Marketing',
    dept: '3rd Year · Computer Engineering',
    photo: null,
    accent: '#FF9900',
    bio: 'Directing community outreach, social presence, and cross-department builder recruitment.'
  },
  {
    role: 'TECHNICAL LEAD',
    name: 'Mayuresh Thorve',
    title: 'Technical Lead',
    dept: '3rd Year · Computer Engineering',
    photo: null,
    accent: '#38BDF8',
    bio: 'Leading technical tracks, cloud architecture demos, and code-level mentoring.'
  },
  {
    role: 'MULTIMEDIA HEAD',
    name: 'Ishwari Bhope',
    title: 'Multimedia Head',
    dept: '2nd Year · AI-ML',
    photo: null,
    accent: '#A855F7',
    bio: 'Designing brand visual identity, event media, and digital broadcast design.'
  },
  {
    role: 'DOCUMENTATION HEAD',
    name: 'Vaishnavee Sutar',
    title: 'Documentation Head',
    dept: '2nd Year · AI-ML',
    photo: null,
    accent: '#818CF8',
    bio: 'Maintaining event registries, technical whitepapers, and knowledge repositories.'
  }
];

/* ─── PROJECTS (~90VH CINEMATIC SHOWCASES) ─── */
const cinematicProjects = [
  {
    id: 'focusnext',
    number: '01',
    name: 'FOCUSNEXT WELLNESS',
    subtitle: 'A wellness and productivity-focused digital experience.',
    tagline: 'Engineering digital health for deep work',
    technologies: ['AI', 'UI/UX', 'Web', 'React', 'TypeScript', 'Tailwind CSS'],
    category: 'DIGITAL WELLNESS / AI',
    githubUrl: 'https://github.com/mohitmundke/FocusNext-Wellness.git',
    image: '/images/focusnext-preview.svg',
    description: 'A comprehensive wellness companion engineered to combat digital eye strain, poor ergonomic posture, and fatigue during prolonged coding sessions. Implements smart break intervals, posture prompts, and habit analytics.',
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
    image: null,
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
    image: null,
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
    image: null,
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

/* ─── TYPOGRAPHIC WALL WORDS ─── */
const wallWords = [
  { text: 'AI', size: 'text-5xl sm:text-7xl md:text-8xl', accent: '#38bdf8' },
  { text: 'AWS', size: 'text-6xl sm:text-8xl md:text-9xl', accent: '#FF9900' },
  { text: 'PYTHON', size: 'text-4xl sm:text-6xl md:text-7xl', accent: '#38bdf8' },
  { text: 'REACT', size: 'text-5xl sm:text-7xl md:text-8xl', accent: '#ffffff' },
  { text: 'GENAI', size: 'text-5xl sm:text-7xl md:text-8xl', accent: '#a855f7' },
  { text: 'C++', size: 'text-6xl sm:text-8xl md:text-9xl', accent: '#60a5fa' },
  { text: 'NODE', size: 'text-4xl sm:text-6xl md:text-7xl', accent: '#22c55e' },
  { text: 'FIGMA', size: 'text-4xl sm:text-6xl md:text-7xl', accent: '#ec4899' },
  { text: 'C', size: 'text-6xl sm:text-8xl md:text-9xl', accent: '#60a5fa' },
  { text: 'FLASK', size: 'text-4xl sm:text-6xl md:text-7xl', accent: '#ffffff' },
  { text: 'GITHUB', size: 'text-4xl sm:text-6xl md:text-7xl', accent: '#ffffff' },
  { text: 'PANDAS', size: 'text-3xl sm:text-5xl md:text-6xl', accent: '#38bdf8' },
  { text: 'NUMPY', size: 'text-3xl sm:text-5xl md:text-6xl', accent: '#60a5fa' },
  { text: 'JAVASCRIPT', size: 'text-4xl sm:text-6xl md:text-7xl', accent: '#f59e0b' }
];

/* ─── THREE.JS ABSTRACT 3D SCULPTURE FOR HERO ─── */
function Hero3DAbstractSculpture({ mousePos, scrollProgress }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Check if Three.js is available
    if (typeof window.THREE === 'undefined') return;

    const THREE = window.THREE;
    const width = mount.clientWidth || window.innerWidth;
    const height = mount.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Create Abstract Wireframe Torus Knot / Polyhedron
    const geometry = new THREE.IcosahedronGeometry(2.8, 1);
    const wireframe = new THREE.WireframeGeometry(geometry);
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.14
    });
    const mesh = new THREE.LineSegments(wireframe, lineMaterial);
    scene.add(mesh);

    // Inner glowing core
    const innerGeom = new THREE.OctahedronGeometry(1.4, 0);
    const innerWireframe = new THREE.WireframeGeometry(innerGeom);
    const innerMat = new THREE.LineBasicMaterial({
      color: 0xff9900,
      transparent: true,
      opacity: 0.28
    });
    const innerMesh = new THREE.LineSegments(innerWireframe, innerMat);
    scene.add(innerMesh);

    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      // Rotate slowly + mouse tilt
      const targetRotX = (mousePos.y / height - 0.5) * 0.8;
      const targetRotY = (mousePos.x / width - 0.5) * 0.8;

      mesh.rotation.x += 0.002 + (targetRotX - mesh.rotation.x) * 0.05;
      mesh.rotation.y += 0.003 + (targetRotY - mesh.rotation.y) * 0.05;

      innerMesh.rotation.x -= 0.003;
      innerMesh.rotation.y += 0.004;

      // Scroll zoom / travel effect
      camera.position.z = 8 - (scrollProgress || 0) * 4;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      lineMaterial.dispose();
      innerGeom.dispose();
      innerMat.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 pointer-events-none z-0 opacity-70" />;
}

/* ─── GOOGLE ABSTRACT MORPHING ORB CANVAS ─── */
function GoogleMorphingOrbCanvas({ mousePos }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let frameId;

    let width = (canvas.width = canvas.parentElement ? canvas.parentElement.clientWidth : 650);
    let height = (canvas.height = 480);

    const handleResize = () => {
      if (canvas.parentElement) {
        width = canvas.width = canvas.parentElement.clientWidth;
      }
    };
    window.addEventListener('resize', handleResize);

    const orbitItems = [
      { text: 'DISCOVER', color: '#4285F4', r: 160, speed: 0.012, angle: 0 },
      { text: 'EXPERIMENT', color: '#EA4335', r: 120, speed: -0.016, angle: 1.2 },
      { text: 'LEARN', color: '#FBBC05', r: 190, speed: 0.009, angle: 2.5 },
      { text: 'SHARE', color: '#34A853', r: 140, speed: -0.014, angle: 3.8 },
      { text: 'ENABLE', color: '#4285F4', r: 210, speed: 0.008, angle: 5.1 }
    ];

    let t = 0;
    const render = () => {
      t += 0.018;
      ctx.clearRect(0, 0, width, height);
      const cx = width / 2;
      const cy = height / 2;

      // Mouse displacement
      const mx = (mousePos.x / (window.innerWidth || 1) - 0.5) * 40;
      const my = (mousePos.y / (window.innerHeight || 1) - 0.5) * 40;

      // Central Morphing Iridescent Orb
      ctx.save();
      const numPoints = 12;
      const baseRadius = 55;
      ctx.beginPath();
      for (let i = 0; i <= numPoints; i++) {
        const theta = (i / numPoints) * Math.PI * 2;
        const wobble = Math.sin(theta * 3 + t * 2) * 12 + Math.cos(theta * 2 - t) * 8;
        const rad = baseRadius + wobble;
        const x = cx + mx + Math.cos(theta) * rad;
        const y = cy + my + Math.sin(theta) * rad;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();

      const grad = ctx.createRadialGradient(cx + mx, cy + my, 10, cx + mx, cy + my, 75);
      grad.addColorStop(0, 'rgba(66, 133, 244, 0.45)');
      grad.addColorStop(0.5, 'rgba(234, 67, 53, 0.25)');
      grad.addColorStop(0.8, 'rgba(251, 188, 5, 0.2)');
      grad.addColorStop(1, 'rgba(52, 168, 83, 0)');
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.strokeStyle = 'rgba(66, 133, 244, 0.6)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Center Text
      ctx.fillStyle = '#050505';
      ctx.font = '800 14px "Space Grotesk", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('GEMINI', cx + mx, cy + my);
      ctx.restore();

      // Orbiting Words & Nodes
      orbitItems.forEach((item) => {
        item.angle += item.speed;
        const ox = cx + mx + Math.cos(item.angle) * item.r;
        const oy = cy + my + Math.sin(item.angle) * (item.r * 0.42);

        // Filament line
        ctx.strokeStyle = item.color + '30';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(cx + mx, cy + my);
        ctx.lineTo(ox, oy);
        ctx.stroke();

        // Node dot
        ctx.fillStyle = item.color;
        ctx.beginPath();
        ctx.arc(ox, oy, 5, 0, Math.PI * 2);
        ctx.fill();

        // Word Label
        ctx.fillStyle = '#1e293b';
        ctx.font = '700 10px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.fillText(item.text, ox, oy - 10);
      });

      frameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
    };
  }, [mousePos]);

  return <canvas ref={canvasRef} className="w-full h-[480px] pointer-events-none" />;
}

/* ─── AWS 3D INTERACTIVE NODE NETWORK CANVAS ─── */
function AwsInteractiveNetworkCanvas({ mousePos }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let frameId;

    let width = (canvas.width = canvas.parentElement ? canvas.parentElement.clientWidth : 750);
    let height = (canvas.height = 460);

    const handleResize = () => {
      if (canvas.parentElement) {
        width = canvas.width = canvas.parentElement.clientWidth;
      }
    };
    window.addEventListener('resize', handleResize);

    const nodeLabels = ['CLOUD', 'AI', 'BUILD', 'LEARN', 'COMMUNITY', 'EVENTS', 'LEADERSHIP'];
    const nodes = nodeLabels.map((lbl, idx) => {
      const angle = (idx / nodeLabels.length) * Math.PI * 2;
      const radius = 145;
      return {
        label: lbl,
        baseX: Math.cos(angle) * radius,
        baseY: Math.sin(angle) * radius,
        r: 6
      };
    });

    let t = 0;
    const render = () => {
      t += 0.02;
      ctx.clearRect(0, 0, width, height);
      const cx = width / 2;
      const cy = height / 2;

      // Mouse reaction
      const mx = (mousePos.x / (window.innerWidth || 1) - 0.5) * 60;
      const my = (mousePos.y / (window.innerHeight || 1) - 0.5) * 60;

      // Central AWS Hub
      ctx.save();
      ctx.fillStyle = '#FF9900';
      ctx.shadowColor = '#FF9900';
      ctx.shadowBlur = 24;
      ctx.beginPath();
      ctx.arc(cx + mx, cy + my, 16, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      ctx.fillStyle = '#050505';
      ctx.font = '800 11px "Space Grotesk", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('AWS', cx + mx, cy + my);

      // Connected Nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const nx = cx + mx + n.baseX + Math.sin(t + i) * 8;
        const ny = cy + my + n.baseY + Math.cos(t + i) * 8;

        // Radiant data transmission lines
        ctx.strokeStyle = 'rgba(255, 153, 0, 0.28)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(cx + mx, cy + my);
        ctx.lineTo(nx, ny);
        ctx.stroke();

        // Polygon perimeter interconnects
        const next = nodes[(i + 1) % nodes.length];
        const nextX = cx + mx + next.baseX + Math.sin(t + i + 1) * 8;
        const nextY = cy + my + next.baseY + Math.cos(t + i + 1) * 8;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.beginPath();
        ctx.moveTo(nx, ny);
        ctx.lineTo(nextX, nextY);
        ctx.stroke();

        // Packet pulse traveling along line
        const packetT = ((t * 0.8 + i * 0.3) % 1);
        const px = (cx + mx) * (1 - packetT) + nx * packetT;
        const py = (cy + my) * (1 - packetT) + ny * packetT;
        ctx.fillStyle = '#FF9900';
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Outer node
        ctx.save();
        ctx.fillStyle = '#FF9900';
        ctx.shadowColor = '#FF9900';
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.arc(nx, ny, n.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Label
        ctx.fillStyle = '#ffffff';
        ctx.font = '700 10px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.fillText(n.label, nx, ny - 12);
      }

      frameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
    };
  }, [mousePos]);

  return <canvas ref={canvasRef} className="w-full h-[460px] pointer-events-none" />;
}

/* ─── MAIN AWARD-WINNING IMMERSIVE PORTFOLIO APPLICATION ─── */
function App() {
  // Preloader State
  const [preloaderActive, setPreloaderActive] = useState(true);
  const [preloaderCount, setPreloaderCount] = useState(0);
  const [preloaderWordIndex, setPreloaderWordIndex] = useState(0);
  const preloaderWords = ['CODE', 'AI', 'AWS', 'DESIGN', 'BUILD', 'LEAD', 'CREATE'];

  // Global Mouse & Custom Cursor Lerp
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorRingPos, setCursorRingPos] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState({ hover: false, text: '', variant: 'default' });

  // Full-Screen Menu Overlay State
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuHoveredIndex, setMenuHoveredIndex] = useState(0);

  // Scroll Tracking
  const [scrollProgress, setScrollProgress] = useState(0);

  // Interactive Case Study Modal
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  // Contact Drawer
  const [contactDrawerOpen, setContactDrawerOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  // 1. Cinematic Preloader with Vertical Split Curtains
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setPreloaderWordIndex((prev) => (prev + 1) % preloaderWords.length);
    }, 180);

    let progress = 0;
    const progressInterval = setInterval(() => {
      progress += Math.floor(Math.random() * 8) + 4;
      if (progress >= 100) {
        progress = 100;
        setPreloaderCount(100);
        clearInterval(progressInterval);
        clearInterval(wordInterval);
        setTimeout(() => setPreloaderActive(false), 500);
      } else {
        setPreloaderCount(progress);
      }
    }, 45);

    return () => {
      clearInterval(wordInterval);
      clearInterval(progressInterval);
    };
  }, []);

  // 2. Lenis Smooth Scroll Initialization
  useEffect(() => {
    if (typeof window.Lenis !== 'undefined') {
      const lenis = new window.Lenis({
        duration: 1.25,
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

  // 3. Global Mouse & Custom Cursor Lerp Loop
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    let frameId;
    let rx = -100;
    let ry = -100;
    const lerpRing = () => {
      rx += (cursorPos.x - rx) * 0.16;
      ry += (cursorPos.y - ry) * 0.16;
      setCursorRingPos({ x: rx, y: ry });
      frameId = requestAnimationFrame(lerpRing);
    };
    frameId = requestAnimationFrame(lerpRing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, [cursorPos.x, cursorPos.y]);

  // 4. Scroll Progress Tracker for Hero Parallax and Transitions
  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) {
        setScrollProgress(Math.min(1, window.scrollY / window.innerHeight));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCursorEnter = (text, variant = 'default') => {
    setCursorState({ hover: true, text, variant });
  };
  const handleCursorLeave = () => {
    setCursorState({ hover: false, text: '', variant: 'default' });
  };

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('Please complete all fields.');
      return;
    }
    setFormStatus('Transmitting...');

    fetch('https://formsubmit.co/ajax/mohitmundke20@gmail.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        _subject: `New Portfolio Message from ${formData.name}`
      })
    })
      .then((r) => r.json())
      .then(() => {
        setFormStatus('Message transmitted successfully.');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setContactDrawerOpen(false), 2000);
      })
      .catch(() => {
        window.location.href = `mailto:mohitmundke20@gmail.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`;
        setFormStatus('Opened your mail client.');
      });
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#f1f5f9] select-none overflow-x-hidden">
      
      {/* ─── 00. PRELOADER (VERTICAL SPLIT CURTAIN) ─── */}
      {preloaderActive && (
        <div className="fixed inset-0 z-[999999] pointer-events-none flex flex-col justify-between p-8 sm:p-16 bg-[#050505] transition-all duration-700">
          <div className="flex items-center justify-between font-mono text-xs text-slate-500 tracking-widest uppercase">
            <span>MOHIT MUNDKE</span>
            <span>SYSTEM INIT · DYPCOEI 2026</span>
          </div>

          <div className="my-auto max-w-4xl">
            <p className="font-mono text-xs text-[#FF9900] tracking-widest uppercase mb-4">
              [ENTERING DIGITAL WORLD]
            </p>
            <h1 className="font-syne font-extrabold text-4xl sm:text-7xl md:text-8xl text-white uppercase tracking-editorial leading-none">
              BUILDING<br />
              DIGITAL<br />
              EXPERIENCES.
            </h1>
            
            {/* Rapidly Rotating Word Ticker */}
            <div className="mt-6 flex items-center gap-3">
              <span className="font-mono text-xs text-slate-500">CURRENT FOCUS:</span>
              <span className="font-syne font-extrabold text-lg sm:text-2xl text-[#FF9900] tracking-wider animate-pulse">
                {preloaderWords[preloaderWordIndex]}
              </span>
            </div>
          </div>

          <div className="flex items-end justify-between border-t border-white/10 pt-6 font-mono">
            <span className="text-xs text-slate-500 tracking-widest uppercase">
              INITIALIZING ENGINE
            </span>
            <span className="font-syne font-extrabold text-3xl sm:text-6xl text-white tracking-tight">
              {String(preloaderCount).padStart(3, '0')}%
            </span>
          </div>
        </div>
      )}

      {/* ─── GLOBAL CUSTOM CURSOR (DESKTOP) ─── */}
      <div
        className="custom-cursor-dot hidden lg:block"
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      />
      <div
        className={`custom-cursor-ring hidden lg:flex ${
          cursorState.hover ? `cursor-active-${cursorState.variant}` : ''
        }`}
        style={{ left: `${cursorRingPos.x}px`, top: `${cursorRingPos.y}px` }}
      >
        {cursorState.hover && cursorState.text && (
          <span className="cursor-badge-text">{cursorState.text}</span>
        )}
      </div>

      {/* ─── TOP EDITORIAL BRAND & FULLSCREEN MENU TRIGGER ─── */}
      <header className="fixed top-0 inset-x-0 z-50 p-6 sm:p-10 flex items-start justify-between pointer-events-none">
        
        {/* Tiny Stacked Typography Logo */}
        <button
          onClick={() => scrollTo('hero')}
          onMouseEnter={() => handleCursorEnter('HOME')}
          onMouseLeave={handleCursorLeave}
          className="pointer-events-auto text-left group"
        >
          <span className="font-syne font-extrabold text-sm sm:text-base text-white block tracking-widest leading-none group-hover:text-[#FF9900] transition-colors">
            MOHIT
          </span>
          <span className="font-syne font-extrabold text-sm sm:text-base text-slate-400 block tracking-widest leading-none group-hover:text-white transition-colors">
            MUNDKE
          </span>
        </button>

        {/* Minimal MENU Trigger */}
        <div className="pointer-events-auto flex items-center gap-4">
          <button
            onClick={() => setContactDrawerOpen(true)}
            onMouseEnter={() => handleCursorEnter('TALK', 'aws')}
            onMouseLeave={handleCursorLeave}
            className="hidden sm:inline-flex px-4 py-2 rounded-full border border-white/15 bg-white/[0.03] hover:border-[#FF9900] text-xs font-mono text-slate-300 hover:text-white transition-all"
          >
            CONNECT ↗
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            onMouseEnter={() => handleCursorEnter(menuOpen ? 'CLOSE' : 'EXPAND')}
            onMouseLeave={handleCursorLeave}
            className="px-5 py-2.5 rounded-full bg-white text-black hover:bg-slate-200 font-syne font-extrabold text-xs tracking-widest uppercase transition-transform hover:scale-105"
          >
            {menuOpen ? 'CLOSE ✕' : 'MENU'}
          </button>
        </div>
      </header>

      {/* ─── FULL-SCREEN MENU OVERLAY TRANSFORMATION ─── */}
      {menuOpen && (
        <div className="fixed inset-0 z-[99990] bg-[#050505] flex flex-col justify-between p-8 sm:p-16 animate-fadeIn">
          
          <div className="flex items-center justify-between font-mono text-xs text-slate-500 uppercase tracking-widest">
            <span>INDEX / ARCHIVE</span>
            <span>DYPCOEI PUNE · AY 2026-27</span>
          </div>

          <div className="my-auto max-w-5xl">
            {[
              { id: 'journey', num: '01', label: 'THE JOURNEY', desc: 'From curiosity to cloud & AI' },
              { id: 'google', num: '02', label: 'GOOGLE GEMINI', desc: 'AI Student Ambassador 2026' },
              { id: 'aws', num: '03', label: 'AWS WORLD', desc: 'Student Builder Group Leader' },
              { id: 'projects', num: '04', label: 'SELECTED WORK', desc: 'FocusNext, soilOsync & Systems' },
              { id: 'experiments', num: '05', label: 'EXPERIMENTS', desc: 'Digital lab & low-level code' },
              { id: 'contact', num: '06', label: 'CONTACT', desc: 'Start a conversation' }
            ].map((item, idx) => (
              <div
                key={item.id}
                onClick={() => scrollTo(item.id)}
                onMouseEnter={() => {
                  setMenuHoveredIndex(idx);
                  handleCursorEnter('SELECT');
                }}
                onMouseLeave={handleCursorLeave}
                className="py-4 border-b border-white/10 flex items-baseline justify-between group cursor-pointer transition-all hover:pl-6"
              >
                <div className="flex items-baseline gap-6">
                  <span className="font-mono text-xs text-[#FF9900]">[{item.num}]</span>
                  <span className="font-syne font-extrabold text-3xl sm:text-6xl text-slate-300 group-hover:text-white uppercase tracking-tight">
                    {item.label}
                  </span>
                </div>
                <span className="hidden sm:inline font-mono text-xs text-slate-500 group-hover:text-white">
                  {item.desc} ↗
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between font-mono text-xs text-slate-500 border-t border-white/10 pt-6">
            <span>PUNE, MAHARASHTRA, INDIA</span>
            <span className="text-[#FF9900]">{personalInfo.email}</span>
          </div>
        </div>
      )}

      {/* ─── HERO EXPERIENCE (ASYMMETRICAL, MASSIVE VIEWPORT-BLEED) ─── */}
      <section
        id="hero"
        className="relative h-screen min-h-[750px] flex flex-col justify-between p-6 sm:p-12 md:p-16 overflow-hidden bg-tech-blueprint"
      >
        {/* Interactive 3D Abstract Digital Sculpture */}
        <Hero3DAbstractSculpture mousePos={mousePos} scrollProgress={scrollProgress} />

        {/* Top Spacer */}
        <div className="pt-16"></div>

        {/* Viewport-Bleeding Asymmetrical Typography */}
        <div className="relative z-10 w-full my-auto pointer-events-none">
          
          {/* Top Left Bleed Name */}
          <div
            className="transition-transform duration-300"
            style={{
              transform: `translateX(-${scrollProgress * 120}px)`
            }}
          >
            <h1 className="font-syne font-extrabold text-massive-hero text-white tracking-editorial uppercase select-none -ml-3 sm:-ml-6">
              MOHIT
            </h1>
          </div>

          {/* Bottom Right Overlapping Name */}
          <div
            className="text-right transition-transform duration-300 -mt-6 sm:-mt-14"
            style={{
              transform: `translateX(${scrollProgress * 120}px)`
            }}
          >
            <h1 className="font-syne font-extrabold text-massive-hero text-slate-300 hover:text-white tracking-editorial uppercase select-none -mr-3 sm:-mr-6">
              MUNDKE
            </h1>
          </div>

        </div>

        {/* Bottom Hero Anchor Bar */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex items-end justify-between border-t border-white/10 pt-4 font-mono text-xs text-slate-400">
          <div>
            <span className="text-[#FF9900] font-bold block">AI &amp; DATA SCIENCE</span>
            <span className="text-slate-500">BUILDER / DESIGNER / COMMUNITY LEADER</span>
          </div>

          <div
            onClick={() => scrollTo('identity')}
            onMouseEnter={() => handleCursorEnter('DOWN')}
            onMouseLeave={handleCursorLeave}
            className="cursor-pointer flex items-center gap-2 group hover:text-white transition-colors"
          >
            <span>SCROLL ↓</span>
          </div>
        </div>
      </section>

      {/* ─── SECTION: "WHO AM I?" (IDENTITY TRANSFORMATION) ─── */}
      <section
        id="identity"
        className="min-h-screen py-32 sm:py-44 px-6 sm:px-14 border-t border-white/10 flex flex-col justify-center relative bg-[#070709]"
      >
        <div className="max-w-7xl mx-auto w-full">
          
          <span className="font-mono text-xs text-[#FF9900] tracking-widest uppercase block mb-12">
            01 / IDENTITY
          </span>

          <h2 className="font-syne font-extrabold text-massive-statement text-slate-400 uppercase leading-[0.88] max-w-5xl">
            I&apos;M NOT<br />
            TRYING TO<br />
            LOOK LIKE<br />
            A DEVELOPER.
          </h2>

          <div className="mt-20 pt-16 border-t border-white/10 text-right">
            <h2 className="font-syne font-extrabold text-massive-statement text-white uppercase leading-[0.88] max-w-5xl ml-auto">
              I&apos;M TRYING<br />
              TO BECOME<br />
              <span className="text-[#FF9900]">A BUILDER.</span>
            </h2>
          </div>

        </div>
      </section>

      {/* ─── INTERACTIVE PERSONALITY WALL ─── */}
      <section className="py-32 sm:py-44 px-6 sm:px-14 border-t border-white/10 relative bg-[#050505] overflow-hidden">
        <div className="max-w-7xl mx-auto w-full text-center">
          
          <span className="font-mono text-xs text-slate-500 tracking-widest uppercase block mb-8">
            DISCIPLINE MATRIX [HOVER TO EXPAND]
          </span>

          <div className="flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-16 gap-y-8 sm:gap-y-12 max-w-5xl mx-auto">
            {[
              'AI', 'AWS', 'CODE', 'DESIGN', 'GENAI', 'BUILD',
              'LEAD', 'CREATE', 'LEARN', 'COMMUNITY', 'PRODUCT', 'EXPERIMENT'
            ].map((word) => (
              <span
                key={word}
                onMouseEnter={() => handleCursorEnter(word, word === 'AWS' ? 'aws' : 'default')}
                onMouseLeave={handleCursorLeave}
                className="font-syne font-extrabold text-4xl sm:text-7xl md:text-8xl text-slate-500 hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer uppercase tracking-tight"
              >
                {word}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* ─── SECTION: THE JOURNEY (HORIZONTAL CINEMATIC JOURNEY) ─── */}
      <section
        id="journey"
        className="py-32 sm:py-44 px-6 sm:px-14 border-t border-white/10 relative bg-[#08080a]"
      >
        <div className="max-w-7xl mx-auto w-full">
          
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="font-mono text-xs text-[#FF9900] tracking-widest uppercase">
                02 / CINEMATIC CHRONOLOGY
              </span>
              <h2 className="font-syne font-extrabold text-scene-title text-white uppercase mt-2">
                THE JOURNEY
              </h2>
            </div>
            <p className="hidden md:block font-mono text-xs text-slate-500">
              [HORIZONTAL PAN · 2024 TO NOW]
            </p>
          </div>

          {/* Horizontal Track Container */}
          <div className="flex gap-8 overflow-x-auto pb-10 pt-2 scrollbar-thin scrollbar-thumb-white/20 select-none">
            {journeyScenes.map((s, idx) => (
              <div
                key={s.year + idx}
                onMouseEnter={() => handleCursorEnter(s.scene, s.year === '2026' ? 'aws' : 'default')}
                onMouseLeave={handleCursorLeave}
                className="w-[320px] sm:w-[420px] flex-shrink-0 p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/15 hover:border-white/35 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-slate-500">ACT 0{idx + 1}</span>
                    <span 
                      className="font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded border"
                      style={{ color: s.accent, borderColor: s.accent + '40', backgroundColor: s.accent + '15' }}
                    >
                      {s.scene}
                    </span>
                  </div>

                  <h3 className="font-syne font-extrabold text-6xl text-white tracking-tight">
                    {s.year}
                  </h3>

                  <h4 className="font-display font-bold text-lg text-slate-200 uppercase mt-4">
                    {s.title}
                  </h4>

                  <p className="font-sans text-sm text-slate-400 font-light mt-3 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <pre className="p-3 rounded-xl bg-black/60 border border-white/5 font-mono text-[11px] text-slate-400 overflow-x-hidden">
                    <code>{s.codeSnippet}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── GOOGLE GEMINI WORLD (LIGHT / OFF-WHITE SCENE SHIFT) ─── */}
      <section
        id="google"
        className="py-32 sm:py-44 px-6 sm:px-14 border-t border-white/10 relative bg-[#f4f5f8] text-[#050505] transition-colors duration-700"
      >
        <div className="max-w-7xl mx-auto w-full">
          
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-[#4285F4] tracking-widest uppercase font-bold">
              GOOGLE GEMINI WORLD
            </span>
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4285F4]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#EA4335]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#FBBC05]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#34A853]"></span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Editorial Statement */}
            <div className="lg:col-span-7">
              <h2 className="font-syne font-extrabold text-scene-title text-[#050505] uppercase leading-none">
                FROM<br />
                EXPLORING AI<br />
                <span className="text-[#4285F4]">TO SHARING IT.</span>
              </h2>

              <div className="mt-6 inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-black/5 border border-black/10">
                <span className="font-mono text-xs text-black font-bold uppercase">
                  GOOGLE GEMINI · AI STUDENT AMBASSADOR · 2026
                </span>
              </div>

              <p className="mt-8 font-sans text-lg sm:text-2xl text-slate-700 font-light leading-relaxed max-w-2xl">
                &ldquo;Exploring Generative AI wasn&apos;t enough. I wanted to help others explore it too.&rdquo;
              </p>

              <div className="mt-12 flex flex-wrap gap-2.5">
                {['AI', 'GENERATIVE AI', 'GEMINI', 'PRODUCTIVITY', 'COMMUNITY'].map((tag) => (
                  <span
                    key={tag}
                    onMouseEnter={() => handleCursorEnter(tag, 'gemini')}
                    onMouseLeave={handleCursorLeave}
                    className="px-4 py-2 rounded-full border border-black/15 bg-black/5 text-xs font-mono font-bold text-black"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Central Abstract Morphing Gemini Orb */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-white border border-black/10 p-4 shadow-xl">
                <GoogleMorphingOrbCanvas mousePos={mousePos} />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─── GOOGLE → AWS SHOWSTOPPER TRANSITION ─── */}
      <section className="py-24 px-6 bg-[#050505] text-center border-t border-white/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF9900] to-transparent mb-8"></div>
          <span className="font-mono text-xs text-slate-500 uppercase tracking-widest block mb-4">
            NETWORK COLLAPSE → EXPANSION
          </span>
          <h3 className="font-syne font-extrabold text-3xl sm:text-6xl text-white uppercase tracking-editorial leading-tight">
            &ldquo;THEN I STARTED<br />
            BUILDING THE<br />
            <span className="text-[#FF9900]">BUILDERS.&rdquo;</span>
          </h3>
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF9900] to-transparent mt-8"></div>
        </div>
      </section>

      {/* ─── AWS DIGITAL WORLD (HERO SECTION INSIDE THE SITE) ─── */}
      <section
        id="aws"
        className="py-32 sm:py-44 px-6 sm:px-14 border-t border-white/10 relative bg-aws-dark-world"
      >
        <div className="max-w-7xl mx-auto w-full">
          
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-[#FF9900] tracking-widest uppercase">
              AWS DIGITAL WORLD · CLOUD TOPOLOGY
            </span>
            <span className="w-2 h-2 rounded-full bg-[#FF9900] animate-pulse"></span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <h2 className="font-syne font-extrabold text-scene-title text-white uppercase leading-none">
                AWS<br />
                <span className="text-[#FF9900]">STUDENT BUILDER</span><br />
                GROUP
              </h2>

              <p className="font-mono text-sm sm:text-base text-slate-300 mt-4 uppercase tracking-wider">
                DYPCOEI · AY 2026-27
              </p>

              {/* Leadership Reveal Block */}
              <div className="mt-8 p-8 rounded-3xl bg-[#FF9900]/15 border border-[#FF9900]/40 max-w-2xl">
                <span className="font-mono text-xs text-[#FF9900] uppercase font-bold tracking-widest block mb-2">
                  MY ROLE
                </span>
                <h3 className="font-syne font-extrabold text-3xl sm:text-4xl text-white uppercase">
                  STUDENT BUILDER GROUP LEADER
                </h3>
                <p className="font-mono text-sm text-[#FF9900] mt-1 font-bold">
                  MOHIT MUNDKE · DYPCOEI AY 2026-27
                </p>
                <p className="font-sans text-sm text-slate-300 font-light mt-3 leading-relaxed">
                  &ldquo;A student-led technical community focused on AWS, cloud computing, AI and innovation.&rdquo;
                </p>
              </div>

              {/* Faculty Leadership Context */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 font-mono text-xs">
                  <p className="text-slate-500 uppercase text-[10px]">COORDINATOR</p>
                  <p className="font-bold text-white mt-1">Mr. Suraj Bhoite</p>
                  <p className="text-slate-400 text-[10px]">Faculty Coordinator</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 font-mono text-xs">
                  <p className="text-slate-500 uppercase text-[10px]">EDUCATOR</p>
                  <p className="font-bold text-white mt-1">Dr. Dipannita Mondal</p>
                  <p className="text-slate-400 text-[10px]">AWS Academy Educator</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 font-mono text-xs">
                  <p className="text-slate-500 uppercase text-[10px]">HOD</p>
                  <p className="font-bold text-white mt-1">Dr. Dipannita Mondal</p>
                  <p className="text-slate-400 text-[10px]">Head of Department</p>
                </div>
              </div>
            </div>

            {/* AWS 3D Node Network Canvas */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#090b10] border border-[#FF9900]/30 p-4">
                <AwsInteractiveNetworkCanvas mousePos={mousePos} />
              </div>
            </div>

          </div>

          {/* AWS 5-Stage Takeover Progression */}
          <div className="mt-20 pt-16 border-t border-white/10">
            <span className="font-mono text-xs text-[#FF9900] uppercase tracking-widest block mb-6">
              THE 5-STAGE CLOUD JOURNEY
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {[
                { num: '01', title: 'EXPLORE', desc: 'Cloud infrastructure & global architecture models.' },
                { num: '02', title: 'LEARN', desc: 'Serverless, compute primitives, and scalable databases.' },
                { num: '03', title: 'BUILD', desc: 'Deploying working prototypes and automation pipelines.' },
                { num: '04', title: 'LEAD', desc: 'Student Builder Group Leader at DYPCOEI.' },
                { num: '05', title: 'CREATE COMMUNITY', desc: 'Empowering student developers through hands-on bootcamps.' }
              ].map((stg) => (
                <div
                  key={stg.num}
                  onMouseEnter={() => handleCursorEnter(stg.title, 'aws')}
                  onMouseLeave={handleCursorLeave}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#FF9900] transition-all"
                >
                  <span className="font-mono text-xs text-slate-500">{stg.num}</span>
                  <h4 className="font-syne font-bold text-base text-white uppercase mt-2">{stg.title}</h4>
                  <p className="font-sans text-xs text-slate-400 font-light mt-2 leading-relaxed">{stg.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ─── AWS CORE TEAM (3D SPATIAL TEAM WALL) ─── */}
      <section
        id="team"
        className="py-32 sm:py-44 px-6 sm:px-14 border-t border-white/10 relative bg-[#060608]"
      >
        <div className="max-w-7xl mx-auto w-full">
          
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="font-mono text-xs text-[#FF9900] tracking-widest uppercase">
                SPATIAL LEADERSHIP WALL
              </span>
              <h2 className="font-syne font-extrabold text-scene-title text-white uppercase mt-2">
                BUILDING THE BUILDERS
              </h2>
              <p className="font-mono text-xs sm:text-sm text-slate-400 uppercase mt-1">
                AY 2026-27 CORE TEAM · AWS STUDENT BUILDER GROUP DYPCOEI
              </p>
            </div>
            <p className="hidden md:block font-mono text-xs text-slate-500">
              [SPATIAL DEPTH HOVER]
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awsCoreTeam.map((mem) => (
              <div
                key={mem.name}
                onMouseEnter={() => handleCursorEnter(mem.role, 'aws')}
                onMouseLeave={handleCursorLeave}
                className="p-8 rounded-3xl bg-white/[0.03] border border-white/15 hover:border-[#FF9900] transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between group"
              >
                <div>
                  <span
                    className="font-mono text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded"
                    style={{ backgroundColor: mem.accent + '20', color: mem.accent }}
                  >
                    {mem.role}
                  </span>

                  <h3 className="font-syne font-extrabold text-2xl sm:text-3xl text-white uppercase mt-4 group-hover:text-[#FF9900] transition-colors">
                    {mem.name}
                  </h3>

                  <p className="font-mono text-xs text-slate-300 mt-1 font-semibold">{mem.title}</p>
                  <p className="font-mono text-[11px] text-slate-500">{mem.dept}</p>
                </div>

                <p className="font-sans text-xs sm:text-sm text-slate-400 font-light mt-6 pt-4 border-t border-white/10 leading-relaxed">
                  {mem.bio}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── LEADERSHIP STATEMENT ─── */}
      <section className="py-32 sm:py-44 px-6 sm:px-14 border-t border-white/10 relative bg-[#050505] text-center">
        <div className="max-w-5xl mx-auto">
          <span className="font-mono text-xs text-[#FF9900] tracking-widest uppercase block mb-6">
            LEADERSHIP / 04
          </span>

          <h2 className="font-syne font-extrabold text-scene-title text-slate-400 uppercase leading-none">
            I DON&apos;T JUST<br />
            BUILD THINGS.
          </h2>

          <div className="my-8 h-[1px] w-24 bg-[#FF9900] mx-auto"></div>

          <h2 className="font-syne font-extrabold text-scene-title text-white uppercase leading-none">
            I BUILD<br />
            PEOPLE<br />
            WHO BUILD<br />
            <span className="text-[#FF9900]">THINGS.</span>
          </h2>
        </div>
      </section>

      {/* ─── PROJECTS (~90VH CINEMATIC GALLERY) ─── */}
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
                PROJECT PORTFOLIO
              </h2>
            </div>
            <p className="hidden md:block font-mono text-xs text-slate-400">
              [CINEMATIC SHOWCASES]
            </p>
          </div>

          <div className="space-y-28">
            {cinematicProjects.map((proj) => (
              <div
                key={proj.id}
                onMouseEnter={() => handleCursorEnter('EXPLORE', 'aws')}
                onMouseLeave={handleCursorLeave}
                className="min-h-[75vh] rounded-3xl p-8 sm:p-14 border border-white/15 bg-white/[0.02] hover:border-white/35 transition-all flex flex-col justify-between"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  
                  <div className="lg:col-span-7">
                    <span className="font-mono font-bold text-4xl sm:text-6xl text-[#FF9900]">
                      {proj.number}
                    </span>

                    <h3 className="font-syne font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight mt-4">
                      {proj.name}
                    </h3>

                    <p className="font-mono text-xs sm:text-sm text-slate-300 mt-2 font-medium">
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

                  <div className="lg:col-span-5 h-full flex flex-col justify-between">
                    <div className="p-6 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs space-y-3">
                      <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-white/10">
                        <span>SYSTEM BLUEPRINT</span>
                        <span className="text-[#FF9900]">VERIFIED</span>
                      </div>
                      <p className="text-slate-300 font-semibold">{proj.tagline}</p>
                      <div className="text-slate-400 space-y-1">
                        <div>• Problem: {proj.caseStudy.problem.slice(0, 95)}...</div>
                        <div>• Solution: {proj.caseStudy.solution.slice(0, 95)}...</div>
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

      {/* ─── EXPERIMENT LAB (DIGITAL LAB ATMOSPHERE) ─── */}
      <section
        id="experiments"
        className="py-32 sm:py-44 px-6 sm:px-14 border-t border-white/10 relative bg-[#060608]"
      >
        <div className="max-w-7xl mx-auto w-full">
          
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="font-mono text-xs text-[#FF9900] tracking-widest uppercase">
                DIGITAL LAB
              </span>
              <h2 className="font-syne font-extrabold text-scene-title text-white uppercase mt-2">
                EXPERIMENTS
              </h2>
            </div>
            <p className="hidden md:block font-mono text-xs text-slate-500">
              &ldquo;I&apos;M CONSTANTLY EXPERIMENTING.&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-black/60 border border-white/15 font-mono text-xs flex flex-col justify-between">
              <div>
                <span className="text-[#38bdf8] block mb-2">[01 / LLM REASONING]</span>
                <p className="font-syne font-bold text-lg text-white mb-2">Gemini Agent Context Pipelines</p>
                <p className="text-slate-400 font-light font-sans text-xs leading-relaxed">
                  Exploring real-time context windows, token reduction, and grounded schema retrieval for agricultural and wellness reasoning.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-slate-500">
                STATUS: LAB PROTOTYPE
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-black/60 border border-white/15 font-mono text-xs flex flex-col justify-between">
              <div>
                <span className="text-[#FF9900] block mb-2">[02 / CLOUD ARCHITECTURE]</span>
                <p className="font-syne font-bold text-lg text-white mb-2">AWS Serverless Event Dispatch</p>
                <p className="text-slate-400 font-light font-sans text-xs leading-relaxed">
                  Testing asynchronous SQS queues, Lambda compute scaling, and S3 event triggers under simulated spike traffic.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-slate-500">
                STATUS: CLOUD VERIFIED
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-black/60 border border-white/15 font-mono text-xs flex flex-col justify-between">
              <div>
                <span className="text-[#60a5fa] block mb-2">[03 / LOW-LEVEL MEMORY]</span>
                <p className="font-syne font-bold text-lg text-white mb-2">C/C++ Deterministic Allocation</p>
                <p className="text-slate-400 font-light font-sans text-xs leading-relaxed">
                  Benchmarking custom memory pool allocators against standard malloc for high-frequency inventory lookups.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-slate-500">
                STATUS: BENCHMARKED
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── TECH STACK (MASSIVE TYPOGRAPHIC WALL) ─── */}
      <section
        id="skills"
        className="py-32 sm:py-44 px-6 sm:px-14 border-t border-white/10 relative bg-[#050505] text-center"
      >
        <div className="max-w-7xl mx-auto w-full">
          
          <span className="font-mono text-xs text-[#FF9900] tracking-widest uppercase block mb-6">
            TECHNICAL REPERTOIRE
          </span>

          <h2 className="font-syne font-extrabold text-scene-title text-white uppercase mb-16">
            WHAT I BUILD WITH
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-14 gap-y-8 sm:gap-y-12 max-w-5xl mx-auto">
            {wallWords.map((item) => (
              <span
                key={item.text}
                onMouseEnter={() => handleCursorEnter(item.text, item.text === 'AWS' ? 'aws' : 'default')}
                onMouseLeave={handleCursorLeave}
                className={`font-syne font-extrabold ${item.size} text-slate-500 hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer uppercase tracking-tight`}
              >
                {item.text}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* ─── CURRENTLY BUILDING ─── */}
      <section className="py-32 sm:py-44 px-6 sm:px-14 border-t border-white/10 relative bg-[#070709] text-center">
        <div className="max-w-5xl mx-auto">
          
          <span className="font-mono text-xs text-[#FF9900] tracking-widest uppercase block mb-6">
            IN PROGRESS
          </span>

          <h2 className="font-syne font-extrabold text-scene-title text-white uppercase leading-tight">
            CURRENTLY<br />
            <span className="text-[#FF9900]">BUILDING.</span>
          </h2>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              { name: 'AWS STUDENT BUILDER GROUP', desc: 'Scaling the student technical community across campus.' },
              { name: 'AI & LLM AGENTS', desc: 'Developing intelligent assistants and prompt reasoning pipelines.' },
              { name: 'DIGITAL EXPERIENCES', desc: 'Designing software with obsessive craft and editorial polish.' }
            ].map((item) => (
              <div key={item.name} className="p-8 rounded-3xl bg-white/[0.03] border border-white/10">
                <h3 className="font-syne font-bold text-lg text-white uppercase">{item.name}</h3>
                <p className="font-sans text-xs sm:text-sm text-slate-400 font-light mt-2">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── ACHIEVEMENTS (VERTICAL NUMBER TUNNEL) ─── */}
      <section className="py-32 sm:py-44 px-6 sm:px-14 border-t border-white/10 relative bg-[#050505]">
        <div className="max-w-7xl mx-auto w-full">
          
          <span className="font-mono text-xs text-[#FF9900] tracking-widest uppercase block mb-12">
            VERIFIED MILESTONES
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { val: '8.02', label: 'FIRST SEMESTER SGPA', sub: 'Verified Academic Track' },
              { val: '7.32', label: 'SECOND SEMESTER SGPA', sub: 'Verified Academic Track' },
              { val: '2026', label: 'GOOGLE GEMINI', sub: 'AI Student Ambassador' },
              { val: '2026', label: 'AWS SBG', sub: 'Student Builder Group Leader' }
            ].map((m) => (
              <div key={m.label} className="border-t border-white/20 pt-6">
                <span className="font-syne font-extrabold text-6xl sm:text-8xl text-white tracking-tight block">
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

      {/* ─── FINAL SECTION & CONTACT (MONUMENTAL CLOSE) ─── */}
      <section
        id="contact"
        className="min-h-screen py-32 sm:py-44 px-6 sm:px-14 border-t border-white/10 flex flex-col justify-between relative bg-[#050505]"
      >
        <div className="max-w-7xl mx-auto w-full my-auto">
          
          <span className="font-mono text-xs text-slate-500 tracking-widest uppercase block mb-6">
            THANK YOU FOR SCROLLING THIS FAR.
          </span>

          <h2 className="font-syne font-extrabold text-massive-hero text-white uppercase leading-[0.84] max-w-5xl">
            LET&apos;S<br />
            <span
              onMouseEnter={() => handleCursorEnter('BUILD', 'aws')}
              onMouseLeave={handleCursorLeave}
              className="text-[#FF9900] hover:tracking-wider transition-all duration-300 cursor-pointer"
            >
              BUILD
            </span><br />
            SOMETHING.
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
            <span>MOHIT MUNDKE · AI &amp; DATA SCIENCE · PUNE, INDIA · 2026</span>
          </div>

          <div className="flex items-center gap-6">
            <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              LINKEDIN ↗
            </a>
            <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              GITHUB ↗
            </a>
            <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
              EMAIL ↗
            </a>
          </div>

          <div className="text-slate-400">
            &ldquo;STILL LEARNING. STILL BUILDING.&rdquo;
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
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jane Doe"
                  className="w-full rounded-xl bg-white/[0.04] border border-white/15 px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#FF9900]"
                />
              </div>

              <div>
                <label className="block font-mono text-[11px] uppercase text-slate-400 mb-1.5">EMAIL</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jane@example.com"
                  className="w-full rounded-xl bg-white/[0.04] border border-white/15 px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#FF9900]"
                />
              </div>

              <div>
                <label className="block font-mono text-[11px] uppercase text-slate-400 mb-1.5">MESSAGE</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
                {formStatus && (
                  <span className="font-mono text-xs text-[#FF9900]">{formStatus}</span>
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
