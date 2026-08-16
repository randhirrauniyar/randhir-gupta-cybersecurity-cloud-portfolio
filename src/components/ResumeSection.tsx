import React from 'react';
import { FileDown, Eye, FileText, Shield, CheckCircle2, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResumeModal }) => {
  return (
    <section id="resume" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900 overflow-hidden">
      {/* Background cyber glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-cyan-600/10 via-sky-500/10 to-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-cyan-500/30 text-center relative overflow-hidden shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 font-mono text-xs mb-6">
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>09 // CANDIDATE DOSSIER</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-heading mb-4">
            Want the complete story?
          </h2>

          <p className="max-w-xl mx-auto text-base sm:text-lg text-slate-300 mb-8 leading-relaxed font-normal">
            Explore my experience, projects, research, and technical journey in detail.
          </p>

          {/* Quick Snapshot Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400 mb-10">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>3rd-Year B.Tech CSBS</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Cybersecurity & Cloud Focus</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>TLS Research (JA3/JA4)</span>
            </div>
          </div>

          {/* CTA Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenResumeModal}
              className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-sm font-bold transition-all duration-200 flex items-center gap-2.5 shadow-lg shadow-cyan-500/25"
            >
              <Eye className="w-4 h-4" />
              <span>View In-Browser Resume</span>
            </button>

            <a
              href={personalInfo.resumePath}
              download="Randhir_Gupta_Resume.pdf"
              className="px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-sm font-semibold transition-all duration-200 flex items-center gap-2.5 shadow-md hover:border-cyan-500/40"
            >
              <FileDown className="w-4 h-4 text-cyan-400" />
              <span>Download Resume (PDF)</span>
            </a>
          </div>

          <div className="mt-8 text-[11px] font-mono text-slate-500">
            Easily replaceable via <code className="text-cyan-400">/public/resume.pdf</code> in project files.
          </div>
        </div>
      </div>
    </section>
  );
};
