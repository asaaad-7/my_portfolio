'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-slate-950 text-white font-heading"
        >
          {/* Glowing Animated Ring */}
          <div className="relative flex items-center justify-center mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
              className="w-28 h-28 rounded-full border-t-2 border-r-2 border-cyan-400 shadow-[0_0_30px_rgba(0,242,254,0.5)]"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
              className="absolute w-20 h-20 rounded-full border-b-2 border-l-2 border-purple-500 shadow-[0_0_30px_rgba(157,78,221,0.5)]"
            />
            <span className="absolute text-xl font-bold tracking-wider gradient-text">
              AA
            </span>
          </div>

          {/* Progress Percentage */}
          <div className="text-center space-y-3">
            <p className="text-sm font-medium tracking-widest text-gray-400 uppercase">
              Initializing Portfolio
            </p>
            <div className="text-4xl font-extrabold text-white">
              {progress}<span className="text-cyan-400 text-2xl">%</span>
            </div>

            {/* Progress Bar Container */}
            <div className="w-64 h-1.5 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full shadow-[0_0_10px_rgba(0,242,254,0.8)]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
