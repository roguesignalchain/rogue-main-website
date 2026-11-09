import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAddRogueChain } from '../hooks/useAddRogueChain';
import { Terminal, Cpu, Clock, ShieldCheck, Flame, ArrowUpRight, PlusCircle, Check, HardDrive } from 'lucide-react';

interface SimulatedBlock {
  number: number;
  hash: string;
  seed: string;
  difficulty: string;
  txs: number;
  time: string;
}

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { addChain, loading, success } = useAddRogueChain();

  const [currentBlock, setCurrentBlock] = useState(84291);
  const [hashrate, setHashrate] = useState('4.82 MH/s');
  const [blocks, setBlocks] = useState<SimulatedBlock[]>([
    {
      number: 84291,
      hash: '0x9fa48c...3b8e',
      seed: '0x4d12...890a (Epoch 41)',
      difficulty: '48,192,042 (LWMA-1)',
      txs: 14,
      time: 'Just now',
    },
    {
      number: 84290,
      hash: '0x32bc71...9a1f',
      seed: '0x4d12...890a (Epoch 41)',
      difficulty: '48,189,450 (LWMA-1)',
      txs: 29,
      time: '9.8s ago',
    },
    {
      number: 84289,
      hash: '0xec0429...5412',
      seed: '0x4d12...890a (Epoch 41)',
      difficulty: '48,175,200 (LWMA-1)',
      txs: 8,
      time: '19.9s ago',
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBlock((prev) => {
        const nextNum = prev + 1;
        const randomHex = () =>
          '0x' + Array.from({ length: 8 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
        const newBlock: SimulatedBlock = {
          number: nextNum,
          hash: `${randomHex()}...${randomHex().slice(2, 6)}`,
          seed: '0x4d12...890a (Epoch 41)',
          difficulty: `${(48190000 + Math.floor(Math.random() * 5000)).toLocaleString()} (LWMA-1)`,
          txs: Math.floor(Math.random() * 35) + 4,
          time: 'Just now',
        };

        setBlocks((prevBlocks) => [newBlock, ...prevBlocks.slice(0, 3)]);
        return nextNum;
      });
    }, 10000); // 10s target block time!

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial glow & technical grid */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-rogue-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-obsidian-850/90 border border-rogue-500/30 text-rogue-400 text-xs font-mono tracking-widest uppercase mb-8 shadow-inner shadow-rogue-500/10 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-rogue-500 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-rogue-500 -ml-4" />
            <span>{t.hero.statusBadge}</span>
          </div>

          {/* Monumental Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tight text-white max-w-5xl leading-[1.05] uppercase">
            {t.hero.headlinePart1}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rogue-500 via-amber-tech to-rogue-400">
              {t.hero.headlineAccent}
            </span>{' '}
            {t.hero.headlinePart2}
          </h1>

          {/* Subheadline */}
          <p className="mt-8 text-base sm:text-lg md:text-xl text-zinc-300 max-w-3xl font-sans font-light leading-relaxed">
            {t.hero.subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => addChain()}
              disabled={loading}
              className={`px-6 py-3.5 rounded-lg font-mono text-sm uppercase tracking-wider font-bold transition-all duration-200 flex items-center gap-2.5 shadow-lg ${
                success
                  ? 'bg-emerald-600 text-white shadow-emerald-600/30'
                  : 'bg-gradient-to-r from-rogue-500 to-amber-600 hover:from-rogue-600 hover:to-amber-700 text-white shadow-rogue-500/25 hover:scale-[1.02]'
              }`}
            >
              {success ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>{t.nav.networkAdded}</span>
                </>
              ) : (
                <>
                  <PlusCircle className="w-4 h-4 text-white" />
                  <span>{t.hero.ctaAddToWallet}</span>
                </>
              )}
            </button>

            <a
              href="#mining"
              className="px-6 py-3.5 rounded-lg font-mono text-sm uppercase tracking-wider font-semibold bg-obsidian-850 hover:bg-obsidian-800 text-zinc-200 border border-border-subtle hover:border-rogue-500/40 transition-all duration-200 flex items-center gap-2"
            >
              <Cpu className="w-4 h-4 text-amber-tech" />
              <span>{t.hero.ctaMining}</span>
            </a>

            <a
              href="https://github.com/roguesignalchain"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3.5 rounded-lg font-mono text-sm uppercase tracking-wider text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span>{t.hero.ctaGithub}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Live Interactive Telemetry Terminal */}
        <div className="mt-16 max-w-4xl mx-auto rounded-xl bg-obsidian-950/90 border border-border-subtle shadow-2xl overflow-hidden backdrop-blur-xl">
          {/* Terminal Window Bar */}
          <div className="px-4 py-3 bg-obsidian-900 border-b border-border-subtle flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-3 text-xs font-mono text-zinc-400 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-rogue-500" />
                {t.hero.terminalTitle}
              </span>
            </div>
            <div className="flex items-center gap-3 font-mono text-[11px]">
              <span className="text-zinc-500">Chain: <span className="text-white">800055</span></span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {t.hero.terminalLive}
              </span>
            </div>
          </div>

          {/* Terminal Content / Block Stream */}
          <div className="p-4 sm:p-6 space-y-4 font-mono text-xs">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pb-4 border-b border-border-subtle text-zinc-400">
              <div>
                <span className="block text-[10px] text-zinc-400 uppercase">Tip Height</span>
                <span className="text-sm font-bold text-white">#{currentBlock.toLocaleString()}</span>
              </div>
              <div>
                <span className="block text-[10px] text-zinc-400 uppercase">Target Time</span>
                <span className="text-sm font-bold text-amber-tech">10.00s (LWMA-1)</span>
              </div>
              <div>
                <span className="block text-[10px] text-zinc-400 uppercase">Current Reward</span>
                <span className="text-sm font-bold text-rogue-400">8.00 ROGUE</span>
              </div>
              <div>
                <span className="block text-[10px] text-zinc-400 uppercase">Est. Hashrate</span>
                <span className="text-sm font-bold text-white">{hashrate}</span>
              </div>
            </div>

            <div className="space-y-2 pt-1">
              <div className="text-[11px] text-zinc-400 uppercase tracking-widest font-semibold flex justify-between">
                <span>Recent Mined Blocks</span>
                <span className="text-rogue-500">Seed Lag: 64 Blocks</span>
              </div>

              {blocks.map((b) => (
                <div
                  key={b.number}
                  className="p-2.5 rounded bg-obsidian-900/60 border border-border-subtle/60 flex flex-wrap items-center justify-between gap-2 hover:border-rogue-500/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-rogue-400 font-bold">#{b.number}</span>
                    <span className="text-zinc-300">{b.hash}</span>
                  </div>
                  <div className="flex items-center gap-4 text-zinc-400 text-[11px]">
                    <span className="hidden md:inline">Diff: {b.difficulty}</span>
                    <span>Txs: <span className="text-white font-medium">{b.txs}</span></span>
                    <span className="text-zinc-400">{b.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4 Massive Technical Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="p-5 rounded-lg bg-obsidian-900/40 border border-border-subtle text-center hover:border-rogue-500/30 transition-all">
            <Clock className="w-5 h-5 text-rogue-500 mx-auto mb-2" />
            <div className="text-xl sm:text-2xl font-bold font-display text-white">{t.hero.statBlockTime}</div>
            <div className="text-xs text-zinc-400 font-mono mt-1">LWMA-1 N=60 Dynamic</div>
          </div>

          <div className="p-5 rounded-lg bg-obsidian-900/40 border border-border-subtle text-center hover:border-rogue-500/30 transition-all">
            <Flame className="w-5 h-5 text-amber-tech mx-auto mb-2" />
            <div className="text-xl sm:text-2xl font-bold font-display text-white">{t.hero.statBlockReward}</div>
            <div className="text-xs text-zinc-400 font-mono mt-1">95% Miner / 5% Treasury</div>
          </div>

          <div className="p-5 rounded-lg bg-obsidian-900/40 border border-border-subtle text-center hover:border-rogue-500/30 transition-all">
            <Cpu className="w-5 h-5 text-rogue-500 mx-auto mb-2" />
            <div className="text-xl sm:text-2xl font-bold font-display text-white">{t.hero.statAlgorithm}</div>
            <div className="text-xs text-zinc-400 font-mono mt-1">2MB L3 Scratchpad / Thread</div>
          </div>

          <div className="p-5 rounded-lg bg-obsidian-900/40 border border-border-subtle text-center hover:border-rogue-500/30 transition-all">
            <ShieldCheck className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
            <div className="text-xl sm:text-2xl font-bold font-display text-white">{t.hero.statMaxSupply}</div>
            <div className="text-xs text-zinc-400 font-mono mt-1">Zero Tail Emission</div>
          </div>
        </div>
      </div>
    </section>
  );
};

