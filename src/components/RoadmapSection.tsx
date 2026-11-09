import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle2, Clock, Calendar, Rocket } from 'lucide-react';

export const RoadmapSection: React.FC = () => {
  const { t } = useLanguage();

  const phases = [
    {
      tag: t.roadmap.phase1Tag,
      title: t.roadmap.phase1Title,
      desc: t.roadmap.phase1Desc,
      icon: CheckCircle2,
      status: 'completed',
      tagColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      dotColor: 'bg-emerald-400',
    },
    {
      tag: t.roadmap.phase2Tag,
      title: t.roadmap.phase2Title,
      desc: t.roadmap.phase2Desc,
      icon: Clock,
      status: 'in_progress',
      tagColor: 'bg-rogue-500/10 text-rogue-400 border-rogue-500/20',
      dotColor: 'bg-rogue-500 animate-pulse',
    },
    {
      tag: t.roadmap.phase3Tag,
      title: t.roadmap.phase3Title,
      desc: t.roadmap.phase3Desc,
      icon: Calendar,
      status: 'upcoming',
      tagColor: 'bg-amber-tech/10 text-amber-tech border-amber-tech/20',
      dotColor: 'bg-amber-tech',
    },
    {
      tag: t.roadmap.phase4Tag,
      title: t.roadmap.phase4Title,
      desc: t.roadmap.phase4Desc,
      icon: Rocket,
      status: 'expansion',
      tagColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      dotColor: 'bg-cyan-400',
    },
  ];

  return (
    <section id="roadmap" className="py-24 border-t border-border-subtle relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded bg-amber-tech/10 border border-amber-tech/20 text-amber-tech font-mono text-xs uppercase tracking-widest mb-3">
            {t.roadmap.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase">
            {t.roadmap.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 font-sans leading-relaxed">
            {t.roadmap.subtitle}
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {phases.map((phase, idx) => {
            const Icon = phase.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-obsidian-900/50 border border-border-subtle hover:border-rogue-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider border ${phase.tagColor}`}>
                      {phase.tag}
                    </span>
                    <span className={`w-2.5 h-2.5 rounded-full ${phase.dotColor}`} />
                  </div>

                  <h3 className="text-lg font-bold font-display text-white mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                    {phase.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border-subtle/50 flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <Icon className="w-4 h-4 text-zinc-400" />
                  <span>Epoch Milestone {idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

