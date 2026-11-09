import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Code, Terminal, Wallet, CheckCircle2, Box } from 'lucide-react';

export const EvmSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 border-t border-border-subtle relative bg-obsidian-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-widest mb-3">
            {t.evm.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase">
            {t.evm.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 font-sans leading-relaxed">
            {t.evm.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-xl bg-obsidian-900/50 border border-border-subtle hover:border-emerald-500/40 transition-all">
            <div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
              <Code className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-display text-white mb-3">
              {t.evm.feat1Title}
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed font-sans mb-4">
              {t.evm.feat1Desc}
            </p>
            <div className="flex flex-wrap gap-2 text-[11px] font-mono text-zinc-400">
              <span className="px-2 py-1 bg-obsidian-850 rounded border border-border-subtle">Solidity ^0.8.x</span>
              <span className="px-2 py-1 bg-obsidian-850 rounded border border-border-subtle">Vyper</span>
              <span className="px-2 py-1 bg-obsidian-850 rounded border border-border-subtle">Yul / Assembly</span>
            </div>
          </div>

          <div className="p-8 rounded-xl bg-obsidian-900/50 border border-border-subtle hover:border-emerald-500/40 transition-all">
            <div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
              <Terminal className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-display text-white mb-3">
              {t.evm.feat2Title}
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed font-sans mb-4">
              {t.evm.feat2Desc}
            </p>
            <div className="flex flex-wrap gap-2 text-[11px] font-mono text-zinc-400">
              <span className="px-2 py-1 bg-obsidian-850 rounded border border-border-subtle">Foundry (forge/cast)</span>
              <span className="px-2 py-1 bg-obsidian-850 rounded border border-border-subtle">Hardhat</span>
              <span className="px-2 py-1 bg-obsidian-850 rounded border border-border-subtle">Remix IDE</span>
            </div>
          </div>

          <div className="p-8 rounded-xl bg-obsidian-900/50 border border-border-subtle hover:border-emerald-500/40 transition-all">
            <div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
              <Wallet className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-display text-white mb-3">
              {t.evm.feat3Title}
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed font-sans mb-4">
              {t.evm.feat3Desc}
            </p>
            <div className="flex flex-wrap gap-2 text-[11px] font-mono text-zinc-400">
              <span className="px-2 py-1 bg-obsidian-850 rounded border border-border-subtle">MetaMask</span>
              <span className="px-2 py-1 bg-obsidian-850 rounded border border-border-subtle">Rabby</span>
              <span className="px-2 py-1 bg-obsidian-850 rounded border border-border-subtle">Rainbow</span>
              <span className="px-2 py-1 bg-obsidian-850 rounded border border-border-subtle">Ledger</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

