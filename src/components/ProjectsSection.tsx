import React, { useState, useMemo } from 'react';
import { Shield, Github, ExternalLink, ArrowRight, Layers, Lock, Cpu, Cloud, Globe, Sparkles, Eye } from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import { projectsData } from '../data/portfolioData';
import { ImageWithFallback } from './ImageWithFallback';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories: ProjectCategory[] = ['All', 'Cybersecurity', 'AI/ML', 'Cloud', 'Web Development'];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projectsData;
    return projectsData.filter((p) => p.category.includes(selectedCategory as any));
  }, [selectedCategory]);

  const featuredProject = projectsData.find((p) => p.featured) || projectsData[0];
  const gridProjects = filteredProjects.filter((p) => !p.featured || selectedCategory !== 'All');

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono text-xs mb-3 shadow-sm">
            <Lock className="w-3.5 h-3.5 text-cyan-400" />
            <span>03 // PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-heading">
            Featured Projects
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
            Engineered systems, defensive security research, cloud architectures, and machine learning models.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-slate-900/80 border border-slate-800 rounded-2xl backdrop-blur-sm max-w-2xl">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-200 ${
                    isSelected
                      ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Highlighted Flagship Project (Shown when 'All' or 'Cybersecurity' / 'AI/ML' is selected) */}
        {selectedCategory === 'All' && (
          <div className="mb-16">
            <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/30 shadow-2xl relative overflow-hidden">
              {/* Top ambient banner */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-sky-400 to-emerald-400" />

              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>PRIMARY FEATURED PROJECT</span>
                  </span>
                  <span className="text-xs font-mono text-slate-400">RESEARCH-DRIVEN</span>
                </div>
                <div className="flex items-center gap-2">
                  {featuredProject.category.map((c) => (
                    <span
                      key={c}
                      className="px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-5">
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-heading leading-tight">
                    {featuredProject.title}
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {featuredProject.shortDescription}
                  </p>

                  {/* Problem Solved Highlight Box */}
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                    <div className="text-[11px] font-mono uppercase text-cyan-400 font-semibold mb-1 flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5" />
                      <span>Security Problem Solved:</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {featuredProject.problemSolved}
                    </p>
                  </div>

                  {/* Technical Flow Diagram Banner */}
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-cyan-500/20">
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-3">
                      RESEARCH PIPELINE FLOW:
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] font-mono text-slate-300">
                      <span className="px-2 py-1 bg-slate-900 rounded border border-slate-800 text-slate-200">Client</span>
                      <span className="text-cyan-500">➔</span>
                      <span className="px-2 py-1 bg-slate-900 rounded border border-slate-800 text-slate-200">TLS Handshake</span>
                      <span className="text-cyan-500">➔</span>
                      <span className="px-2 py-1 bg-slate-900 rounded border border-cyan-500/40 text-cyan-300 font-bold">Fingerprint</span>
                      <span className="text-cyan-500">➔</span>
                      <span className="px-2 py-1 bg-slate-900 rounded border border-slate-800 text-slate-200">Feature Extraction</span>
                      <span className="text-cyan-500">➔</span>
                      <span className="px-2 py-1 bg-slate-900 rounded border border-slate-800 text-slate-200">ML Model</span>
                      <span className="text-cyan-500">➔</span>
                      <span className="px-2 py-1 bg-emerald-950 rounded border border-emerald-500/40 text-emerald-300 font-bold">Threat Class</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {featuredProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded bg-slate-900/80 border border-slate-700/60 text-xs font-mono text-cyan-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Controls */}
                  <div className="flex flex-wrap items-center gap-3 pt-4">
                    <button
                      onClick={() => setActiveModalProject(featuredProject)}
                      className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-colors flex items-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Explore Technical Deep-Dive</span>
                    </button>
                    <a
                      href="#research"
                      className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold transition-colors flex items-center gap-2"
                    >
                      <span>Interactive Pipeline Simulator</span>
                      <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                    </a>
                  </div>
                </div>

                {/* Right Visual Image */}
                <div className="lg:col-span-5">
                  <div
                    onClick={() => setActiveModalProject(featuredProject)}
                    className="cursor-pointer group relative rounded-2xl overflow-hidden border border-slate-800 shadow-xl"
                  >
                    <ImageWithFallback
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      title={featuredProject.title}
                      type="research"
                      category="Cybersecurity"
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                      <span className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 text-xs font-bold flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        <span>Inspect Architecture</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-2xl border border-slate-800/90 flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Image */}
              <div
                onClick={() => setActiveModalProject(project)}
                className="cursor-pointer relative h-48 overflow-hidden border-b border-slate-800/80"
              >
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  title={project.title}
                  type={project.category.includes('Cloud') ? 'cloud' : 'project'}
                  category={project.category[0]}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.category.map((cat) => (
                      <span
                        key={cat}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950/60 border border-cyan-500/20 text-cyan-300 font-medium"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  <h3
                    onClick={() => setActiveModalProject(project)}
                    className="text-lg font-bold text-white font-heading group-hover:text-cyan-300 transition-colors cursor-pointer mb-2"
                  >
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4">
                    {project.shortDescription}
                  </p>

                  {/* Problem Solved Excerpt */}
                  {project.problemSolved && (
                    <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 text-[11px] text-slate-400 mb-4">
                      <span className="font-semibold text-slate-300 font-mono">Focus: </span>
                      <span className="line-clamp-2">{project.problemSolved}</span>
                    </div>
                  )}
                </div>

                <div>
                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-500">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Footer links */}
                  <div className="pt-4 border-t border-slate-800/70 flex items-center justify-between">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
                          title="GitHub Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target={project.liveDemoUrl.startsWith('#') ? '_self' : '_blank'}
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/30 text-cyan-300 transition-colors"
                          title="Live Project Link"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
