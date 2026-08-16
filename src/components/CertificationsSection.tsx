import React, { useState } from 'react';
import { Award, ExternalLink, CheckCircle2, Shield, Eye, X } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import { CertificationItem } from '../types';
import { ImageWithFallback } from './ImageWithFallback';

export const CertificationsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono text-xs mb-3 shadow-sm">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>06 // VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-heading">
            Certifications & Programs
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
            Verified coursework, specialized career pathways, and technical competencies.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800/90 flex flex-col justify-between group"
            >
              <div>
                {/* Certificate Preview Badge */}
                <div
                  onClick={() => setSelectedCert(cert)}
                  className="cursor-pointer mb-5 h-36 rounded-xl overflow-hidden border border-slate-800 relative group-hover:border-cyan-500/40 transition-colors"
                >
                  <ImageWithFallback
                    src={cert.image || ''}
                    alt={cert.title}
                    title={cert.title}
                    type="certificate"
                    category={cert.issuer}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 text-xs font-bold flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Preview</span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-1.5">
                  <span>{cert.issuer}</span>
                  <span className="text-[10px] text-slate-500">{cert.date}</span>
                </div>

                <h3 className="text-base font-bold text-white font-heading group-hover:text-cyan-300 transition-colors mb-3">
                  {cert.title}
                </h3>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Credential CTA */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                >
                  <span>View Details</span>
                </button>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors"
                    title="External Verification"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-lg bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2 text-xs font-mono text-cyan-400 font-semibold">
              <Award className="w-4 h-4" />
              <span>{selectedCert.issuer}</span>
            </div>

            <h3 className="text-xl font-bold text-white font-heading mb-4">
              {selectedCert.title}
            </h3>

            <div className="mb-6 h-48 rounded-xl overflow-hidden border border-slate-800">
              <ImageWithFallback
                src={selectedCert.image || ''}
                alt={selectedCert.title}
                title={selectedCert.title}
                type="certificate"
                category={selectedCert.issuer}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-3 mb-6 text-xs font-mono text-slate-300">
              <div className="flex justify-between p-2.5 bg-slate-900/60 rounded-lg border border-slate-800">
                <span className="text-slate-500">ISSUING ORGANIZATION:</span>
                <span className="text-white font-bold">{selectedCert.issuer}</span>
              </div>
              <div className="flex justify-between p-2.5 bg-slate-900/60 rounded-lg border border-slate-800">
                <span className="text-slate-500">CREDENTIAL ID:</span>
                <span className="text-cyan-300 font-bold">{selectedCert.credentialId || 'PROGRAM_RECORD'}</span>
              </div>
              <div className="flex justify-between p-2.5 bg-slate-900/60 rounded-lg border border-slate-800">
                <span className="text-slate-500">STATUS:</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>VERIFIED RECORD</span>
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              {selectedCert.credentialUrl && (
                <a
                  href={selectedCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open Official Issuer Portal</span>
                </a>
              )}
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 text-xs font-mono text-slate-400 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
