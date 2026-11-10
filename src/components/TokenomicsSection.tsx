import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, TrendingDown, Users, Coins, Info } from 'lucide-react';

export const TokenomicsSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeEra, setActiveEra] = useState<number>(1);

  const eras = [
    {
      era: 1,
      range: '0 – 2.0M',
      years: '2026 – 2028',
      reward: '25.00 ROGUE',
      mined: '50.0M',
      percent: '50.0%',
      status: 'Current Epoch',
    },
    {
      era: 2,
      range: '2.0M – 4.0M',
      years: '2028 – 2030',
      reward: '12.50 ROGUE',
      mined: '25.0M',
      percent: '75.0%',
      status: 'Halving 1',
    },
    {
      era: 3,
      range: '4.0M – 6.0M',
      years: '2030 – 2032',
      reward: '6.25 ROGUE',
      mined: '12.5M',
      percent: '87.5%',
      status: 'Halving 2',
    },
    {
      era: 4,
      range: '6.0M – 8.0M',
      years: '2032 – 2034',
      reward: '3.125 ROGUE',
      mined: '6.25M',
      percent: '93.75%',
      status: 'Halving 3',
    },
    {
      era: 5,
      range: '8.0M+',
      years: '2034+',
      reward: '< 1.5625 ROGUE',
      mined: '6.25M',
      percent: '100.0%',
      status: 'Terminal Cap',
    },
  ];

  return (
    <section id="tokenomics" className="py-24 border-t border-white/10 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-[2px] bg-white/10 border border-white/20 text-white font-mono text-xs uppercase tracking-widest mb-3">
            [{t.tokenomics.badge}]
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase">
            {t.tokenomics.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 font-sans leading-relaxed">
            {t.tokenomics.subtitle}
          </p>
        </div>

        {/* 4 Massive Parameter Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-6 rounded-[2px] bg-[#0A0A0C] border border-white/10 hover:border-white/30 transition-all">
            <Coins className="w-5 h-5 text-white mb-3" />
            <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
              [{t.tokenomics.hardCapLabel}]
            </span>
            <div className="text-2xl sm:text-3xl font-black font-display text-white mt-1">
              {t.tokenomics.hardCapVal}
            </div>
            <span className="text-xs text-zinc-400 font-mono mt-1 block">
              {t.tokenomics.hardCapSub}
            </span>
          </div>

          <div className="p-6 rounded-[2px] bg-[#0A0A0C] border border-white/10 hover:border-white/30 transition-all">
            <TrendingDown className="w-5 h-5 text-white mb-3" />
            <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
              [{t.tokenomics.blockRewardLabel}]
            </span>
            <div className="text-2xl sm:text-3xl font-black font-display text-white mt-1">
              {t.tokenomics.blockRewardVal}
            </div>
            <span className="text-xs text-zinc-400 font-mono mt-1 block">
              {t.tokenomics.blockRewardSub}
            </span>
          </div>

          <div className="p-6 rounded-[2px] bg-[#0A0A0C] border border-white/10 hover:border-white/30 transition-all">
            <ShieldCheck className="w-5 h-5 text-white mb-3" />
            <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
              [{t.tokenomics.halvingPeriodLabel}]
            </span>
            <div className="text-2xl sm:text-3xl font-black font-display text-white mt-1">
              {t.tokenomics.halvingPeriodVal}
            </div>
            <span className="text-xs text-zinc-400 font-mono mt-1 block">
              {t.tokenomics.halvingPeriodSub}
            </span>
          </div>

          <div className="p-6 rounded-[2px] bg-[#0A0A0C] border border-white/10 hover:border-white/30 transition-all">
            <Users className="w-5 h-5 text-white mb-3" />
            <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
              [{t.tokenomics.splitLabel}]
            </span>
            <div className="text-2xl sm:text-3xl font-black font-display text-white mt-1">
              {t.tokenomics.splitVal}
            </div>
            <span className="text-xs text-zinc-400 font-mono mt-1 block">
              {t.tokenomics.splitSub}
            </span>
          </div>
        </div>

        {/* Treasury Transparency Notice Box */}
        <div className="p-6 sm:p-8 rounded-[2px] bg-[#0A0A0C] border border-white/15 mb-16 relative overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-black border border-white/20 rounded-[2px] text-white shrink-0">
              <Info className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display text-white mb-2">
                {t.tokenomics.treasuryNoticeTitle}
              </h3>
              <p className="text-sm text-zinc-300 font-sans leading-relaxed">
                {t.tokenomics.treasuryNoticeDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Halving Curve & Projection */}
        <div className="rounded-[2px] bg-[#0A0A0C] border border-white/10 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold font-display text-white">
                {t.tokenomics.chartTitle}
              </h3>
              <p className="text-xs text-zinc-400 font-mono mt-1">
                {t.tokenomics.chartSubtitle}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-zinc-400">Total Supply Cap:</span>
              <span className="px-2.5 py-1 bg-black rounded-[2px] border border-white/20 font-mono text-xs font-bold text-white">
                100,000,000 ROGUE
              </span>
            </div>
          </div>

          {/* SVG Visual Emission Curve */}
          <div className="relative w-full h-44 sm:h-52 bg-black rounded-[2px] border border-white/10 p-4 flex items-end justify-between overflow-hidden">
            <svg
              className="absolute inset-0 w-full h-full p-4 pointer-events-none"
              preserveAspectRatio="none"
              viewBox="0 0 1000 200"
            >
              <defs>
                <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              {/* Halving Curve Area */}
              <path
                d="M 50,180 L 50,40 L 250,40 L 250,90 L 500,90 L 500,135 L 750,135 L 750,160 L 950,160 L 950,180 Z"
                fill="url(#curveGradient)"
              />
              {/* Stepped Halving Line */}
              <path
                d="M 50,40 L 250,40 L 250,90 L 500,90 L 500,135 L 750,135 L 750,160 L 950,160"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.5"
              />
              {/* Cumulative Cap Line */}
              <path
                d="M 50,140 Q 250,70 500,45 T 950,25"
                fill="none"
                stroke="#a1a1aa"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            </svg>

            {/* Labels overlay inside graph */}
            <div className="absolute top-4 left-6 text-[10px] font-mono text-zinc-400">
              [REWARD / BLOCK: SOLID WHITE • CUMULATIVE EMISSION: DASHED ZINC]
            </div>
          </div>

          {/* Era Selectors */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-6">
            {eras.map((era) => (
              <button
                key={era.era}
                onClick={() => setActiveEra(era.era)}
                className={`p-3 rounded-[2px] border text-left transition-all ${
                  activeEra === era.era
                    ? 'bg-zinc-900 border-white shadow-[0_0_15px_rgba(255,255,255,0.1)]'
                    : 'bg-black border-white/10 hover:border-white/30'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 mb-1">
                  <span>{era.status}</span>
                  <span className="text-white font-bold">{era.years}</span>
                </div>
                <div className="text-sm font-bold text-white font-mono">{era.reward}</div>
                <div className="text-[11px] text-zinc-400 font-mono mt-1">
                  Mined: <span className="text-zinc-200">{era.mined}</span> ({era.percent})
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
