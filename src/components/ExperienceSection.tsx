import React from 'react';
import { Briefcase, Calendar, CheckCircle2, ChevronRight, Sparkles, Building2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono text-xs mb-3 shadow-sm">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>05 // PRACTICAL EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-heading">
            Experience & Internships
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
            Structured internships, industry virtual programs, campus leadership, and cloud computing training.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central cyber track */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-sky-500 to-slate-800 -translate-x-1/2 hidden sm:block" />
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-cyan-500/40 sm:hidden" />

          <div className="space-y-12">
            {experienceData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node Marker */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-1.5 w-7 h-7 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/30 z-10">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  </div>

                  {/* Content Box */}
                  <div className={`w-full sm:w-[calc(50%-2.5rem)] pl-10 sm:pl-0 ${isEven ? 'sm:pr-4' : 'sm:pl-4'}`}>
                    <div className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-2xl border border-slate-800/90 shadow-xl">
                      {/* Header Row */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-[11px] font-mono text-cyan-300 font-bold">
                          {item.type}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-slate-500" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white font-heading mt-1">
                        {item.role}
                      </h3>

                      <div className="flex items-center gap-2 text-sm font-semibold text-cyan-400 mb-4">
                        <Building2 className="w-4 h-4 text-cyan-500" />
                        <span>{item.organization}</span>
                      </div>

                      {/* Bullet descriptions */}
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-300 mb-5">
                        {item.description.map((desc, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technology Chips */}
                      <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
