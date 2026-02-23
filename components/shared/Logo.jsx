'use client';

import { motion } from 'framer-motion';

export function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        width: 36,
        height: 36,
        borderRadius: 12,
        position: 'relative',
        background: '#0f172a',
        boxShadow: '0 10px 24px rgba(15,23,42,0.35)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid rgba(148,163,184,0.7)',
      }}
      aria-label="D M Systems Pvt Ltd"
    >
      <div
        style={{
          position: 'relative',
          width: 18,
          height: 18,
          borderRadius: 8,
          border: '1px solid rgba(148,163,184,0.9)',
          background: '#020617',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 0 1px rgba(15,23,42,1)',
        }}
      >
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: 5,
            border: '1px solid rgba(148,163,184,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: 4,
              height: 4,
              borderRadius: 999,
              background: '#22c55e',
              boxShadow: '0 0 10px rgba(34,197,94,0.8)',
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

