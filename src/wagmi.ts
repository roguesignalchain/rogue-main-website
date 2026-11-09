import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { defineChain } from 'viem';
import { mainnet, sepolia } from 'wagmi/chains';

export const rogueChain = defineChain({
  id: 800055,
  name: 'Rogue Signal',
  nativeCurrency: {
    name: 'Rogue',
    symbol: 'ROGUE',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: [
        process.env.NEXT_PUBLIC_ROGUE_RPC || 'http://127.0.0.1:8545',
      ],
    },
    public: {
      http: [
        process.env.NEXT_PUBLIC_ROGUE_RPC || 'http://127.0.0.1:8545',
      ],
    },
  },
  blockExplorers: {
    default: {
      name: 'Rogue Explorer',
      url: 'https://explorer.roguesignal.org',
    },
  },
  testnet: false,
});

const walletConnectProjectId =
  process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || '3a8170812b534d0ff9d794f168da2d74';

export const config = getDefaultConfig({
  appName: 'Rogue Signal Network',
  projectId: walletConnectProjectId,
  chains: [rogueChain, mainnet, sepolia],
  ssr: true,
});
