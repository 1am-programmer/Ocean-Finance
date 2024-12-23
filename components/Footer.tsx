import React from "react";
import Image from "next/image";
import { FaDiscord, FaTelegram, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

import { Jost } from "next/font/google";

const jost = Jost({
  weight: "400",
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <div className="py-5  flex justify-between items-center">
      <section>
        <div className="flex gap-2 items-center">
          <Image
            src={"/images/hero.svg"}
            alt="hero-image"
            width={40}
            height={40}
            className="border-none"
          />
          <h1 className="text-xl font-bold">Ocean Finance</h1>
        </div>

        <p className={`${jost.className} text-xs text-gray-400`}>
          All rights reserved
        </p>
      </section>

      <section className="flex gap-3">
        <Link
          href={"http://x.com/0x_Danny_"}
          className="text-2xl hover:text-blue-500"
        >
          <FaXTwitter />
        </Link>
        <Link
          href={" https://t.me/OxcEther"}
          className="text-2xl hover:text-blue-500"
        >
          <FaTelegram />
        </Link>
        <Link
          href={"http://discordapp.com/users/1151028385108213760"}
          className="text-2xl hover:text-blue-500"
        >
          <FaDiscord />
        </Link>
      </section>
    </div>
  );
};

export default Footer;
