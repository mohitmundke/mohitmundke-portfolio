import { useState, useEffect, lazy, Suspense } from 'react';
import LoadingScreen from './components/layout/LoadingScreen';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import AskMohitAssistant from './components/floating/AskMohitAssistant';

// Lazy load below-the-fold sections for performance
const About = lazy(() => import('./components/sections/About'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Achievements = lazy(() => import('./components/sections/Achievements'));
const Education = lazy(() => import('./components/sections/Education'));
const Community = lazy(() => import('./components/sections/Community'));
const Gallery = lazy(() => import('./components/sections/Gallery'));
const LinkedInUpdates = lazy(() => import('./components/sections/LinkedInUpdates'));
const GitHubSection = lazy(() => import('./components/sections/GitHubSection'));
const Contact = lazy(() => import('./components/sections/Contact'));

/* Section loading fallback */
function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-32" aria-label="Loading section">
      <div
        className="w-8 h-8 rounded-full border-2 animate-spin"
        style={{
          borderColor: 'rgba(59,130,246,0.2)',
          borderTopColor: 'var(--accent-blue)',
        }}
      />
    </div>
  );
}

/* Section divider */
function SectionDivider() {
  return (
    <div
      className="w-full h-px mx-auto"
      style={{
        maxWidth: '1200px',
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)',
      }}
      aria-hidden="true"
    />
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Preload critical above-fold assets
  useEffect(() => {
    // Preload profile image
    const img = new Image();
    img.src = '/images/mohit-profile.jpg';
  }, []);

  return (
    <>
      {/* Loading Screen */}
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      {/* Main Portfolio */}
      <div
        className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        style={{ minHeight: '100vh' }}
      >
        {/* Skip to main content (accessibility) */}
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded-lg focus:text-white focus:text-sm"
          style={{ background: 'var(--accent-blue)', outline: 'none' }}
        >
          Skip to main content
        </a>

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main id="main-content" role="main">
          {/* Above-fold: loaded immediately */}
          <Hero />
          <SectionDivider />

          {/* Below-fold: lazy loaded */}
          <Suspense fallback={<SectionLoader />}>
            <About />
          </Suspense>
          <SectionDivider />

          <Suspense fallback={<SectionLoader />}>
            <Experience />
          </Suspense>
          <SectionDivider />

          <Suspense fallback={<SectionLoader />}>
            <Projects />
          </Suspense>
          <SectionDivider />

          <Suspense fallback={<SectionLoader />}>
            <Skills />
          </Suspense>
          <SectionDivider />

          <Suspense fallback={<SectionLoader />}>
            <Achievements />
          </Suspense>
          <SectionDivider />

          <Suspense fallback={<SectionLoader />}>
            <Education />
          </Suspense>
          <SectionDivider />

          <Suspense fallback={<SectionLoader />}>
            <Community />
          </Suspense>
          <SectionDivider />

          <Suspense fallback={<SectionLoader />}>
            <Gallery />
          </Suspense>
          <SectionDivider />

          <Suspense fallback={<SectionLoader />}>
            <LinkedInUpdates />
          </Suspense>
          <SectionDivider />

          <Suspense fallback={<SectionLoader />}>
            <GitHubSection />
          </Suspense>
          <SectionDivider />

          <Suspense fallback={<SectionLoader />}>
            <Contact />
          </Suspense>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating AI Assistant */}
        <AskMohitAssistant />
      </div>
    </>
  );
}
