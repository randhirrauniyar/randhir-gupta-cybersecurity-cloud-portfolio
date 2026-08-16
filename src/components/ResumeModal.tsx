import React from 'react';
import { X, FileDown, Printer, Mail, Linkedin, Github, Shield, CheckCircle2, Building2, BookOpen, Award } from 'lucide-react';
import { personalInfo, experienceData, certificationsData, skillCategories } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="p-4 sm:px-6 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <Shield className="w-4 h-4" />
            <span>RESUME_VIEWER // RANDHIR_GUPTA</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1.5 transition-colors"
              title="Print Resume"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print</span>
            </button>
            <a
              href={personalInfo.resumePath}
              download="Randhir_Gupta_Resume.pdf"
              className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <FileDown className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable/Viewable Resume Sheet */}
        <div className="overflow-y-auto p-6 sm:p-10 text-slate-200 space-y-8 bg-slate-950">
          {/* Header */}
          <div className="border-b border-slate-800 pb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              {personalInfo.name}
            </h1>
            <p className="text-sm font-semibold text-cyan-400 font-mono mt-1">
              {personalInfo.role}
            </p>
            <div className="mt-3 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-300 flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" />
                <span>{personalInfo.email}</span>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 flex items-center gap-1">
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 flex items-center gap-1">
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span>• Third-Year B.Tech CSBS</span>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase text-cyan-400 font-bold tracking-wider mb-3 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              <span>Education</span>
            </h2>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-white text-sm sm:text-base">{personalInfo.education.degree}</h3>
                <span className="text-xs font-mono text-cyan-400">{personalInfo.education.status}</span>
              </div>
              <p className="text-xs text-slate-400 mt-1 font-mono">
                Focus: {personalInfo.education.focus}
              </p>
            </div>
          </div>

          {/* Core Research */}
          <div>
            <h2 className="text-xs font-mono uppercase text-cyan-400 font-bold tracking-wider mb-3 flex items-center gap-1.5">
              <Shield className="w-4 h-4" />
              <span>Primary Cybersecurity Research</span>
            </h2>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-white text-sm sm:text-base">
                  TLS Fingerprinting for Malicious Traffic Detection (JA3 / JA4)
                </h3>
                <span className="text-xs font-mono text-cyan-400">Active Research</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Investigating cryptographic metadata extraction from unencrypted TLS Client Hello packets to classify malicious flows without payload decryption. Built automated feature extraction pipeline integrating Zeek flow logs with LightGBM and Random Forest classifiers.
              </p>
              <div className="text-[11px] font-mono text-slate-400 pt-1">
                Technologies: Python, Zeek, JA3/JA4, LightGBM, Random Forest, Wireshark, Scikit-learn
              </div>
            </div>
          </div>

          {/* Practical Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase text-cyan-400 font-bold tracking-wider mb-3 flex items-center gap-1.5">
              <Building2 className="w-4 h-4" />
              <span>Practical Experience & Internships</span>
            </h2>
            <div className="space-y-4">
              {experienceData.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="flex flex-wrap justify-between items-baseline gap-1">
                    <h3 className="font-bold text-white text-sm sm:text-base">{exp.role}</h3>
                    <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                  </div>
                  <div className="text-xs font-semibold text-cyan-400 font-mono mb-2">{exp.organization}</div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyan-400 font-mono">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase text-cyan-400 font-bold tracking-wider mb-3 flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>Technical Skills</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillCategories.map((cat) => (
                <div key={cat.title} className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                  <span className="font-bold text-white font-mono block mb-1">{cat.title}:</span>
                  <span className="text-slate-300 font-mono">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-mono uppercase text-cyan-400 font-bold tracking-wider mb-3 flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>Certifications & Programs</span>
            </h2>
            <div className="space-y-2">
              {certificationsData.map((cert) => (
                <div key={cert.id} className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 flex justify-between items-center text-xs">
                  <div>
                    <span className="font-bold text-white">{cert.title}</span>
                    <span className="text-slate-400 font-mono block sm:inline sm:ml-2">({cert.issuer})</span>
                  </div>
                  <span className="text-emerald-400 font-mono shrink-0">Verified</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
