"use client"
import React, { useState } from "react";
import { connectWallet } from "@/app/lib/connectWallet";
import { useRouter } from "next/navigation"; // <-- Use Next.js router
import { generateNonce, signMessage, verifySignature } from "../utils/auth";

// ... inside LandingPage component

export default function LandingPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // <-- Use this instead of useNavigate

  const handleAuth = async (role: "donor" | "creator") => {
    setLoading(true);
    const wallet = await connectWallet();

    if (wallet) {
      localStorage.setItem("role", role);
      localStorage.setItem("wallet", wallet.account);
      router.push(`/${role}`); // <-- Use router.push instead of navigate
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome to ChainCharity</h1>
      <p className="mb-8 text-center max-w-md">
        A decentralized platform to connect donors and verified charities.
      </p>

      <div className="flex space-x-4">
        <button
          onClick={() => handleAuth("donor")}
          className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600"
          disabled={loading}
        >
          {loading ? "Connecting..." : "I'm a Donor"}
        </button>

        <button
          onClick={() => handleAuth("creator")}
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Connecting..." : "I'm a Charity Creator"}
        </button>
      </div>
    </div>
  );
}
