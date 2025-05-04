import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CarouselProps {
  images: string[];
}

const getPositions = (isMobile: boolean) => {
  return isMobile
    ? [
        { x: -75, scale: 1.5, opacity: 1, zIndex: 3 }, // Centered
        { x: 100, scale: 1, opacity: 0.9, zIndex: 2 },
        { x: 200, scale: 1, opacity: 0.9, zIndex: 1 },
        { x: 300, scale: 1, opacity: 0.9, zIndex: 0 },
      ]
    : [
        { x: -200, scale: 1.5, opacity: 1, zIndex: 3 },
        { x: 40, scale: 1, opacity: 0.9, zIndex: 2 },
        { x: 250, scale: 1, opacity: 0.9, zIndex: 1 },
        { x: 450, scale: 1, opacity: 0.9, zIndex: 0 },
      ];
};

export default function RowCarousel({ images }: CarouselProps) {
  const [order, setOrder] = useState<number[]>([0, 1, 2, 3]);
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
    setOrder((prev) => {
      const firstCard = prev[0]; // Save first item
      return [...prev.slice(1), firstCard]; // Move first to bottom
    });
  };

  return (
    <div className="relative w-[600px] h-[250px] mx-auto flex items-center justify-center overflow-visible">
      {order.map((index, i) => (
        <motion.img
          key={index}
          src={images[index % images.length]}
          alt={`Card ${index}`}
          animate={{
            x: positions[i].x,
            scale: positions[i].scale,
            opacity: positions[i].opacity,
            zIndex: positions[i].zIndex,
          }}
          initial={positions[i]}
          exit={{ x: -200, scale: 0.7, opacity: 0 }} // Shrinks and fades before cycling
          transition={{ duration: 0.6 }}
          className="rounded-lg shadow-lg object-contain absolute"
          style={{
            aspectRatio: "1/1",
            width: "180px",
          }}
          layoutId={`row-carousel-card-${index}`} // Helps Framer Motion track order changes
        />
      ))}
      <button
        onClick={shiftLeft}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-md shadow-md"
      >
        ◀
      </button>
      <button
        onClick={() => setOrder((prev) => [prev[3], ...prev.slice(0, 3)])}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-md shadow-md"
      >
        ▶
      </button>
    </div>
  );
}
