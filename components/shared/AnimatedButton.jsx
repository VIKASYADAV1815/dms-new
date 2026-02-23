'use client';

import { motion } from 'framer-motion';

export function AnimatedButton({ children, variant = 'primary', ...props }) {
  const isPrimary = variant === 'primary';

  const background = isPrimary ? '#1d4ed8' : '#ffffff';
  const color = isPrimary ? '#f9fafb' : '#111827';
  const borderColor = isPrimary ? 'transparent' : 'rgba(148,163,184,0.6)';

  return (
    <motion.button
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.98, y: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      style={{
        position: 'relative',
        borderRadius: 999,
        padding: isPrimary ? '10px 18px' : '9px 18px',
        border: `1px solid ${borderColor}`,
        background,
        color,
        fontSize: 13,
        fontWeight: 500,
        letterSpacing: 0.08,
        textTransform: 'uppercase',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        cursor: 'pointer',
        boxShadow: isPrimary
          ? '0 12px 30px rgba(37,99,235,0.45)'
          : '0 6px 18px rgba(148,163,184,0.4)',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}
      {...props}
    >
      <span
        style={{
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        {children}
        <span
          aria-hidden="true"
          style={{
            width: 16,
            height: 16,
            borderRadius: 999,
            background: isPrimary ? '#eff6ff' : '#e5e7eb',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#1e293b',
            fontSize: 10,
          }}
        >
          ↗
        </span>
      </span>
    </motion.button>
  );
}

