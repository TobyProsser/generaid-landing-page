import { useState } from "react";

interface CircularCarouselProps {
  images: string[];
}

const CircularCarousel: React.FC<CircularCarouselProps> = ({ images }) => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel-container">
      {images.map((image, i) => {
        const position = (i - index + images.length) % images.length;

        return (
          <div key={i} className={`carousel-item position-${position}`}>
            <img src={image} alt={`Slide ${i + 1}`} />
          </div>
        );
      })}
      <button className="next-button" onClick={nextSlide}>
        →
      </button>
    </div>
  );
};

export default CircularCarousel;
