import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Network, Database, Cpu, Share2, Activity, Shield, RefreshCw, HardDrive } from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  const { t } = useLanguage();

  const lifecycleSteps = [
    {
      num: '01',
      icon: Database,
      title: t.architecture.step1Title,
      desc: t.architecture.step1Desc,
      tag: 'EVM Core',
    },
    {
      num: '02',
      icon: Network,
      title: t.architecture.step2Title,
      desc: t.architecture.step2Desc,
      tag: 'Seed Binding',
    },
    {
      num: '03',
      icon: Cpu,
      title: t.architecture.step3Title,
      desc: t.architecture.step3Desc,
      tag: 'RandomX JIT',
    },
    {
      num: '04',
      icon: Share2,
      title: t.architecture.step4Title,
      desc: t.architecture.step4Desc,
      tag: 'P2P Gossip',
    },
  ];

  return (
    <section id="architecture" className="py-24 border-t border-white/10 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-[2px] bg-white/10 border border-white/20 text-white font-mono text-xs uppercase tracking-widest mb-3">
            [{t.architecture.badge}]
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase">
            {t.architecture.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 font-sans leading-relaxed">
            {t.architecture.subtitle}
          </p>
        </div>

        {/* 4-Step Block Lifecycle Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {lifecycleSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="p-6 rounded-[2px] bg-[#0A0A0C] border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-zinc-400 font-bold">[{step.num}]</span>
                    <span className="px-2 py-0.5 rounded-[2px] text-[10px] font-mono uppercase tracking-wider bg-white/10 text-white border border-white/20">
                      {step.tag}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-[2px] bg-black border border-white/20 flex items-center justify-center text-white mb-5 group-hover:border-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold font-display text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 text-[10px] font-mono text-zinc-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Deterministic Execution
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Seed Rotation & Deep Specs Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LWMA-1 */}
          <div className="p-7 rounded-[2px] bg-[#0A0A0C] border border-white/10 hover:border-white/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-[2px] bg-black border border-white/20 text-white">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold font-display text-white">
                  {t.architecture.specLwmaTitle}
                </h4>
                <span className="text-xs font-mono text-zinc-400">Target: 10s • Window: 60 Blocks</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
              {t.architecture.specLwmaDesc}
            </p>
          </div>

          {/* MTP-11 & Drift */}
          <div className="p-7 rounded-[2px] bg-[#0A0A0C] border border-white/10 hover:border-white/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-[2px] bg-black border border-white/20 text-white">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold font-display text-white">
                  {t.architecture.specMtpTitle}
                </h4>
                <span className="text-xs font-mono text-zinc-400">Past Median 11 • Drift ≤ 15s</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
              {t.architecture.specMtpDesc}
            </p>
          </div>

          {/* Seed Rotation */}
          <div className="p-7 rounded-[2px] bg-[#0A0A0C] border border-white/10 hover:border-white/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-[2px] bg-black border border-white/20 text-white">
                <RefreshCw className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold font-display text-white">
                  {t.architecture.specSeedTitle}
                </h4>
                <span className="text-xs font-mono text-zinc-400">Epoch: 2048 Blocks • Lag: 64 Blocks</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
              {t.architecture.specSeedDesc}
            </p>
          </div>

          {/* 2MB Scratchpad */}
          <div className="p-7 rounded-[2px] bg-[#0A0A0C] border border-white/10 hover:border-white/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-[2px] bg-black border border-white/20 text-white">
                <HardDrive className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold font-display text-white">
                  {t.architecture.specMemoryTitle}
                </h4>
                <span className="text-xs font-mono text-zinc-400">L3 Cache Affinity • Anti-ASIC Penalty</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
              {t.architecture.specMemoryDesc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
