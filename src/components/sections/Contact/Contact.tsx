'use client'
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import { useState } from "react";
const categoryData = [
  { id: 1, name: "Coimbatore", imagePath: "/assests/icon/coimbatore.png", },
  { id: 2, name: "Chennai", imagePath: "/assests/icon/chennai.png", },
  { id: 3, name: "Hyderabad", imagePath: "/assests/icon/hydrebad.png", },
  { id: 4, name: "Goa", imagePath: "/assests/icon/goa.png", },
  { id: 5, name: "Kochi", imagePath: "/assests/icon/kochi.png", },
  { id: 6, name: "Mumbai", imagePath: "/assests/icon/mumbai.png", },
]
const Contact = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (id: number) => {
    setActiveTab(id);
  };
  return (
    <section className="my-32 ">
      <div className="flex flex-col items-center justify-center text-center">
        <span className="text-lg bg-[#b0dd1d]  px-4 py-2 uppercase rounded-full font-medium">Our branches</span>
        <div className="flex justify-center items-center text-sm font-medium text-center text-gray-50 border-b border-b-transparent border-gray-200 ">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-6">
            {
              categoryData.map((item) => (
                <div onClick={() => handleTabClick(item.id)} key={item.id} className={`flex flex-col border border-gray-500 border-dashed items-center cursor-pointer p-2 rounded-lg transition-all duration-300 ${activeTab === item.id ? 'bg-[#b0dd1d59] text-white' : 'bg-white text-black hover:bg-gray-100'}`}>
                  <Image className="border border-gray-500 border-dashed p-2" src={item.imagePath} width={item.name === 'Coimbatore' ? 50 : 100} height={item.name === 'Coimbatore' ? 50 : 100} alt="icon" />
                  <h4 className="text-lg  text-black uppercase">{item.name}</h4>
                </div>
              ))
            }

          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-y-5 mt-10 px-4">
        <div data-aos="fade-right"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false" className="md:col-span-2  ">
          <ContactForm />
        </div>
        {/* Google Map - 3/4 width on medium and up */}
        <div data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="center-bottom"
          className="md:col-span-3 rounded-2xl overflow-hidden shadow-lg h-[500px] ">
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