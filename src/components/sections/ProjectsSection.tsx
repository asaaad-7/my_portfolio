'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, Sparkles, X, Eye } from 'lucide-react';
import { GithubIcon } from '../ui/BrandIcons';
import confetti from 'canvas-confetti';

interface Project {
  id: number;
  title: string;
  category: string;
  tech: string[];
  description: string;
  detailedDesc: string;
  image: string;
  githubUrl: string;
  liveUrl: string;
}

const projectsList: Project[] = [
  {
    id: 1,
    title: 'Library Management System',
    category: 'Java & Desktop App',
    tech: ['Java', 'MySQL', 'Swing / JavaFX', 'SQL Queries'],
    description: 'A complete library management system supporting book management, borrowing, member management, and reports.',
    detailedDesc: 'Built with Object-Oriented Java and MySQL. Features include secure librarian login, ISBN search, automated issue/return date calculation, fine assessment, member registration, and printable PDF reports.',
    image: '/project_library.png',
    githubUrl: 'https://github.com/asaduzzaman-asad/library-management-system',
    liveUrl: 'https://github.com/asaduzzaman-asad/library-management-system',
  },
  {
    id: 2,
    title: 'Student Management System',
    category: 'Academic System',
    tech: ['Java', 'Python', 'MySQL', 'OOP Design'],
    description: 'Academic student record management tool providing course enrollment, attendance tracking, and grade reports.',
    detailedDesc: 'Designed to streamline academic administrative workflows. Teachers can enter course grades, monitor student attendance percentages, and generate official semester transcripts stored securely in relational MySQL tables.',
    image: '/project_student.png',
    githubUrl: 'https://github.com/asaduzzaman-asad/student-management-system',
    liveUrl: 'https://github.com/asaduzzaman-asad/student-management-system',
  },
  {
    id: 3,
    title: 'Futuristic Portfolio Website',
    category: 'Full-Stack Web',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Framer Motion'],
    description: 'A premium, modern, and unique personal portfolio built with 3D graphics, glassmorphism, and smooth micro-interactions.',
    detailedDesc: 'Featuring dark/light theme persistence, dual-ring spring physics cursor, interactive Three.js 3D particle canvas, animated education timeline, skill progress indicators, and custom resume download modal.',
    image: '/project_library.png',
    githubUrl: 'https://github.com/asaduzzaman-asad/personal-portfolio',
    liveUrl: '#hero',
  },
  {
    id: 4,
    title: 'Weather Forecast App',
    category: 'Web App',
    tech: ['React.js', 'OpenWeather API', 'Tailwind CSS', 'JavaScript'],
    description: 'Real-time weather monitoring application with location search, 7-day forecast, and dynamic visual themes.',
    detailedDesc: 'Fetches live atmospheric telemetry using REST APIs. Features location geolocation, hourly weather graphs, humidity/uv index gauges, wind speed metrics, and responsive mobile UI.',
    image: '/project_weather.png',
    githubUrl: 'https://github.com/asaduzzaman-asad/weather-forecast-app',
    liveUrl: 'https://github.com/asaduzzaman-asad/weather-forecast-app',
  },
  {
    id: 5,
    title: 'To-Do Application',
    category: 'Productivity Tool',
    tech: ['JavaScript', 'React', 'LocalStorage', 'Tailwind CSS'],
    description: 'Sleek task management app featuring task categorization, priority tags, search filter, and state persistence.',
    detailedDesc: 'Clean glassmorphic productivity app allowing users to create categorized task boards (Work, Personal, Studies), assign high/medium priority badges, mark completions, and persist data in LocalStorage.',
    image: '/project_todo.png',
    githubUrl: 'https://github.com/asaduzzaman-asad/todo-application',
    liveUrl: 'https://github.com/asaduzzaman-asad/todo-application',
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleDemoClick = (project: Project) => {
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.7 },
    });
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Ambient Gradient Background */}
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-cyan-400 text-xs font-semibold uppercase tracking-wider"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            My Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg"
          >
            Explore software engineering projects spanning desktop systems, web applications, and database architecture.
          </motion.p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass-card glass-card-hover rounded-3xl overflow-hidden border-white/10 flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                
                {/* Category Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/80 backdrop-blur-md text-cyan-400 border border-cyan-500/30">
                  {project.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-heading text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/5 text-gray-300 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold text-gray-300 glass-card hover:text-white hover:border-white/30 transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Code</span>
                  </a>

                  <button
                    onClick={() => handleDemoClick(project)}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:shadow-[0_0_15px_rgba(0,242,254,0.4)] transition-all"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Live Demo</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[9990] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-2xl bg-slate-900 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 shadow-[0_0_50px_rgba(0,242,254,0.3)] overflow-hidden"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-56 w-full rounded-2xl overflow-hidden">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold font-heading text-white mt-1">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                  {selectedProject.detailedDesc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((t) => (
                  <span key={t} className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-2">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold text-white glass-card hover:border-white/30"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Visit Application</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
