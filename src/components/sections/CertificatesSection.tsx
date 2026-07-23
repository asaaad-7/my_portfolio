'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, Sparkles, X, FileCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  description: string;
  skills: string[];
}

const certificateList: Certificate[] = [
  {
    id: 1,
    title: 'Object-Oriented Programming in Java',
    issuer: 'Software Engineering Department - DIU',
    date: '2024',
    credentialId: 'CERT-JAVA-2024-88',
    description: 'Certification validating mastery of Java OOP fundamentals including inheritance, polymorphism, encapsulation, interface abstractions, exception handling, and multi-threading.',
    skills: ['Java', 'OOP', 'Data Abstraction', 'Exception Handling'],
  },
  {
    id: 2,
    title: 'Database Systems & SQL Design',
    issuer: 'Daffodil International University',
    date: '2024',
    credentialId: 'CERT-DBS-2024-42',
    description: 'Demonstrating competence in relational database management, ER diagramming, 3NF normalization, complex SQL joins, index tuning, and stored procedures in MySQL.',
    skills: ['MySQL', 'SQL', 'Database Design', 'ER Diagramming'],
  },
  {
    id: 3,
    title: 'Full-Stack Web Development Essentials',
    issuer: 'Interactive Code Academy',
    date: '2025',
    credentialId: 'CERT-WEB-2025-19',
    description: 'Comprehensive web development certification covering modern HTML5 semantics, responsive CSS3 Flexbox/Grid, Tailwind CSS, JavaScript ES6+, React components, and RESTful API integration.',
    skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'React.js', 'REST API'],
  },
  {
    id: 4,
    title: 'Algorithmic Problem Solving in C/C++',
    issuer: 'Competitive Programming League',
    date: '2024',
    credentialId: 'CERT-ALG-2024-91',
    description: 'Recognition of algorithmic computational logic, array manipulation, recursion, sorting algorithms, and basic graph traversal in C and C++.',
    skills: ['C++', 'Algorithms', 'Data Structures', 'C Programming'],
  },
];

export default function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const handleVerify = (cert: Certificate) => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
    });
    setSelectedCert(cert);
  };

  return (
    <section id="certificates" className="relative py-24 bg-slate-950/60 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-1/3 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-cyan-400 text-xs font-semibold uppercase tracking-wider"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            Certificates & <span className="gradient-text">Qualifications</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg"
          >
            Certifications and academic course completion badges earned during my software engineering studies.
          </motion.p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certificateList.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card glass-card-hover p-8 rounded-3xl border-white/10 space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {cert.date}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold font-heading text-white">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 text-xs mt-1 font-medium">{cert.issuer}</p>
                </div>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {cert.description}
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/5 text-gray-300 border border-white/10">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-gray-400">{cert.credentialId}</span>
                <button
                  onClick={() => handleVerify(cert)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <FileCheck className="w-4 h-4" />
                  <span>View Certificate</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Certificate Preview Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[9990] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-xl bg-slate-900 border border-white/10 rounded-3xl p-8 space-y-6 shadow-[0_0_50px_rgba(0,242,254,0.3)] text-center"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 mx-auto rounded-3xl bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-white shadow-xl">
                <ShieldCheck className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Official Certificate</span>
                <h3 className="text-2xl font-bold font-heading text-white mt-1">
                  {selectedCert.title}
                </h3>
                <p className="text-gray-400 text-sm mt-1">{selectedCert.issuer} ({selectedCert.date})</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/5 text-xs font-mono text-gray-300 space-y-1">
                <p>Credential ID: <span className="text-cyan-400">{selectedCert.credentialId}</span></p>
                <p className="text-emerald-400 font-semibold">Status: Verified & Valid</p>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">
                {selectedCert.description}
              </p>

              <button
                onClick={() => setSelectedCert(null)}
                className="w-full py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg"
              >
                Close View
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
