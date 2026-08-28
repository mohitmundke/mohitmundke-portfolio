import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Github, Instagram, Send, CheckCircle, ExternalLink } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { personalInfo, contactOpportunities } from '@/data/portfolio';
import { isValidEmail } from '@/lib/utils';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const socialLinks = [
  { href: personalInfo.social.linkedin, label: 'LinkedIn', icon: Linkedin, color: '#0a66c2' },
  { href: personalInfo.social.github, label: 'GitHub', icon: Github, color: '#6e5494' },
  { href: personalInfo.social.instagram, label: 'Instagram', icon: Instagram, color: '#e4405f' },
  { href: `mailto:${personalInfo.email}`, label: 'Email', icon: Mail, color: 'var(--accent-blue)' },
];

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '10px',
  padding: '12px 14px',
  color: 'var(--text-primary)',
  fontSize: '0.9rem',
  fontFamily: 'var(--font-body)',
  outline: 'none',
  transition: 'border-color 0.2s',
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setSending(true);
    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

    try {
      if (endpoint) {
        await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
      } else {
        // Simulate network delay for demo
        await new Promise((r) => setTimeout(r, 800));
      }
      setSubmitted(true);
      reset();
    } catch {
      setSubmitted(true); // Show success anyway for demo
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" style={{ background: 'var(--bg-secondary)', padding: 'var(--section-padding) 0' }}>
      <div className="section-container">
        <SectionTitle
          label="Get in Touch"
          title="Contact"
          gradientWord="Contact"
          subtitle="Open to internships, collaborations, and new opportunities. Let's talk."
          className="mb-14"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">

          {/* Left: Contact Info */}
          <ScrollReveal direction="left">
            <div className="flex flex-col gap-6">
              <span className="status-badge w-fit">
                <span className="status-dot" />
                Open to Opportunities
              </span>

              {/* Contact details */}
              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 group"
                  aria-label="Send email to Mohit"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                    style={{ background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.25)' }}>
                    <Mail size={16} style={{ color: 'var(--accent-blue-light)' }} />
                  </div>
                  <div>
                    <p className="text-xs mono mb-0.5" style={{ color: 'var(--text-muted)' }}>Email</p>
                    <p className="font-medium transition-colors group-hover:text-blue-400" style={{ color: 'var(--text-primary)' }}>
                      {personalInfo.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)' }}>
                    <MapPin size={16} style={{ color: 'var(--accent-violet-light)' }} />
                  </div>
                  <div>
                    <p className="text-xs mono mb-0.5" style={{ color: 'var(--text-muted)' }}>Location</p>
                    <p className="font-medium" style={{ color: 'var(--text-primary)' }}>{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="flex gap-3 flex-wrap">
                {socialLinks.map((s) => {
                  const Icon = s.icon;
                  return (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith('mailto') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: 'var(--text-secondary)',
                      }}
                      whileHover={{ scale: 1.05, borderColor: s.color + '60', color: s.color }}
                    >
                      <Icon size={15} />
                      {s.label}
                    </motion.a>
                  );
                })}
              </div>

              {/* Opportunities */}
              <div>
                <p className="text-xs uppercase tracking-widest mono mb-3" style={{ color: 'var(--accent-blue-light)' }}>
                  Open To
                </p>
                <div className="flex flex-col gap-2">
                  {contactOpportunities.map((opp) => (
                    <div
                      key={opp.label}
                      className="flex items-center gap-2 text-sm"
                      style={{ color: opp.priority === 'primary' ? 'var(--text-primary)' : 'var(--text-secondary)' }}
                    >
                      <span
                        style={{
                          color: opp.priority === 'primary' ? 'var(--accent-blue)' : 'rgba(59,130,246,0.4)',
                          flexShrink: 0,
                        }}
                      >
                        ▸
                      </span>
                      {opp.label}
                      {opp.priority === 'primary' && (
                        <span className="text-xs px-1.5 py-0.5 rounded mono ml-1"
                          style={{ background: 'rgba(59,130,246,0.12)', color: 'var(--accent-blue-light)' }}>
                          Primary
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Contact form */}
          <ScrollReveal direction="right">
            <GlassCard padding="lg">
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(34,197,94,0.12)', border: '2px solid rgba(34,197,94,0.3)' }}>
                    <CheckCircle size={28} style={{ color: '#4ade80' }} />
                  </div>
                  <h3 className="text-xl font-bold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
                    Message Sent!
                  </h3>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm transition-colors"
                    style={{ color: 'var(--accent-blue-light)' }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                      Name <span style={{ color: '#f87171' }}>*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your name"
                      style={{
                        ...inputStyle,
                        borderColor: errors.name ? '#f87171' : undefined,
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(59,130,246,0.5)')}
                      onBlur={(e) => (e.target.style.borderColor = errors.name ? '#f87171' : 'rgba(255,255,255,0.1)')}
                      {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && (
                      <p className="text-xs mt-1" style={{ color: '#f87171' }}>{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                      Email <span style={{ color: '#f87171' }}>*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="your@email.com"
                      style={{
                        ...inputStyle,
                        borderColor: errors.email ? '#f87171' : undefined,
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(59,130,246,0.5)')}
                      onBlur={(e) => (e.target.style.borderColor = errors.email ? '#f87171' : 'rgba(255,255,255,0.1)')}
                      {...register('email', {
                        required: 'Email is required',
                        validate: (v) => isValidEmail(v) || 'Enter a valid email address',
                      })}
                    />
                    {errors.email && (
                      <p className="text-xs mt-1" style={{ color: '#f87171' }}>{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                      Message <span style={{ color: '#f87171' }}>*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell me about your project, opportunity, or just say hello..."
                      style={{
                        ...inputStyle,
                        resize: 'vertical',
                        minHeight: '130px',
                        borderColor: errors.message ? '#f87171' : undefined,
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(59,130,246,0.5)')}
                      onBlur={(e) => (e.target.style.borderColor = errors.message ? '#f87171' : 'rgba(255,255,255,0.1)')}
                      {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'Message must be at least 10 characters' } })}
                    />
                    {errors.message && (
                      <p className="text-xs mt-1" style={{ color: '#f87171' }}>{errors.message.message}</p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={sending}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white transition-all"
                    style={{
                      background: sending ? 'rgba(59,130,246,0.5)' : 'linear-gradient(135deg, #3b82f6, #7c3aed)',
                      cursor: sending ? 'not-allowed' : 'pointer',
                    }}
                    whileHover={sending ? {} : { scale: 1.02, boxShadow: '0 0 24px rgba(59,130,246,0.4)' }}
                    whileTap={sending ? {} : { scale: 0.98 }}
                  >
                    {sending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={16} /> Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
