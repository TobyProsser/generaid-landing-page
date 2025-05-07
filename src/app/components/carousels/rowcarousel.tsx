import Colors from "@components/constants/Colors";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CarouselProps {
  images: string[];
  isSquare?: boolean;
  size?: number;
  uniquekeymodifier: string;
}

const getPositions = (isMobile: boolean) => {
  return isMobile
    ? [
        { x: 0, scale: 1.5, opacity: 1, zIndex: 3 },
        { x: 100, scale: 1, opacity: 0.9, zIndex: 2 },
        { x: 200, scale: 1, opacity: 0.9, zIndex: 1 },
        { x: 300, scale: 1, opacity: 0.9, zIndex: 0 },
      ]
    : [
        { x: 0, scale: 1.5, opacity: 1, zIndex: 3 },
        { x: 40, scale: 1, opacity: 0.9, zIndex: 2 },
        { x: 250, scale: 1, opacity: 0.9, zIndex: 1 },
        { x: 450, scale: 1, opacity: 0.9, zIndex: 0 },
      ];
};
export default function RowCarousel({
  images,
  isSquare,
  size,
  uniquekeymodifier,
}: CarouselProps) {
  const [order, setOrder] = useState<number[]>([0, 1, 2, 3]);
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
    setOrder((prev) => [...prev.slice(1), prev[0]]);
  };

  return (
    <div className="relative w-full mx-auto flex flex-col items-center justify-center overflow-visible">
      <div className="relative w-full h-[250px] flex items-center justify-center">
        {order.map((index, i) => (
          <motion.img
            key={index + uniquekeymodifier}
            src={images[index % images.length]}
            alt={`Card ${index}`}
            animate={{
              x: positions[i].x * ((size ? size : 180) * 0.005),
              scale: positions[i].scale,
              opacity: positions[i].opacity,
              zIndex: positions[i].zIndex,
            }}
            initial={positions[i]}
            exit={{ x: -200, scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-lg shadow-lg object-contain absolute"
            style={{
              aspectRatio: isSquare ? "1/1" : "7/16",
              width: `${size}px`,
              height: isSquare
                ? `${size ?? 180}px`
                : `${(size ?? 180) * 1.6}px`,
              marginBottom: isSquare ? "0px" : `${(size ?? 180) * 1.5}px`,
            }}
            layoutId={`row-carousel-card-${index}-${uniquekeymodifier}`}
          />
        ))}
      </div>
      <div className="mt-10 flex gap-10">
        <button
          onClick={shiftLeft}
          className="bg-black text-white px-6 py-3 rounded-md shadow-md hover:bg-gray-800 transition"
          style={{ backgroundColor: Colors.grey }}
        >
          ◀
        </button>
        <button
          onClick={() => setOrder((prev) => [prev[3], ...prev.slice(0, 3)])}
          className="bg-black text-white px-6 py-3 rounded-md shadow-md hover:bg-gray-800 transition"
        >
          ▶
        </button>
      </div>
    </div>
  );
}
