'use client';

import { motion } from 'framer-motion';
import { Card } from '../shared';

const features = [
  {
    id: 1,
    title: 'Quick Response Team (QRT)',
    description:
      'Specialised engineers on-call for critical incidents, change windows and field interventions across India.',
    accent: '#22c55e',
  },
  {
    id: 2,
    title: 'Deep Experience',
    description:
      'Decades of hands-on work designing, deploying and managing security infrastructure for demanding sectors.',
    accent: '#2563eb',
  },
  {
    id: 3,
    title: 'Repertoire of Solutions',
    description:
      'From UTM and SD-WAN to advanced threat protection, we stitch together what fits your context.',
    accent: '#f97316',
  },
  {
    id: 4,
    title: 'Operational Excellence',
    description:
      'Playbooks, documentation and monitoring tuned so that daily operations stay boring—in the best way.',
    accent: '#06b6d4',
  },
];

export function FeaturesSection() {
  return (
    <section className="section light-section text-dark" id="solutions">
      <div className="section-inner">
        <div className="section-header" style={{ textAlign: 'center', alignItems: 'center' }}>
          <div className="section-kicker">Why D M Systems</div>
          <div className="section-title">Built for real-world security operations</div>
          <p className="section-subtitle">
            Our work lives where technology, process and people meet. We help organisations get to
            a security posture that is robust, maintainable and grounded in how teams actually work.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: 18,
          }}
        >
          {features.map((feature, idx) => (
            <Card
              key={feature.id}
              tone={idx % 2 === 0 ? 'dark' : 'light'}
              style={{
                minHeight: 150,
                position: 'relative',
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.5, delay: 0.08 * idx }}
                style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    marginBottom: 4,
                  }}
                >
                  <span
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: 999,
                      border: '1px solid rgba(148,163,184,0.7)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(15,23,42,0.8)',
                    }}
                  >
                    <span
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: 999,
                        background: feature.accent,
                        boxShadow: `0 0 16px ${feature.accent}`,
                      }}
                    />
                  </span>
                  <h3
                    style={{
                      margin: 0,
                      fontSize: 15,
                      fontWeight: 600,
                      letterSpacing: '-0.03em',
                      color: idx % 2 === 0 ? '#f9fafb' : '#0b1120',
                    }}
                  >
                    {feature.title}
                  </h3>
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: 13,
                    lineHeight: 1.7,
                    color: idx % 2 === 0 ? '#cbd5f5' : '#4b5563',
                  }}
                >
                  {feature.description}
                </p>
              </motion.div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

