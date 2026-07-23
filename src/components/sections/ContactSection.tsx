'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Send, Copy, Check, Sparkles, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon, InstagramIcon } from '../ui/BrandIcons';
import confetti from 'canvas-confetti';

const socialLinks = [
  { name: 'Email', value: 'asaduzzaman07102002@gmail.com', icon: Mail, href: 'mailto:asaduzzaman07102002@gmail.com', color: 'from-cyan-500 to-blue-600' },
  { name: 'GitHub', value: 'github.com/asaaad-7', icon: GithubIcon, href: 'https://github.com/asaaad-7', color: 'from-purple-500 to-pink-600' },
  { name: 'LinkedIn', value: 'linkedin.com/in/asaduzzaman-asad', icon: LinkedinIcon, href: 'https://linkedin.com/in/asaduzzaman-asad', color: 'from-blue-600 to-indigo-600' },
  { name: 'Facebook', value: 'facebook.com/iamAsad07', icon: FacebookIcon, href: 'https://www.facebook.com/iamAsad07', color: 'from-blue-500 to-cyan-500' },
  { name: 'Instagram', value: 'instagram.com/asaaad__7', icon: InstagramIcon, href: 'https://www.instagram.com/asaaad__7', color: 'from-pink-500 to-orange-500' },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-cyan-400 text-xs font-semibold uppercase tracking-wider"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            Let's Connect & <span className="gradient-text">Collaborate</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg"
          >
            Have a project in mind, seeking software engineering talent, or want to discuss technology? Drop a message!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Left Social & Profile Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Profile Avatar Card */}
            <div className="glass-card p-6 rounded-3xl border-white/10 flex items-center gap-4 shadow-lg">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 bg-slate-900 border border-cyan-500/40">
                <Image
                  src="/asad_profile_3.jpg"
                  alt="Asaduzzaman Asad Profile Photo"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold font-heading text-white">
                  Asaduzzaman Asad
                </h4>
                <p className="text-xs text-cyan-400 font-medium">Software Engineering Student</p>
                <p className="text-xs text-gray-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-purple-400" />
                  <span>Daffodil Int. University, Bangladesh</span>
                </p>
              </div>
            </div>

            {/* Social Channels List */}
            <div className="space-y-3">
              {socialLinks.map((item, index) => {
                const Icon = item.icon;
                const isCopied = copiedIndex === index;
                return (
                  <div
                    key={item.name}
                    className="glass-card glass-card-hover p-4 rounded-2xl border-white/10 flex items-center justify-between gap-4"
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 min-w-0 flex-1 group"
                    >
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${item.color} flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs font-semibold text-white group-hover:text-cyan-400 transition-colors block">
                          {item.name}
                        </span>
                        <span className="text-xs text-gray-400 truncate block">
                          {item.value}
                        </span>
                      </div>
                    </a>

                    <button
                      onClick={() => handleCopy(item.value, index)}
                      className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                      title="Copy link"
                    >
                      {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 rounded-3xl border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.3)]">
              
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-300 text-sm max-w-md mx-auto">
                    Thank you for reaching out, Asaduzzaman Asad will get back to you at asaduzzaman07102002@gmail.com soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Johnson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                      Your Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 shadow-[0_0_25px_rgba(0,242,254,0.4)] hover:shadow-[0_0_35px_rgba(0,242,254,0.7)] transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
