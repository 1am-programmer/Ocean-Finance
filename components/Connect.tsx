import React from "react";
import { CiWallet } from "react-icons/ci";

const Connect = () => {
  return (
    <div className="flex gap-2 items-center text-[1.1rem] hover:cursor-pointer px-5 py-2 rounded-xl">
      <CiWallet /> Connect Wallet
    </div>
  );
};

export default Connect;
