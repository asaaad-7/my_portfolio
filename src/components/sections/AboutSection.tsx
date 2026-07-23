'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { User, BookOpen, Target, Sparkles, Heart, Compass, CheckCircle2, MapPin, GraduationCap } from 'lucide-react';

const tabs = [
  { id: 'bio', label: 'Biography', icon: User },
  { id: 'education', label: 'Education Card', icon: BookOpen },
  { id: 'interests', label: 'Key Interests', icon: Heart },
  { id: 'goals', label: 'Career Goals', icon: Target },
];

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('bio');

  return (
    <section id="about" className="relative py-24 bg-slate-950/50 overflow-hidden">
      {/* Background Subtle Gradient Orb */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-cyan-400 text-xs font-semibold uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover My Background</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg"
          >
            Software Engineering student driven by curiosity, code craftsmanship, and modern web application design.
          </motion.p>
        </div>

        {/* Interactive Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl glass-card border border-white/10 gap-1.5 flex-wrap justify-center">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-[0_0_15px_rgba(0,242,254,0.4)]'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content Layout with Side Photo Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Left Side Photo Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative w-full max-w-sm rounded-3xl glass-card p-3 border-white/10 shadow-[0_0_30px_rgba(0,242,254,0.15)] group">
              <div className="relative h-88 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-950">
                <Image
                  src="/asad_profile_2.jpg"
                  alt="Asaduzzaman Asad About Profile"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <h4 className="text-lg font-bold font-heading text-white">
                    Asaduzzaman Asad
                  </h4>
                  <div className="flex items-center justify-between text-xs text-gray-300">
                    <span className="flex items-center gap-1 text-cyan-400">
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span>DIU SE Student</span>
                    </span>
                    <span className="flex items-center gap-1 text-gray-400">
                      <MapPin className="w-3.5 h-3.5 text-purple-400" />
                      <span>Bangladesh</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-8"
          >
            {activeTab === 'bio' && (
              <div className="glass-card p-8 sm:p-10 rounded-3xl space-y-6 border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.3)]">
                <h3 className="text-2xl font-bold font-heading text-white flex items-center gap-3">
                  <Compass className="w-6 h-6 text-cyan-400" />
                  <span>Personal Overview</span>
                </h3>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  "I am a 4th Semester Software Engineering student at Daffodil International University. I am passionate about software development, problem solving, database systems, web technologies, and creating user-friendly applications. I enjoy learning new technologies and continuously improving my programming skills."
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-center sm:text-left">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gray-400 font-mono">Location</span>
                    <p className="text-sm font-semibold text-white mt-1">Dhaka, Bangladesh 🇧🇩</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gray-400 font-mono">University</span>
                    <p className="text-sm font-semibold text-white mt-1">Daffodil Int. University</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gray-400 font-mono">Academic Status</span>
                    <p className="text-sm font-semibold text-cyan-400 mt-1">4th Semester (B.Sc. SE)</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'education' && (
              <div className="glass-card p-8 sm:p-10 rounded-3xl space-y-6 border-white/10">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Undergraduate Degree</span>
                    <h3 className="text-2xl font-bold font-heading text-white mt-1">
                      Bachelor of Science in Software Engineering
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">Daffodil International University (DIU)</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    4th Semester
                  </span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Curriculum focuses on software architecture, object-oriented design patterns, database architecture, data structures, and software requirements analysis.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {['OOP with Java', 'Data Structures & Algorithms', 'Database Systems (MySQL)', 'Software Requirements Eng.'].map((course) => (
                    <div key={course} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-xs font-medium text-gray-200">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'interests' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Web Application Dev', desc: 'Building responsive, scalable web apps with Next.js, React, and Tailwind CSS.' },
                  { title: 'Problem Solving', desc: 'Practicing algorithmic thinking and object-oriented software design in Java & C++.' },
                  { title: 'Database Architecture', desc: 'Designing relational database schemas, complex SQL queries, and efficient storage.' },
                  { title: 'UI/UX Design & Micro-interactions', desc: 'Crafting sleek glassmorphic interfaces with smooth animations and interactive feel.' },
                ].map((interest) => (
                  <div key={interest.title} className="glass-card p-6 rounded-2xl border-white/10 hover:border-cyan-500/40 transition-all">
                    <h4 className="text-base font-bold font-heading text-white mb-2 text-cyan-300">
                      {interest.title}
                    </h4>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {interest.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'goals' && (
              <div className="glass-card p-8 sm:p-10 rounded-3xl space-y-6 border-white/10">
                <h3 className="text-2xl font-bold font-heading text-white flex items-center gap-3">
                  <Target className="w-6 h-6 text-purple-400" />
                  <span>Career Ambitions</span>
                </h3>
                <div className="space-y-4 text-sm text-gray-300">
                  <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 space-y-1">
                    <h4 className="font-semibold text-white text-base">Short-Term Goal</h4>
                    <p className="text-gray-400">Secure a Software Engineering internship position to gain real-world industry experience, contribute to production code, and collaborate in agile development teams.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 space-y-1">
                    <h4 className="font-semibold text-white text-base">Long-Term Vision</h4>
                    <p className="text-gray-400">Become a Senior Software Engineer specializing in full-stack web platforms, distributed systems, and modern cloud technologies.</p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
