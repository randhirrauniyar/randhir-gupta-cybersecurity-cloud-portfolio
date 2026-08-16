import React, { useState, useMemo } from 'react';
import { ShieldCheck, Cloud, Code2, Globe, Cpu, Terminal, Search, CheckCircle, Sparkles } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-sky-400" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-emerald-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-indigo-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-teal-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-amber-400" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
    }
  };

  const getBadgeStyle = (level: string) => {
    switch (level) {
      case 'Research Focus':
        return 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40 font-bold';
      case 'Practitioner':
        return 'bg-emerald-950/60 text-emerald-300 border-emerald-500/30 font-medium';
      case 'Core':
        return 'bg-slate-800 text-slate-200 border-slate-700 font-medium';
      case 'Exploring':
        return 'bg-slate-900 text-slate-400 border-slate-800 font-normal';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  const filteredCategories = useMemo(() => {
    return skillCategories
      .filter((cat) => {
        if (activeCategory === 'All') return true;
        return cat.title === activeCategory;
      })
      .map((cat) => {
        const filteredSkills = cat.skills.filter((skill) =>
          skill.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return {
          ...cat,
          skills: filteredSkills,
        };
      })
      .filter((cat) => cat.skills.length > 0);
  }, [searchQuery, activeCategory]);

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono text-xs mb-3 shadow-sm">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>04 // TECHNICAL COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-heading">
            Technical Skills & Toolchain
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
            Grounded in defensive cybersecurity, network analysis, AWS cloud architecture, and modern application engineering.
          </p>

          {/* Search and Category Filter Bar */}
          <div className="w-full max-w-2xl mt-8 flex flex-col sm:flex-row gap-3 items-center">
            {/* Search Input */}
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search technologies, tools (e.g. Zeek, AWS, Python)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 text-xs font-mono placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300 font-mono"
                >
                  CLEAR
                </button>
              )}
            </div>

            {/* Category Dropdown/Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 sm:pb-0">
              <button
                onClick={() => setActiveCategory('All')}
                className={`px-3 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-colors ${
                  activeCategory === 'All'
                    ? 'bg-cyan-500 text-slate-950 font-bold'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                All Domains
              </button>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.title}
              className="glass-panel p-6 rounded-2xl border border-slate-800/90 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    {getIcon(cat.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-heading">{cat.title}</h3>
                    <div className="text-[11px] text-slate-400 font-mono line-clamp-1">{cat.description}</div>
                  </div>
                </div>

                {/* Skill Pills */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-mono flex items-center justify-between gap-2.5 transition-all duration-200 ${getBadgeStyle(
                        skill.level
                      )}`}
                    >
                      <span>{skill.name}</span>
                      <span className="text-[9px] uppercase tracking-wider opacity-75">
                        {skill.level === 'Research Focus' ? '★ RES' : skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Indicator */}
              <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>VERIFIED DOMAIN</span>
                <span>{cat.skills.length} TECHNOLOGIES</span>
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-12 p-4 rounded-xl bg-slate-950/60 border border-slate-800 max-w-2xl mx-auto flex flex-wrap items-center justify-around gap-4 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
            <span className="text-slate-300">Research Focus (JA3/JA4)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="text-slate-300">Practitioner (Applied Projects)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
            <span className="text-slate-300">Core Foundations</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
            <span className="text-slate-400">Exploring</span>
          </div>
        </div>
      </div>
    </section>
  );
};
