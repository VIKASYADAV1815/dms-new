'use client';

import { motion } from 'framer-motion';
import { Card, Counter } from '../shared';

const metrics = [
  {
    id: 1,
    value: 21600,
    suffix: '+',
    label: 'UTMs deployed & maintained across enterprises, BFSI & public sector',
    gradient: 'linear-gradient(to right, #2563eb, #38bdf8)',
  },
  {
    id: 2,
    value: 2000,
    suffix: '+',
    label: 'Customers who trust D M Systems with their critical connectivity',
    gradient: 'linear-gradient(to right, #22c55e, #a3e635)',
  },
  {
    id: 3,
    value: 120000,
    suffix: '+',
    label: 'Users safeguarded behind our network security architectures',
    gradient: 'linear-gradient(to right, #ec4899, #f97316)',
  },
];

export function StatisticsSection() {
  return (
    <section className="section light-section" id="impact" style={{ padding: '80px 0' }}>
      <div className="section-inner">
        {/* Header - Reduced mt and tightened spacing */}
        <div className="section-header" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 50px auto' }}>
          <span className="section-kicker" style={{ fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.85rem', color: '#2563eb' }}>
            Impact at scale
          </span>
          <h2 className="section-title" style={{ marginTop: '0.5rem', fontSize: '2.5rem', fontWeight: 800 }}>
            Numbers that quietly tell the story
          </h2>
          <p className="section-subtitle" style={{ marginTop: '1rem', fontSize: '1.1rem', color: '#475569', lineHeight: 1.6 }}>
            Behind every device, branch office and datacentre, there&apos;s a secure link
            keeping your business moving. These numbers reflect years of execution across India.
          </p>
        </div>

        {/* Metrics Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {metrics.map((metric) => (
            <motion.div
              key={metric.id}
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Card
                tone="light"
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '32px',
                  borderRadius: '16px',
                  border: '1px solid rgba(0,0,0,0.05)',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                  backgroundColor: '#ffffff',
                }}
              >
                <div style={{ flex: 1 }}>
                  <Counter 
                    value={metric.value} 
                    label="" // Pass empty to handle label customly for better styling
                  />
                  {/* Big Number Suffix (e.g. 21600+) */}
                  <div style={{ fontSize: '0.95rem', fontWeight: 500, color: '#64748b', marginTop: '12px', lineHeight: 1.5 }}>
                    {metric.label}
                  </div>
                </div>
                
                {/* Visual Progress Bar - Capsule style */}
                <div
                  style={{
                    marginTop: '24px',
                    height: '5px',
                    borderRadius: '999px',
                    background: metric.gradient,
                    width: '40%', // Decorative width
                    opacity: 0.8,
                  }}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}