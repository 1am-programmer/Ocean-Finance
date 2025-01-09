"use client";
import React from "react";

const Borrow = () => {
  return (
    <div className="p-6 ">
      <h1 className="text-4xl font-bold text-center mb-6">Borrow</h1>
      <p className="text-lg text-center">
        Borrow assets by providing collateral. Choose from available markets.
      </p>
      <button
        className="px-6 py-2 mt-4 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition mx-auto block"
        onClick={() => alert("Borrow functionality coming soon!")}
      >
        Borrow Now
      </button>
    </div>
  );
};

export default Borrow;
