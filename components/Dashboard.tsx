import Link from "next/link";
import React from "react";
import Connect from "./Connect";
import { Button } from "./ui/button";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-10 h-screen">
      <section className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <h1 className="text-4xl font-bold">Ocean Finance</h1>

          <section className="flex items-center">
            <Link href={""} className="hover:bg-gray-100 rounded-xl px-2 py-1">
              Portfolio
            </Link>
            <Link href={""} className="hover:bg-gray-100 rounded-xl px-2 py-1">
              Borrow
            </Link>
            <Link href={""} className="hover:bg-gray-100 rounded-xl px-2 py-1">
              Lend
            </Link>
            <Link
              href={"#launch"}
              className="hover:bg-gray-100 rounded-xl px-2 py-1"
            >
              Earn
            </Link>
          </section>
        </div>

        {/* Connect Wallet */}
        <Connect />
      </section>

      {/* HERO SECTION  */}
      <section className="flex flex-col gap-5 text-5xl">
        The Future of Finance is Here The Future of Finance is Here The Future
        of Finance is Here The Future of Finance is Here
      </section>

      <div className="flex justify-center items-center">
        <Link href={"/testnet"}>
          <Button
            className="bg-blue-500  hover:bg-blue-700 rounded-xl px-5 py-5"
            id="launch"
          >
            Launch Testnet
          </Button>
        </Link>
      </div>

      {/* Image Section */}
      <section className="mt-10">
        {/* Add any images or content here */}
      </section>
    </div>
  );
};

export default Dashboard;
