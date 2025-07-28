'use client'
import Card from "@/components/Card/Card";
import SectionTitle from "@/components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
const CardItems = [
  { id: 1, title: "JF Australian Trellis", price: "₹6,962.00", img: 'https://jfproducts.in/wp-content/uploads/2025/02/australian-trellis_image.jpg' },
  { id: 2, title: "JF Privezy Grass Wall", price: "₹1,646.10 – ₹18,284.10", img: "https://jfproducts.in/wp-content/uploads/2025/02/privezy-latest-feat-img.jpg" },
  { id: 3, title: "JF Privezy Grass Wall", price: "₹1,646.10 – ₹18,284.10", img: "https://jfproducts.in/wp-content/uploads/2025/05/lp-1.png" },


]
const LandScapeProducts = () => {
  return (
    <section className="my-40 relative">
      <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-4" title="Landscape Products" />
      {/* Custom Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-2 z-10">
        <button className="custom-prev1 cursor-pointer border bg-white  text-black p-2 rounded-full md:p-3  shadow-md">
          <FaArrowLeftLong />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 -right-2 z-10">
        <button className="custom-next1 cursor-pointer border bg-white text-black p-2 rounded-full md:p-3  shadow-md">
          <FaArrowRightLong />
        </button>
      </div>
      <div className="">
        <Swiper

          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          navigation={{
            nextEl: ".custom-next1",
            prevEl: ".custom-prev1",
          }}
          loop={true}
          className="mySwiper1"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },

          }}
        >
          {CardItems.map((item, index) => (
            <SwiperSlide key={index} className="relative">
              <Card img={item.img} title={item.title} price={item.price} />
            </SwiperSlide>
          ))}

        </Swiper>
      </div>

    </section>
  );
};

export default LandScapeProducts;