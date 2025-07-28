import Image from "next/image";
import Marquee from "react-fast-marquee";

const Branding = () => {
  return (
    <section className="relative overflow-hidden py-4 bg-[#D9ECFF] border border-r-0 border-l-0 border-t-[#002B53] -rotate-3">
      <Marquee className='flex items-center justify-center gap-8' pauseOnHover autoFill loop={0}>
        <div className="flex items-center gap-2 mr-10">
          <Image src="/assets/icon/Vector.png" width={50} height={50} alt="icon" />
          <h4 className="text-xl font-medium">Quality Product</h4>
        </div>
        <div className="flex items-center gap-2 mr-10">
          <Image src="/assets/icon/Vector.png" width={50} height={50} alt="icon" />
          <h4 className="text-xl font-medium">Shipping Across India</h4>
        </div>
        <div className="flex items-center gap-2 mr-10">
          <Image src="/assets/icon/Vector.png" width={50} height={50} alt="icon" />
          <h4 className="text-xl font-medium">Quality Product</h4>
        </div>
        <div className="flex items-center gap-2 mr-10">
          <Image src="/assets/icon/Vector.png" width={50} height={50} alt="icon" />
          <h4 className="text-xl font-medium">Shipping Across India</h4>
        </div>
      </Marquee >
    </section >
  );
};

export default Branding;