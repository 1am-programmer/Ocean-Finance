import Link from "next/link";
import Connect from "./Connect";
import { Button } from "./ui/button";
import Image from "next/image";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-16 h-screen">
      <section className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Ocean Finance</h1>

        <Connect />
      </section>

      {/* HERO SECTION  */}
      <section className="flex flex-col gap-5  text-center ">
        <p className="text-7xl font-bold">
          The Marketplace for On-Chain Borrowing and Lending
        </p>
        <p>
          Currently live on Base Sepolia Testnet. Mainnet launch coming soon.
        </p>
      </section>

      <Link href={"/testnet"} className="flex justify-center items-center">
        <Button
          className="bg-blue-500  hover:bg-blue-700 rounded-xl px-8 py-8 text-xl z-10 shadow-md shadow-blue"
          id="launch"
        >
          Launch Testnet
        </Button>
      </Link>

      {/* Image Section */}
      <section className="-mt-24 z-0">
        {/* Add any images or content here */}
        <Image
          src={"/images/eth.png"}
          width="700"
          height="400"
          alt="hero image"
          className="w-full h-[400px] rounded-xl border"
        />
      </section>
    </div>
  );
};

export default Dashboard;
