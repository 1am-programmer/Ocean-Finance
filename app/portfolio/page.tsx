"use client";
import React from "react";

const page = () => {
  return (
    <div className="p-6 font-sans">
      <h1 className="text-4xl font-bold text-center mb-6">Portfolio</h1>
      <p className="text-lg text-center mb-4">
        Welcome to the Web3 Portfolio page! Here, you can:
      </p>
      <ul className="list-disc list-inside max-w-md mx-auto text-lg mb-6">
        <li>Trade ARB tokens on the Sepolia testnet</li>
        <li>Borrow and lend ETH on-chain</li>
      </ul>
      <div className="flex justify-center space-x-4">
        <button
          className="px-6 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition"
          onClick={() => alert("Feature coming soon!")}
        >
          Start Trading
        </button>
        <button
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
          onClick={() => alert("Feature coming soon!")}
        >
          Borrow/Lend
        </button>
      </div>
    </div>
  );
};

export default page;
