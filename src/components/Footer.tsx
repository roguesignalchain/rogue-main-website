import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Send, ExternalLink } from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const TwitterIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const Footer: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();

  return (
    <footer className="border-t border-white/10 bg-black pt-16 pb-12 text-zinc-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-[2px] bg-black border border-white/20 p-1 flex items-center justify-center">
                <img src="/icon.png" alt="Rogue Signal" className="w-full h-full object-contain" />
              </div>
              <span className="font-bold text-lg text-white font-display tracking-tight">
                ROGUE SIGNAL
              </span>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              {t.footer.tagline}
            </p>

            {/* Network Health Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-[#0A0A0C] border border-white/15 text-[11px] font-mono text-white">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>{t.footer.statusHealthy}</span>
            </div>
          </div>

          {/* Links 1: Resources */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold mb-4">
              {t.footer.linksResources}
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a href="#origin" className="hover:text-white transition-colors">
                  {t.nav.origin}
                </a>
              </li>
              <li>
                <a href="#consensus" className="hover:text-white transition-colors">
                  {t.nav.consensus}
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-white transition-colors">
                  {t.nav.architecture}
                </a>
              </li>
              <li>
                <a href="#tokenomics" className="hover:text-white transition-colors">
                  {t.nav.tokenomics}
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-white transition-colors">
                  {t.nav.roadmap}
                </a>
              </li>
            </ul>
          </div>

          {/* Links 2: Developers */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold mb-4">
              {t.footer.linksDevelopers}
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a
                  href="https://github.com/roguesignalchain/rogue-core-chain"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>rogue-core-chain</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/roguesignalchain/rogue-desktop-client"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>rogue-desktop-client</span>
                </a>
              </li>
              <li>
                <a
                  href="https://docs.roguechain.org"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>docs.roguechain.org</span>
                </a>
              </li>
              <li>
                <a
                  href="https://explorer.roguesignal.org"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Block Explorer</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Links 3: Community & Language */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold mb-4">
              {t.footer.linksCommunity}
            </h4>
            <div className="flex items-center gap-3 mb-6">
              <a
                href="https://github.com/roguesignalchain"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-[2px] bg-black border border-white/15 flex items-center justify-center text-zinc-300 hover:text-white hover:border-white transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/roguesignal"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-[2px] bg-black border border-white/15 flex items-center justify-center text-zinc-300 hover:text-white hover:border-white transition-colors"
                title="X / Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="https://t.me/roguesignalchain"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-[2px] bg-black border border-white/15 flex items-center justify-center text-zinc-300 hover:text-white hover:border-white transition-colors"
                title="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>

            <span className="text-xs font-mono text-zinc-400 block mb-2">Switch Language:</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-[2px] text-xs font-mono border ${
                  language === 'en'
                    ? 'bg-white text-black border-white font-bold'
                    : 'bg-black text-zinc-400 border-white/15 hover:border-white/40'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 rounded-[2px] text-xs font-mono border ${
                  language === 'es'
                    ? 'bg-white text-black border-white font-bold'
                    : 'bg-black text-zinc-400 border-white/15 hover:border-white/40'
                }`}
              >
                Español
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div>{t.footer.rights}</div>
          <div className="text-zinc-400">{t.footer.chainInfo}</div>
        </div>
      </div>
    </footer>
  );
};
