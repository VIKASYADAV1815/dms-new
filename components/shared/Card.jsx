'use client';

import { motion } from 'framer-motion';

export function Card({ children, tone = 'dark', hover = true, style, ...props }) {
  const isLight = tone === 'light';
  const baseBackground = isLight
    ? 'linear-gradient(135deg, #ffffff, #f3f4f6)'
    : 'linear-gradient(135deg, #0b1120, #020617)';

  return (
    <motion.article
      initial={{ y: 6, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.45, ease: [0.22, 0.68, 0, 1] }}
      style={{
        position: 'relative',
        borderRadius: 20,
        padding: 20,
        background: baseBackground,
        border: isLight ? '1px solid rgba(209,213,219,0.9)' : '1px solid rgba(31,41,55,0.9)',
        boxShadow: isLight
          ? '0 14px 40px rgba(148,163,184,0.2)'
          : '0 20px 50px rgba(15,23,42,0.8)',
        overflow: 'hidden',
        backdropFilter: isLight ? 'none' : 'blur(10px)',
        ...style,
      }}
      {...props}
    >
      {!isLight && (
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 0% 0%, rgba(248,250,252,0.14), transparent 55%)',
            opacity: 0.9,
            mixBlendMode: 'soft-light',
          }}
        />
      )}
      <div style={{ position: 'relative' }}>{children}</div>
    </motion.article>
  );
}

