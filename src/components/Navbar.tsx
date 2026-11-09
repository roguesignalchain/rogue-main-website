import React, { useState, useEffect } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useLanguage } from '../context/LanguageContext';
import { useAddRogueChain } from '../hooks/useAddRogueChain';
import { PlusCircle, Check, Menu, X } from 'lucide-react';

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
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-[2px] bg-black border border-white/20 flex items-center justify-center p-1 group-hover:border-white transition-colors">
              <img src="/logo.png" alt="Rogue Signal" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold tracking-tight text-lg text-white font-display">
                  ROGUE SIGNAL
                </span>
                <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-[2px] bg-white/10 border border-white/20 text-white">
                  RX-0
                </span>
              </div>
              <span className="block text-[10px] font-mono tracking-widest text-zinc-400">
                CHAIN ID: 800055
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-mono uppercase tracking-wider text-zinc-400">
            <a href="#origin" className="hover:text-white transition-colors">
              {t.nav.origin}
            </a>
            <a href="#consensus" className="hover:text-white transition-colors">
              {t.nav.consensus}
            </a>
            <a href="#architecture" className="hover:text-white transition-colors">
              {t.nav.architecture}
            </a>
            <a href="#tokenomics" className="hover:text-white transition-colors">
              {t.nav.tokenomics}
            </a>
            <a href="#mining" className="hover:text-white transition-colors">
              {t.nav.mining}
            </a>
            <a href="#roadmap" className="hover:text-white transition-colors">
              {t.nav.roadmap}
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              {t.nav.faq}
            </a>
            <a href="#downloads" className="hover:text-white transition-colors">
              {t.nav.downloads}
            </a>
            <a href="https://docs.roguechain.org" target="_blank" rel="noreferrer" className="text-white hover:text-zinc-300 font-bold transition-colors">
              [ DOCS ↗ ]
            </a>
          </nav>

          {/* Actions: Add Network, Language Switcher, Wallet Connect */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Add Network Button */}
            <button
              onClick={() => addChain()}
              disabled={loading}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-[2px] text-xs font-mono transition-all border ${
                success
                  ? 'bg-white text-black font-bold border-white'
                  : 'bg-zinc-950 hover:bg-zinc-900 text-zinc-200 border-white/15 hover:border-white/40'
              }`}
              title="Add Rogue Signal (Chain ID 800055) to MetaMask"
            >
              {success ? (
                <>
                  <Check className="w-3.5 h-3.5 text-black" />
                  <span>{t.nav.networkAdded}</span>
                </>
              ) : (
                <>
                  <PlusCircle className="w-3.5 h-3.5 text-white" />
                  <span>{t.nav.addNetwork}</span>
                </>
              )}
            </button>

            {/* Language Switcher */}
            <div className="flex items-center bg-zinc-950 border border-white/15 rounded-[2px] p-0.5 text-xs font-mono">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 rounded-[2px] transition-colors ${
                  language === 'en'
                    ? 'bg-white text-black font-bold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`px-2 py-0.5 rounded-[2px] transition-colors ${
                  language === 'es'
                    ? 'bg-white text-black font-bold'
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
              className="p-2 text-zinc-400 hover:text-white bg-zinc-950 border border-white/15 rounded-[2px]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black border-b border-white/10 px-4 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm font-mono uppercase tracking-wider text-zinc-300">
            <a href="#origin" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">
              {t.nav.origin}
            </a>
            <a href="#consensus" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">
              {t.nav.consensus}
            </a>
            <a href="#architecture" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">
              {t.nav.architecture}
            </a>
            <a href="#tokenomics" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">
              {t.nav.tokenomics}
            </a>
            <a href="#mining" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">
              {t.nav.mining}
            </a>
            <a href="#roadmap" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">
              {t.nav.roadmap}
            </a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">
              {t.nav.faq}
            </a>
            <a href="#downloads" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">
              {t.nav.downloads}
            </a>
          </nav>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-zinc-400 font-mono">Language:</span>
              <div className="flex items-center bg-zinc-950 border border-white/15 rounded-[2px] p-0.5 text-xs font-mono">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2.5 py-1 rounded-[2px] ${
                    language === 'en' ? 'bg-white text-black font-bold' : 'text-zinc-400'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('es')}
                  className={`px-2.5 py-1 rounded-[2px] ${
                    language === 'es' ? 'bg-white text-black font-bold' : 'text-zinc-400'
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
              className="w-full py-2 bg-zinc-950 text-zinc-200 border border-white/15 rounded-[2px] text-xs font-mono flex items-center justify-center gap-2"
            >
              <PlusCircle className="w-4 h-4 text-white" />
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
