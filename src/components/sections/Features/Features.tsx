import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

const Features = () => {
  return (
    <section className="relative rounded-xl h-full w-full bg-[#002B55] py-20 px-4 mt-10">
      <div className="flex justify-center flex-col items-center">
        <h2 className="relative z-10 text-white text-4xl font-bold text-center">

        </h2>
        <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-4 text-white" title="Our Products Stand the Test of Time" />

        <div className="mt-10 text-center md:text-left text-white z-50 relative">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-easing="ease-in-out"
            data-aos-once="false"

            className="flex flex-col gap-y-5 md:gap-y-0 md:flex-row items-center gap-x-4">
            <Image src={'/assests/icon/icon-1.png'} width={80} height={80} alt="icon" />
            <div>
              <h4 className="text-xl text-white font-medium">Premium</h4>
              <p className="text-white">Products</p>
            </div>
            <Image src={'/assests/icon/icon-2.png'} width={80} height={80} alt="icon" />
            <div>
              <h4 className="text-xl text-white font-medium">4000+</h4>
              <p className="text-white">Google Review</p>
            </div>
            <Image src={'/assests/icon/icon-3.png'} width={80} height={80} alt="icon" />
            <div>
              <h4 className="text-xl text-white font-medium">Delivery</h4>
              <p className="text-white">Across India</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_500px,#1B7FE166,transparent)] ">

      </div>
    </section>
  );
};

export default Features;