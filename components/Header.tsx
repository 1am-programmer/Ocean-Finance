import React from "react";
import Link from "next/link";
import Connect from "./Connect";
import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const pageLinks = [
  {
    name: "Portfolio",
    href: "/portfolio",
    style: "hover:bg-gray-100 rounded-xl px-2 py-1",
  },
  {
    name: "Borrow",
    href: "/borrow",
    style: "hover:bg-gray-100 rounded-xl px-2 py-1",
  },
  {
    name: "Lend",
    href: "/lend",
    style: "hover:bg-gray-100 rounded-xl px-2 py-1",
  },
];

const Header = () => {
  return (
    <div>
      {" "}
      <section className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <div className="flex gap-2 items-center">
            <Image
              src={"/images/hero.svg"}
              alt="hero-image"
              width={50}
              height={50}
              className="border-none"
            />
            {/* <h1 className="text-4xl font-bold">Ocean Finance</h1> */}
          </div>

          <section className="flex items-center">
            {pageLinks.map((link) => (
              <Link href={link.href} className={link.style}>
                {link.name}
              </Link>
            ))}
          </section>
        </div>

        <Connect />
      </section>
    </div>
  );
};

export default Header;
