'use client'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Features from "@/components/sections/Features/Features";
import HeroSection from "@/components/sections/HeroSection/HeroSection";
import AgriculturalProducts from "@/components/sections/ProductSection/AgriculturalProducts";
import LandScapeProducts from "@/components/sections/ProductSection/LandScapeProducts";
import { useEffect } from 'react';
import WhyUs from '@/components/sections/WhyUs/WhyUs';
import Branding from '@/components/sections/Branding/Branding';
import Testimonial from '@/components/sections/Testimonials/Testimonials';

import Contact from '@/components/sections/Contact/Contact';




export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='overflow-hidden'>

      <HeroSection />
      <div className="container mx-auto px-4">
        <AgriculturalProducts />
        <LandScapeProducts />
        <Features />
        <WhyUs />
      </div>
      <Branding />
      <div className="container mx-auto px-4">
        <Testimonial />
        <Contact />

      </div>
    </div >
  );
}
