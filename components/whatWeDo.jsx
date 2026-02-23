'use client';

import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'PERIMETER SECURITY',
    description: 'A network perimeter is the secured boundary between the private and locally managed side of a network, often a company’s intranet, and the public facing side of a network, often the Internet.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'E-MAIL SECURITY',
    description: 'Email security refers to the collective measures used to secure the access and content of an email account or service. It allows an individual or organization to protect the overall access to one or more email addresses/accounts.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'END POINT SOLUTIONS',
    description: 'A methodology of protecting the corporate network when accessed via remote devices such as laptops or other wireless and mobile devices. Endpoint security is designed to secure each endpoint on the network.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'SECURITY AUDITS',
    description: 'Provide management with an assessment of an organization’s cyber security operating effectiveness. Additionally, cyber security audits identify internal control and regulatory deficiencies.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
  },
];

function WhatWeDo() {
  return (
    <section className="wwd-section">
      <div className="wwd-container">
        {/* Header Section */}
        <div className="wwd-header">
          <h2 className="wwd-title">WHAT WE DO</h2>
          <div className="wwd-underline" />
        </div>

        {/* Services Grid */}
        <div className="wwd-grid">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="wwd-card"
            >
              <div className="wwd-card-image-wrapper">
                <img src={service.image} alt={service.title} className="wwd-card-image" />
              </div>
              
              <div className="wwd-card-content">
                <h3 className="wwd-card-title">{service.title}</h3>
                <p className="wwd-card-description">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .wwd-section {
          padding: 80px 20px;
          background-color: #f8fafc;
          width: 100%;
          box-sizing: border-box;
        }
        .wwd-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .wwd-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .wwd-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #333;
          margin: 0;
          letter-spacing: 0.05em;
        }
        .wwd-underline {
          width: 60px;
          height: 4px;
          background-color: #2dd4bf; /* Teal color from the image line */
          margin: 15px auto 0;
        }

        .wwd-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 25px;
        }

        .wwd-card {
          background: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .wwd-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
        }

        .wwd-card-image-wrapper {
          height: 200px;
          width: 100%;
          overflow: hidden;
        }

        .wwd-card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .wwd-card:hover .wwd-card-image {
          transform: scale(1.1);
        }

        .wwd-card-content {
          padding: 30px;
          text-align: center;
          flex-grow: 1;
        }

        .wwd-card-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 20px;
          letter-spacing: 0.02em;
        }

        .wwd-card-description {
          font-size: 0.95rem;
          color: #64748b;
          line-height: 1.6;
          margin: 0;
        }

        /* Desktop Adjustments */
        @media (min-width: 768px) {
          .wwd-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .wwd-grid {
            grid-template-columns: repeat(4, 1fr);
          }
          .wwd-card-content {
            padding: 40px 20px;
          }
        }
      `}</style>
    </section>
  );
}

export default WhatWeDo;