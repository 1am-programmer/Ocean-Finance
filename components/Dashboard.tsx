import Link from "next/link";
import Connect from "./Connect";
import { Button } from "./ui/button";
import Image from "next/image";
import { Roboto } from "next/font/google";
import About from "./About";
import Socials from "./Socials";
import Footer from "./Footer";
import { InfiniteMovingCardsDemo } from "./Testimonial";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-16 h-screen">
      <section className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Image
            src={"/images/hero.svg"}
            alt="hero-image"
            width={50}
            height={50}
            className="border-none"
          />
          <h1 className="text-4xl font-bold">Ocean Finance</h1>
        </div>

        <Connect />
      </section>
      {/* HERO SECTION  */}
      <section
        className={`${roboto.className} flex flex-col gap-5  text-center`}
      >
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
        <Image
          src={"/images/hero.svg"}
          width="700"
          height="400"
          alt="hero image"
          className="w-full h-[400px] rounded-lg border"
        />
      </section>
      <About />
      <Socials />
      <hr className="-mx-[9.5rem]" />
      <Footer />
    </div>
  );
};

export default Dashboard;

