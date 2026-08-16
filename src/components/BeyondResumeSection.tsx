import React from 'react';
import { Sparkles, Award, Microscope, Globe2, Users, ArrowUpRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export const BeyondResumeSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-6 h-6 text-cyan-400" />;
      case 'Microscope':
        return <Microscope className="w-6 h-6 text-emerald-400" />;
      case 'Globe2':
        return <Globe2 className="w-6 h-6 text-sky-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-indigo-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="achievements" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono text-xs mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>07 // LEADERSHIP & INITIATIVES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-heading">
            Beyond the Resume
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
            Ambassadorships, community engagement, ethical security advocacy, and social impact technology initiatives.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800/90 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-cyan-500/30 transition-colors">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 font-semibold">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-heading mb-2.5 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div>
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
