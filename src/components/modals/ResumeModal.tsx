'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, ExternalLink, GraduationCap, Code, Briefcase, Award, Mail, Phone, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const handleDownload = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });

    // Create a mock download text file representing Asad's resume
    const resumeText = `=====================================================
ASADUZZAMAN ASAD - SOFTWARE ENGINEERING STUDENT
=====================================================
Email: asaduzzaman.asad@diu.edu.bd
University: Daffodil International University (4th Semester)
Location: Dhaka, Bangladesh
GitHub: https://github.com/asaduzzaman-asad
LinkedIn: https://linkedin.com/in/asaduzzaman-asad

OBJECTIVE:
Passionate 4th semester Software Engineering student seeking internship opportunities to leverage problem-solving, database engineering, and modern web application skills.

EDUCATION:
- B.Sc. in Software Engineering | Daffodil International University (Current 4th Semester)

TECHNICAL SKILLS:
- Languages: C, C++, Java, Python, JavaScript, TypeScript, SQL
- Web Technologies: HTML5, CSS3, Tailwind CSS, React.js, Next.js
- Database Systems: MySQL, SQL Server
- Tools & Version Control: Git, GitHub, VS Code, Figma

KEY PROJECTS:
1. Library Management System (Java, MySQL)
2. Student Management System (Java/Python, MySQL)
3. Personal Portfolio Website (Next.js, Three.js, Tailwind CSS)
4. Weather Forecast App (React, OpenWeather API)
5. Task Management To-Do App (React, LocalStorage)

SOFT SKILLS:
Teamwork, Communication, Problem Solving, Leadership, Critical Thinking
=====================================================`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Asaduzzaman_Asad_Resume.txt';
    link.click();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9990] flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-slate-900 border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(0,242,254,0.2)] overflow-hidden my-8"
        >
          {/* Header Action Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-950/60">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-white">
                Asaduzzaman Asad - Curriculum Vitae
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-[0_0_15px_rgba(0,242,254,0.4)] transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Canvas */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto custom-scrollbar text-gray-300 text-sm">
            {/* Header info */}
            <div className="flex flex-col sm:flex-row justify-between items-start border-b border-white/10 pb-6 gap-4">
              <div>
                <h1 className="text-2xl font-bold font-heading text-white">
                  Asaduzzaman Asad
                </h1>
                <p className="text-cyan-400 font-medium mt-1">
                  Software Engineering Student (4th Semester)
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  Daffodil International University • Dhaka, Bangladesh
                </p>
              </div>
              <div className="space-y-1.5 text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>asaduzzaman.asad@diu.edu.bd</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>

            {/* Objective */}
            <div>
              <h4 className="text-sm font-bold font-heading text-white uppercase tracking-wider text-cyan-400 mb-2">
                Career Objective
              </h4>
              <p className="leading-relaxed text-gray-300">
                Dedicated and enthusiastic Software Engineering student passionate about building scalable web applications, mastering data structures & algorithms, and implementing user-centric solutions. Actively seeking software development internship opportunities to contribute and learn.
              </p>
            </div>

            {/* Education */}
            <div>
              <h4 className="text-sm font-bold font-heading text-white uppercase tracking-wider text-cyan-400 mb-3">
                Education
              </h4>
              <div className="bg-slate-950/60 p-4 rounded-xl border border-white/5 space-y-1">
                <div className="flex justify-between items-center">
                  <h5 className="font-semibold text-white">
                    Bachelor of Science in Software Engineering
                  </h5>
                  <span className="text-xs text-cyan-400 font-mono">Current: 4th Semester</span>
                </div>
                <p className="text-xs text-gray-400">Daffodil International University, Bangladesh</p>
                <p className="text-xs text-gray-400 mt-2">
                  Key Coursework: Object-Oriented Programming (Java), Data Structures, Database Management Systems (MySQL), Software Requirement Engineering, Web Engineering.
                </p>
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h4 className="text-sm font-bold font-heading text-white uppercase tracking-wider text-cyan-400 mb-3">
                Technical Skills
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-slate-950/60 p-3.5 rounded-xl border border-white/5">
                  <span className="text-white font-semibold">Languages:</span> C, C++, Java, Python, JavaScript, SQL
                </div>
                <div className="bg-slate-950/60 p-3.5 rounded-xl border border-white/5">
                  <span className="text-white font-semibold">Web Technologies:</span> HTML5, CSS3, Tailwind CSS, React, Next.js
                </div>
                <div className="bg-slate-950/60 p-3.5 rounded-xl border border-white/5">
                  <span className="text-white font-semibold">Database:</span> MySQL, SQL Query Design
                </div>
                <div className="bg-slate-950/60 p-3.5 rounded-xl border border-white/5">
                  <span className="text-white font-semibold">Tools & Version Control:</span> Git, GitHub, VS Code, Figma
                </div>
              </div>
            </div>

            {/* Key Projects */}
            <div>
              <h4 className="text-sm font-bold font-heading text-white uppercase tracking-wider text-cyan-400 mb-3">
                Featured Projects
              </h4>
              <div className="space-y-3 text-xs">
                <div className="bg-slate-950/60 p-3.5 rounded-xl border border-white/5">
                  <div className="flex justify-between text-white font-semibold mb-1">
                    <span>Library Management System</span>
                    <span className="text-cyan-400 font-mono">Java & MySQL</span>
                  </div>
                  <p className="text-gray-400">
                    Comprehensive desktop application with book issue/return tracking, member authentication, search filtering, and reporting.
                  </p>
                </div>
                <div className="bg-slate-950/60 p-3.5 rounded-xl border border-white/5">
                  <div className="flex justify-between text-white font-semibold mb-1">
                    <span>Interactive Portfolio Website</span>
                    <span className="text-cyan-400 font-mono">Next.js & Three.js</span>
                  </div>
                  <p className="text-gray-400">
                    Award-winning quality dark theme portfolio featuring 3D graphics, Framer Motion animations, interactive timeline, and micro-interactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
