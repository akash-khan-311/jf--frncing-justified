'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const slides = [
  {
    id: 1,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/24701-nature-natural-beauty.jpg/1280px-24701-nature-natural-beauty.jpg',
    title: "JF Australian Trellis",
    description: "Where Aesthetics Meet Durability",
  },
  {
    id: 2,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/24701-nature-natural-beauty.jpg/1280px-24701-nature-natural-beauty.jpg',
    title: "JF Privezy Grass Wall",
    description: "The Perfect Blend Of Greenery",
  },
  {
    id: 3,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/24701-nature-natural-beauty.jpg/1280px-24701-nature-natural-beauty.jpg',
    title: "JF Privacy Screen",
    description: "Enhance Your Outdoor Space",
  },
];

const HeroSection = () => {
  return (
    <div className="w-screen px-4 md:px-10 py-10 relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        centeredSlides={true}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        loop={true}
        className="mySwiper"

      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* Wrapper */}
            <div className="relative w-full lg:h-[calc(100vh-200px)] h-[400px]  overflow-hidden shadow-lg">
              {/* Image */}
              <Image
                fill
                src={slide.img}
                alt={slide.title}
                className="object-cover w-full h-full"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 md:bg-transparent z-10" />

              {/* Mobile Text (Overlay Center) */}
              <div className="absolute z-20 inset-0 flex flex-col items-center justify-center text-center text-white px-4 md:hidden">
                <h2 className="text-4xl font-bold mb-2">{slide.title}</h2>
                <p className="text-sm">{slide.description}</p>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:flex h-full">
                <div className="w-1/2 h-full relative">
                  {/* Image already shown as background */}
                </div>
                <div className="w-1/2 p-6 flex flex-col justify-center z-20 bg-white/70 backdrop-blur-md">
                  <h2 className="text-5xl font-bold mb-2 text-black">
                    {slide.title}
                  </h2>
                  <p className="text-sm md:text-base text-black">{slide.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-2 z-10">
        <button className="custom-prev cursor-pointer bg-green-400/30 text-white p-2 rounded-full md:p-3  shadow-md">
          <FaArrowLeft />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-2 z-10">
        <button className="custom-next cursor-pointer bg-green-400/30 text-white p-2 rounded-full md:p-3  shadow-md">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
