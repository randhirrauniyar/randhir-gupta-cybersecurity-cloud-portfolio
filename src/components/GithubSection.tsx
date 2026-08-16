import React from 'react';
import { Github, GitFork, Star, ExternalLink, Code2, GitCommit, Terminal, Sparkles } from 'lucide-react';
import { githubReposData, personalInfo } from '../data/portfolioData';

export const GithubSection: React.FC = () => {
  // 52-week simulated commit grid representation for visual activity
  const weeks = Array.from({ length: 26 }, (_, i) => i);
  const days = [0, 1, 2, 3, 4, 5, 6];

  const getHeatmapColor = (w: number, d: number) => {
    const pseudoRandom = Math.sin(w * 13 + d * 7) * 10000;
    const val = Math.floor(Math.abs(pseudoRandom)) % 5;
    switch (val) {
      case 0:
        return 'bg-slate-900/60 border-slate-800';
      case 1:
        return 'bg-cyan-950 border-cyan-900/60';
      case 2:
        return 'bg-cyan-800/80 border-cyan-700/60';
      case 3:
        return 'bg-cyan-600 border-cyan-500';
      case 4:
        return 'bg-cyan-400 border-cyan-300';
      default:
        return 'bg-slate-900';
    }
  };

  return (
    <section id="github" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono text-xs mb-3 shadow-sm">
            <Github className="w-3.5 h-3.5 text-cyan-400" />
            <span>08 // OPEN SOURCE & DEVELOPMENT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-heading">
            Building in Public
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
            Exploring open code repositories, technical experiments, security scripts, and algorithmic pipelines.
          </p>
        </div>

        {/* GitHub Overview Box */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-heading">@randhirgupta</h3>
                <span className="text-xs font-mono text-slate-400">Security Research & Full-Stack Repositories</span>
              </div>
            </div>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold flex items-center gap-2 transition-colors self-start sm:self-auto shadow-md"
            >
              <Github className="w-4 h-4" />
              <span>Visit GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Activity Heatmap Visual */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 overflow-x-auto">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
              <span className="flex items-center gap-2">
                <GitCommit className="w-4 h-4 text-cyan-400" />
                <span>Recent Commit & Development Cadence</span>
              </span>
              <span className="text-cyan-400 font-bold">Active Builds</span>
            </div>

            {/* Grid display */}
            <div className="flex gap-1.5 min-w-[500px]">
              {weeks.map((w) => (
                <div key={w} className="flex flex-col gap-1.5 flex-1">
                  {days.map((d) => (
                    <div
                      key={d}
                      className={`h-3 rounded-xs border transition-colors ${getHeatmapColor(w, d)}`}
                      title={`Active Day ${w * 7 + d}`}
                    />
                  ))}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mt-3 pt-2 border-t border-slate-900">
              <span>Less</span>
              <div className="flex gap-1">
                <span className="w-2.5 h-2.5 rounded-xs bg-slate-900 border border-slate-800" />
                <span className="w-2.5 h-2.5 rounded-xs bg-cyan-950 border border-cyan-900" />
                <span className="w-2.5 h-2.5 rounded-xs bg-cyan-800 border border-cyan-700" />
                <span className="w-2.5 h-2.5 rounded-xs bg-cyan-600 border border-cyan-500" />
                <span className="w-2.5 h-2.5 rounded-xs bg-cyan-400 border border-cyan-300" />
              </div>
              <span>More</span>
            </div>
          </div>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {githubReposData.map((repo) => (
            <div
              key={repo.name}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800/90 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm font-bold font-mono text-white truncate max-w-[220px]">
                      {repo.name}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-400 border border-slate-800">
                    {repo.updatedAt}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {repo.description}
                </p>

                {/* Topics */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {repo.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-0.5 rounded-md bg-slate-900/90 border border-slate-800 text-[10px] font-mono text-cyan-300/90"
                    >
                      #{topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Repo Footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span>{repo.language}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400" />
                    <span>{repo.stars}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5 text-slate-400" />
                    <span>{repo.forks}</span>
                  </span>
                </div>

                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-300 transition-colors"
                  title="Open Repository"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
