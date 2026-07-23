'use client';

import { motion } from 'framer-motion';
import { Briefcase, Zap, HeartHandshake, GitPullRequest, CheckCircle2, ArrowUpRight } from 'lucide-react';

const highlights = [
  {
    title: 'Fast Learner',
    icon: Zap,
    desc: 'Adapt quickly to modern programming frameworks, new libraries, and software engineering tools.',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Passionate Developer',
    icon: HeartHandshake,
    desc: 'Driven by curiosity to construct clean code, solve complex algorithms, and build intuitive user experiences.',
    color: 'from-purple-500 to-pink-600',
  },
  {
    title: 'Open Source Learner',
    icon: GitPullRequest,
    desc: 'Actively studying open source repositories, practicing Git workflows, and building real-world projects.',
    color: 'from-blue-500 to-indigo-600',
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 bg-slate-950/50 overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-cyan-400 text-xs font-semibold uppercase tracking-wider"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Readiness</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            Experience & <span className="gradient-text">Readiness</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg"
          >
            Building a strong foundation for software engineering roles and industry internships.
          </motion.p>
        </div>

        {/* Highlight Banner Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative glass-card p-8 sm:p-12 rounded-3xl border-cyan-500/30 overflow-hidden mb-12 shadow-[0_0_40px_rgba(0,242,254,0.15)] text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-semibold border border-cyan-500/20">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Available for Roles</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-white">
              Currently seeking internship opportunities.
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Eager to join dynamic software teams, learn industry best practices, and contribute towards production web & database projects.
            </p>
          </div>

          <a
            href="#contact"
            className="flex-shrink-0 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:shadow-[0_0_25px_rgba(0,242,254,0.5)] transition-all flex items-center gap-2"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* 3 Core Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card glass-card-hover p-8 rounded-3xl border-white/10 space-y-4"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${item.color} flex items-center justify-center text-white shadow-lg`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold font-heading text-white">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
