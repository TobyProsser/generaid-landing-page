import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CarouselProps {
  images: string[];
}

const getPositions = (isMobile: boolean) => {
  return isMobile
    ? [
        { x: -100, scale: 1.5, opacity: 1, zIndex: 3 }, // Shifted left on mobile
        { x: 150, scale: 1, opacity: 0.9, zIndex: 2 },
        { x: 175, scale: 1, opacity: 0.9, zIndex: 1 },
        { x: 200, scale: 1, opacity: 0.9, zIndex: 0 },
      ]
    : [
        { x: 0, scale: 1.5, opacity: 1, zIndex: 3 }, // Normal desktop positioning
        { x: 325, scale: 1, opacity: 0.9, zIndex: 2 },
        { x: 300, scale: 1, opacity: 0.9, zIndex: 1 },
        { x: 275, scale: 1, opacity: 0.9, zIndex: 0 },
      ];
};

export default function StackCarousel({ images }: CarouselProps) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [positions, setPositions] = useState(getPositions(isMobile));

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setPositions(getPositions(window.innerWidth < 768));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const shiftLeft = () => {
    setPositions((prev) => {
      const firstCard = prev[0]; // Save first item
      return [...prev.slice(1), firstCard]; // Move first to bottom
    });
  };

  return (
    <div className="relative w-[600px] h-[250px] mx-auto flex items-center justify-center overflow-visible">
      {positions.map((pos, i) => (
        <motion.img
          key={i}
          src={images[i % images.length]}
          animate={pos}
          transition={{ duration: 0.6 }}
          className="rounded-lg shadow-lg object-contain absolute"
          style={{ aspectRatio: "1/1", width: "180px" }}
        />
      ))}
      <button
        onClick={shiftLeft}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-md shadow-md"
      >
        ◀
      </button>
      <button
        onClick={() => setPositions((prev) => [prev[3], ...prev.slice(0, 3)])}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-md shadow-md"
      >
        ▶
      </button>
    </div>
  );
}
