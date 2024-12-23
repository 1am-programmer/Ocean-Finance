import React from "react";
import Image from "next/image";
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
    </div>
  );
};

export default Footer;
