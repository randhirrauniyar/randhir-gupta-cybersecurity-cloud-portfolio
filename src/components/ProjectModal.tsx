import React from 'react';
import { X, Github, ExternalLink, Shield, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { Project } from '../types';
import { ImageWithFallback } from './ImageWithFallback';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {project.category.map((cat) => (
            <span
              key={cat}
              className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-cyan-950/70 border border-cyan-500/30 text-cyan-300"
            >
              {cat}
            </span>
          ))}
          {project.featured && (
            <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-amber-950/70 border border-amber-500/40 text-amber-300">
              ★ FEATURED PROJECT
            </span>
          )}
        </div>

        <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-white font-heading mb-4">
          {project.title}
        </h2>

        {/* Project Visual Header */}
        <div className="mb-6 rounded-xl overflow-hidden border border-slate-800">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            title={project.title}
            type={project.featured ? 'research' : 'project'}
            category={project.category[0]}
            className="w-full h-48 sm:h-64 object-cover"
          />
        </div>

        {/* Security & Problem Solved */}
        <div className="space-y-6 text-sm text-slate-300">
          <div>
            <h3 className="text-xs font-mono uppercase text-cyan-400 font-semibold tracking-wider mb-2">
              Overview & Context
            </h3>
            <p className="leading-relaxed">{project.fullDescription}</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <h3 className="text-xs font-mono uppercase text-emerald-400 font-semibold tracking-wider mb-1 flex items-center gap-1.5">
              <Shield className="w-4 h-4" />
              <span>Problem Solved</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">{project.problemSolved}</p>
          </div>

          {/* Key Features List */}
          {project.keyFeatures && (
            <div>
              <h3 className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider mb-2.5">
                Key Technical Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.keyFeatures.map((feat, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg bg-slate-900/50 border border-slate-800/80 flex items-start gap-2 text-xs text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architecture / Pipeline Flow if present */}
          {project.architecture && (
            <div>
              <h3 className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider mb-2.5 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Execution Pipeline</span>
              </h3>
              <div className="space-y-1.5">
                {project.architecture.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs font-mono text-slate-300"
                  >
                    <span className="w-5 h-5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-bold text-[10px]">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technology Stack Badges */}
          <div>
            <h3 className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider mb-2">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-2 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            )}
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target={project.liveDemoUrl.startsWith('#') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (project.liveDemoUrl?.startsWith('#')) {
                    onClose();
                  }
                }}
                className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold flex items-center gap-2 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo / Interactive</span>
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
