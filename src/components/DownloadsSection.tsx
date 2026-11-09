import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Monitor, Server, FileText, ArrowUpRight } from 'lucide-react';

export const DownloadsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="downloads" className="py-24 border-t border-border-subtle relative bg-obsidian-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded bg-rogue-500/10 border border-rogue-500/20 text-rogue-400 font-mono text-xs uppercase tracking-widest mb-3">
            {t.downloads.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase">
            {t.downloads.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 font-sans leading-relaxed">
            {t.downloads.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Desktop Client */}
          <div className="p-8 rounded-xl bg-obsidian-900/60 border border-border-subtle hover:border-rogue-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-lg bg-rogue-500/10 border border-rogue-500/20 text-rogue-500 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Monitor className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-rogue-400 uppercase tracking-wider mb-2">
                TAURI V2 • GUI APP
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-3">
                {t.downloads.clientTitle}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-sans mb-6">
                {t.downloads.clientDesc}
              </p>
            </div>

            <a
              href="https://github.com/roguesignalchain/rogue-desktop-client/releases"
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-rogue-500 to-amber-600 hover:from-rogue-600 hover:to-amber-700 text-white font-mono text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-rogue-500/20"
            >
              <span>{t.downloads.clientBtn}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Core Node CLI */}
          <div className="p-8 rounded-xl bg-obsidian-900/60 border border-border-subtle hover:border-amber-tech/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-lg bg-amber-tech/10 border border-amber-tech/20 text-amber-tech flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Server className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-amber-tech uppercase tracking-wider mb-2">
                NATIVE GETH DAEMON
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-3">
                {t.downloads.nodeTitle}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-sans mb-6">
                {t.downloads.nodeDesc}
              </p>
            </div>

            <a
              href="https://github.com/roguesignalchain/rogue-core-chain/releases"
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 px-4 rounded-lg bg-obsidian-850 hover:bg-obsidian-800 text-zinc-100 border border-border-subtle hover:border-amber-tech/40 font-mono text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-all"
            >
              <span>{t.downloads.nodeBtn}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Protocol Specifications */}
          <div className="p-8 rounded-xl bg-obsidian-900/60 border border-border-subtle hover:border-emerald-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <FileText className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
                TECHNICAL SPECS
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-3">
                {t.downloads.specsTitle}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-sans mb-6">
                {t.downloads.specsDesc}
              </p>
            </div>

            <a
              href="https://github.com/roguesignalchain/rogue-core-chain/blob/master/SPECS.md"
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 px-4 rounded-lg bg-obsidian-850 hover:bg-obsidian-800 text-zinc-100 border border-border-subtle hover:border-emerald-500/40 font-mono text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-all"
            >
              <span>{t.downloads.specsBtn}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

