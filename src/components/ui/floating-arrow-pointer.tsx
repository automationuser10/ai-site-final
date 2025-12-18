'use client';

import React from 'react';
import { motion } from 'motion/react';

export const FloatingArrowPointer = () => {
  if (typeof window === 'undefined') return null;

  const radius = 120;
  const duration = 3.5;
  const numPoints = 80;

  const arcPath = Array.from({ length: numPoints }, (_, i) => {
    const progress = i / (numPoints - 1);
    const angle = Math.PI * progress;
    const x = Math.cos(angle) * radius;
    const y = -Math.sin(angle) * radius;

    const nextProgress = (i + 1) / (numPoints - 1);
    const nextAngle = Math.PI * nextProgress;
    const dx = Math.cos(nextAngle) * radius - x;
    const dy = -Math.sin(nextAngle) * radius - y;
    const rotation = Math.atan2(dy, dx) * (180 / Math.PI);

    return { x, y, rotation };
  });

  const xValues = arcPath.map((point) => point.x);
  const yValues = arcPath.map((point) => point.y);
  const rotationValues = arcPath.map((point) => point.rotation);

  return (
    <div className='fixed bottom-[100px] left-[140px] pointer-events-none z-40'>
      <motion.div
        animate={{
          x: xValues,
          y: yValues,
          rotate: rotationValues,
          scale: [1, 1.08, 1],
          opacity: [0.85, 1, 0.85],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div
          className='w-[60px] h-[60px] rounded-full flex items-center justify-center'
          style={{
            background: 'linear-gradient(135deg, #ff9a00 0%, #ffb84d 100%)',
            boxShadow: '0 4px 20px rgba(255, 154, 0, 0.4), 0 0 40px rgba(255, 154, 0, 0.2)',
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2.5'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='text-white'
          >
            <line x1='12' y1='5' x2='12' y2='19'></line>
            <polyline points='5 12 12 19 19 12'></polyline>
          </svg>
        </div>
      </motion.div>
    </div>
  );
};
