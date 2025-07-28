'use client'
import Card from "@/components/Card/Card";
import SectionTitle from "@/components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
const CardItems = [
  { id: 1, title: "Polihex Mesh", price: "₹4,485.00 – ₹11,970.00", img: 'https://jfproducts.in/wp-content/uploads/2025/05/lp-3.png' },
  { id: 2, title: "JF Knotted Fence", price: "₹5,795.00 – ₹13,950.00", img: "https://jfproducts.in/wp-content/uploads/2025/04/1.jpg" },
  { id: 3, title: "JF Barbed Wire- 270 GSM", price: "₹4,995.00", img: "https://jfproducts.in/wp-content/uploads/2025/02/WhatsApp-Image-2024-03-06-at-12.18.14-PM.jpg" },
  { id: 4, title: "FGC RustFree Fencing Poles", price: "₹499.00 – ₹1,589.00", img: "https://jfproducts.in/wp-content/uploads/2025/02/FGC-rec-8-pipe.jpg" },
  { id: 5, title: "GI Poultry Mesh", price: "₹1,260.00 – ₹10,750.00", img: "https://jfproducts.in/wp-content/uploads/2025/02/Shinestar-29-scaled.jpg" },
  { id: 6, title: "JF Privezy Grass Wall", price: "₹1,260.00 – ₹10,750.00", img: 'https://jfproducts.in/wp-content/uploads/2025/02/chainlink-Blue-with-box-1.jpg' },

]
const AgriculturalProducts = () => {
  return (
    <section id="shop" className="my-40 relative">
      <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-4" title="Agricultural Products" />
      {/* Custom Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-2 z-10">
        <button className="custom-prev-agri cursor-pointer border bg-white  text-black p-2 rounded-full md:p-3  shadow-md">
          <FaArrowLeftLong />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 -right-2 z-10">
        <button className="custom-next-agri cursor-pointer border bg-white text-black p-2 rounded-full md:p-3  shadow-md">
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
            nextEl: ".custom-next-agri",
            prevEl: ".custom-prev-agri",
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

export default AgriculturalProducts;