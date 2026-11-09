import { useState } from 'react';

export const ROGUE_CHAIN_PARAMS = {
  chainId: '0xc3517', // 800055 in hex
  chainName: 'Rogue Signal',
  nativeCurrency: {
    name: 'Rogue',
    symbol: 'ROGUE',
    decimals: 18,
  },
  rpcUrls: [
    typeof window !== 'undefined' && (window as any).ROGUE_CUSTOM_RPC
      ? (window as any).ROGUE_CUSTOM_RPC
      : process.env.NEXT_PUBLIC_ROGUE_RPC || 'http://127.0.0.1:8545',
  ],
  blockExplorerUrls: ['https://explorer.roguesignal.org'],
};

export const useAddRogueChain = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addChain = async () => {
    if (typeof window === 'undefined' || !(window as any).ethereum) {
      setError('No Web3 wallet detected (MetaMask, Rabby, Brave, etc.)');
      return false;
    }

    setLoading(true);
    setError(null);

    try {
      // First try switching
      try {
        await (window as any).ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: ROGUE_CHAIN_PARAMS.chainId }],
        });
        setSuccess(true);
        setTimeout(() => setSuccess(false), 4000);
        return true;
      } catch (switchError: any) {
        // 4902 error code indicates the chain has not been added to MetaMask yet
        if (switchError.code === 4902 || switchError?.data?.originalError?.code === 4902) {
          await (window as any).ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [ROGUE_CHAIN_PARAMS],
          });
          setSuccess(true);
          setTimeout(() => setSuccess(false), 4000);
          return true;
        } else {
          throw switchError;
        }
      }
    } catch (err: any) {
      setError(err?.message || 'Failed to add Rogue Signal network');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { addChain, loading, success, error };
};

