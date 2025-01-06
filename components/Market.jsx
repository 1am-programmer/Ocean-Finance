"use client";
import React from "react";

const Market = () => {
  return (
    <div className="p-6 ">
      <h1 className="text-4xl font-bold text-center mb-6">Market</h1>
      <p className="text-lg text-center">
        Explore the available markets for borrowing and lending.
      </p>
      <ul className="list-disc list-inside max-w-md mx-auto mt-4 text-lg">
        <li>ARB/ETH Market</li>
        <li>USDT/ETH Market</li>
        <li>DAI/ETH Market</li>
      </ul>
    </div>
  );
};

export default Market;
