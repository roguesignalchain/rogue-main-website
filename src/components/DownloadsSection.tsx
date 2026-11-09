import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Monitor, Server, FileText, ArrowUpRight } from 'lucide-react';

export const DownloadsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="downloads" className="py-24 border-t border-white/10 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-[2px] bg-white/10 border border-white/20 text-white font-mono text-xs uppercase tracking-widest mb-3">
            [{t.downloads.badge}]
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
          <div className="p-8 rounded-[2px] bg-[#0A0A0C] border border-white/15 hover:border-white/40 transition-all flex flex-col justify-between group shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            <div>
              <div className="w-12 h-12 rounded-[2px] bg-black border border-white/20 text-white flex items-center justify-center mb-6 group-hover:border-white transition-colors">
                <Monitor className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                [TAURI V2 • GUI APP]
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
              className="w-full py-3 px-4 rounded-[2px] bg-white hover:bg-zinc-200 text-black font-mono text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            >
              <span>{t.downloads.clientBtn}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Core Node CLI */}
          <div className="p-8 rounded-[2px] bg-[#0A0A0C] border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-[2px] bg-black border border-white/20 text-white flex items-center justify-center mb-6 group-hover:border-white transition-colors">
                <Server className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                [NATIVE GETH DAEMON]
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
              className="w-full py-3 px-4 rounded-[2px] bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-white font-mono text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-all"
            >
              <span>{t.downloads.nodeBtn}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Protocol Specifications */}
          <div className="p-8 rounded-[2px] bg-[#0A0A0C] border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-[2px] bg-black border border-white/20 text-white flex items-center justify-center mb-6 group-hover:border-white transition-colors">
                <FileText className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                [TECHNICAL SPECS]
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
              className="w-full py-3 px-4 rounded-[2px] bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-white font-mono text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-all"
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
