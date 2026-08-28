import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Monitor, Users, Globe, Star, Image } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Lightbox from '@/components/ui/Lightbox';
import { galleryItems, galleryCategories } from '@/data/gallery';
import type { GalleryItem } from '@/types';

const placeholderIconMap: Record<string, React.ElementType> = {
  award: Award,
  monitor: Monitor,
  users: Users,
  globe: Globe,
  star: Star,
  presentation: Globe,
  image: Image,
};

function GalleryCard({ item, onClick }: { item: GalleryItem; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  const Icon = placeholderIconMap[item.placeholderIcon ?? 'image'] ?? Image;
  const hasImage = !!item.imageUrl;

  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl cursor-pointer"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        aspectRatio: item.featured ? '4/3' : '1/1',
      }}
      whileHover={{ scale: 1.02, borderColor: 'rgba(59,130,246,0.3)' }}
      transition={{ duration: 0.2 }}
      onClick={hasImage ? onClick : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      role={hasImage ? 'button' : undefined}
      tabIndex={hasImage ? 0 : undefined}
      onKeyDown={hasImage ? (e) => e.key === 'Enter' && onClick() : undefined}
      aria-label={hasImage ? `View ${item.title}` : item.title}
    >
      {hasImage ? (
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        <div
          className="w-full h-full flex flex-col items-center justify-center gap-3 p-4"
          style={{ background: 'linear-gradient(160deg, #0c101a 0%, #0f1525 100%)' }}
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.25)' }}
          >
            <Icon size={22} style={{ color: 'var(--accent-blue-light)' }} />
          </div>
          <div className="text-center">
            <p className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>{item.title}</p>
            {item.date && (
              <p className="text-xs mono mt-0.5" style={{ color: 'var(--text-muted)' }}>{item.date}</p>
            )}
          </div>
        </div>
      )}

      {/* Hover overlay */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="absolute inset-0 flex flex-col justify-end p-4"
            style={{ background: 'linear-gradient(to top, rgba(5,5,8,0.9) 0%, rgba(5,5,8,0.4) 50%, transparent)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <span
              className="text-xs px-2 py-0.5 rounded-full self-start mb-1 mono"
              style={{
                background: 'rgba(59,130,246,0.2)',
                border: '1px solid rgba(59,130,246,0.3)',
                color: 'var(--accent-blue-light)',
              }}
            >
              {item.category}
            </span>
            <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{item.title}</p>
            {item.description && (
              <p className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>{item.description}</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightbox, setLightbox] = useState<{ src: string; alt: string; title: string } | null>(null);

  const filtered = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const handleOpen = (item: GalleryItem) => {
    if (item.imageUrl) {
      setLightbox({ src: item.imageUrl, alt: item.title, title: item.title });
    }
  };

  return (
    <section id="gallery" style={{ background: 'var(--bg-primary)', padding: 'var(--section-padding) 0' }}>
      <div className="section-container">
        <SectionTitle
          label="Highlights"
          title="Gallery"
          gradientWord="Gallery"
          subtitle="Moments from ambassador activities, events, projects, and the technology community."
          className="mb-10"
        />

        {/* Category filter */}
        <ScrollReveal className="flex flex-wrap justify-center gap-2 mb-10">
          {galleryCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
                style={{
                  background: isActive ? 'rgba(59,130,246,0.15)' : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${isActive ? 'rgba(59,130,246,0.4)' : 'rgba(255,255,255,0.08)'}`,
                  color: isActive ? 'var(--accent-blue-light)' : 'var(--text-secondary)',
                }}
                aria-pressed={isActive}
              >
                {cat.label}
              </button>
            );
          })}
        </ScrollReveal>

        {/* Masonry-style grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-auto"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                className={item.featured ? 'col-span-2 row-span-1' : ''}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04 }}
              >
                <GalleryCard item={item} onClick={() => handleOpen(item)} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Note about adding photos */}
        <ScrollReveal delay={0.2} className="mt-8 text-center">
          <p className="text-xs mono" style={{ color: 'var(--text-muted)' }}>
            Add real photos to <span className="text-blue-400">public/images/gallery/</span> and update{' '}
            <span className="text-blue-400">src/data/gallery.ts</span> to populate this section.
          </p>
        </ScrollReveal>
      </div>

      <Lightbox
        isOpen={!!lightbox}
        onClose={() => setLightbox(null)}
        src={lightbox?.src ?? ''}
        alt={lightbox?.alt ?? ''}
        title={lightbox?.title}
      />
    </section>
  );
}
