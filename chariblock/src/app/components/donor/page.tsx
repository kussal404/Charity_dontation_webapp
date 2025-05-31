"use client";
import React from "react";

const DonorPage: React.FC = () => {
  const handleDonate = () => {
    // TODO: Integrate donation logic here
    console.log("Donate button clicked");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h2 className="text-xl font-bold mb-4">Available Charities</h2>

      {/* Later this will be dynamic from smart contract */}
      <div className="border p-4 rounded w-80">
        <h3 className="font-semibold">Helping Hands Foundation</h3>
        <p className="text-sm mb-2">Address: 0x123...456</p>
        <button
          onClick={handleDonate}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Donate
        </button>
      </div>
    </div>
  );
};

export default DonorPage;
