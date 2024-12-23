import React from "react";
import { FaDiscord, FaTelegram, FaXTwitter } from "react-icons/fa6";
import { Poppins } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
const Socials = () => {
  return (
    <div className="bg-gray-200 rounded-xl py-5 px-10 flex  justify-between items-center">
      <section className=" flex flex-col gap-3  ">
        <p className={`${poppins.className} text-xl`}>Join our community !</p>
        <p>
          Be the first to hear about community announcements and join the
          discussion!
        </p>

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
      </section>

      <section>
        <Image
          src={"/images/community.svg"}
          height={300}
          width={300}
          alt="community"
          className="h-[250px]  w-[250px]"
        />
      </section>
    </div>
  );
};

export default Socials;
