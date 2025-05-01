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
}

export default function CardinalCarousel({ images }: CarouselProps) {
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
    <div className="relative w-[400px] h-[400px] mx-auto overflow-visible">
      {order.map((direction, index) => (
        <motion.img
          key={index}
          src={images[index % images.length]} // Ensure looping images
          alt={direction}
          initial={positions[direction]}
          animate={positions[direction]}
          transition={{ duration: 0.5 }}
          className="absolute"
        />
      ))}
      <button
        onClick={shiftLeft}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-md shadow-md"
      >
        ◀
      </button>
      <button
        onClick={shiftRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-md shadow-md"
      >
        ▶
      </button>
    </div>
  );
}
