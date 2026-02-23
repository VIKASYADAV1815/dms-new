'use client';

import { motion } from 'framer-motion';
import { AnimatedButton, Card } from '../shared';

export function CTASection() {
  return (
    <section className="section light-section" id="contact" style={{ padding: '60px 0' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="section-inner">
          <Card
            tone="light"
            hover={false}
            style={{
              borderRadius: 32,
              padding: '48px 40px',
              border: '1px solid rgba(0,0,0,0.04)',
              boxShadow: '0 20px 40px -15px rgba(0,0,0,0.05)',
              background: 'linear-gradient(145deg, #ffffff, #f8fafc)',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 24,
                textAlign: 'center', // Centered for impact
                alignItems: 'center',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="pill" style={{ background: '#f1f5f9', color: '#2563eb', fontWeight: 600 }}>
                  <span className="pill-dot" style={{ background: '#2563eb' }} />
                  Direct Consultation
                </div>
                
                <h2
                  style={{
                    margin: '16px 0 12px',
                    fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    color: '#0f172a',
                    lineHeight: 1.2,
                  }}
                >
                  Get a free audit of your security system
                </h2>
                
                <p
                  style={{
                    margin: '0 auto',
                    maxWidth: 600,
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    color: '#475569',
                  }}
                >
                  Share your current network architecture, and our senior architects will provide a 
                  pragmatic, vendor-neutral view of gaps and quick wins.
                </p>
              </div>

              {/* Capsule Button Wrapper */}
              <div style={{ borderRadius: '9999px', overflow: 'hidden', marginTop: '8px' }}>
                <AnimatedButton variant="primary">
                  <span style={{ padding: '8px 40px', fontWeight: 600 }}>Request my free audit</span>
                </AnimatedButton>
              </div>

              {/* Footer Trust Items */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  gap: '24px',
                  marginTop: '12px',
                  fontSize: '0.85rem',
                  color: '#64748b',
                  fontWeight: 500,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#2563eb' }}>
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                   </svg>
                   Typically responds within 1–2 business days
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: '#22c55e',
                      boxShadow: '0 0 8px rgba(34, 197, 94, 0.4)',
                    }}
                  />
                  <span>No automated reports. Every audit is hand-crafted.</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}