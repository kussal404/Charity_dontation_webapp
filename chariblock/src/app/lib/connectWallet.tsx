import { BrowserProvider } from "ethers";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export interface WalletConnection {
  account: string;
  provider: BrowserProvider;
  signer: any; // You may want to type this more strictly
}

export const connectWallet = async (): Promise<WalletConnection | null> => {
  if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    try {
      const accounts: string[] = await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      return {
        account: accounts[0],
        provider,
        signer,
      };
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  return null;
};
