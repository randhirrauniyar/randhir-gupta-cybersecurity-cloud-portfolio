import React from 'react';
import { Shield, BookOpen, Lock, Server, Cpu, Terminal, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  const toolchips = [
    { name: 'Zeek', category: 'Network Sec' },
    { name: 'Wireshark', category: 'Packet Analysis' },
    { name: 'Nmap', category: 'Reconnaissance' },
    { name: 'Burp Suite', category: 'Web Sec' },
    { name: 'Kali Linux', category: 'Sec Environment' },
    { name: 'AWS', category: 'Cloud Infrastructure' },
  ];

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span>01 // IDENTITY & TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-heading">
            About Randhir
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
            Bridging foundational systems, defensive cybersecurity, and resilient cloud architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/80">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2.5 font-heading">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                Technical Curiosity & Engineering Focus
              </h3>
              
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a third-year <strong>B.Tech Computer Science and Business Systems (CSBS)</strong> student dedicated to building robust digital architectures and exploring defensive cybersecurity mechanics.
                </p>
                <p>
                  Rather than treating security as a post-deployment checklist, my engineering mindset centers on security as a core architectural primitive—spanning secure cloud infrastructure, encrypted network classification, and resilient web applications.
                </p>
                <p>
                  My active research focuses on <strong>TLS Fingerprinting (JA3 / JA4)</strong> to detect malicious network flows without compromising end-user cryptographic privacy. Simultaneously, I experiment with Amazon Web Services and modern web frameworks to develop performant software.
                </p>
              </div>

              {/* Security Tools in Hands-on Practice */}
              <div className="mt-8 pt-6 border-t border-slate-800/80">
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3">
                  Hands-on Security & Infrastructure Toolchain:
                </div>
                <div className="flex flex-wrap gap-2">
                  {toolchips.map((tool) => (
                    <div
                      key={tool.name}
                      className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-xs font-mono text-slate-200 flex items-center gap-2 hover:border-cyan-500/40 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span className="font-medium">{tool.name}</span>
                      <span className="text-[10px] text-slate-500 hidden sm:inline">({tool.category})</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Core Philosophy Pillar */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 border border-cyan-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-cyan-400 font-semibold uppercase">Core Architectural Formula</div>
                  <div className="text-sm font-bold text-white font-heading">Security × Cloud × Intelligence × Code</div>
                </div>
              </div>
              <div className="text-xs font-mono text-slate-400 bg-slate-950/60 px-3 py-1.5 rounded-md border border-slate-800">
                VERIFIED_STUDENT // BUILDER
              </div>
            </div>
          </div>

          {/* Metric & Stat Cards Column */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {personalInfo.metrics.map((metric, idx) => (
              <div
                key={metric.label}
                className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800/80 flex flex-col justify-between"
              >
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-3 flex items-center justify-between">
                  <span>{metric.label}</span>
                  <span className="text-cyan-500/70 font-mono">0{idx + 1}</span>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading tracking-tight text-cyan-300">
                    {metric.value}
                  </div>
                  <div className="text-xs font-medium text-slate-400 mt-1 font-mono">
                    {metric.subtitle}
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] text-emerald-400/90 font-mono">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Documented Focus</span>
                </div>
              </div>
            ))}

            {/* Quick Education Card */}
            <div className="sm:col-span-2 glass-panel p-6 rounded-2xl border border-slate-800/80">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-cyan-950/60 text-cyan-400 border border-cyan-500/30">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Undergraduate Degree</div>
                  <div className="text-sm font-bold text-white">{personalInfo.education.degree}</div>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-mono">
                Curriculum combining computer science fundamentals, system software, networking, and applied business systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
