'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, AlertTriangle } from 'lucide-react';

const valueProps = [
  {
    number: '01',
    title: 'CUSTOMIZED SOLUTIONS',
    desc: 'Offering solutions that have the requisite features to ensure covering and protecting all areas of your business.'
  },
  {
    number: '02',
    title: 'PROOF OF CONCEPT',
    desc: 'We offer proof of offered solution through a small test run which demonstrates the feasibility in the given work environment.'
  },
  {
    number: '03',
    title: 'DATA CONTINUITY SOLUTIONS',
    desc: 'We offer seamless solutions that support your business by offering continuity solutions through data protection.'
  }
];

export function InsightSection() {
  return (
    <section className="insight-section">
      <div className="container">
        
        {/* Top Feature Grid */}
        <div className="value-grid">
          {valueProps.map((prop, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="value-item"
            >
              <div className="number-display">{prop.number}</div>
              <div className="value-content">
                <h3 className="value-title">{prop.title}</h3>
                <p className="value-desc">{prop.desc}</p>
              </div>
              {idx < valueProps.length - 1 && <div className="v-divider" />}
            </motion.div>
          ))}
        </div>

        {/* Data Breach Awareness Block */}
        <div className="breach-card">
          <div className="breach-grid">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="breach-image-side"
            >
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" 
                alt="Security Analysis" 
                className="main-img"
              />
              <div className="stat-floating-badge">
                <AlertTriangle size={20} />
                <span>Critical Risk Factor</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="breach-text-side"
            >
              <h2 className="breach-title">
                DO YOU KNOW THAT THE AVERAGE COST OF <span className="highlight">DATA BREACH IS $3.86 MILLION</span>
              </h2>
              <p className="breach-para">
                Most business owners feel that they don’t need to install any type of internet security to protect data and end up paying large sums to hackers. Aside from financial cost, we forget that there are other costs like loss of <strong>Reputation</strong> which may be difficult to recover. 
              </p>
              <p className="breach-para">
                A small investment in protecting your data is a worthy investment for long-term operational stability.
              </p>
              
              <button className="cta-button">
                Read More <ArrowRight size={18} />
              </button>
            </motion.div>
          </div>
        </div>

      </div>

      <style jsx>{`
        .insight-section {
          padding: 80px 0;
          background: #ffffff;
          overflow: hidden;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Value Grid Styles */
        .value-grid {
          display: flex;
          flex-direction: column;
          gap: 40px;
          margin-bottom: 100px;
        }
        .value-item {
          display: flex;
          gap: 25px;
          position: relative;
        }
        .number-display {
          font-size: 3.5rem;
          font-weight: 900;
          color: #2563eb;
          line-height: 1;
          opacity: 0.9;
        }
        .value-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 10px;
          letter-spacing: 0.05em;
        }
        .value-desc {
          font-size: 0.95rem;
          color: #64748b;
          line-height: 1.6;
          max-width: 400px;
        }

        /* Breach Card Styles */
        .breach-card {
          background: #f8fafc;
          border-radius: 32px;
          padding: 40px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.03);
        }
        .breach-grid {
          display: flex;
          flex-direction: column;
          gap: 50px;
          align-items: center;
        }
        .breach-image-side {
          width: 100%;
          position: relative;
        }
        .main-img {
          width: 100%;
          height: 350px;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }
        .stat-floating-badge {
          position: absolute;
          bottom: 20px;
          left: 20px;
          background: #ef4444;
          color: white;
          padding: 10px 20px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        .breach-title {
          font-size: clamp(1.5rem, 4vw, 2.25rem);
          font-weight: 900;
          line-height: 1.2;
          color: #1e293b;
          margin-bottom: 24px;
        }
        .highlight { color: #0d9488; }
        .breach-para {
          font-size: 1rem;
          color: #475569;
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .cta-button {
          margin-top: 20px;
          background: #0d9488;
          color: white;
          border: none;
          padding: 16px 36px;
          border-radius: 12px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .cta-button:hover {
          background: #0f172a;
          transform: translateX(5px);
        }

        @media (min-width: 1024px) {
          .value-grid {
            flex-direction: row;
            justify-content: space-between;
          }
          .value-item {
            flex: 1;
            padding-right: 40px;
          }
          .v-divider {
            position: absolute;
            right: 0;
            top: 10%;
            height: 80%;
            width: 1px;
            background: #e2e8f0;
          }
          .breach-grid {
            flex-direction: row;
          }
          .breach-image-side, .breach-text-side {
            flex: 1;
          }
          .main-img {
            height: 450px;
          }
        }
      `}</style>
    </section>
  );
}