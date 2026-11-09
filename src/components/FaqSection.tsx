import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'all' | 'mining' | 'consensus' | 'tokenomics' | 'security'>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      category: 'consensus',
      q: t.faq.q1,
      a: t.faq.a1,
    },
    {
      category: 'mining',
      q: t.faq.q2,
      a: t.faq.a2,
    },
    {
      category: 'tokenomics',
      q: t.faq.q3,
      a: t.faq.a3,
    },
    {
      category: 'consensus',
      q: t.faq.q4,
      a: t.faq.a4,
    },
    {
      category: 'consensus',
      q: t.faq.q5,
      a: t.faq.a5,
    },
    {
      category: 'security',
      q: t.faq.q6,
      a: t.faq.a6,
    },
    {
      category: 'mining',
      q: t.faq.q7,
      a: t.faq.a7,
    },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? faqItems
      : faqItems.filter((item) => item.category === activeCategory);

  return (
    <section id="faq" className="py-24 border-t border-border-subtle relative bg-obsidian-950/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded bg-rogue-500/10 border border-rogue-500/20 text-rogue-400 font-mono text-xs uppercase tracking-widest mb-3">
            {t.faq.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase">
            {t.faq.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 font-sans leading-relaxed">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {(['all', 'mining', 'consensus', 'tokenomics', 'security'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(null);
              }}
              className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all border ${
                activeCategory === cat
                  ? 'bg-rogue-500/20 text-rogue-400 border-rogue-500/40 font-bold'
                  : 'bg-obsidian-900/40 text-zinc-400 border-border-subtle hover:text-white'
              }`}
            >
              {cat === 'all' && t.faq.tabAll}
              {cat === 'mining' && t.faq.tabMining}
              {cat === 'consensus' && t.faq.tabConsensus}
              {cat === 'tokenomics' && t.faq.tabTokenomics}
              {cat === 'security' && t.faq.tabSecurity}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-obsidian-900/60 border border-border-subtle overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:text-rogue-400 transition-colors"
                >
                  <span className="font-bold text-base sm:text-lg font-display text-white">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-rogue-500' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-zinc-400 font-sans leading-relaxed border-t border-border-subtle/40">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

