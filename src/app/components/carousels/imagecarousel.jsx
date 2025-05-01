import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ImageCarousel = ({ images }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;
