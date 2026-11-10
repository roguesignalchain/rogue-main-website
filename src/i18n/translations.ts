export type Language = 'en' | 'es';

export interface Translations {
  nav: {
    origin: string;
    consensus: string;
    architecture: string;
    tokenomics: string;
    mining: string;
    roadmap: string;
    faq: string;
    downloads: string;
    addNetwork: string;
    networkAdded: string;
  };
  hero: {
    statusBadge: string;
    headlinePart1: string;
    headlineAccent: string;
    headlinePart2: string;
    subheadline: string;
    ctaAddToWallet: string;
    ctaMining: string;
    ctaGithub: string;
    terminalTitle: string;
    terminalLive: string;
    statBlockTime: string;
    statBlockReward: string;
    statAlgorithm: string;
    statMaxSupply: string;
  };
  origin: {
    badge: string;
    title: string;
    subtitle: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
  };
  consensus: {
    badge: string;
    title: string;
    subtitle: string;
    col1Header: string;
    col1Sub: string;
    col2Header: string;
    col2Sub: string;
    col3Header: string;
    col3Sub: string;
    badgeWinner: string;
    rowAlgo: string;
    rowHardware: string;
    rowAsic: string;
    rowVm: string;
    rowBlockTime: string;
    rowEcosystem: string;
    etcAlgo: string;
    etcHw: string;
    etcAsic: string;
    etcVm: string;
    etcTime: string;
    etcEco: string;
    xmrAlgo: string;
    xmrHw: string;
    xmrAsic: string;
    xmrVm: string;
    xmrTime: string;
    xmrEco: string;
    rogueAlgo: string;
    rogueHw: string;
    rogueAsic: string;
    rogueVm: string;
    rogueTime: string;
    rogueEco: string;
  };
  architecture: {
    badge: string;
    title: string;
    subtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
    specLwmaTitle: string;
    specLwmaDesc: string;
    specMtpTitle: string;
    specMtpDesc: string;
    specSeedTitle: string;
    specSeedDesc: string;
    specMemoryTitle: string;
    specMemoryDesc: string;
  };
  tokenomics: {
    badge: string;
    title: string;
    subtitle: string;
    hardCapLabel: string;
    hardCapVal: string;
    hardCapSub: string;
    blockRewardLabel: string;
    blockRewardVal: string;
    blockRewardSub: string;
    halvingPeriodLabel: string;
    halvingPeriodVal: string;
    halvingPeriodSub: string;
    splitLabel: string;
    splitVal: string;
    splitSub: string;
    treasuryNoticeTitle: string;
    treasuryNoticeDesc: string;
    chartTitle: string;
    chartSubtitle: string;
    era1: string;
    era2: string;
    era3: string;
    era4: string;
  };
  evm: {
    badge: string;
    title: string;
    subtitle: string;
    feat1Title: string;
    feat1Desc: string;
    feat2Title: string;
    feat2Desc: string;
    feat3Title: string;
    feat3Desc: string;
  };
  mining: {
    badge: string;
    title: string;
    subtitle: string;
    tabXmrig: string;
    tabCore: string;
    tabSpecs: string;
    xmrigDesc: string;
    coreDesc: string;
    copyBtn: string;
    copiedBtn: string;
    recommendedCpu: string;
    recommendedRam: string;
    hugePagesNotice: string;
  };
  downloads: {
    badge: string;
    title: string;
    subtitle: string;
    clientTitle: string;
    clientDesc: string;
    clientBtn: string;
    nodeTitle: string;
    nodeDesc: string;
    nodeBtn: string;
    specsTitle: string;
    specsDesc: string;
    specsBtn: string;
  };
  roadmap: {
    badge: string;
    title: string;
    subtitle: string;
    phase1Tag: string;
    phase1Title: string;
    phase1Desc: string;
    phase2Tag: string;
    phase2Title: string;
    phase2Desc: string;
    phase3Tag: string;
    phase3Title: string;
    phase3Desc: string;
    phase4Tag: string;
    phase4Title: string;
    phase4Desc: string;
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    tabAll: string;
    tabMining: string;
    tabConsensus: string;
    tabTokenomics: string;
    tabSecurity: string;
    q1: string;
    a1: string;
    q2: string;
    a2: string;
    q3: string;
    a3: string;
    q4: string;
    a4: string;
    q5: string;
    a5: string;
    q6: string;
    a6: string;
    q7: string;
    a7: string;
  };
  footer: {
    tagline: string;
    chainInfo: string;
    rights: string;
    linksResources: string;
    linksCommunity: string;
    linksDevelopers: string;
    statusHealthy: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      origin: 'Origins',
      consensus: 'Consensus',
      architecture: 'Architecture',
      tokenomics: 'Tokenomics',
      mining: 'Mining',
      roadmap: 'Roadmap',
      faq: 'FAQ',
      downloads: 'Downloads',
      addNetwork: 'Add ROGUE to Wallet',
      networkAdded: 'Added to Wallet',
    },
    hero: {
      statusBadge: 'MAINNET ARCHITECTURE READY • CHAIN ID 800055',
      headlinePart1: 'EVM EXECUTION.',
      headlineAccent: 'RANDOMX',
      headlinePart2: 'PROOF-OF-WORK.',
      subheadline:
        'Rogue Signal merges the full Solidity Turing-complete smart contract capability of Ethereum Classic with the CPU-grade ASIC-resistant mining power of Monero. A decentralized revolution powered by everyday processors.',
      ctaAddToWallet: 'Add Rogue Network',
      ctaMining: 'Start Mining',
      ctaGithub: 'View Source',
      terminalTitle: 'LIVE PROTOCOL TELEMETRY',
      terminalLive: 'SYNCHRONIZED',
      statBlockTime: '30s Block Time',
      statBlockReward: '25 ROGUE / Block',
      statAlgorithm: 'RandomX (rx/0)',
      statMaxSupply: '100M Hard Cap',
    },
    origin: {
      badge: 'ARCHITECTURAL LINEAGE',
      title: 'Forged from Classic. Liberated by RandomX.',
      subtitle:
        'Ethereum Classic proved that immutable smart contracts endure. Monero proved that CPUs keep mining democratic. Rogue Signal synthesizes both paradigms into a single unified chain.',
      card1Title: 'Ethereum Classic Core Engine',
      card1Desc:
        'Derived from Core-Geth, Rogue Signal preserves the battle-tested EVM state transition machine, gas metering, RPC interfaces, and full tooling compatibility without compromising decentralization.',
      card2Title: 'Decoupling Ethash / Etchash',
      card2Desc:
        'Ethash and Etchash surrendered to specialized ASIC manufacturing cartels and massive GPU farms. Rogue Signal stripped away memory-bandwidth reliance and eliminated industrial mining monopolies.',
      card3Title: 'Native Monero RandomX C++ Core',
      card3Desc:
        'Integrated as a statically linked consensus core, RandomX executes complex pseudorandom machine code tailored specifically to modern general-purpose CPU microarchitectures.',
    },
    consensus: {
      badge: 'THE CONSENSUS TRILEMMA',
      title: 'Ethash vs RandomX vs Rogue Signal',
      subtitle:
        'Why choose between smart contracts and fair mining when you can have both running concurrently at protocol level?',
      col1Header: 'Ethereum Classic',
      col1Sub: 'Ethash / Etchash',
      col2Header: 'Monero',
      col2Sub: 'RandomX Pure UTXO',
      col3Header: 'Rogue Signal',
      col3Sub: 'EVM + RandomX rx/0',
      badgeWinner: 'THE PERFECT SYNTHESIS',
      rowAlgo: 'Mining Algorithm',
      rowHardware: 'Target Hardware',
      rowAsic: 'ASIC Resistance',
      rowVm: 'Smart Contract Engine',
      rowBlockTime: 'Block Target Time',
      rowEcosystem: 'Tooling & DApps',
      etcAlgo: 'Etchash (DAG-based)',
      etcHw: 'GPUs & Ethash ASICs',
      etcAsic: 'Vulnerable to Custom Hardware',
      etcVm: 'Ethereum Virtual Machine (EVM)',
      etcTime: '13 seconds',
      etcEco: 'Web3 / Solidity Standard',
      xmrAlgo: 'RandomX (rx/0 profile)',
      xmrHw: 'Consumer CPUs (L3 Cache)',
      xmrAsic: 'Rigidly ASIC-Resistant',
      xmrVm: 'None (Pure UTXO Privacy Chain)',
      xmrTime: '120 seconds',
      xmrEco: 'Proprietary Wallet / CLI only',
      rogueAlgo: 'RandomX rx/0 with 2MB Scratchpad',
      rogueHw: 'Universal CPUs (x86-64 / ARM64)',
      rogueAsic: 'Absolute Hardware Neutrality',
      rogueVm: 'Full EVM (Solidity / Vyper)',
      rogueTime: '30 seconds (LWMA-1 + MESS Finality)',
      rogueEco: 'MetaMask, Foundry, Hardhat & Remix',
    },
    architecture: {
      badge: 'CONSENSUS & SECURITY',
      title: 'Precision Engineering at Every Block',
      subtitle:
        'From high-speed transaction execution to cryptographically robust block assembly, explore the mechanics of Rogue Signal.',
      step1Title: '01. EVM State Transition',
      step1Desc:
        'Transactions execute across the EVM with deterministic gas accounting, generating account balances and contract state roots.',
      step2Title: '02. Seed & Header Binding',
      step2Desc:
        'The block header binds the current state root, parent hash, and the active RandomX Seed Hash determined by epoch rotation.',
      step3Title: '03. RandomX C++ JIT Execution',
      step3Desc:
        'CPU miners run pseudorandom code generators through 2MB L3 cache scratchpads, testing nonces to satisfy LWMA-1 difficulty.',
      step4Title: '04. Fast Gossip & Finality',
      step4Desc:
        'Valid blocks propagate across the P2P network with <0.5% orphan rate, enforcing strict MTP-11, ECBP-1100 (MESS), and 90-block finality.',
      specLwmaTitle: 'LWMA-1 Difficulty Adjustment (N=60)',
      specLwmaDesc:
        'Linear Weighted Moving Average recalibrates difficulty every single block over a 60-block window (~30m) with +-33% clamping. Prevents sudden hashrate surges from stalling or speeding up the 30-second target.',
      specMtpTitle: 'Strict MTP-11, 15s Drift & MESS Finality',
      specMtpDesc:
        'Blocks must exceed the median of the past 11 blocks (max 15s future drift), while ECBP-1100 (MESS) and a hard 90-block MaxReorgDepth neutralize 51% and time-warp attacks.',
      specSeedTitle: 'Seed Rotation Every 2048 Blocks',
      specSeedDesc:
        'RandomX seed changes every 2048 blocks (~17.07h) with a 64-block (~32m) advance lag notice, ensuring all nodes initialize the new virtual machine memory dataset smoothly in the background.',
      specMemoryTitle: '2MB Scratchpad & Full-Node Solo Mining',
      specMemoryDesc:
        'Saturates the exact L3 cache size of consumer CPUs per thread while disabling remote eth_getWork / Stratum proxies so every mining machine must run a full validating node.',
    },
    tokenomics: {
      badge: 'MONETARY POLICY',
      title: 'Strict Scarcity. Zero Tail Emission.',
      subtitle:
        'A deterministic monetary supply capped at 100 Million ROGUE, structured for long-term deflationary health and sustainable miner security.',
      hardCapLabel: 'MAXIMUM SUPPLY',
      hardCapVal: '100,000,000',
      hardCapSub: 'Hard capped, non-inflationary',
      blockRewardLabel: 'BASE REWARD',
      blockRewardVal: '25 ROGUE',
      blockRewardSub: 'Issued every 30 seconds',
      halvingPeriodLabel: 'HALVING EPOCH',
      halvingPeriodVal: '2,000,000',
      halvingPeriodSub: '~1.90 years per cycle',
      splitLabel: 'REWARD SPLIT',
      splitVal: '95% / 5%',
      splitSub: 'Miner / Protocol Treasury',
      treasuryNoticeTitle: 'Protocol Treasury Transparency',
      treasuryNoticeDesc:
        '95% (23.75 ROGUE + 100% of block transaction fees) goes directly to the solving CPU miner. The remaining 5% (1.25 ROGUE) funds ongoing core client development, seed node network maintenance, security audits, and developer grants. No private pre-mine, no VC token allocations, no backdoor keys.',
      chartTitle: 'Projected Emission Curve & Halvings',
      chartSubtitle:
        'Reward halving progression every 2.0M blocks (~1.90 years) until the 100M ROGUE terminal cap is reached.',
      era1: 'Era 1 (Blocks 0 - 2.0M): 25 ROGUE (50M issued)',
      era2: 'Era 2 (Blocks 2.0M - 4.0M): 12.5 ROGUE (25M issued)',
      era3: 'Era 3 (Blocks 4.0M - 6.0M): 6.25 ROGUE (12.5M issued)',
      era4: 'Era 4+ (Blocks 6.0M+): 3.125 ROGUE down to 0 (Terminal 100M)',
    },
    evm: {
      badge: 'DEVELOPER SUITE',
      title: '100% Solidity & EVM Native',
      subtitle:
        'Deploy smart contracts without rewrites. Every ERC-20, ERC-721, DEX, and DeFi protocol works out of the box with familiar tooling.',
      feat1Title: 'Solidity & Vyper Compatible',
      feat1Desc:
        'Write smart contracts using standard Solidity or Vyper. Bytecode executes in an optimized EVM runtime.',
      feat2Title: 'Standard Tooling Support',
      feat2Desc:
        'Plug your standard workflows into Rogue Signal via RPC: Hardhat, Foundry, Remix, Brownie, and Ethers.js/Viem.',
      feat3Title: 'Universal Web3 Wallets',
      feat3Desc:
        'Seamlessly connect MetaMask, Rabby, Rainbow, Coinbase Wallet, or hardware devices using standard RPC methods.',
    },
    mining: {
      badge: 'DECENTRALIZED WORK',
      title: 'Start Mining ROGUE on Your CPU',
      subtitle:
        'Join the decentralized consensus in seconds. Use XMRig or run the built-in miner inside the native core node.',
      tabXmrig: 'XMRig (Recommended)',
      tabCore: 'Core Node CLI',
      tabSpecs: 'Hardware Guide',
      xmrigDesc:
        'Configure XMRig with your local or remote Rogue node address and your payout address:',
      coreDesc:
        'Run the integrated mining thread directly within your local core-rogue binary:',
      copyBtn: 'Copy Config',
      copiedBtn: 'Copied to Clipboard!',
      recommendedCpu: 'Modern 6+ core CPU (AMD Ryzen 5000/7000/9000 or Intel Core 12th+ Gen)',
      recommendedRam: '8GB+ DDR4/DDR5 Dual Channel RAM with 1GB HugePages enabled',
      hugePagesNotice: 'Enable 1GB HugePages on Linux for a 15-30% hashrate boost.',
    },
    downloads: {
      badge: 'CLIENT ECOSYSTEM',
      title: 'Run a Node. Command the Signal.',
      subtitle:
        'Official native clients engineered for maximum stability, low footprint, and complete cryptographic autonomy.',
      clientTitle: 'Rogue Desktop Client',
      clientDesc:
        'Official Tauri v2 desktop application. Includes multi-account HD wallet, built-in RandomX CPU miner, node manager, and telemetry dashboard.',
      clientBtn: 'Download Desktop GUI',
      nodeTitle: 'Rogue Core Node CLI',
      nodeDesc:
        'High-performance full node daemon based on Core-Geth with native C++ RandomX static integration. For miners, validators, and RPC providers.',
      nodeBtn: 'Get Core Binary',
      specsTitle: 'Network Specifications',
      specsDesc:
        'Read the comprehensive technical specification document, mathematical difficulty proofs, seed rotation schedules, and consensus parameters.',
      specsBtn: 'View Protocol Specs',
    },
    roadmap: {
      badge: 'EVOLUTIONARY TRAJECTORY',
      title: 'Strategic Roadmap',
      subtitle:
        'Our journey toward an uncompromised, CPU-secured smart contract layer for the decentralized web.',
      phase1Tag: 'FASE 1 • COMPLETED',
      phase1Title: 'Genesis & Core Consensus Engine',
      phase1Desc:
        'Full decoupling of Ethash from Core-Geth. Static linking of RandomX C++ library. Implementation of LWMA-1 and strict MTP-11 time rules.',
      phase2Tag: 'FASE 2 • IN PROGRESS',
      phase2Title: 'Desktop Client & Testnet Environment',
      phase2Desc:
        'Tauri v2 desktop client release with integrated CPU miner. Public testnet launch, stress-testing seed rotation every 2048 blocks.',
      phase3Tag: 'FASE 3 • UPCOMING',
      phase3Title: 'Mainnet Launch & Explorer Deployment',
      phase3Desc:
        'Official Mainnet genesis activation. Public high-availability RPC seed clusters and production block explorer release.',
      phase4Tag: 'FASE 4 • EXPANSION',
      phase4Title: 'DApp Ecosystem & Layer 2 Bridges',
      phase4Desc:
        'Decentralized exchange deployment, trustless bridges to other EVM networks, developer grant incentives, and ecosystem growth.',
    },
    faq: {
      badge: 'KNOWLEDGE BASE',
      title: 'Frequently Asked Questions',
      subtitle:
        'Everything you need to know about the architecture, economics, and mining mechanics of Rogue Signal.',
      tabAll: 'All',
      tabMining: 'Mining',
      tabConsensus: 'Consensus',
      tabTokenomics: 'Tokenomics',
      tabSecurity: 'Security',
      q1: 'Why combine EVM smart contracts with RandomX PoW?',
      a1: 'Proof-of-Stake tends to centralize wealth among early capital allocators, while GPU/ASIC Proof-of-Work centralizes among industrial mining farms. Combining EVM with RandomX enables programmable decentralized finance secured by everyday individuals running consumer CPUs across the globe.',
      q2: 'Can I mine ROGUE with a GPU or ASIC?',
      a2: 'No. RandomX is mathematically designed around CPU execution units, branch prediction, and fast L3 cache memory (requiring 2MB per thread). GPUs and ASICs perform very poorly per watt compared to standard consumer CPUs, making ASIC development financially irrational.',
      q3: 'What is the role of the 5% Protocol Treasury?',
      a3: 'The 5% split (1.25 ROGUE per block) funds open-source core node development, seed node hosting, security audits, and ecosystem grants. There is zero private pre-mine or venture capital allocation, ensuring the community and developers share aligned long-term incentives.',
      q4: 'How does LWMA-1 difficulty adjustment protect the network?',
      a4: 'Traditional Bitcoin difficulty adjusts every 2016 blocks, making it susceptible to sudden hashrate migration attacks. LWMA-1 recalculates difficulty on every single block over a 60-block window (~30m) with +-33% clamping, maintaining the 30-second target block time with surgical precision.',
      q5: 'Are Solidity smart contracts 100% compatible?',
      a5: 'Yes. Rogue Signal maintains complete EVM opcode and bytecode compatibility. Any smart contract or tool built for Ethereum (Uniswap, OpenZeppelin, Hardhat, Foundry) runs seamlessly on Rogue Signal.',
      q6: 'What is the MTP-11 rule and how is the network protected against 51% attacks?',
      a6: 'Median Time Past (MTP-11) enforces that every new block carries a timestamp greater than the median of the previous 11 blocks (max 15s future drift). In addition, ECBP-1100 (MESS) polynomial gravity and a hard 90-block MaxReorgDepth (~45m) protect the chain against deep 51% reorganizations from Block 0.',
      q7: 'How does seed rotation work in RandomX?',
      a7: 'The RandomX virtual machine dataset regenerates around a new seed hash every 2048 blocks (~17.07h). A 64-block (~32m) notification lag allows all nodes to precalculate the dataset in background threads, preventing orphan blocks and chain splits.',
    },
    footer: {
      tagline: 'The premier EVM smart contract network secured by CPU RandomX Proof-of-Work.',
      chainInfo: 'Chain ID: 800055 (0xc3537) • Algorithm: RandomX rx/0 • Block: 30s • Reward: 25 ROGUE',
      rights: '© 2026 Rogue Signal Network. Released under open-source licenses.',
      linksResources: 'Resources',
      linksCommunity: 'Community',
      linksDevelopers: 'Developers',
      statusHealthy: 'Network Telemetry Optimal',
    },
  },
  es: {
    nav: {
      origin: 'Orígenes',
      consensus: 'Consenso',
      architecture: 'Arquitectura',
      tokenomics: 'Tokenomics',
      mining: 'Minería',
      roadmap: 'Roadmap',
      faq: 'FAQ',
      downloads: 'Descargas',
      addNetwork: 'Añadir ROGUE a Wallet',
      networkAdded: 'Añadida a Wallet',
    },
    hero: {
      statusBadge: 'ARQUITECTURA MAINNET LISTA • CHAIN ID 800055',
      headlinePart1: 'EJECUCIÓN EVM.',
      headlineAccent: 'RANDOMX',
      headlinePart2: 'PROOF-OF-WORK.',
      subheadline:
        'Rogue Signal une la potencia de contratos inteligentes Turing-completos en Solidity de Ethereum Classic con la minería por CPU resistente a ASICs de Monero. Una revolución descentralizada impulsada por procesadores cotidianos.',
      ctaAddToWallet: 'Añadir Red Rogue',
      ctaMining: 'Comenzar a Minar',
      ctaGithub: 'Ver Código',
      terminalTitle: 'TELEMETRÍA DE PROTOCOLO EN VIVO',
      terminalLive: 'SINCRONIZADO',
      statBlockTime: 'Bloque de 30s',
      statBlockReward: '25 ROGUE / Bloque',
      statAlgorithm: 'RandomX (rx/0)',
      statMaxSupply: 'Hard Cap de 100M',
    },
    origin: {
      badge: 'LINAJE ARQUITECTÓNICO',
      title: 'Forjado desde Classic. Liberado por RandomX.',
      subtitle:
        'Ethereum Classic demostró que los contratos inmutables perduran. Monero demostró que las CPUs mantienen la minería democrática. Rogue Signal sintetiza ambos paradigmas en una única cadena soberana.',
      card1Title: 'Motor Core de Ethereum Classic',
      card1Desc:
        'Derivado de Core-Geth, Rogue Signal preserva la máquina de estados EVM probada en combate, medición precisa de gas, interfaces RPC y compatibilidad total con herramientas sin ceder en descentralización.',
      card2Title: 'Desacoplamiento de Ethash / Etchash',
      card2Desc:
        'Ethash y Etchash cayeron ante cárteles de fabricantes de ASICs y macro-granjas de GPUs. Rogue Signal eliminó la dependencia de ancho de banda de memoria para erradicar los monopolios mineros.',
      card3Title: 'Núcleo Nativo RandomX de Monero en C++',
      card3Desc:
        'Integrado como motor de consenso enlazado estáticamente, RandomX ejecuta código máquina pseudoaleatorio complejo optimizado específicamente para microarquitecturas de CPU de propósito general.',
    },
    consensus: {
      badge: 'EL TRILEMA DEL CONSENSO',
      title: 'Ethash vs RandomX vs Rogue Signal',
      subtitle:
        '¿Por qué elegir entre contratos inteligentes y minería justa cuando puedes tener ambos ejecutándose en paralelo a nivel de protocolo?',
      col1Header: 'Ethereum Classic',
      col1Sub: 'Ethash / Etchash',
      col2Header: 'Monero',
      col2Sub: 'RandomX UTXO Puro',
      col3Header: 'Rogue Signal',
      col3Sub: 'EVM + RandomX rx/0',
      badgeWinner: 'LA SÍNTESIS PERFECTA',
      rowAlgo: 'Algoritmo de Minería',
      rowHardware: 'Hardware Objetivo',
      rowAsic: 'Resistencia ASIC',
      rowVm: 'Motor de Smart Contracts',
      rowBlockTime: 'Tiempo Objetivo de Bloque',
      rowEcosystem: 'Herramientas y DApps',
      etcAlgo: 'Etchash (Basado en DAG)',
      etcHw: 'GPUs y ASICs Ethash',
      etcAsic: 'Vulnerable a Hardware Dedicado',
      etcVm: 'Ethereum Virtual Machine (EVM)',
      etcTime: '13 segundos',
      etcEco: 'Estándar Web3 / Solidity',
      xmrAlgo: 'RandomX (Perfil rx/0)',
      xmrHw: 'CPUs Domésticas (Caché L3)',
      xmrAsic: 'Estrictamente Resistente a ASICs',
      xmrVm: 'Ninguno (Cadena Privada UTXO Pura)',
      xmrTime: '120 segundos',
      xmrEco: 'Billetera propietaria / CLI exclusivamente',
      rogueAlgo: 'RandomX rx/0 con Scratchpad 2MB',
      rogueHw: 'CPUs Universales (x86-64 / ARM64)',
      rogueAsic: 'Neutralidad Absoluta de Hardware',
      rogueVm: 'EVM Completa (Solidity / Vyper)',
      rogueTime: '30 segundos (LWMA-1 + Finalidad MESS)',
      rogueEco: 'MetaMask, Foundry, Hardhat y Remix',
    },
    architecture: {
      badge: 'CONSENSO Y SEGURIDAD',
      title: 'Ingeniería de Precisión en Cada Bloque',
      subtitle:
        'Desde la ejecución de transacciones a alta velocidad hasta el ensamblaje criptográfico de bloques, explora la mecánica de Rogue Signal.',
      step1Title: '01. Transición de Estados EVM',
      step1Desc:
        'Las transacciones se ejecutan en la EVM con cálculo determinista de gas, generando balances de cuenta y raíces de estado de contratos.',
      step2Title: '02. Vinculación de Semilla y Cabecera',
      step2Desc:
        'La cabecera del bloque enlaza la raíz de estado actual, el hash padre y el Hash de Semilla activo de RandomX determinado por la época.',
      step3Title: '03. Ejecución JIT RandomX en C++',
      step3Desc:
        'Los mineros de CPU ejecutan generadores de código aleatorio en scratchpads de 2MB de caché L3, probando nonces para satisfacer la dificultad LWMA-1.',
      step4Title: '04. Propagación Rápida y Finalidad',
      step4Desc:
        'Los bloques válidos se propagan por la red P2P con tasa de huérfanos <0.5%, aplicando validación MTP-11, ECBP-1100 (MESS) y finalidad de 90 bloques.',
      specLwmaTitle: 'Ajuste de Dificultad LWMA-1 (N=60)',
      specLwmaDesc:
        'Media Móvil Ponderada Linealmente que recalcula la dificultad bloque a bloque en una ventana de 60 bloques (~30m) con clamp +-33%. Previene que oscilaciones bruscas de hashrate alteren el objetivo de 30 segundos.',
      specMtpTitle: 'Regla MTP-11, Drift de 15s y Finalidad MESS',
      specMtpDesc:
        'Cada bloque debe superar la mediana de los últimos 11 bloques (máx. 15s futuro), mientras ECBP-1100 (MESS) y el límite duro de 90 bloques (MaxReorgDepth) neutralizan ataques del 51% y time-warp.',
      specSeedTitle: 'Rotación de Semilla Cada 2048 Bloques',
      specSeedDesc:
        'La semilla de RandomX cambia cada 2048 bloques (~17.07h) con un aviso previo de 64 bloques (~32m) de retraso, permitiendo a todos los nodos precargar el nuevo dataset en memoria en segundo plano.',
      specMemoryTitle: 'Scratchpad de 2MB y Minería con Nodo Completo',
      specMemoryDesc:
        'Satura exactamente la caché L3 por hilo de las CPUs estándar mientras deshabilita eth_getWork y proxies Stratum para exigir que cada máquina minera ejecute un nodo completo.',
    },
    tokenomics: {
      badge: 'POLÍTICA MONETARIA',
      title: 'Escasez Estricta. Cero Emisión de Cola.',
      subtitle:
        'Un suministro monetario determinista limitado estrictamente a 100 Millones de ROGUE, estructurado para solidez deflacionaria a largo plazo.',
      hardCapLabel: 'SUMINISTRO MÁXIMO',
      hardCapVal: '100,000,000',
      hardCapSub: 'Hard cap absoluto, no inflacionario',
      blockRewardLabel: 'RECOMPENSA BASE',
      blockRewardVal: '25 ROGUE',
      blockRewardSub: 'Emitidos cada 30 segundos',
      halvingPeriodLabel: 'ÉPOCA DE HALVING',
      halvingPeriodVal: '2,000,000',
      halvingPeriodSub: '~1.90 años por ciclo',
      splitLabel: 'SPLIT DE RECOMPENSA',
      splitVal: '95% / 5%',
      splitSub: 'Minero / Tesorería de Protocolo',
      treasuryNoticeTitle: 'Transparencia de la Tesorería de Protocolo',
      treasuryNoticeDesc:
        'El 95% (23.75 ROGUE + 100% de las comisiones del bloque) va directamente al minero de CPU que resolvió el bloque. El 5% restante (1.25 ROGUE) financia el desarrollo continuo del cliente core, mantenimiento de nodos semilla, auditorías de seguridad e incentivos a desarrolladores. Cero preminado privado, cero asignaciones a fondos VC y cero puertas traseras.',
      chartTitle: 'Curva de Emisión Proyectada y Halvings',
      chartSubtitle:
        'Reducción progresiva de la recompensa cada 2.0M de bloques (~1.90 años) hasta alcanzar el límite terminal de 100M ROGUE.',
      era1: 'Era 1 (Bloques 0 - 2.0M): 25 ROGUE (50M emitidos)',
      era2: 'Era 2 (Bloques 2.0M - 4.0M): 12.5 ROGUE (25M emitidos)',
      era3: 'Era 3 (Bloques 4.0M - 6.0M): 6.25 ROGUE (12.5M emitidos)',
      era4: 'Era 4+ (Bloques 6.0M+): 3.125 ROGUE hasta 0 (100M Terminal)',
    },
    evm: {
      badge: 'SUITE DE DESARROLLO',
      title: '100% Nativo en Solidity y EVM',
      subtitle:
        'Despliega contratos inteligentes sin modificaciones. Cada ERC-20, ERC-721, DEX o protocolo DeFi funciona de inmediato con las herramientas de siempre.',
      feat1Title: 'Compatible con Solidity y Vyper',
      feat1Desc:
        'Escribe contratos inteligentes utilizando Solidity o Vyper convencional. El bytecode se ejecuta directamente en el entorno de ejecución EVM.',
      feat2Title: 'Soporte de Herramientas Estándar',
      feat2Desc:
        'Conecta tus flujos de trabajo a Rogue Signal vía RPC: Hardhat, Foundry, Remix, Brownie y librerías Ethers.js/Viem.',
      feat3Title: 'Billeteras Web3 Universales',
      feat3Desc:
        'Conecta con total fluidez MetaMask, Rabby, Rainbow, Coinbase Wallet o billeteras hardware mediante métodos RPC estándar.',
    },
    mining: {
      badge: 'TRABAJO DESCENTRALIZADO',
      title: 'Comienza a Minar ROGUE con tu CPU',
      subtitle:
        'Únete al consenso descentralizado en segundos. Utiliza XMRig o activa el minero integrado dentro del nodo core.',
      tabXmrig: 'XMRig (Recomendado)',
      tabCore: 'Nodo Core CLI',
      tabSpecs: 'Guía de Hardware',
      xmrigDesc:
        'Configura XMRig con la dirección de tu nodo Rogue local o remoto y tu dirección de cobro:',
      coreDesc:
        'Ejecuta los hilos de minería integrados directamente dentro de tu binario local core-rogue:',
      copyBtn: 'Copiar Configuración',
      copiedBtn: '¡Copiado al Portapapeles!',
      recommendedCpu: 'CPU moderna de 6+ núcleos (AMD Ryzen 5000/7000/9000 o Intel Core 12va+ Gen)',
      recommendedRam: '8GB+ RAM DDR4/DDR5 Dual Channel con HugePages de 1GB habilitadas',
      hugePagesNotice: 'Habilita HugePages de 1GB en Linux para un incremento del 15-30% en hashrate.',
    },
    downloads: {
      badge: 'ECOSISTEMA DE CLIENTES',
      title: 'Ejecuta un Nodo. Controla la Señal.',
      subtitle:
        'Clientes oficiales nativos diseñados para máxima estabilidad, bajo consumo de recursos y total soberanía criptográfica.',
      clientTitle: 'Rogue Desktop Client',
      clientDesc:
        'Aplicación de escritorio oficial en Tauri v2. Incluye billetera HD multicuentas, minero CPU RandomX integrado, gestor de nodo y panel de telemetría.',
      clientBtn: 'Descargar GUI Desktop',
      nodeTitle: 'Rogue Core Node CLI',
      nodeDesc:
        'Demonio de nodo completo de alto rendimiento basado en Core-Geth con integración estática de RandomX en C++. Para mineros, validadores y proveedores RPC.',
      nodeBtn: 'Obtener Binario Core',
      specsTitle: 'Especificaciones de Red',
      specsDesc:
        'Lee el documento técnico completo de especificaciones, pruebas matemáticas de dificultad, cronogramas de rotación de semillas y parámetros de consenso.',
      specsBtn: 'Ver Especificaciones',
    },
    roadmap: {
      badge: 'TRAYECTORIA ESTRATÉGICA',
      title: 'Roadmap de Desarrollo',
      subtitle:
        'Nuestro camino hacia una capa de contratos inteligentes protegida por CPU sin concesiones para la web descentralizada.',
      phase1Tag: 'FASE 1 • COMPLETADO',
      phase1Title: 'Génesis y Motor de Consenso Core',
      phase1Desc:
        'Desacoplamiento total de Ethash en Core-Geth. Enlace estático de la librería RandomX en C++. Implementación de LWMA-1 y reglas de tiempo MTP-11.',
      phase2Tag: 'FASE 2 • EN CURSO',
      phase2Title: 'Cliente Desktop y Red de Pruebas',
      phase2Desc:
        'Lanzamiento del cliente de escritorio Tauri v2 con minero CPU integrado. Despliegue de testnet pública probando rotación de semillas cada 2048 bloques.',
      phase3Tag: 'FASE 3 • PRÓXIMAMENTE',
      phase3Title: 'Lanzamiento Mainnet y Explorador',
      phase3Desc:
        'Activación oficial del bloque génesis en Mainnet. Clusters de nodos semilla de alta disponibilidad y explorador de bloques de producción.',
      phase4Tag: 'FASE 4 • EXPANSIÓN',
      phase4Title: 'Ecosistema DApps y Puentes Layer 2',
      phase4Desc:
        'Despliegue de exchanges descentralizados, puentes sin custodia hacia otras redes EVM, programa de subvenciones para desarrolladores y crecimiento del ecosistema.',
    },
    faq: {
      badge: 'BASE DE CONOCIMIENTO',
      title: 'Preguntas Frecuentes',
      subtitle:
        'Todo lo que necesitas saber sobre la arquitectura, economía y mecánica de minería de Rogue Signal.',
      tabAll: 'Todas',
      tabMining: 'Minería',
      tabConsensus: 'Consenso',
      tabTokenomics: 'Tokenomics',
      tabSecurity: 'Seguridad',
      q1: '¿Por qué combinar contratos inteligentes EVM con RandomX PoW?',
      a1: 'Proof-of-Stake tiende a centralizar la riqueza entre los primeros asignadores de capital, mientras que Proof-of-Work con GPU/ASIC se centraliza en macrogranjas industriales. La combinación de EVM con RandomX permite finanzas descentralizadas programables protegidas por usuarios cotidianos con CPUs comunes en todo el mundo.',
      q2: '¿Puedo minar ROGUE con una GPU o un ASIC?',
      a2: 'No. RandomX está diseñado matemáticamente alrededor de unidades de ejecución de CPU, predicción de saltos y memoria caché L3 ultrarrápida (requiriendo 2MB por hilo). Las GPUs y ASICs tienen un rendimiento por vatio muy deficiente frente a CPUs estándar, haciendo que fabricar ASICs sea financieramente inviable.',
      q3: '¿Cuál es el propósito de la Tesorería de Protocolo del 5%?',
      a3: 'El split del 5% (1.25 ROGUE por bloque) financia el desarrollo de código abierto del nodo core, alojamiento de nodos semilla, auditorías de seguridad y subvenciones al ecosistema. No hay preminado privado ni participación de capital de riesgo (VC), alineando incentivos a largo plazo.',
      q4: '¿Cómo protege el ajuste de dificultad LWMA-1 a la red?',
      a4: 'La dificultad tradicional de Bitcoin se ajusta cada 2016 bloques, exponiéndola a ataques de migración repentina de hashrate. LWMA-1 recalcula la dificultad en cada bloque individual sobre una ventana de 60 bloques (~30m) con clamp +-33%, manteniendo el tiempo de bloque de 30 segundos con precisión milimétrica.',
      q5: '¿Son los contratos inteligentes en Solidity 100% compatibles?',
      a5: 'Sí. Rogue Signal mantiene compatibilidad total de opcodes y bytecode con la EVM. Cualquier contrato inteligente o herramienta desarrollada para Ethereum (Uniswap, OpenZeppelin, Hardhat, Foundry) funciona sin cambios en Rogue Signal.',
      q6: '¿Qué es la regla MTP-11 y cómo se protege la red frente a ataques del 51%?',
      a6: 'Median Time Past (MTP-11) exige que cada bloque nuevo tenga una marca de tiempo mayor que la mediana de los últimos 11 bloques (máx. 15s futuro). Además, la gravedad polinómica ECBP-1100 (MESS) y el límite duro de 90 bloques (MaxReorgDepth ~45m) protegen la cadena frente a reorganizaciones profundas desde el Bloque 0.',
      q7: '¿Cómo funciona la rotación de semillas en RandomX?',
      a7: 'El dataset de la máquina virtual RandomX se regenera alrededor de un nuevo hash de semilla cada 2048 bloques (~17.07h). Un período de aviso previo de 64 bloques (~32m) de retraso permite a todos los nodos precalcular el dataset en segundo plano, evitando bifurcaciones y bloques huérfanos.',
    },
    footer: {
      tagline: 'La red líder de contratos inteligentes EVM protegida por minería RandomX CPU Proof-of-Work.',
      chainInfo: 'Chain ID: 800055 (0xc3537) • Algoritmo: RandomX rx/0 • Bloque: 30s • Recompensa: 25 ROGUE',
      rights: '© 2026 Rogue Signal Network. Publicado bajo licencias de código abierto.',
      linksResources: 'Recursos',
      linksCommunity: 'Comunidad',
      linksDevelopers: 'Desarrolladores',
      statusHealthy: 'Telemetría de Red Óptima',
    },
  },
};

