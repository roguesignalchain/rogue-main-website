import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Layers, Cpu, Scissors, ShieldAlert, ArrowRight, Binary } from 'lucide-react';

export const OriginSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="origin" className="py-24 border-t border-border-subtle relative bg-obsidian-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded bg-rogue-500/10 border border-rogue-500/20 text-rogue-400 font-mono text-xs uppercase tracking-widest mb-3">
            {t.origin.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase">
            {t.origin.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 font-sans leading-relaxed">
            {t.origin.subtitle}
          </p>
        </div>

        {/* 3 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Ethereum Classic Base */}
          <div className="p-8 rounded-xl bg-obsidian-900/60 border border-border-subtle hover:border-rogue-500/40 transition-all duration-300 relative group">
            <div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
              <Layers className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
              FOUNDATION: CORE-GETH
            </div>
            <h3 className="text-xl font-bold font-display text-white mb-3">
              {t.origin.card1Title}
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {t.origin.card1Desc}
            </p>
          </div>

          {/* Card 2: Decoupling Ethash */}
          <div className="p-8 rounded-xl bg-obsidian-900/60 border border-border-subtle hover:border-rogue-500/40 transition-all duration-300 relative group">
            <div className="w-12 h-12 rounded-lg bg-rogue-500/10 border border-rogue-500/20 flex items-center justify-center text-rogue-500 mb-6 group-hover:scale-110 transition-transform">
              <Scissors className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono text-rogue-400 uppercase tracking-wider mb-2">
              SURGICAL EXTRACTION
            </div>
            <h3 className="text-xl font-bold font-display text-white mb-3">
              {t.origin.card2Title}
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {t.origin.card2Desc}
            </p>
          </div>

          {/* Card 3: Monero RandomX Core */}
          <div className="p-8 rounded-xl bg-obsidian-900/60 border border-border-subtle hover:border-amber-tech/40 transition-all duration-300 relative group">
            <div className="w-12 h-12 rounded-lg bg-amber-tech/10 border border-amber-tech/20 flex items-center justify-center text-amber-tech mb-6 group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono text-amber-tech uppercase tracking-wider mb-2">
              ASIC NEUTRALITY
            </div>
            <h3 className="text-xl font-bold font-display text-white mb-3">
              {t.origin.card3Title}
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {t.origin.card3Desc}
            </p>
          </div>
        </div>

        {/* Visual Architectural Bridge Diagram */}
        <div className="mt-14 p-6 sm:p-8 rounded-xl bg-obsidian-900/40 border border-border-subtle flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-obsidian-850 border border-border-subtle rounded-lg">
              <Binary className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">Core-Geth EVM Execution Engine</div>
              <div className="text-xs text-zinc-400 font-mono">Turing-Complete Solidity, State Database, RPC APIs</div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-rogue-500 font-mono text-xs uppercase font-bold">
            <span>Unified in C++</span>
            <ArrowRight className="w-4 h-4 animate-pulse" />
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-obsidian-850 border border-border-subtle rounded-lg">
              <Cpu className="w-6 h-6 text-amber-tech" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">RandomX (rx/0) Consensus Engine</div>
              <div className="text-xs text-zinc-400 font-mono">2MB Scratchpad, Static C++ Binding, Fair CPU PoW</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

