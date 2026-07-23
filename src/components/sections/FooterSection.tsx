'use client';

import { Heart, Code2, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon } from '../ui/BrandIcons';

const socialLinks = [
  { icon: Mail, href: 'mailto:asaduzzaman.asad@diu.edu.bd', label: 'Email' },
  { icon: GithubIcon, href: 'https://github.com/asaduzzaman-asad', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://linkedin.com/in/asaduzzaman-asad', label: 'LinkedIn' },
  { icon: FacebookIcon, href: 'https://facebook.com/asaduzzaman-asad', label: 'Facebook' },
];

export default function FooterSection() {
  return (
    <footer className="relative bg-slate-950 border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px]">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            <div>
              <span className="font-heading font-bold text-xl text-white">
                Asaduzzaman <span className="text-cyan-400">Asad</span>
              </span>
              <p className="text-xs text-gray-400">Software Engineering Student • DIU</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="p-2.5 rounded-xl glass-card text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 text-center sm:text-left">
          <p>© 2026 Asaduzzaman Asad. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Designed with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />
            <span>using Next.js & Tailwind CSS.</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
