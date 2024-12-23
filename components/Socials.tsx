import React from "react";
import { FaDiscord, FaTelegram, FaTwitter } from "react-icons/fa6";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
const Socials = () => {
  return (
    <div className="bg-gray-400 rounded-xl py-10 px-10 ">
      <p className={`${poppins.className} text-xl`}>Join our community !</p>
      <p>
        Be the first to hear about community announcements and join the
        discussion!
      </p>

      <section className="flex gap-3">
        <FaTwitter />
        <FaDiscord />
        <FaTelegram />
      </section>
    </div>
  );
};

export default Socials;
