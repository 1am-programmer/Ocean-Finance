import Activity from "@/components/Activity";
import Header from "@/components/Header";
import Tasks from "@/components/Tasks";
import React from "react";
import { FaPenFancy } from "react-icons/fa";

const page = () => {
  return (
    <div>
      <Header />

      <h1 className="text-3xl font-bold py-5">Welcome to Ocean Finance! </h1>

      <section className="bg-gray-200 rounded-xl p-3 flex gap-2 mb-10">
        <FaPenFancy />
        <div className="text-gray-700">
          <h2>Ocean finance is currently live on testnet. </h2>
          <p className="font-light">
            Connect your wallet to earn point for testnet.
          </p>
        </div>
      </section>

      <section className="flex gap-5">
        <Tasks />
        <Activity />
      </section>
    </div>
  );
};

export default page;
