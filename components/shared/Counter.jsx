'use client';

import { useEffect } from 'react';
import { useMotionValue, useTransform, animate, motion } from 'framer-motion';

export function Counter({ value, prefix = '+', label }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest).toLocaleString('en-IN'));

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.15,
    });
    return () => controls.stop();
  }, [count, value]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <motion.div
        style={{ fontSize: 26, fontWeight: 600, letterSpacing: '-0.04em', color: '#0b1120' }}
      >
        <span style={{ color: '#2563eb', marginRight: 4 }}>{prefix}</span>
        <motion.span>{rounded}</motion.span>
      </motion.div>
      <div style={{ fontSize: 13, color: '#6b7280' }}>{label}</div>
    </div>
  );
}

