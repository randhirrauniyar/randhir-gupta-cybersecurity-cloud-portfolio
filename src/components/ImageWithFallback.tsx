import React, { useState } from 'react';
import { Shield, Lock, Server, Cpu, Cloud, FileCode, CheckCircle2 } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  type?: 'project' | 'research' | 'certificate' | 'avatar' | 'cloud';
  title?: string;
  category?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  type = 'project',
  title = 'Cybersecurity Asset',
  category = 'Security',
}) => {
  const [hasError, setHasError] = useState(false);

  // If there's an error loading the image or it's an svg path that needs fallback rendering
  if (hasError || src.startsWith('/images/')) {
    return (
      <div
        className={`relative overflow-hidden flex flex-col justify-between p-6 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800/80 rounded-xl group select-none ${className}`}
        role="img"
        aria-label={alt}
      >
        {/* Subtle grid pattern inside */}
        <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
        
        {/* Ambient glow */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-500" />
        <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-500" />

        {/* Top bar with category & status */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              {category}
            </span>
          </div>
          <div className="px-2.5 py-0.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-[10px] font-mono text-slate-400">
            {type === 'research' ? 'RESEARCH VECTOR' : type === 'certificate' ? 'VERIFIED' : 'ACTIVE BUILD'}
          </div>
        </div>

        {/* Center Graphic */}
        <div className="relative z-10 my-auto py-6 flex flex-col items-center justify-center text-center">
          <div className="relative p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 shadow-lg text-cyan-400 group-hover:scale-105 group-hover:border-cyan-500/40 transition-all duration-300">
            {type === 'research' && <Shield className="w-10 h-10 text-cyan-400" />}
            {type === 'cloud' && <Cloud className="w-10 h-10 text-sky-400" />}
            {type === 'certificate' && <CheckCircle2 className="w-10 h-10 text-emerald-400" />}
            {type === 'project' && <Lock className="w-10 h-10 text-cyan-400" />}
            {type === 'avatar' && <Cpu className="w-10 h-10 text-teal-400" />}
          </div>
          <div className="mt-4 font-mono text-xs text-slate-400 max-w-[200px] truncate">
            {title}
          </div>
        </div>

        {/* Bottom Decorative Code snippet line */}
        <div className="relative z-10 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-1.5">
            <FileCode className="w-3.5 h-3.5 text-cyan-500/70" />
            <span>SEC_STATUS: OK</span>
          </div>
          <span className="text-slate-600">ID: {Math.abs(title.split('').reduce((a,b)=>((a<<5)-a)+b.charCodeAt(0),0)).toString(16).slice(0, 6)}</span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setHasError(true)}
      referrerPolicy="no-referrer"
    />
  );
};
