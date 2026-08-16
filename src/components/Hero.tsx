import React from 'react';
import { Shield, ArrowDown, FileDown, Github, Linkedin, Mail, Lock, Terminal, Sparkles, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[340px] bg-gradient-to-tr from-cyan-600/15 via-sky-500/10 to-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Status Chip */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-8 backdrop-blur-md shadow-md shadow-cyan-950/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>{personalInfo.status}</span>
        </div>

        {/* Visual Signature */}
        <div className="text-xs sm:text-sm font-mono tracking-widest text-cyan-400/90 uppercase font-semibold mb-3 flex items-center gap-2">
          <Shield className="w-4 h-4 text-cyan-400 inline" />
          <span>{personalInfo.titleSignature}</span>
        </div>

        {/* Name Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 font-heading">
          <span className="block text-slate-100">{personalInfo.name.toUpperCase()}</span>
          <span className="block mt-2 text-2xl sm:text-4xl md:text-5xl font-semibold bg-gradient-to-r from-cyan-300 via-sky-200 to-emerald-300 bg-clip-text text-transparent">
            Cybersecurity Engineer.
          </span>
          <span className="block text-xl sm:text-2xl md:text-3xl font-medium text-slate-400 mt-1">
            Builder. Researcher. Developer.
          </span>
        </h1>

        {/* Supporting Narrative */}
        <p className="max-w-2xl text-base sm:text-lg text-slate-300 mb-10 leading-relaxed font-normal">
          Building secure digital experiences, exploring cloud security, and researching machine-learning approaches to detect malicious encrypted network traffic.
        </p>

        {/* Primary and Secondary CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            onClick={scrollToProjects}
            id="hero-explore-work-btn"
            className="px-7 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/25 flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          >
            <span>Explore My Work</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenResumeModal}
            id="hero-download-resume-btn"
            className="px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition-all duration-200 flex items-center gap-2.5 shadow-md hover:border-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            <FileDown className="w-4 h-4 text-cyan-400" />
            <span>Download Resume</span>
          </button>
        </div>

        {/* Social Quick Links & Reach-out */}
        <div className="flex items-center gap-6 text-slate-400 mb-10">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono hover:text-cyan-300 transition-colors p-1"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <span className="text-slate-700">•</span>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono hover:text-cyan-300 transition-colors p-1"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <span className="text-slate-700">•</span>
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 text-xs font-mono hover:text-cyan-300 transition-colors p-1"
            title="Send Email"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">Email</span>
          </a>
        </div>

        {/* Security Telemetry Badge Row */}
        <div className="w-full max-w-3xl grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
          <div className="glass-panel p-3 rounded-lg border border-slate-800/80">
            <div className="text-[10px] font-mono text-slate-500 uppercase">SYSTEM_STATE</div>
            <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>DEFENSIVE_READY</span>
            </div>
          </div>
          <div className="glass-panel p-3 rounded-lg border border-slate-800/80">
            <div className="text-[10px] font-mono text-slate-500 uppercase">RESEARCH_FOCUS</div>
            <div className="text-xs font-semibold text-cyan-300 mt-0.5 truncate">
              JA3/JA4 TLS Analysis
            </div>
          </div>
          <div className="glass-panel p-3 rounded-lg border border-slate-800/80">
            <div className="text-[10px] font-mono text-slate-500 uppercase">CLOUD_STACK</div>
            <div className="text-xs font-semibold text-sky-300 mt-0.5 truncate">
              AWS S3 / CloudFront
            </div>
          </div>
          <div className="glass-panel p-3 rounded-lg border border-slate-800/80">
            <div className="text-[10px] font-mono text-slate-500 uppercase">ACADEMIC_TRACK</div>
            <div className="text-xs font-semibold text-slate-200 mt-0.5 truncate">
              3rd Year B.Tech CSBS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
