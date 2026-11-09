import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Check, X, AlertTriangle, Sparkles } from 'lucide-react';

export const ConsensusComparison: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="consensus" className="py-24 border-t border-white/10 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-[2px] bg-white/10 border border-white/20 text-white font-mono text-xs uppercase tracking-widest mb-3">
            [{t.consensus.badge}]
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase">
            {t.consensus.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 font-sans leading-relaxed">
            {t.consensus.subtitle}
          </p>
        </div>

        {/* 3-Column Comparison Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Column 1: Ethereum Classic */}
          <div className="rounded-[2px] bg-[#0A0A0C] border border-white/10 p-6 flex flex-col justify-between">
            <div>
              <div className="pb-4 border-b border-white/10 mb-6">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block">
                  Legacy PoW
                </span>
                <h3 className="text-2xl font-bold font-display text-white mt-1">
                  {t.consensus.col1Header}
                </h3>
                <span className="text-xs text-zinc-400 font-mono">{t.consensus.col1Sub}</span>
              </div>

              <div className="space-y-5 text-xs font-mono">
                <div>
                  <span className="text-zinc-400 block mb-1">{t.consensus.rowAlgo}</span>
                  <div className="text-zinc-200 font-bold">{t.consensus.etcAlgo}</div>
                </div>

                <div>
                  <span className="text-zinc-400 block mb-1">{t.consensus.rowHardware}</span>
                  <div className="text-zinc-200">{t.consensus.etcHw}</div>
                </div>

                <div>
                  <span className="text-zinc-400 block mb-1">{t.consensus.rowAsic}</span>
                  <div className="flex items-center gap-1.5 text-zinc-400">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>{t.consensus.etcAsic}</span>
                  </div>
                </div>

                <div>
                  <span className="text-zinc-400 block mb-1">{t.consensus.rowVm}</span>
                  <div className="flex items-center gap-1.5 text-white">
                    <Check className="w-3.5 h-3.5" />
                    <span>{t.consensus.etcVm}</span>
                  </div>
                </div>

                <div>
                  <span className="text-zinc-400 block mb-1">{t.consensus.rowBlockTime}</span>
                  <div className="text-zinc-200">{t.consensus.etcTime}</div>
                </div>

                <div>
                  <span className="text-zinc-400 block mb-1">{t.consensus.rowEcosystem}</span>
                  <div className="text-zinc-200">{t.consensus.etcEco}</div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-[11px] text-zinc-400 font-mono">
              Vulnerable to ASIC centralisation and hash power renting from multi-algorithm mega-farms.
            </div>
          </div>

          {/* Column 2: Monero */}
          <div className="rounded-[2px] bg-[#0A0A0C] border border-white/10 p-6 flex flex-col justify-between">
            <div>
              <div className="pb-4 border-b border-white/10 mb-6">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block">
                  Pure Privacy PoW
                </span>
                <h3 className="text-2xl font-bold font-display text-white mt-1">
                  {t.consensus.col2Header}
                </h3>
                <span className="text-xs text-zinc-400 font-mono">{t.consensus.col2Sub}</span>
              </div>

              <div className="space-y-5 text-xs font-mono">
                <div>
                  <span className="text-zinc-400 block mb-1">{t.consensus.rowAlgo}</span>
                  <div className="text-zinc-200 font-bold">{t.consensus.xmrAlgo}</div>
                </div>

                <div>
                  <span className="text-zinc-400 block mb-1">{t.consensus.rowHardware}</span>
                  <div className="text-zinc-200">{t.consensus.xmrHw}</div>
                </div>

                <div>
                  <span className="text-zinc-400 block mb-1">{t.consensus.rowAsic}</span>
                  <div className="flex items-center gap-1.5 text-white">
                    <Check className="w-3.5 h-3.5" />
                    <span>{t.consensus.xmrAsic}</span>
                  </div>
                </div>

                <div>
                  <span className="text-zinc-400 block mb-1">{t.consensus.rowVm}</span>
                  <div className="flex items-center gap-1.5 text-zinc-500">
                    <X className="w-3.5 h-3.5" />
                    <span>{t.consensus.xmrVm}</span>
                  </div>
                </div>

                <div>
                  <span className="text-zinc-400 block mb-1">{t.consensus.rowBlockTime}</span>
                  <div className="text-zinc-200">{t.consensus.xmrTime}</div>
                </div>

                <div>
                  <span className="text-zinc-400 block mb-1">{t.consensus.rowEcosystem}</span>
                  <div className="text-zinc-200">{t.consensus.xmrEco}</div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-[11px] text-zinc-400 font-mono">
              Exceptional ASIC resistance via RandomX, but lacks smart contracts, tokens, or Web3 DApps.
            </div>
          </div>

          {/* Column 3: Rogue Signal (THE WINNER / HIGHLIGHTED) */}
          <div className="rounded-[2px] bg-[#0A0A0C] border-2 border-white p-6 flex flex-col justify-between shadow-[0_0_30px_rgba(255,255,255,0.12)] relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-[2px] bg-white text-black font-mono text-[10px] font-bold tracking-widest uppercase flex items-center gap-1.5 shadow-lg">
              <Sparkles className="w-3 h-3" />
              <span>{t.consensus.badgeWinner}</span>
            </div>

            <div>
              <div className="pb-4 border-b border-white/10 mb-6 mt-1">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block">
                  Next-Gen Synthesis
                </span>
                <h3 className="text-2xl font-bold font-display text-white mt-1">
                  {t.consensus.col3Header}
                </h3>
                <span className="text-xs text-white font-mono font-semibold">{t.consensus.col3Sub}</span>
              </div>

              <div className="space-y-5 text-xs font-mono">
                <div>
                  <span className="text-zinc-400 block mb-1">{t.consensus.rowAlgo}</span>
                  <div className="text-white font-bold">{t.consensus.rogueAlgo}</div>
                </div>

                <div>
                  <span className="text-zinc-400 block mb-1">{t.consensus.rowHardware}</span>
                  <div className="text-white font-semibold">{t.consensus.rogueHw}</div>
                </div>

                <div>
                  <span className="text-zinc-400 block mb-1">{t.consensus.rowAsic}</span>
                  <div className="flex items-center gap-1.5 text-white font-bold">
                    <Check className="w-4 h-4" />
                    <span>{t.consensus.rogueAsic}</span>
                  </div>
                </div>

                <div>
                  <span className="text-zinc-400 block mb-1">{t.consensus.rowVm}</span>
                  <div className="flex items-center gap-1.5 text-white font-bold">
                    <Check className="w-4 h-4" />
                    <span>{t.consensus.rogueVm}</span>
                  </div>
                </div>

                <div>
                  <span className="text-zinc-400 block mb-1">{t.consensus.rowBlockTime}</span>
                  <div className="text-white font-semibold">{t.consensus.rogueTime}</div>
                </div>

                <div>
                  <span className="text-zinc-400 block mb-1">{t.consensus.rowEcosystem}</span>
                  <div className="text-white font-semibold">{t.consensus.rogueEco}</div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-[11px] text-zinc-200 font-mono bg-white/5 p-3 rounded-[2px] border border-white/15">
              Complete Turing-complete EVM decentralised ecosystem, protected 100% by commodity CPUs worldwide.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
