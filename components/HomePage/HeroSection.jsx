'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedButton } from '../shared';

// Updated with cybersecurity-specific professional imagery
const heroImages = [
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80', // Binary/Security Code
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&w=1600&q=80', // Server/Network Hardware
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80', // Global Digital Network
];

export function HeroSection() {
  const [index, setIndex] = useState(0);
  const prevIndex = useRef(0);

  useEffect(() => {
    const id = setInterval(() => {
      prevIndex.current = index;
      setIndex((current) => (current + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(id);
  }, [index]);

  return (
    <section 
      className="hero" 
      id="top" 
      style={{ 
        position: 'relative', 
        overflow: 'hidden', 
        minHeight: '85vh', // Tighter viewport height
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        textAlign: 'center',
        background: '#020617' // Deeper dark blue base
      }}
    >
      {/* Background Stacking (Fixes the fade-to-white issue) */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `linear-gradient(to bottom, rgba(2,6,23,0.7), rgba(2,6,23,0.9)), url(${heroImages[prevIndex.current]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `linear-gradient(to bottom, rgba(2,6,23,0.7), rgba(2,6,23,0.9)), url(${heroImages[index]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </AnimatePresence>
      </div>

      <div className="hero-inner" style={{ position: 'relative', zIndex: 1, width: '100%', padding: '0 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: 900, margin: '0 auto' }}
        >
          {/* Top Spacing Reduced (mt-0) */}
          <span className="badge-soft" style={{ display: 'inline-flex', alignItems: 'center', letterSpacing: '0.05em' }}>
            <span className="badge-dot" />
            LIVE DEFENCE · SINCE 2003
          </span>

          <h1 className="hero-copy-title" style={{ 
            fontSize: 'clamp(2rem, 5vw, 3.75rem)', 
            fontWeight: 800, 
            marginTop: '0.75rem', // Reduced MT
            lineHeight: 1.15,
            color: '#f8fafc' 
          }}>
            India&apos;s Most Trusted Internet Security <br className="hidden-mobile" /> Service Company
          </h1>

          <p className="hero-copy-subtitle" style={{ 
            maxWidth: 700, 
            margin: '1rem auto', // Reduced MT/MB
            fontSize: '1.1rem', 
            lineHeight: 1.5, 
            color: '#94a3b8' 
          }}>
            From core networks to the last connected device, D M Systems Pvt Ltd quietly hardens
            India&apos;s digital backbone with pragmatic, battle-tested cyber defence.
          </p>

          {/* Capsule Buttons with reduced MT */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            flexWrap: 'wrap', 
            gap: 12, 
            marginTop: '1.75rem' // Reduced MT
          }}>
            <div style={{ borderRadius: '999px', overflow: 'hidden' }}>
              <AnimatedButton variant="primary">
                <span style={{ padding: '6px 32px', display: 'block', fontWeight: 600 }}>Ticket Generate</span>
              </AnimatedButton>
            </div>
            <div style={{ borderRadius: '999px', overflow: 'hidden' }}>
              <AnimatedButton variant="secondary">
                <span style={{ padding: '6px 32px', display: 'block', fontWeight: 600 }}>Talk to a Security Architect</span>
              </AnimatedButton>
            </div>
          </div>

          {/* Meta Trust Bar */}
          <div className="hero-meta" style={{ 
            marginTop: '3rem', // Reduced MT
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '2.5rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255,255,255,0.06)'
          }}>
            {[
              { label: "24/7/365 Monitoring", color: '#22c55e' },
              { label: "Vendor-agnostic Architecture", color: '#38bdf8' },
              { label: "Pune Headquarters", color: '#fbbf24' }
            ].map((item, i) => (
              <div key={i} className="hero-meta-item" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span className="hero-meta-dot" style={{ 
                  background: item.color, 
                  boxShadow: `0 0 10px ${item.color}44`,
                  width: '8px',
                  height: '8px'
                }} />
                <span style={{ fontSize: '0.85rem', fontWeight: 500, color: '#cbd5e1' }}>{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}