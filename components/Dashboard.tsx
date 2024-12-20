import Link from "next/link";
import React from "react";
import Connect from "./Connect";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex justify-between gap-10 items-center w-full">
        <h1>Ocean Finance</h1>

        <div className="flex gap-10">
          <Link href={"/portolio"}>Portfolio</Link>
          <Link href={"/borrow"}>Borrow</Link>
          <Link href={"/lend"}>Lend</Link>
          <Link href={"/earn"}>Earn</Link>
        </div>

        <p>Connect wallet</p>
      </section>
    </div>
  );
};

export default Dashboard;
