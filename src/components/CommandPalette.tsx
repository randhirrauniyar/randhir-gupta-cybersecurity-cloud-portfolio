import React, { useState, useEffect } from 'react';
import { Search, X, Shield, Lock, Code2, Award, Briefcase, FileText, ArrowRight, ExternalLink } from 'lucide-react';
import { projectsData, skillCategories, experienceData, personalInfo } from '../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResumeModal: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenResumeModal,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // open command menu
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navigateTo = (selector: string) => {
    onClose();
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Quick navigation destinations
  const sections = [
    { label: 'Home / Hero', target: '#home', icon: Shield, category: 'Section' },
    { label: 'About Randhir (3rd Year B.Tech)', target: '#about', icon: Shield, category: 'Section' },
    { label: 'Research: TLS Fingerprinting (JA3/JA4)', target: '#research', icon: Lock, category: 'Research' },
    { label: 'Featured Projects (ENC Cloud, Fraud AI)', target: '#projects', icon: Code2, category: 'Projects' },
    { label: 'Technical Skills & Toolchain', target: '#skills', icon: Code2, category: 'Skills' },
    { label: 'Experience & Internships', target: '#experience', icon: Briefcase, category: 'Experience' },
    { label: 'Certifications & Programs', target: '#certifications', icon: Award, category: 'Credentials' },
    { label: 'Beyond the Resume (Leadership)', target: '#achievements', icon: Award, category: 'Initiatives' },
    { label: 'Building in Public (GitHub)', target: '#github', icon: Code2, category: 'Code' },
    { label: 'Contact Randhir', target: '#contact', icon: FileText, category: 'Contact' },
  ];

  const filteredSections = sections.filter((s) =>
    s.label.toLowerCase().includes(query.toLowerCase()) ||
    s.category.toLowerCase().includes(query.toLowerCase())
  );

  const filteredProjects = projectsData.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.technologies.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-slate-950 border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative p-4 border-b border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-cyan-400 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Type a section, project, or skill (e.g. TLS, AWS, Zeek, Resume)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none font-sans"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-500 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-3 space-y-4">
          {/* Quick Resume Action */}
          <div className="p-2">
            <button
              onClick={() => {
                onClose();
                onOpenResumeModal();
              }}
              className="w-full p-3 rounded-xl bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-500/30 text-left flex items-center justify-between transition-colors"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-bold text-white">View Complete Resume & Dossier</span>
              </div>
              <span className="text-[10px] font-mono text-cyan-300">OPEN MODAL ➔</span>
            </button>
          </div>

          {/* Section results */}
          {filteredSections.length > 0 && (
            <div>
              <div className="text-[10px] font-mono uppercase text-slate-500 px-3 mb-1">
                Navigation & Key Sections
              </div>
              <div className="space-y-1">
                {filteredSections.map((sec) => {
                  const Icon = sec.icon;
                  return (
                    <button
                      key={sec.target}
                      onClick={() => navigateTo(sec.target)}
                      className="w-full p-2.5 rounded-lg hover:bg-slate-900 text-left flex items-center justify-between text-xs text-slate-300 hover:text-white transition-colors group"
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4 text-slate-500 group-hover:text-cyan-400" />
                        <span>{sec.label}</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 group-hover:text-cyan-400">
                        {sec.category}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Projects matched */}
          {filteredProjects.length > 0 && (
            <div>
              <div className="text-[10px] font-mono uppercase text-slate-500 px-3 mb-1">
                Projects
              </div>
              <div className="space-y-1">
                {filteredProjects.map((proj) => (
                  <button
                    key={proj.id}
                    onClick={() => navigateTo('#projects')}
                    className="w-full p-2.5 rounded-lg hover:bg-slate-900 text-left flex items-center justify-between text-xs text-slate-300 hover:text-white transition-colors group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Code2 className="w-4 h-4 text-cyan-400" />
                      <span className="truncate max-w-[320px]">{proj.title}</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500">
                      {proj.category[0]}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-2.5 bg-slate-900/80 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Navigate with mouse or keyboard</span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
};
