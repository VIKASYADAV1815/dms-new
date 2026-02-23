'use client';

import { motion } from 'framer-motion';

export function Logo() {
  return (
    <motion.img
      src="https://dmsystems.in/wp-content/uploads/2020/01/DM-Logo-100-100-2014.jpg"
      alt="D M Systems Pvt Ltd"
      width={50}
      height={50}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        borderRadius: 8,
      }}
    />
  );
}

