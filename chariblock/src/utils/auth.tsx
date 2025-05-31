import { ethers, verifyMessage } from "ethers";

// Simulate a nonce (normally you'd get this from a backend or a smart contract)
export const generateNonce = (): string => {
  return `Login to ChainCharity at ${new Date().toISOString()}`;
};

// Sign a message with the user's wallet
export const signMessage = async (message: string): Promise<string | null> => {
  try {
    if (!window.ethereum) throw new Error("MetaMask not installed");

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const signature = await signer.signMessage(message);
    return signature;
  } catch (err) {
    console.error("Signing error:", err);
    return null;
  }
};

// Verify the signature matches the given address
export const verifySignature = async (
  address: string,
  message: string,
  signature: string
): Promise<boolean> => {
  try {
    const recoveredAddress = verifyMessage(message, signature);
    return recoveredAddress.toLowerCase() === address.toLowerCase();
  } catch (err) {
    console.error("Verification error:", err);
    return false;
  }
};
