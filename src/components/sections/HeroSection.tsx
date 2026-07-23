'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Mail, Code2, Database, Terminal, ChevronDown, RefreshCw, Sparkles } from 'lucide-react';
import HeroCanvas from '../ui/3D/HeroCanvas';
import ResumeModal from '../modals/ResumeModal';

const typingTexts = [
  'Software Engineering Student',
  'Building Modern Web Experiences',
  'Learning Software Engineering',
  'Problem Solver & Tech Enthusiast',
];

const profileImages = [
  { id: 1, src: '/asad_profile_1.jpg', title: 'Campus Life', location: 'Daffodil Int. University' },
  { id: 2, src: '/asad_profile_2.jpg', title: 'Software Engineering', location: 'Dhaka, Bangladesh' },
  { id: 3, src: '/asad_profile_3.jpg', title: 'Tech & Lifestyle', location: 'Rangpur & Dhaka' },
];

export default function HeroSection() {
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  
  // Index of the top card in the deck
  const [cards, setCards] = useState([0, 1, 2]);
  const [isAutoShuffling, setIsAutoShuffling] = useState(true);

  // Auto-shuffle cards every 4.5 seconds
  useEffect(() => {
    if (!isAutoShuffling) return;
    const interval = setInterval(() => {
      handleShuffle();
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoShuffling]);

  const handleShuffle = () => {
    setCards((prevCards) => {
      const newCards = [...prevCards];
      const frontCard = newCards.shift();
      if (frontCard !== undefined) {
        newCards.push(frontCard);
      }
      return newCards;
    });
  };

  // Typing effect logic
  useEffect(() => {
    const fullText = typingTexts[textIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const handleTyping = () => {
      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % typingTexts.length);
      } else {
        setCurrentText(
          fullText.substring(0, isDeleting ? currentText.length - 1 : currentText.length + 1)
        );
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* 3D Hero Canvas Background */}
      <HeroCanvas />

      {/* Dynamic Radial Gradient Aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-500/20 via-purple-600/15 to-magenta-500/20 rounded-full blur-[160px] pointer-events-none z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Intro Text */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Academic Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-cyan-500/40 text-cyan-300 text-xs font-semibold tracking-wider uppercase shadow-[0_0_20px_rgba(0,242,254,0.25)]"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              <span>4th Semester • Daffodil International University</span>
            </motion.div>

            {/* Main Greeting & Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <h2 className="text-xl sm:text-2xl text-gray-300 font-medium tracking-wide">
                Hi, I'm
              </h2>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading tracking-tight text-white">
                Asaduzzaman <span className="gradient-text">Asad</span>
              </h1>
            </motion.div>

            {/* Animated Typing Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-12 flex items-center justify-center lg:justify-start"
            >
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading text-cyan-300">
                {currentText}
              </span>
              <span className="w-0.5 h-7 ml-1 bg-cyan-400 animate-pulse" />
            </motion.div>

            {/* Description Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Building modern web experiences and learning software engineering. Passionate about algorithms, full-stack web applications, database management systems, and continuous innovation.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <a
                href="#projects"
                className="group relative px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 shadow-[0_0_25px_rgba(0,242,254,0.4)] hover:shadow-[0_0_35px_rgba(0,242,254,0.7)] transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-white glass-card hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>

              <button
                onClick={() => setIsResumeOpen(true)}
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-cyan-300 glass-card border-cyan-500/30 hover:border-cyan-400 hover:text-white transition-all duration-300 flex items-center gap-2 shadow-[0_0_15px_rgba(0,242,254,0.15)] transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Ultra Attractive 3D Stack Shuffling Deck */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative pt-6 lg:pt-0">
            
            {/* Outer Glowing Background Frame */}
            <div className="relative w-72 h-[420px] sm:w-84 sm:h-[460px] lg:w-88 lg:h-[480px]">
              
              {/* Pulsing Cyber Ambient Glow behind frame */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500 via-purple-600 to-pink-500 blur-3xl opacity-50 animate-pulse-glow" />

              {/* Glass Frame Border Box */}
              <div className="relative w-full h-full rounded-3xl glass-card p-3 border border-white/20 shadow-[0_0_60px_rgba(0,242,254,0.25)] flex items-center justify-center">
                
                {/* 3D Stack Deck Container */}
                <div
                  className="relative w-full h-full rounded-2xl overflow-visible cursor-pointer"
                  onClick={() => {
                    setIsAutoShuffling(false);
                    handleShuffle();
                  }}
                  title="Click to Shuffle Photo"
                >
                  <AnimatePresence initial={false}>
                    {cards.map((imageIdx, stackPosition) => {
                      const imgData = profileImages[imageIdx];
                      const isTopCard = stackPosition === 0;
                      
                      // 3D positioning calculations for depth
                      const scale = 1 - stackPosition * 0.06;
                      const yOffset = stackPosition * 14;
                      const rotation = stackPosition === 0 ? 0 : stackPosition === 1 ? 5 : -5;
                      const zIndex = 30 - stackPosition * 10;

                      return (
                        <motion.div
                          key={imgData.id}
                          layout
                          initial={{ scale: 0.8, opacity: 0, y: 50 }}
                          animate={{
                            scale,
                            y: yOffset,
                            rotate: rotation,
                            opacity: 1,
                            zIndex,
                          }}
                          exit={{
                            x: 300,
                            rotate: 25,
                            opacity: 0,
                            scale: 0.8,
                          }}
                          transition={{
                            type: 'spring',
                            stiffness: 260,
                            damping: 20,
                          }}
                          className="absolute inset-0 rounded-2xl overflow-hidden glass-card border border-white/20 shadow-[0_15px_35px_rgba(0,0,0,0.5)]"
                        >
                          <Image
                            src={imgData.src}
                            alt={`Asaduzzaman Asad Photo ${imgData.id}`}
                            fill
                            className="object-cover object-top filter contrast-[1.05]"
                            priority={isTopCard}
                          />

                          {/* Top Card Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

                          {/* Card Content Footer */}
                          {isTopCard && (
                            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-20">
                              <div>
                                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/85 backdrop-blur-md text-cyan-300 border border-cyan-500/40">
                                  {imgData.title}
                                </span>
                                <p className="text-[11px] font-mono text-gray-300 mt-1.5 flex items-center gap-1">
                                  <span>📍 {imgData.location}</span>
                                </p>
                              </div>

                              <span className="text-[11px] font-mono text-gray-400 bg-slate-950/80 px-2 py-1 rounded-md border border-white/10">
                                {cards[0] + 1}/3
                              </span>
                            </div>
                          )}
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>

                {/* Floating Tech Badges */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                  className="absolute -top-4 -left-4 glass-card px-3 py-2 rounded-xl border-cyan-400/40 flex items-center gap-2 shadow-xl z-40"
                >
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-semibold text-white">Java & C++</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
                  className="absolute -bottom-4 -right-4 glass-card px-3 py-2 rounded-xl border-purple-400/40 flex items-center gap-2 shadow-xl z-40"
                >
                  <Terminal className="w-4 h-4 text-purple-400" />
                  <span className="text-xs font-semibold text-white">Next.js & React</span>
                </motion.div>

              </div>
            </div>

            {/* Shuffle Interactive Trigger Bar */}
            <div className="flex items-center gap-3 mt-6">
              <button
                onClick={() => {
                  setIsAutoShuffling(false);
                  handleShuffle();
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border-cyan-500/40 text-cyan-300 text-xs font-semibold hover:border-cyan-400 hover:text-white transition-all shadow-[0_0_15px_rgba(0,242,254,0.2)] group"
              >
                <RefreshCw className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-180 transition-transform duration-500" />
                <span>Shuffle Photo</span>
              </button>

              <div className="flex gap-1.5">
                {profileImages.map((_, idx) => (
                  <span
                    key={idx}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      cards[0] === idx
                        ? 'w-6 bg-cyan-400 shadow-[0_0_10px_rgba(0,242,254,0.8)]'
                        : 'w-2 bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Scroll Indicator Arrow */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
          <span className="text-xs uppercase tracking-widest font-mono">Scroll Down</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
        </div>
      </div>

      {/* Resume Modal Dialog */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
}
