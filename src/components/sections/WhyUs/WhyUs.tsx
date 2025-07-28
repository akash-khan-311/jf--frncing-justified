import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

const WhyUs = () => {
  return (
    <section className="my-40 relative">
      <div className="lg:w-1/2 mx-auto text-center px-4">
        <div className="flex justify-center">
          <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-4 " title="Why Us" />
        </div>
        <p>We specialize in delivering durable and innovative fencing solutions built to last. With a focus on quality and trust, we help secure spaces across industries and communities.</p>
      </div>



      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:mt-32">
        {/* First Card */}
        <div className="mt-16 flex justify-center">
          <div className="relative bg-white rounded-xl p-8  shadow-md overflow-hidden">
            {/* Gradient Overlay (Top-Right and Bottom-Left) */}
            <div className="absolute inset-0 rounded-xl z-0 bg-gradient-to-bl from-blue-200 via-transparent to-gray-200 pointer-events-none"></div>

            {/* Card Content */}
            <div className="relative z-10 space-y-4">
              <Image
                src={"/assests/icon/badg-1.png"}
                alt="Badge 1"
                width={80}
                height={80}
              />
              <h3 className="text-[22px] font-semibold text-gray-900">
                Unmatched Durability with Corrosion-Free Technology
              </h3>
              <p className="text-base text-gray-700">
                Our JF-270 barbed wire features a robust 270 GSM zinc coating,
                ensuring superior resistance against rust and corrosion. Paired
                with stainless steel binding wire, our fencing solutions are
                designed to withstand harsh environmental conditions, offering
                longevity and reliability.
              </p>
            </div>
          </div>
        </div>
        {/* second Card */}
        <div className="mt-16 flex justify-center lg:-translate-y-28">
          <div className="relative  bg-[#002B55] rounded-xl p-8  shadow-md overflow-hidden">
            {/* Gradient Overlay (Top-Right and Bottom-Left) */}
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_200px_at_90%_50px,#1B7FE166,transparent)] "></div>

            {/* Card Content */}
            <div className="relative z-10 space-y-4 text-white">
              <Image
                src={"/assests/icon/badge-2.png"}
                alt="Badge 1"
                width={80}
                height={80}
              />
              <h3 className="text-[22px] font-semibold ">
                Customer-Centric Approach
              </h3>
              <p className="text-base ">
                At JF Products, customer satisfaction is paramount. We pride ourselves on delivering timely services, maintaining transparent communication, and ensuring a seamless purchasing experience. Our commitment to excellence is reflected in the positive feedback from our valued clients.
              </p>
            </div>
          </div>
        </div>
        {/* third Card */}
        <div className="mt-16 flex justify-center">
          <div className="relative bg-white rounded-xl p-8  shadow-md overflow-hidden">
            {/* Gradient Overlay (Top-Right and Bottom-Left) */}
            <div className="absolute inset-0 rounded-xl z-0 bg-gradient-to-bl from-blue-200 via-transparent to-gray-200 pointer-events-none"></div>

            {/* Card Content */}
            <div className="relative z-10 space-y-4">
              <Image
                src={"/assests/icon/badge-3.png"}
                alt="Badge 1"
                width={80}
                height={80}
              />
              <h3 className="text-[22px] font-semibold text-gray-900">
                Innovative and Diverse Product Range
              </h3>
              <p className="text-base text-gray-700">
                We offer a wide array of fencing solutions, including Polyhex Mesh, Australian Trellis, and GI Poultry Mesh, catering to various needs from agricultural to residential applications. Our products combine functionality with aesthetic appeal, ensuring both security and style.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center">
        <Button>Contact Us</Button>
      </div>

    </section>
  );
};

export default WhyUs;