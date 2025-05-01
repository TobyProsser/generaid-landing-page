import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface MultiItemCarouselProps {
  images: string[]; // Explicitly define images as an array of strings
}

const MultiItemCarousel: React.FC<MultiItemCarouselProps> = ({ images }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={10}
      slidesPerView={3} // Shows center + 2 adjacent images
      centeredSlides={true} // Keeps the center item in focus
      loop={true}
      navigation
      pagination={{ clickable: true }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            style={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MultiItemCarousel;
