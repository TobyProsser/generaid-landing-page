import Colors from "@components/constants/Colors";
import { motion } from "framer-motion";
import { useState } from "react";

type Direction = "north" | "east" | "south" | "west";

const positions: Record<
  Direction,
  { x: number; y: number; scale: number; opacity: number; zIndex: number }
> = {
  north: { x: 0, y: 0, scale: 1.1, opacity: 1, zIndex: 3 },
  east: { x: 200, y: -50, scale: 0.67, opacity: 0.5, zIndex: 2 },
  west: { x: -200, y: -50, scale: 0.67, opacity: 0.5, zIndex: 2 },
  south: { x: 0, y: -100, scale: 0.85, opacity: 0.25, zIndex: 1 },
};
interface CarouselProps {
  images: string[];
  uniquekeymodifier: string;
  size?: number; // Optional height setter
}

export default function CardinalCarousel({
  images,
  size = 200, // Default height for all images
  uniquekeymodifier,
}: CarouselProps) {
  const [order, setOrder] = useState<Direction[]>([
    "north",
    "east",
    "south",
    "west",
  ]);

  const shiftRight = () => {
    setOrder((prev) => [prev[3], ...prev.slice(0, 3)]);
  };

  const shiftLeft = () => {
    setOrder((prev) => [...prev.slice(1), prev[0]]);
  };

  return (
    <div className="relative w-[400px] h-[450px] mx-auto flex flex-col items-center justify-between overflow-visible">
      {/* Carousel Section */}
      <div className="relative w-full h-[320px] flex items-center justify-center">
        {order.map((direction, index) => (
          <motion.img
            key={index + uniquekeymodifier}
            src={images[index % images.length]}
            alt={direction}
            initial={positions[direction]}
            animate={positions[direction]}
            transition={{ duration: 0.5 }}
            className="absolute"
            style={{
              height: `${size}px`, // Uniform height
              width: "auto", // Auto width based on aspect ratio
              objectFit: "cover",
            }}
            layoutId={`rotating-carousel-card-${index}-${uniquekeymodifier}`}
          />
        ))}
      </div>

      {/* Buttons Section Below Carousel */}
      <div className="relative mt-4 flex gap-4 z-10">
        <button
          onClick={shiftLeft}
          className="bg-black text-white px-6 py-3 rounded-md shadow-md hover:bg-gray-800 transition"
          style={{ backgroundColor: Colors.grey }}
        >
          ◀
        </button>
        <button
          onClick={shiftRight}
          className="bg-black text-white px-6 py-3 rounded-md shadow-md hover:bg-gray-800 transition"
        >
          ▶
        </button>
      </div>
    </div>
  );
}
