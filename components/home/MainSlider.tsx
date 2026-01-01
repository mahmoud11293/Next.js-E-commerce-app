"use client";
import slide1 from "@/assets/images/slider-image-1.jpeg";
import slide2 from "@/assets/images/slider-image-2.jpeg";
import slide3 from "@/assets/images/slider-image-3.jpeg";
import slide4 from "@/assets/images/slider-image-4.jpeg";
import slide5 from "@/assets/images/slider-image-5.jpeg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Autoplay } from "swiper/modules";

const swiperOptions = {
  spaceBetween: 0,
  slidesPerView: 1,
  modules: [Autoplay],
  autoplay: {
    delay: 2000,
  },
};

export default function MainSlider() {
  return (
    <div className="w-[80%] mx-auto my-4 flex">
      <div className="w-3/4">
        <Swiper {...swiperOptions}>
          <SwiperSlide>
            <Image
              src={slide1}
              className="w-full object-cover h-[400px]"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={slide5}
              className="w-full object-cover h-[400px]"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={slide4}
              className="w-full object-cover h-[400px]"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-1/4">
        <Image src={slide3} className="w-full object-cover h-[200px]" alt="" />
        <Image src={slide2} className="w-full object-cover h-[200px]" alt="" />
      </div>
    </div>
  );
}
