'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Head – IT Infrastructure',
    org: 'Large NBFC',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    quote: 'D M Systems runs the backbone of our branch connectivity. They understand our risk appetite and work with reality, not against it.',
    accent: '#2563eb'
  },
  {
    id: 2,
    name: 'CIO',
    org: 'Manufacturing Group',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    quote: 'What stands out is their calm during incidents. No noise, no drama—just a structured response and a fix that actually holds.',
    accent: '#10b981'
  },
  {
    id: 3,
    name: 'VP Technology',
    org: 'SaaS Company',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    quote: 'They translate complex security discussions into operational decisions. That bridge between security and day-to-day IT is rare.',
    accent: '#6366f1'
  },
  {
    id: 4,
    name: 'Director of Operations',
    org: 'National Retail Chain',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
    quote: 'Deploying security across 200+ locations was seamless. Their project management is as robust as the firewalls they install.',
    accent: '#f59e0b'
  },
  {
    id: 5,
    name: 'CTO',
    org: 'FinTech Startup',
    image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=800&q=80',
    quote: 'Vendor-neutral advice is hard to find. They helped us pick the right stack for our growth, not the one that paid the highest commission.',
    accent: '#ef4444'
  }
];

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const active = testimonials[index];

  return (
    <section className="testimonials-container">
      <div className="grid-bg" />
      <div className="section-inner">
        <div className="header-wrapper">
          <div className="header-badge">
             <div className="badge-line" />
             <span className="badge-text">Voices of Trust</span>
          </div>
          <h2 className="main-title">What our clients say</h2>
        </div>

        <div className="content-grid">
          <div className="image-column">
            <div className="image-card">
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={active.image}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                  className="testimonial-img"
                />
              </AnimatePresence>
              <div className="image-overlay">
                PARTNER SINCE 201{index + 2}
              </div>
            </div>

            <div className="pagination-grid">
              {testimonials.map((_, i) => (
                <div 
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`pagination-dot ${i === index ? 'active' : ''}`}
                  style={{ '--active-color': active.accent }}
                />
              ))}
            </div>
          </div>

          <div className="quote-column">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="quote-icon" style={{ color: `${active.accent}15` }}>“</div>
                <h3 className="quote-text">{active.quote}</h3>
                <div className="author-info">
                  <div className="author-accent" style={{ background: active.accent }} />
                  <div>
                    <div className="author-name">{active.name}</div>
                    <div className="author-org">{active.org}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonials-container {
          padding: 60px 0;
          background: #fff;
          position: relative;
          overflow: hidden;
          width: 100%;
        }
        .grid-bg {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(#e2e8f0 1.5px, transparent 1.5px);
          background-size: 30px 30px;
          opacity: 0.4;
        }
        .section-inner {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 1;
          box-sizing: border-box;
        }
        .header-wrapper { margin-bottom: 30px; }
        .header-badge { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
        .badge-line { width: 30px; height: 2px; background: #2563eb; }
        .badge-text { font-weight: 700; text-transform: uppercase; font-size: 0.75rem; color: #2563eb; }
        
        .main-title { 
          font-size: clamp(1.75rem, 7vw, 3rem); 
          font-weight: 900; 
          color: #0f172a; 
          margin: 0;
          line-height: 1.1;
        }

        .content-grid {
          display: flex;
          flex-direction: column;
          gap: 30px;
          width: 100%;
        }

        .image-column {
          width: 100%;
        }

        .image-card {
          width: 100%;
          border-radius: 20px;
          overflow: hidden;
          aspect-ratio: 16/10;
          background: #f1f5f9;
          position: relative;
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.1);
        }
        
        .testimonial-img { 
          width: 100%; 
          height: 100%; 
          object-fit: cover; 
          display: block;
        }

        .pagination-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 8px;
          margin-top: 15px;
        }
        
        .pagination-dot {
          height: 4px;
          border-radius: 10px;
          background: #e2e8f0;
          cursor: pointer;
          transition: 0.3s;
        }
        
        .pagination-dot.active { background: var(--active-color); }

        .quote-icon {
          font-size: 4rem;
          font-family: serif;
          line-height: 0;
          margin-bottom: 10px;
        }
        
        .quote-text {
          font-size: clamp(1.1rem, 4.5vw, 1.8rem);
          line-height: 1.4;
          color: #1e293b;
          font-weight: 600;
          margin-bottom: 25px;
        }
        
        .author-info { display: flex; align-items: center; gap: 12px; }
        .author-accent { width: 3px; height: 35px; border-radius: 2px; }
        .author-name { font-size: 1rem; font-weight: 800; color: #0f172a; }
        .author-org { font-size: 0.85rem; color: #64748b; }

        @media (min-width: 1024px) {
          .testimonials-container { padding: 100px 0; }
          .content-grid {
            flex-direction: row;
            gap: 60px;
            align-items: flex-start;
          }
          .image-column { width: 400px; flex-shrink: 0; }
          .image-card { aspect-ratio: 1/1; }
          .quote-column { flex-grow: 1; padding-top: 20px; }
        }
      `}</style>
    </section>
  );
}