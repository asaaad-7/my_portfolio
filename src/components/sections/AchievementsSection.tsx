'use client';

import { motion } from 'framer-motion';
import { Award, Code, Database, BookOpen, Sparkles, Flame, CheckCircle2 } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: 'Academic Projects Excellence',
    category: 'University Projects',
    icon: Award,
    stats: '5+ Projects',
    desc: 'Successfully implemented end-to-end applications including Library & Student Management Systems using Java, Python, MySQL, and modern web frameworks.',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    id: 2,
    title: 'Programming Practice',
    category: 'Problem Solving',
    icon: Code,
    stats: '150+ Problems',
    desc: 'Regularly practicing data structures and competitive programming problem solving in C, C++, and Java across online coding platforms.',
    color: 'from-purple-500 to-magenta-500',
  },
  {
    id: 3,
    title: 'Database Architecture & Design',
    category: 'Core Competency',
    icon: Database,
    stats: '100% Relational Schema Mastery',
    desc: 'Proficient in ER diagram creation, relational schema normalization (3NF), complex SQL queries, JOINs, indexing, and transactional integrity.',
    color: 'from-blue-600 to-indigo-600',
  },
  {
    id: 4,
    title: 'Software Engineering Coursework',
    category: 'DIU Curriculum',
    icon: BookOpen,
    stats: '4th Semester Honors',
    desc: 'Consistently maintaining top academic performance across Software Requirement Specification, UML Modeling, and Agile methodologies.',
    color: 'from-emerald-500 to-cyan-500',
  },
  {
    id: 5,
    title: 'Continuous Learning',
    category: 'Self-Improvement',
    icon: Flame,
    stats: 'Daily Code Streak',
    desc: 'Continuously expanding skills in modern Web Engineering, TypeScript, Next.js App Router, 3D graphics, and responsive UI design systems.',
    color: 'from-orange-500 to-red-500',
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

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
            <span>Milestones & Growth</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            Key <span className="gradient-text">Achievements</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg"
          >
            Recognizing academic accomplishments, technical practice milestones, and continuous skill refinement.
          </motion.p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="glass-card glass-card-hover p-8 rounded-3xl border-white/10 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${item.color} flex items-center justify-center text-white shadow-lg`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white/5 text-cyan-400 border border-white/10">
                      {item.stats}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">{item.category}</span>
                    <h3 className="text-xl font-bold font-heading text-white mt-1">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-cyan-400 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Verified Skill Milestone</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
