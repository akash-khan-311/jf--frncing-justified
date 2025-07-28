'use client'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Features from "@/components/sections/Features/Features";
import HeroSection from "@/components/sections/HeroSection/HeroSection";
import AgriculturalProducts from "@/components/sections/ProductSection/AgriculturalProducts";
import LandScapeProducts from "@/components/sections/ProductSection/LandScapeProducts";
import { useEffect } from 'react';




export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>

      <HeroSection />
      <div className="container mx-auto px-4">
        <AgriculturalProducts />
        <LandScapeProducts />
        <Features />

      </div>
    </div >
  );
}
