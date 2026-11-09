import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useLanguage } from '../context/LanguageContext';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { OriginSection } from '../components/OriginSection';
import { ConsensusComparison } from '../components/ConsensusComparison';
import { ArchitectureSection } from '../components/ArchitectureSection';
import { TokenomicsSection } from '../components/TokenomicsSection';
import { EvmSection } from '../components/EvmSection';
import { MiningSection } from '../components/MiningSection';
import { DownloadsSection } from '../components/DownloadsSection';
import { RoadmapSection } from '../components/RoadmapSection';
import { FaqSection } from '../components/FaqSection';
import { Footer } from '../components/Footer';

const Home: NextPage = () => {
  const { language } = useLanguage();

  const title =
    language === 'es'
      ? 'Rogue Signal (ROGUE) — EVM Execution. RandomX Proof-of-Work.'
      : 'Rogue Signal (ROGUE) — EVM Execution. RandomX Proof-of-Work.';

  const description =
    language === 'es'
      ? 'Rogue Signal fusiona la programabilidad completa de contratos inteligentes EVM con la minería por CPU resistente a ASICs de Monero (RandomX rx/0).'
      : 'Rogue Signal merges full Solidity Turing-complete smart contracts with Monero CPU ASIC-resistant RandomX proof-of-work consensus.';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />

        {/* OpenGraph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://roguesignal.org" />
        <meta property="og:image" content="/cover.png" />
        <meta property="og:site_name" content="Rogue Signal" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@roguesignal" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/cover.png" />

        {/* Theme color */}
        <meta name="theme-color" content="#000000" />
      </Head>

      <div className="min-h-screen bg-black text-zinc-100 selection:bg-white selection:text-black">
        <Navbar />
        <main>
          <Hero />
          <OriginSection />
          <ConsensusComparison />
          <ArchitectureSection />
          <TokenomicsSection />
          <EvmSection />
          <MiningSection />
          <DownloadsSection />
          <RoadmapSection />
          <FaqSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
