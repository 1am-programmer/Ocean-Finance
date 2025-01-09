import { Rubik_Glitch, Rubik_Doodle_Shadow } from "next/font/google";

const rubik = Rubik_Glitch({
  weight: "400",
  subsets: ["latin"],
});
const rubik2 = Rubik_Doodle_Shadow({
  weight: "400",
  subsets: ["latin"],
});

const communityNames: string[] = [
  "Tech Innovators",
  "Creative Minds",
  "Future Builders",
  "Code Collective",
  "Digital Nomads",
  "Startup Hub",
  "Design Pioneers",
  "Global Collaborators",
];

const partnerNames: string[] = [
  "TechCorp",
  "Innovative Solutions",
  "Future Enterprises",
  "DesignWorks",
  "Creative Studios",
  "NextGen Solutions",
  "Global Partnerships",
  "Digital Innovators",
];

const infiniteScrollStyle = `
  @keyframes infiniteScroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

interface FloatingCarouselProps {
  items: string[];
  className: string;
  animationDuration: string;
}

const FloatingCarousel: React.FC<FloatingCarouselProps> = ({
  items,
  className,
  animationDuration,
}) => {
  return (
    <div className={`${className} flex justify-center overflow-hidden`}>
      <style>{infiniteScrollStyle}</style>
      <ul
        className="flex gap-5 text-xl"
        style={{
          animation: `infiniteScroll ${animationDuration} linear infinite`,
          whiteSpace: "nowrap",
        }}
      >
        {[...items, ...items].map((item, index) => (
          <li key={`${item}-${index}`} className="text-nowrap">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Community: React.FC = () => (
  <FloatingCarousel
    items={communityNames}
    className={rubik.className}
    animationDuration="20s"
  />
);

export const Partners: React.FC = () => (
  <FloatingCarousel
    items={partnerNames}
    className={rubik2.className}
    animationDuration="25s"
  />
);
