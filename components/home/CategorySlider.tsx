"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Autoplay } from "swiper/modules";
import { ICategory } from "@/Interfaces/categories.interface";

const swiperOptions = {
  spaceBetween: 0,
  slidesPerView: 4,
  modules: [Autoplay],
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
  },
};

export default function CategorySlider({
  categories,
}: {
  categories: ICategory[];
}) {
  return (
    <Swiper className="mb-20" {...swiperOptions}>
      {categories.map((category) => (
        <SwiperSlide key={category._id}>
          <Image
            src={category.image}
            alt={category.name}
            className="w-full object-contain h-[200px]"
            width={300}
            height={300}
          />
          <h2> {category.name} </h2>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
