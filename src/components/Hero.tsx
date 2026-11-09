import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAddRogueChain } from '../hooks/useAddRogueChain';
import { Terminal, Cpu, Clock, ShieldCheck, Flame, ArrowUpRight, PlusCircle, Check } from 'lucide-react';

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
    }, 10000); // 10s target block time

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-black">
      {/* Background Twitter Cover with 20% opacity and radial mask to black */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'url(/cover.png)',
          maskImage: 'radial-gradient(circle at center, black 30%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 85%)',
        }}
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Official Emblem Top Anchor */}
          <div className="mb-6 w-16 h-16 rounded-[2px] bg-black border border-white/25 p-2 shadow-[0_0_25px_rgba(255,255,255,0.15)] flex items-center justify-center">
            <img src="/icon.png" alt="Rogue Signal" className="w-full h-full object-contain" />
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[2px] bg-zinc-950 border border-white/20 text-white text-xs font-mono tracking-widest uppercase mb-8 shadow-inner shadow-white/5 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span>[NETWORK ACTIVE • RANDOMX RX-0 • CHAIN ID: 800055]</span>
          </div>

          {/* Monumental Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tight text-white max-w-5xl leading-[1.02] uppercase">
            ROGUE SIGNAL
          </h1>

          <div className="mt-3 text-lg sm:text-2xl font-mono text-zinc-400 uppercase tracking-widest">
            {t.hero.headlinePart1}{' '}
            <span className="text-white font-bold underline decoration-white/40 underline-offset-8">
              {t.hero.headlineAccent}
            </span>{' '}
            {t.hero.headlinePart2}
          </div>

          {/* Subheadline */}
          <p className="mt-6 text-base sm:text-lg text-zinc-300 max-w-3xl font-sans font-normal leading-relaxed">
            {t.hero.subheadline}
          </p>

          {/* Tactical CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {/* Primary Solid White Button */}
            <button
              onClick={() => addChain()}
              disabled={loading}
              className={`px-7 py-3.5 rounded-[2px] font-mono text-sm uppercase tracking-wider font-bold transition-all duration-150 flex items-center gap-2.5 shadow-[0_0_20px_rgba(255,255,255,0.15)] ${
                success
                  ? 'bg-zinc-200 text-black border border-white'
                  : 'bg-white hover:bg-zinc-200 text-black border border-white hover:scale-[1.01]'
              }`}
            >
              {success ? (
                <>
                  <Check className="w-4 h-4 text-black" />
                  <span>{t.nav.networkAdded}</span>
                </>
              ) : (
                <>
                  <PlusCircle className="w-4 h-4 text-black" />
                  <span>{t.hero.ctaAddToWallet}</span>
                </>
              )}
            </button>

            {/* Secondary Hairline Outline Button */}
            <a
              href="#mining"
              className="px-6 py-3.5 rounded-[2px] font-mono text-sm uppercase tracking-wider font-medium bg-black hover:bg-white/5 text-white border border-white/25 hover:border-white transition-all duration-150 flex items-center gap-2"
            >
              <Cpu className="w-4 h-4 text-white" />
              <span>{t.hero.ctaMining}</span>
            </a>

            {/* Ghost Bracket Link */}
            <a
              href="https://github.com/roguesignalchain"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3.5 rounded-[2px] font-mono text-sm uppercase tracking-wider text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span>[ {t.hero.ctaGithub} ↗ ]</span>
            </a>
          </div>
        </div>

        {/* Live Interactive Telemetry Terminal */}
        <div className="mt-16 max-w-4xl mx-auto rounded-[2px] bg-[#0A0A0C] border border-white/15 shadow-[0_15px_40px_rgba(0,0,0,0.8)] overflow-hidden">
          {/* Terminal Window Bar */}
          <div className="px-4 py-3 bg-black border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/40 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-white inline-block" />
              <span className="ml-3 text-xs font-mono text-zinc-300 flex items-center gap-2 uppercase tracking-wider">
                <Terminal className="w-3.5 h-3.5 text-white" />
                {t.hero.terminalTitle}
              </span>
            </div>
            <div className="flex items-center gap-3 font-mono text-[11px]">
              <span className="text-zinc-400">[CHAIN: <span className="text-white font-bold">800055</span>]</span>
              <span className="text-white flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                {t.hero.terminalLive}
              </span>
            </div>
          </div>

          {/* Terminal Content / Block Stream */}
          <div className="p-4 sm:p-6 space-y-4 font-mono text-xs">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pb-4 border-b border-white/10 text-zinc-400">
              <div>
                <span className="block text-[10px] text-zinc-400 uppercase tracking-widest">[TIP HEIGHT]</span>
                <span className="text-sm font-bold text-white">#{currentBlock.toLocaleString()}</span>
              </div>
              <div>
                <span className="block text-[10px] text-zinc-400 uppercase tracking-widest">[TARGET TIME]</span>
                <span className="text-sm font-bold text-white">10.00s (LWMA-1)</span>
              </div>
              <div>
                <span className="block text-[10px] text-zinc-400 uppercase tracking-widest">[BLOCK REWARD]</span>
                <span className="text-sm font-bold text-white">8.00 ROGUE</span>
              </div>
              <div>
                <span className="block text-[10px] text-zinc-400 uppercase tracking-widest">[EST. HASHRATE]</span>
                <span className="text-sm font-bold text-white">{hashrate}</span>
              </div>
            </div>

            <div className="space-y-2 pt-1">
              <div className="text-[11px] text-zinc-400 uppercase tracking-widest font-semibold flex justify-between">
                <span>[RECENT MINED BLOCKS]</span>
                <span className="text-white">[SEED LAG: 64 BLOCKS]</span>
              </div>

              {blocks.map((b) => (
                <div
                  key={b.number}
                  className="p-2.5 rounded-[2px] bg-black/60 border border-white/10 flex flex-wrap items-center justify-between gap-2 hover:border-white/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-white font-bold">#{b.number}</span>
                    <span className="text-zinc-300 font-mono">{b.hash}</span>
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
          <div className="p-5 rounded-[2px] bg-[#0A0A0C] border border-white/10 text-center hover:border-white/30 transition-all">
            <Clock className="w-5 h-5 text-white mx-auto mb-2" />
            <div className="text-xl sm:text-2xl font-bold font-display text-white">{t.hero.statBlockTime}</div>
            <div className="text-xs text-zinc-400 font-mono mt-1">LWMA-1 N=60 Dynamic</div>
          </div>

          <div className="p-5 rounded-[2px] bg-[#0A0A0C] border border-white/10 text-center hover:border-white/30 transition-all">
            <Flame className="w-5 h-5 text-white mx-auto mb-2" />
            <div className="text-xl sm:text-2xl font-bold font-display text-white">{t.hero.statBlockReward}</div>
            <div className="text-xs text-zinc-400 font-mono mt-1">95% Miner / 5% Treasury</div>
          </div>

          <div className="p-5 rounded-[2px] bg-[#0A0A0C] border border-white/10 text-center hover:border-white/30 transition-all">
            <Cpu className="w-5 h-5 text-white mx-auto mb-2" />
            <div className="text-xl sm:text-2xl font-bold font-display text-white">{t.hero.statAlgorithm}</div>
            <div className="text-xs text-zinc-400 font-mono mt-1">2MB L3 Scratchpad / Thread</div>
          </div>

          <div className="p-5 rounded-[2px] bg-[#0A0A0C] border border-white/10 text-center hover:border-white/30 transition-all">
            <ShieldCheck className="w-5 h-5 text-white mx-auto mb-2" />
            <div className="text-xl sm:text-2xl font-bold font-display text-white">{t.hero.statMaxSupply}</div>
            <div className="text-xs text-zinc-400 font-mono mt-1">Zero Tail Emission</div>
          </div>
        </div>
      </div>
    </section>
  );
};
