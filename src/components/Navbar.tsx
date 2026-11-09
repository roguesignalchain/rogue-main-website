import React, { useState, useEffect } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useLanguage } from '../context/LanguageContext';
import { useAddRogueChain } from '../hooks/useAddRogueChain';
import { Radio, PlusCircle, Check, Globe, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { addChain, loading, success } = useAddRogueChain();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-obsidian-950/80 backdrop-blur-md border-b border-border-subtle py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-rogue-500 to-amber-tech flex items-center justify-center p-[2px] shadow-lg shadow-rogue-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-obsidian-950 rounded-[6px] flex items-center justify-center">
                <Radio className="w-5 h-5 text-rogue-500 animate-pulse" />
              </div>
            </div>
            <div>
              <span className="font-bold tracking-tight text-lg text-white font-display">
                ROGUE<span className="text-rogue-500">SIGNAL</span>
              </span>
              <span className="block text-[10px] font-mono tracking-widest text-zinc-400">
                EVM • RANDOMX
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-mono uppercase tracking-wider text-zinc-300">
            <a href="#origin" className="hover:text-rogue-400 transition-colors">
              {t.nav.origin}
            </a>
            <a href="#consensus" className="hover:text-rogue-400 transition-colors">
              {t.nav.consensus}
            </a>
            <a href="#architecture" className="hover:text-rogue-400 transition-colors">
              {t.nav.architecture}
            </a>
            <a href="#tokenomics" className="hover:text-rogue-400 transition-colors">
              {t.nav.tokenomics}
            </a>
            <a href="#mining" className="hover:text-rogue-400 transition-colors">
              {t.nav.mining}
            </a>
            <a href="#roadmap" className="hover:text-rogue-400 transition-colors">
              {t.nav.roadmap}
            </a>
            <a href="#faq" className="hover:text-rogue-400 transition-colors">
              {t.nav.faq}
            </a>
            <a href="#downloads" className="hover:text-rogue-400 transition-colors">
              {t.nav.downloads}
            </a>
          </nav>

          {/* Actions: Add Network, Language Switcher, Wallet Connect */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Add Network Button */}
            <button
              onClick={() => addChain()}
              disabled={loading}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-mono transition-all border ${
                success
                  ? 'bg-emerald-950/60 text-emerald-400 border-emerald-600/50'
                  : 'bg-obsidian-850 hover:bg-obsidian-800 text-zinc-200 border-border-subtle hover:border-rogue-500/40'
              }`}
              title="Add Rogue Signal (Chain ID 800055) to MetaMask"
            >
              {success ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t.nav.networkAdded}</span>
                </>
              ) : (
                <>
                  <PlusCircle className="w-3.5 h-3.5 text-rogue-500" />
                  <span>{t.nav.addNetwork}</span>
                </>
              )}
            </button>

            {/* Language Switcher */}
            <div className="flex items-center bg-obsidian-850 border border-border-subtle rounded-md p-0.5 text-xs font-mono">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded transition-colors ${
                  language === 'en'
                    ? 'bg-rogue-500 text-white font-bold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`px-2 py-1 rounded transition-colors ${
                  language === 'es'
                    ? 'bg-rogue-500 text-white font-bold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                ES
              </button>
            </div>

            {/* RainbowKit Wallet Connect */}
            <ConnectButton
              showBalance={false}
              chainStatus="icon"
              accountStatus={{
                smallScreen: 'avatar',
                largeScreen: 'full',
              }}
            />
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-400 hover:text-white bg-obsidian-850 border border-border-subtle rounded-md"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-obsidian-950 border-b border-border-subtle px-4 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm font-mono uppercase tracking-wider text-zinc-300">
            <a
              href="#origin"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-rogue-400"
            >
              {t.nav.origin}
            </a>
            <a
              href="#consensus"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-rogue-400"
            >
              {t.nav.consensus}
            </a>
            <a
              href="#architecture"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-rogue-400"
            >
              {t.nav.architecture}
            </a>
            <a
              href="#tokenomics"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-rogue-400"
            >
              {t.nav.tokenomics}
            </a>
            <a
              href="#mining"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-rogue-400"
            >
              {t.nav.mining}
            </a>
            <a
              href="#roadmap"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-rogue-400"
            >
              {t.nav.roadmap}
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-rogue-400"
            >
              {t.nav.faq}
            </a>
            <a
              href="#downloads"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-rogue-400"
            >
              {t.nav.downloads}
            </a>
          </nav>

          <div className="pt-3 border-t border-border-subtle flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-zinc-400 font-mono">Language:</span>
              <div className="flex items-center bg-obsidian-850 border border-border-subtle rounded-md p-0.5 text-xs font-mono">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2.5 py-1 rounded ${
                    language === 'en' ? 'bg-rogue-500 text-white font-bold' : 'text-zinc-400'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('es')}
                  className={`px-2.5 py-1 rounded ${
                    language === 'es' ? 'bg-rogue-500 text-white font-bold' : 'text-zinc-400'
                  }`}
                >
                  ES
                </button>
              </div>
            </div>

            <button
              onClick={() => {
                addChain();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2 bg-obsidian-850 text-zinc-200 border border-border-subtle rounded-md text-xs font-mono flex items-center justify-center gap-2"
            >
              <PlusCircle className="w-4 h-4 text-rogue-500" />
              <span>{t.nav.addNetwork}</span>
            </button>

            <div className="pt-2 flex justify-center">
              <ConnectButton />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

