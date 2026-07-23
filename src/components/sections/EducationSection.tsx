'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, CheckCircle, Award, BookOpen } from 'lucide-react';

const timelineEvents = [
  {
    period: '2024 - Present',
    title: 'Bachelor of Science in Software Engineering',
    institution: 'Daffodil International University (DIU)',
    location: 'Dhaka, Bangladesh',
    status: 'Current: 4th Semester',
    description: 'Specializing in software architecture, object-oriented design patterns, database engineering, data structures & algorithms, and web application development.',
    highlights: [
      'Object-Oriented Programming (Java)',
      'Data Structures & Algorithm Design',
      'Database Management Systems (MySQL & SQL)',
      'Software Requirement Engineering & UML',
    ],
    badge: 'Undergraduate',
  },
  {
    period: 'Session: 2022',
    title: 'Higher Secondary Certificate (HSC)',
    institution: 'Collectorate School and College, Rangpur',
    location: 'Rangpur, Bangladesh',
    status: 'GPA: 5.00 / 5.00',
    description: 'Completed Higher Secondary Education in the Science stream with outstanding academic performance (GPA 5.00). Focus on Physics, Mathematics, Chemistry, and Information & Communication Technology.',
    highlights: [
      'Group: Science',
      'GPA: 5.00 (Golden Record)',
      'ICT & Computer Fundamentals',
      'Advanced Mathematics & Physics',
    ],
    badge: 'HSC Excellence',
  },
  {
    period: 'Session: 2020',
    title: 'Secondary School Certificate (SSC)',
    institution: 'BIAM Model School and College, Rangpur',
    location: 'Rangpur, Bangladesh',
    status: 'GPA: 5.00 / 5.00',
    description: 'Completed Secondary School Education in Science stream achieving perfect GPA 5.00. Built strong foundation in science, mathematics, and logical reasoning.',
    highlights: [
      'Group: Science',
      'GPA: 5.00 (Golden Record)',
      'General Science & Mathematics',
      'Computer Studies',
    ],
    badge: 'SSC Excellence',
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="relative py-24 bg-slate-950/60 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-cyan-400 text-xs font-semibold uppercase tracking-wider"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Journey</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            Education & <span className="gradient-text">Qualifications</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg"
          >
            Academic trajectory from SSC (BIAM Model School) & HSC (Collectorate School) to B.Sc. in Software Engineering at Daffodil International University.
          </motion.p>
        </div>

        {/* Timeline Path */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Glow Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-transparent transform -translate-x-1/2 opacity-40" />

          <div className="space-y-12">
            {timelineEvents.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Glowing Node Dot */}
                  <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 top-6 z-20">
                    <div className="w-6 h-6 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(0,242,254,0.8)]">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="w-full sm:w-[45%] pl-12 sm:pl-0 sm:px-6">
                    <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl border-white/10 space-y-4">
                      
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                          <Calendar className="w-3 h-3" />
                          <span>{item.period}</span>
                        </span>
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          {item.status}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold font-heading text-white">
                        {item.title}
                      </h3>

                      <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
                        <span className="font-semibold text-gray-300">{item.institution}</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-cyan-400" />
                          <span>{item.location}</span>
                        </span>
                      </div>

                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>

                      {/* Coursework Bullet Highlights */}
                      <div className="space-y-2 pt-2 border-t border-white/5">
                        <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">Highlights</span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          {item.highlights.map((hl) => (
                            <div key={hl} className="flex items-center gap-2 text-xs text-gray-300">
                              <CheckCircle className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                              <span>{hl}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
