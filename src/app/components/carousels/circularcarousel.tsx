import { useState } from "react";

interface CircularCarouselProps {
  images: string[];
}

const CircularCarousel: React.FC<CircularCarouselProps> = ({ images }) => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Carousel Section */}
      <div className="carousel-container relative w-full max-w-[600px] h-[250px] flex items-center justify-center overflow-hidden">
        {images.map((image, i) => {
          const position = (i - index + images.length) % images.length;

          return (
            <div
              key={i}
              className={`carousel-item position-${position} absolute`}
            >
              <img
                src={image}
                alt={`Slide ${i + 1}`}
                className="rounded-lg shadow-lg object-contain w-[180px]"
              />
            </div>
          );
        })}
      </div>

      {/* Buttons Section Below Carousel */}
      <div className="mt-4 flex gap-4">
        <button
          onClick={prevSlide}
          className="bg-black text-white px-6 py-3 rounded-md shadow-md hover:bg-gray-800 transition"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="bg-black text-white px-6 py-3 rounded-md shadow-md hover:bg-gray-800 transition"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default CircularCarousel;
