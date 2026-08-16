import React, { useState } from 'react';
import { Shield, Lock, Eye, Cpu, Database, Activity, FileCheck, ArrowRight, Play, CheckCircle2, AlertTriangle, HelpCircle, Layers, Sparkles } from 'lucide-react';

interface SimulatedFlow {
  id: string;
  name: string;
  type: 'Malicious' | 'Benign' | 'Suspicious';
  rawClientHello: string;
  ja3String: string;
  ja3Hash: string;
  ja4Fingerprint: string;
  tlsVersion: string;
  cipherCount: number;
  extensionCount: number;
  mlConfidence: number;
  verdict: string;
  threatDetails: string;
}

export const ResearchSection: React.FC = () => {
  const simulatedFlows: SimulatedFlow[] = [
    {
      id: 'flow-emotet',
      name: 'Emotet Banking Trojan C2',
      type: 'Malicious',
      rawClientHello: 'TLS 1.2 [0x0303], Ciphers: [0xc02b, 0xc02f, 0x009e], Ext: [0x0000, 0x000b, 0x000a]',
      ja3String: '771,49195-49200-158,0-11-10,23-24,0',
      ja3Hash: '4d7a28d6f22da2dee03515ecb83827e9',
      ja4Fingerprint: 't12d190800_4d7a28d6f22d_000000000000',
      tlsVersion: 'TLS 1.2',
      cipherCount: 3,
      extensionCount: 3,
      mlConfidence: 97.4,
      verdict: 'MALICIOUS_C2_TRAFFIC',
      threatDetails: 'Anomalous cipher suite ordering and stripped extension headers matching known Emotet beacon payload signature.',
    },
    {
      id: 'flow-chrome',
      name: 'Google Chrome 124 (Legitimate Browser)',
      type: 'Benign',
      rawClientHello: 'TLS 1.3 [0x0304], GREASE [0x4a4a], Ciphers: [0x1301, 0x1302, 0x1303], Ext: [0x0000, 0x0017, 0x002b]',
      ja3String: '771,4865-4866-4867-49195-49199,0-23-65281-10-11-35-16-5-13-18-51-45-43-27-21,29-23-24,0',
      ja3Hash: 'b32309a26951912be7dba376398abc3b',
      ja4Fingerprint: 't13d1516h2_8daaf6152771_b32309a26951',
      tlsVersion: 'TLS 1.3 (with GREASE)',
      cipherCount: 17,
      extensionCount: 16,
      mlConfidence: 99.1,
      verdict: 'BENIGN_BROWSER_FLOW',
      threatDetails: 'Standard high-entropy extension list and GREASE randomization characteristic of modern Chromium engines.',
    },
    {
      id: 'flow-cobalt',
      name: 'Cobalt Strike HTTPS Beacon',
      type: 'Malicious',
      rawClientHello: 'TLS 1.2 [0x0303], Ciphers: [0xc014, 0xc00a, 0x0035], Ext: [0x0000, 0x000a, 0x000b]',
      ja3String: '771,49172-49162-53,0-10-11,23-24,0',
      ja3Hash: 'a0e9f5d64349fb13191bc781f81f42e1',
      ja4Fingerprint: 't12d030300_a0e9f5d64349_e3b0c44298fc',
      tlsVersion: 'TLS 1.2',
      cipherCount: 3,
      extensionCount: 3,
      mlConfidence: 96.2,
      verdict: 'MALICIOUS_ADVERSARY_BEACON',
      threatDetails: 'Matches default WinINet/Malleable C2 profile fingerprint utilized in automated red-team simulations.',
    },
    {
      id: 'flow-python',
      name: 'Python Requests Script (Automated Tool)',
      type: 'Suspicious',
      rawClientHello: 'TLS 1.3 [0x0304], OpenSSL Ciphers: [0x1302, 0x1303, 0x1301], Ext: [0x0000, 0x000b, 0x000a, 0x0023]',
      ja3String: '772,4866-4867-4865-49196-49195,0-11-10-35-22-23-13-43-45-51,29-23-24-25,0',
      ja3Hash: '3b5074b1b310a084ec5e87f7a750b691',
      ja4Fingerprint: 't13d111000_3b5074b1b310_000000000000',
      tlsVersion: 'TLS 1.3 / OpenSSL',
      cipherCount: 11,
      extensionCount: 10,
      mlConfidence: 84.5,
      verdict: 'NON_BROWSER_AUTOMATION',
      threatDetails: 'Programmatic OpenSSL fingerprinting signature; warrants scrutiny depending on destination endpoint.',
    },
  ];

  const [activeFlow, setActiveFlow] = useState<SimulatedFlow>(simulatedFlows[0]);
  const [activeStep, setActiveStep] = useState<number>(3);

  const pipelineSteps = [
    {
      num: '01',
      title: 'PCAP / Live Ingestion',
      desc: 'Raw network stream capture via libpcap & SPAN port.',
      icon: Activity,
    },
    {
      num: '02',
      title: 'Zeek Metadata Parser',
      desc: 'Extracts unencrypted Client Hello & Server Hello parameters.',
      icon: Database,
    },
    {
      num: '03',
      title: 'JA3 / JA4 Fingerprinting',
      desc: 'Generates MD5 cryptographic hash and structural JA4 representation.',
      icon: Lock,
    },
    {
      num: '04',
      title: 'Feature Vector Engineering',
      desc: 'Combines cipher sequences, extension sets, and packet flow metrics.',
      icon: Layers,
    },
    {
      num: '05',
      title: 'ML Classification',
      desc: 'LightGBM & Random Forest infer probability without decryption.',
      icon: Cpu,
    },
    {
      num: '06',
      title: 'Threat Classification',
      desc: 'Actionable benign / malicious verdict and automated alert.',
      icon: Shield,
    },
  ];

  return (
    <section id="research" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-900 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 font-mono text-xs mb-3 shadow-sm">
            <Shield className="w-3.5 h-3.5 text-cyan-400" />
            <span>02 // FLAGSHIP CYBERSECURITY RESEARCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-heading">
            Research & Security
          </h2>
          <p className="mt-4 text-slate-300 max-w-2xl text-sm sm:text-base leading-relaxed">
            TLS Fingerprinting for Encrypted Malicious Traffic Classification Without Decryption
          </p>
        </div>

        {/* Problem & Approach Briefing Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Research Problem */}
          <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/90 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-red-950/60 border border-red-500/30 text-red-400">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase text-red-400 font-semibold tracking-wider">
                  The Core Challenge
                </span>
                <h3 className="text-lg font-bold text-white font-heading">The Encrypted Blindspot</h3>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Over <strong>90% of contemporary internet traffic</strong> is encrypted via TLS 1.2 and TLS 1.3. While this safeguards user privacy, adversaries and malware authors exploit encrypted channels to hide Command & Control (C2) communication, exfiltrate data, and bypass conventional Deep Packet Inspection (DPI) firewalls. Decrypting enterprise streams (SSL bumping) introduces extreme computational latency, regulatory liabilities, and privacy compromises.
            </p>
          </div>

          {/* Research Approach */}
          <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/90 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase text-cyan-400 font-semibold tracking-wider">
                  The Research Approach
                </span>
                <h3 className="text-lg font-bold text-white font-heading">Metadata-Driven Fingerprinting</h3>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              During the initial, unencrypted <strong>TLS Client Hello</strong> phase, clients advertise supported cipher suites, extensions, elliptic curves, and point formats. Because standard applications, web browsers, and malicious binaries link against differing SSL/TLS libraries, their handshake parameters form a deterministic fingerprint.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-cyan-300">JA3 / JA3S</span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-cyan-300">JA4 Fingerprinting</span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-slate-300">Cipher Sequences</span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-slate-300">Flow-Level Features</span>
            </div>
          </div>
        </div>

        {/* Pipeline Architecture Diagram */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/25 mb-16 shadow-xl shadow-black/40">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-800/80">
            <div>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                Full Threat Analysis Pipeline
              </div>
              <h3 className="text-xl font-bold text-white font-heading">
                End-to-End Encrypted Flow Classification Pipeline
              </h3>
            </div>
            <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>NON-DECRYPTING INSPECTION</span>
            </div>
          </div>

          {/* Visual Step-by-Step Flow */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3">
            {pipelineSteps.map((step, idx) => {
              const StepIcon = step.icon;
              const isCurrent = activeStep === idx;
              return (
                <button
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-4 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                    isCurrent
                      ? 'bg-cyan-950/70 border-cyan-400/80 shadow-md shadow-cyan-950/50 scale-[1.02]'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-cyan-400">{step.num}</span>
                      <StepIcon className={`w-4 h-4 ${isCurrent ? 'text-cyan-300' : 'text-slate-400'}`} />
                    </div>
                    <div className="text-xs font-bold text-white font-heading mb-1.5">{step.title}</div>
                    <div className="text-[11px] text-slate-400 leading-snug">{step.desc}</div>
                  </div>
                  {idx < pipelineSteps.length - 1 && (
                    <div className="hidden lg:block mt-3 pt-2 border-t border-slate-800/60 text-right">
                      <span className="text-[10px] font-mono text-slate-500">NEXT ➔</span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Research Toolchain Row */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span>Verified Research Toolchain:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Zeek Network Monitor', 'Python', 'Wireshark', 'Scikit-learn', 'LightGBM', 'Random Forest'].map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-300 font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Live Flow & JA3 Analysis Sandbox */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase font-semibold">
                <Play className="w-3 h-3 text-cyan-400 fill-current" />
                <span>Interactive Demonstration</span>
              </div>
              <h3 className="text-xl font-bold text-white font-heading mt-1">
                Simulated TLS Handshake & JA3 Classification Sandbox
              </h3>
            </div>
            <div className="text-xs text-slate-400 font-mono">
              Select an encrypted flow vector to test classification logic:
            </div>
          </div>

          {/* Flow selector buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mb-8">
            {simulatedFlows.map((flow) => {
              const isSelected = activeFlow.id === flow.id;
              return (
                <button
                  key={flow.id}
                  onClick={() => setActiveFlow(flow)}
                  className={`p-3.5 rounded-xl border text-left transition-all duration-200 ${
                    isSelected
                      ? 'bg-slate-900 border-cyan-400 shadow-md shadow-cyan-950/40'
                      : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${
                        flow.type === 'Malicious'
                          ? 'bg-red-950/80 text-red-400 border border-red-500/30'
                          : flow.type === 'Benign'
                          ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/30'
                          : 'bg-amber-950/80 text-amber-400 border border-amber-500/30'
                      }`}
                    >
                      {flow.type}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">{flow.tlsVersion}</span>
                  </div>
                  <div className="text-xs font-bold text-slate-100 truncate">{flow.name}</div>
                </button>
              );
            })}
          </div>

          {/* Active Flow Inspection Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-950/90 p-5 sm:p-6 rounded-xl border border-slate-800">
            {/* Raw Metadata & JA3 String Breakdown */}
            <div className="lg:col-span-7 space-y-4">
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                  Ingested Client Hello Metadata:
                </div>
                <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800 font-mono text-xs text-slate-300 break-all">
                  {activeFlow.rawClientHello}
                </div>
              </div>

              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                  Extracted JA3 Raw String:
                </div>
                <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800 font-mono text-xs text-cyan-300/90 break-all">
                  {activeFlow.ja3String}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">JA3 MD5 HASH</div>
                  <div className="font-mono text-xs text-cyan-300 mt-1 font-bold truncate">
                    {activeFlow.ja3Hash}
                  </div>
                </div>
                <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">JA4 FINGERPRINT</div>
                  <div className="font-mono text-xs text-emerald-300 mt-1 font-bold truncate">
                    {activeFlow.ja4Fingerprint}
                  </div>
                </div>
              </div>
            </div>

            {/* Classifier Inference Verdict */}
            <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-xl bg-slate-900/80 border border-slate-800">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-slate-400 uppercase font-semibold">ML Engine Verdict</span>
                  <span className="text-xs font-mono text-cyan-400">LightGBM Model</span>
                </div>

                <div
                  className={`p-4 rounded-xl border mb-4 ${
                    activeFlow.type === 'Malicious'
                      ? 'bg-red-950/40 border-red-500/40 text-red-300'
                      : activeFlow.type === 'Benign'
                      ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300'
                      : 'bg-amber-950/40 border-amber-500/40 text-amber-300'
                  }`}
                >
                  <div className="flex items-center gap-2 font-mono font-bold text-sm">
                    {activeFlow.type === 'Malicious' ? (
                      <AlertTriangle className="w-5 h-5 text-red-400" />
                    ) : (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    )}
                    <span>{activeFlow.verdict}</span>
                  </div>
                  <div className="text-xs mt-2 opacity-90 leading-relaxed font-sans">
                    {activeFlow.threatDetails}
                  </div>
                </div>

                {/* Model Confidence Bar */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-slate-400">Classification Confidence</span>
                    <span className="font-bold text-cyan-300">{activeFlow.mlConfidence}%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${
                        activeFlow.type === 'Malicious'
                          ? 'bg-red-500'
                          : activeFlow.type === 'Benign'
                          ? 'bg-emerald-400'
                          : 'bg-amber-400'
                      }`}
                      style={{ width: `${activeFlow.mlConfidence}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                <span>PRIVACY_STATUS: 100% INTACT</span>
                <span>PAYLOAD_DECRYPT: FALSE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
