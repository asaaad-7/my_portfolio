'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Database, Wrench, Users, Sparkles } from 'lucide-react';

interface Skill {
  name: string;
  category: 'programming' | 'web' | 'database' | 'tools' | 'soft';
  level: number; // Percentage
  badge: string;
}

const skillsData: Skill[] = [
  // Programming
  { name: 'C', category: 'programming', level: 85, badge: 'Proficient' },
  { name: 'C++', category: 'programming', level: 88, badge: 'Advanced' },
  { name: 'Java', category: 'programming', level: 90, badge: 'Advanced' },
  { name: 'Python', category: 'programming', level: 82, badge: 'Proficient' },
  { name: 'JavaScript', category: 'programming', level: 88, badge: 'Advanced' },

  // Web
  { name: 'HTML5', category: 'web', level: 95, badge: 'Expert' },
  { name: 'CSS3', category: 'web', level: 90, badge: 'Advanced' },
  { name: 'Tailwind CSS', category: 'web', level: 92, badge: 'Expert' },
  { name: 'React.js', category: 'web', level: 88, badge: 'Advanced' },
  { name: 'Next.js', category: 'web', level: 85, badge: 'Proficient' },

  // Database
  { name: 'MySQL', category: 'database', level: 88, badge: 'Advanced' },
  { name: 'SQL Querying', category: 'database', level: 90, badge: 'Advanced' },

  // Tools
  { name: 'Git', category: 'tools', level: 88, badge: 'Advanced' },
  { name: 'GitHub', category: 'tools', level: 90, badge: 'Advanced' },
  { name: 'VS Code', category: 'tools', level: 95, badge: 'Expert' },
  { name: 'Figma', category: 'tools', level: 80, badge: 'Intermediate' },

  // Soft Skills
  { name: 'Teamwork', category: 'soft', level: 95, badge: 'Strong' },
  { name: 'Communication', category: 'soft', level: 90, badge: 'Strong' },
  { name: 'Problem Solving', category: 'soft', level: 92, badge: 'Expert' },
  { name: 'Leadership', category: 'soft', level: 85, badge: 'Proficient' },
  { name: 'Critical Thinking', category: 'soft', level: 90, badge: 'Strong' },
];

const categories = [
  { id: 'all', label: 'All Skills', icon: Sparkles },
  { id: 'programming', label: 'Programming', icon: Code },
  { id: 'web', label: 'Web Technologies', icon: Globe },
  { id: 'database', label: 'Database', icon: Database },
  { id: 'tools', label: 'Tools & IDEs', icon: Wrench },
  { id: 'soft', label: 'Soft Skills', icon: Users },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

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
            <span>Technical Expertise</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            Skills & <span className="gradient-text">Proficiency</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg"
          >
            Comprehensive showcase of programming languages, web engineering stacks, databases, and interpersonal capabilities.
          </motion.p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-[0_0_15px_rgba(0,242,254,0.4)]'
                    : 'glass-card text-gray-400 hover:text-white hover:border-cyan-500/30'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-card glass-card-hover p-6 rounded-2xl border-white/10 space-y-4"
            >
              <div className="flex justify-between items-center">
                <h4 className="text-base font-bold font-heading text-white">
                  {skill.name}
                </h4>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  {skill.badge}
                </span>
              </div>

              {/* Progress Bar Container */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-gray-400 font-mono">
                  <span>Proficiency</span>
                  <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut', delay: index * 0.05 }}
                    className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full shadow-[0_0_10px_rgba(0,242,254,0.6)]"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
