import ContactForm from "@/components/ContactForm";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="my-32 ">
      <div className="flex flex-col items-center justify-center text-center">
        <span className="text-lg bg-[#b0dd1d]  px-4 py-2 uppercase rounded-full font-medium">Our branches</span>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-6">
          <div className="flex flex-col items-center  mt-4 border border-gray-500 border-dashed p-2">
            <Image src={'/assests/icon/coimbatore.png'} width={50} height={50} alt={'Coimbatore'} className="border border-gray-500 border-dashed p-2" />
            <h4 className="text-base md:text-xl font-semibold uppercase">Coimbatore</h4>
          </div>
          <div className="flex flex-col items-center  mt-4 border border-gray-500 border-dashed p-2">
            <Image src={'/assests/icon/chennai.png'} width={100} height={100} alt={'Chennai'} className="border border-gray-500 border-dashed p-2" />
            <h4 className="text-base md:text-xl font-semibold uppercase">Chennai</h4>
          </div>
          <div className="flex flex-col items-center  mt-4 border border-gray-500 border-dashed p-2">
            <Image src={'/assests/icon/Hydrebad.png'} width={100} height={100} alt={'Hyderabad'} className="border border-gray-500 border-dashed p-2" />
            <h4 className="text-base md:text-xl font-semibold uppercase">Hydrebad</h4>
          </div>
          <div className="flex flex-col items-center  mt-4 border border-gray-500 border-dashed p-2">
            <Image src={'/assests/icon/goa.png'} width={100} height={100} alt={'Goa'} className="border border-gray-500 border-dashed p-2" />
            <h4 className="text-base md:text-xl font-semibold uppercase">Goa </h4>
          </div>
          <div className="flex flex-col items-center  mt-4 border border-gray-500 border-dashed p-2">
            <Image src={'/assests/icon/kochi.png'} width={100} height={100} alt={'Kochi'} className="border border-gray-500 border-dashed p-2" />
            <h4 className="text-base md:text-xl font-semibold uppercase">Kochi</h4>
          </div>
          <div className="flex flex-col items-center  mt-4 border border-gray-500 border-dashed p-2">
            <Image src={'/assests/icon/mumbai.png'} width={100} height={100} alt={'Mumbai'} className="border border-gray-500 border-dashed p-2" />
            <h4 className="text-base md:text-xl font-semibold uppercase">Mumbai</h4>
          </div>


        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-y-5 mt-10 px-4">
        <div className="md:col-span-2 ">
          <ContactForm />
        </div>
        {/* Google Map - 3/4 width on medium and up */}
        <div className="md:col-span-3 rounded-2xl overflow-hidden shadow-lg h-[500px] ">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902683998512!2d90.3915630149828!3d23.750903684588198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8d13f2d35c5%3A0x9d946066f0f70c6a!2sDhaka!5e0!3m2!1sen!2sbd!4v1690554326920!5m2!1sen!2sbd"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;