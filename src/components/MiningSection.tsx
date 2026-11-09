import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Cpu, Copy, Check, Terminal, FileCode, CheckCircle2 } from 'lucide-react';

export const MiningSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'xmrig' | 'core' | 'specs'>('xmrig');
  const [copied, setCopied] = useState(false);

  const xmrigConfig = `{
  "autosave": true,
  "cpu": {
    "enabled": true,
    "huge-pages": true,
    "hw-aes": null,
    "priority": null,
    "memory-pool": true,
    "asm": true
  },
  "opencl": false,
  "cuda": false,
  "pools": [
    {
      "algo": "rx/0",
      "coin": null,
      "url": "127.0.0.1:3333",
      "user": "0xYourRogueWalletPayoutAddress",
      "pass": "x",
      "rig-id": "cpu-rig-01",
      "keepalive": true,
      "tls": false
    }
  ]
}`;

  const coreCommand = `./core-rogue \\
  --networkid 800055 \\
  --http \\
  --http.api eth,net,web3,personal,miner \\
  --mine \\
  --miner.threads 8 \\
  --miner.etherbase 0xYourRogueWalletPayoutAddress`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="mining" className="py-24 border-t border-white/10 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-[2px] bg-white/10 border border-white/20 text-white font-mono text-xs uppercase tracking-widest mb-3">
            [{t.mining.badge}]
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase">
            {t.mining.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 font-sans leading-relaxed">
            {t.mining.subtitle}
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="max-w-4xl mx-auto">
          <div className="flex border-b border-white/10 mb-6 gap-2">
            <button
              onClick={() => setActiveTab('xmrig')}
              className={`px-5 py-3 font-mono text-xs uppercase tracking-wider font-bold transition-all border-b-2 flex items-center gap-2 ${
                activeTab === 'xmrig'
                  ? 'border-white text-white bg-white/10'
                  : 'border-transparent text-zinc-400 hover:text-white'
              }`}
            >
              <FileCode className="w-4 h-4" />
              <span>{t.mining.tabXmrig}</span>
            </button>

            <button
              onClick={() => setActiveTab('core')}
              className={`px-5 py-3 font-mono text-xs uppercase tracking-wider font-bold transition-all border-b-2 flex items-center gap-2 ${
                activeTab === 'core'
                  ? 'border-white text-white bg-white/10'
                  : 'border-transparent text-zinc-400 hover:text-white'
              }`}
            >
              <Terminal className="w-4 h-4" />
              <span>{t.mining.tabCore}</span>
            </button>

            <button
              onClick={() => setActiveTab('specs')}
              className={`px-5 py-3 font-mono text-xs uppercase tracking-wider font-bold transition-all border-b-2 flex items-center gap-2 ${
                activeTab === 'specs'
                  ? 'border-white text-white bg-white/10'
                  : 'border-transparent text-zinc-400 hover:text-white'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>{t.mining.tabSpecs}</span>
            </button>
          </div>

          {/* Tab 1: XMRig */}
          {activeTab === 'xmrig' && (
            <div className="rounded-[2px] bg-[#0A0A0C] border border-white/10 p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-zinc-400 font-mono">
                  {t.mining.xmrigDesc}
                </span>
                <button
                  onClick={() => copyToClipboard(xmrigConfig)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] bg-black hover:bg-white/10 border border-white/20 text-xs font-mono text-white transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-white" />
                      <span>{t.mining.copiedBtn}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-white" />
                      <span>{t.mining.copyBtn}</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="p-4 bg-black rounded-[2px] border border-white/10 overflow-x-auto text-xs font-mono text-zinc-200 leading-relaxed">
                <code>{xmrigConfig}</code>
              </pre>

              <div className="mt-4 p-3 bg-white/5 border border-white/10 rounded-[2px] text-xs text-zinc-300 font-mono">
                {t.mining.hugePagesNotice}
              </div>
            </div>
          )}

          {/* Tab 2: Core Node */}
          {activeTab === 'core' && (
            <div className="rounded-[2px] bg-[#0A0A0C] border border-white/10 p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-zinc-400 font-mono">
                  {t.mining.coreDesc}
                </span>
                <button
                  onClick={() => copyToClipboard(coreCommand)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] bg-black hover:bg-white/10 border border-white/20 text-xs font-mono text-white transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-white" />
                      <span>{t.mining.copiedBtn}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-white" />
                      <span>{t.mining.copyBtn}</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="p-4 bg-black rounded-[2px] border border-white/10 overflow-x-auto text-xs font-mono text-zinc-200 leading-relaxed">
                <code>{coreCommand}</code>
              </pre>

              <div className="mt-4 text-xs text-zinc-400 font-mono">
                Replace <code className="text-white font-bold bg-white/10 px-1 py-0.5 rounded-[2px]">0xYourRogueWalletPayoutAddress</code> with your address generated in Rogue Desktop Client or MetaMask.
              </div>
            </div>
          )}

          {/* Tab 3: Hardware specs */}
          {activeTab === 'specs' && (
            <div className="rounded-[2px] bg-[#0A0A0C] border border-white/10 p-6 space-y-4">
              <div className="flex items-start gap-3 p-4 bg-black rounded-[2px] border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white font-mono">[PROCESSOR RECOMMENDATION]</div>
                  <div className="text-xs text-zinc-400 font-sans mt-1">{t.mining.recommendedCpu}</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-black rounded-[2px] border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white font-mono">[MEMORY RECOMMENDATION]</div>
                  <div className="text-xs text-zinc-400 font-sans mt-1">{t.mining.recommendedRam}</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-black rounded-[2px] border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white font-mono">[OPERATING SYSTEM]</div>
                  <div className="text-xs text-zinc-400 font-sans mt-1">
                    Linux (Ubuntu 22.04+, Debian 12+, Arch) recommended for native 1GB HugePages support. Windows 10/11 64-bit and macOS ARM64 fully supported.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
