import React from "react";

import { Rubik_Glitch, Rubik_Doodle_Shadow } from "next/font/google";

const rubik = Rubik_Glitch({
  weight: "400",
  subsets: ["latin"],
});
const rubik2 = Rubik_Doodle_Shadow({
  weight: "400",
  subsets: ["latin"],
});

const communityNames = [
  "Tech Innovators",
  "Creative Minds",
  "Future Builders",
  "Code Collective",
  "Digital Nomads",
  // "Startup Hub",
  // "Design Pioneers",
  // "Global Collaborators",
];

const partnerNames = [
  "TechCorp",
  "Innovative Solutions",
  "Future Enterprises",
  "DesignWorks",
  "Creative Studios",
  // "NextGen Solutions",
  // "Global Partnerships",
  // "Digital Innovators",
];

export const Community = () => {
  return (
    <div className={`${rubik.className} flex  justify-center`}>
      <ul className="flex gap-5 text-xl">
        {communityNames.map((community) => (
          <li className="text-nowrap">{community}</li>
        ))}
      </ul>
    </div>
  );
};

export const Partners = () => {
  return (
    <div className={`${rubik2.className}  flex justify-center `}>
      <ul className="flex gap-5 text-xl">
        {partnerNames.map((partner) => (
          <li className="text-nowrap">{partner}</li>
        ))}
      </ul>
    </div>
  );
};
