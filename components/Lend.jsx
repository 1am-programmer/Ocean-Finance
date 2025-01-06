"use client";
import React from "react";

const Lend = () => {
  return (
    <div className="p-6 font-sans">
      <h1 className="text-4xl font-bold text-center mb-6">Lend</h1>
      <p className="text-lg text-center">
        Lend your assets to earn interest. Select a market to get started.
      </p>
      <button
        className="px-6 py-2 mt-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition mx-auto block"
        onClick={() => alert("Lend functionality coming soon!")}
      >
        Lend Now
      </button>
    </div>
  );
};

export default Lend;
