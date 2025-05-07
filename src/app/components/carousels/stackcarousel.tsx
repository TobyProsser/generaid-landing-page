import Colors from "@components/constants/Colors";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CarouselProps {
  images: string[];
  uniquekeymodifier: string;
  isSquare?: boolean;
  size?: number;
}

const getPositions = (isMobile: boolean) => {
  return isMobile
    ? [
        { x: 0, scale: 1.5, opacity: 1, zIndex: 3 },
        { x: 150, scale: 1, opacity: 0.9, zIndex: 2 },
        { x: 175, scale: 1, opacity: 0.9, zIndex: 1 },
        { x: 200, scale: 1, opacity: 0.9, zIndex: 0 },
      ]
    : [
        { x: 0, scale: 1.5, opacity: 1, zIndex: 3 },
        { x: 325, scale: 1, opacity: 0.9, zIndex: 2 },
        { x: 300, scale: 1, opacity: 0.9, zIndex: 1 },
        { x: 275, scale: 1, opacity: 0.9, zIndex: 0 },
      ];
};

export default function StackCarousel({
  images,
  isSquare,
  size,
  uniquekeymodifier,
}: CarouselProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [positions, setPositions] = useState(getPositions(isMobile));

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setPositions(getPositions(window.innerWidth < 768));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const shiftLeft = () => {
    setPositions((prev) => {
      const firstCard = prev[0];
      return [...prev.slice(1), firstCard];
    });
  };

  return (
    <div className="relative w-full max-w-[600px] h-[320px] mx-auto flex flex-col items-center justify-center overflow-visible">
      {/* Carousel Section */}
      <div className="relative w-full h-[250px] flex items-center justify-center">
        {positions.map((pos, i) => (
          <motion.img
            key={i + "stack" + size + isSquare + uniquekeymodifier}
            src={images[i % images.length]}
            animate={pos}
            transition={{ duration: 0.6 }}
            className="rounded-lg shadow-lg object-contain absolute"
            style={{
              aspectRatio: isSquare ? "1/1" : "7/16",
              width: isSquare ? `${size ?? 180}px` : `${size}px`,
              height: isSquare
                ? `${size ?? 180}px`
                : `${(size ?? 180) * 1.6}px`,
              marginBottom: isSquare
                ? `${(size ?? 180) * 0.7}px`
                : `${(size ?? 180) * 1.5}px`,
            }}
            layoutId={`stack-carousel-card-${i}-${uniquekeymodifier}`}
          />
        ))}
      </div>

      {/* Buttons Section Below Carousel */}
      <div className="mt-10 flex gap-10">
        <button
          onClick={shiftLeft}
          className="bg-black text-white px-6 py-3 rounded-md shadow-md hover:bg-gray-800 transition"
          style={{ backgroundColor: Colors.grey }}
        >
          ◀
        </button>
        <button
          onClick={() => setPositions((prev) => [prev[3], ...prev.slice(0, 3)])}
          className="bg-black text-white px-6 py-3 rounded-md shadow-md hover:bg-gray-800 transition"
        >
          ▶
        </button>
      </div>
    </div>
  );
}
