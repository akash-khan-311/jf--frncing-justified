/* eslint-disable react/no-unescaped-entities */
'use client';

import Image from 'next/image';
// import { FaCheck } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0c2d57] text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Subscription Section */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Join Our JF Products</h3>
          <p className="text-sm mb-4">We'll tell you about store updates and discounts</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-[#173f73] text-white placeholder-gray-300 px-4 py-3 rounded-full mb-3 focus:outline-none"
          />
          <div className="flex items-center gap-2 mb-4">
            <input type="checkbox" id="subscribe" className="accent-lime-400" />
            <label htmlFor="subscribe" className="text-sm">Yes, subscribe me to your newsletter.</label>
          </div>
          <button className="w-full cursor-pointer bg-white text-[#0c2d57] font-semibold py-2 rounded-full hover:bg-gray-200 transition">
            Join Now
          </button>
          <div className="mt-6 flex items-center gap-3">
            <Image
              width={100}
              height={100}
              src="/assests/logo/footerLogo.png"
              alt="JF Logo"
              className="w-12 h-12 object-contain"
            />
            <p className="text-sm">
              <strong>Our Branches</strong><br />
              Coimbatore, Chennai, Hyderabad, Goa, Kochi
            </p>
          </div>
        </div>

        {/* Information Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Information</h3>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
            <li><a href="#" className="hover:underline">Our Story</a></li>
            <li><a href="#" className="hover:underline">Blogs</a></li>
            <li>
              <div className="inline-flex items-center gap-2">

                <a href="#" className="hover:underline">Contact</a>
              </div>
            </li>
          </ul>
        </div>

        {/* Helpful Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Helpful</h3>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Shipping Policy</a></li>
            <li><a href="#" className="hover:underline">My Account</a></li>
          </ul>
          <button className="mt-4 cursor-pointer bg-lime-400 text-black font-semibold py-2 px-4 rounded-full w-fit hover:bg-lime-500 transition">
            Contact Us
          </button>
        </div>
      </div>
    </footer>
  );
}
