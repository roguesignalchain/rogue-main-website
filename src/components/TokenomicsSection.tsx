import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, TrendingDown, Users, Coins, Info } from 'lucide-react';

export const TokenomicsSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeEra, setActiveEra] = useState<number>(1);

  const eras = [
    {
      era: 1,
      range: '0 – 6.3M',
      years: '2024 – 2026',
      reward: '8.00 ROGUE',
      mined: '50.4M',
      percent: '50.4%',
      status: 'Current Epoch',
    },
    {
      era: 2,
      range: '6.3M – 12.6M',
      years: '2026 – 2028',
      reward: '4.00 ROGUE',
      mined: '25.2M',
      percent: '75.6%',
      status: 'Halving 1',
    },
    {
      era: 3,
      range: '12.6M – 18.9M',
      years: '2028 – 2030',
      reward: '2.00 ROGUE',
      mined: '12.6M',
      percent: '88.2%',
      status: 'Halving 2',
    },
    {
      era: 4,
      range: '18.9M – 25.2M',
      years: '2030 – 2032',
      reward: '1.00 ROGUE',
      mined: '6.3M',
      percent: '94.5%',
      status: 'Halving 3',
    },
    {
      era: 5,
      range: '25.2M+',
      years: '2032+',
      reward: '< 0.50 ROGUE',
      mined: '5.5M',
      percent: '100.0%',
      status: 'Terminal Cap',
    },
  ];

  return (
    <section id="tokenomics" className="py-24 border-t border-border-subtle relative bg-obsidian-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded bg-amber-tech/10 border border-amber-tech/20 text-amber-tech font-mono text-xs uppercase tracking-widest mb-3">
            {t.tokenomics.badge}
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
          <div className="p-6 rounded-xl bg-obsidian-900/60 border border-border-subtle">
            <Coins className="w-5 h-5 text-amber-tech mb-3" />
            <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
              {t.tokenomics.hardCapLabel}
            </span>
            <div className="text-2xl sm:text-3xl font-black font-display text-white mt-1">
              {t.tokenomics.hardCapVal}
            </div>
            <span className="text-xs text-zinc-400 font-mono mt-1 block">
              {t.tokenomics.hardCapSub}
            </span>
          </div>

          <div className="p-6 rounded-xl bg-obsidian-900/60 border border-border-subtle">
            <TrendingDown className="w-5 h-5 text-rogue-500 mb-3" />
            <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
              {t.tokenomics.blockRewardLabel}
            </span>
            <div className="text-2xl sm:text-3xl font-black font-display text-white mt-1">
              {t.tokenomics.blockRewardVal}
            </div>
            <span className="text-xs text-zinc-400 font-mono mt-1 block">
              {t.tokenomics.blockRewardSub}
            </span>
          </div>

          <div className="p-6 rounded-xl bg-obsidian-900/60 border border-border-subtle">
            <ShieldCheck className="w-5 h-5 text-emerald-400 mb-3" />
            <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
              {t.tokenomics.halvingPeriodLabel}
            </span>
            <div className="text-2xl sm:text-3xl font-black font-display text-white mt-1">
              {t.tokenomics.halvingPeriodVal}
            </div>
            <span className="text-xs text-zinc-400 font-mono mt-1 block">
              {t.tokenomics.halvingPeriodSub}
            </span>
          </div>

          <div className="p-6 rounded-xl bg-obsidian-900/60 border border-border-subtle">
            <Users className="w-5 h-5 text-cyan-400 mb-3" />
            <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
              {t.tokenomics.splitLabel}
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
        <div className="p-6 sm:p-8 rounded-xl bg-obsidian-900/40 border border-rogue-500/30 mb-16 relative overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-rogue-500/10 border border-rogue-500/20 rounded-lg text-rogue-500 shrink-0">
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
        <div className="rounded-xl bg-obsidian-900/60 border border-border-subtle p-6 sm:p-8">
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
              <span className="px-2.5 py-1 bg-obsidian-850 rounded border border-border-subtle font-mono text-xs font-bold text-amber-tech">
                100,000,000 ROGUE
              </span>
            </div>
          </div>

          {/* SVG Visual Emission Curve */}
          <div className="relative w-full h-44 sm:h-52 bg-obsidian-950/80 rounded-lg border border-border-subtle p-4 flex items-end justify-between overflow-hidden">
            <svg
              className="absolute inset-0 w-full h-full p-4 pointer-events-none"
              preserveAspectRatio="none"
              viewBox="0 0 1000 200"
            >
              <defs>
                <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ff5500" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#ff5500" stopOpacity="0.0" />
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
                stroke="#ff5500"
                strokeWidth="3"
              />
              {/* Cumulative Cap Line */}
              <path
                d="M 50,140 Q 250,70 500,45 T 950,25"
                fill="none"
                stroke="#ffb300"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
            </svg>

            {/* Labels overlay inside graph */}
            <div className="absolute top-4 left-6 text-[10px] font-mono text-zinc-400">
              Reward / Block (Orange) & Cumulative Supply (Dashed Amber)
            </div>
          </div>

          {/* Era Selectors */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-6">
            {eras.map((era) => (
              <button
                key={era.era}
                onClick={() => setActiveEra(era.era)}
                className={`p-3 rounded-lg border text-left transition-all ${
                  activeEra === era.era
                    ? 'bg-obsidian-850 border-rogue-500 shadow-lg shadow-rogue-500/10'
                    : 'bg-obsidian-950/40 border-border-subtle hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 mb-1">
                  <span>{era.status}</span>
                  <span className="text-amber-tech font-bold">{era.years}</span>
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

