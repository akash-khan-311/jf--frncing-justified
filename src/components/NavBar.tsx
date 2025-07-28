'use client'
import Link from 'next/link';
import React from 'react'
// Icons
import { PiUser } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { BiShoppingBag } from "react-icons/bi";
import Image from 'next/image';



export default function NavBar() {
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Effect to handle body scroll lock when menu is open
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function to reset scroll on component unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#shop', label: 'Shop' },
    { href: '#blogs', label: 'Blogs' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header data-aos="fade-down"

      className="relative w-full z-50 ">
      <div className="flex items-center justify-between py-4 container mx-auto px-3 md:px-0  w-full  ">
        {/* Desktop Navigation (Left) */}
        <nav className="hidden md:flex items-center gap-6 font-medium  text-gray-600 dark:text-gray-400 flex-1">
          {navItems.map(item => (
            <Link key={item.href} href={item.href} className="hover:text-gray-600 text-black  transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle (Hamburger/Close Icon) */}
        <div className="md:hidden flex-1">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" aria-expanded={isMenuOpen} className="text-black dark:text-white cursor-pointer">
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#000" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#000" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* Centered Logo */}
        <div className="">
          <Link href="/" aria-label="Company Logo" >
            <Image src='/assests/logo/logo.png' alt="Company Logo" width={50} height={50} />
          </Link>
        </div>

        {/* Desktop Navigation (Right) */}
        <nav className="hidden md:flex items-center justify-end gap-6  flex-1">
          <Link href="#" className="font-medium text-black  hover:text-gray-600 transition-colors flex items-center gap-x-2">Login <PiUser className="text-2xl" /></Link>
          <Link href="#" className="font-medium text-black hover:text-gray-600 transition-colors flex items-center gap-x-2"><CiSearch className="text-2xl" /></Link>
          <Link href="#" className="relative  hover:text-gray-600 border-2 border-black dark:border-white text-black  rounded-lg hover:bg-black dark:hover:bg-white dark:hover:text-black transition-colors">
            <BiShoppingBag className="text-2xl " />
            <span className="absolute top-0 -right-2 bg-black h-4 p-2 w-4 rounded-full flex items-center justify-center text-white">0</span>
          </Link>
        </nav>

        {/* Sign Up button visible on mobile (Right side) */}
        <div className="md:hidden flex-1 flex justify-end">
          <Link href="#" className="px-4 py-2 text-sm font-semibold border-2 border-black dark:border-white text-black  rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
            Login
          </Link>
        </div>
      </div>

      {/* Mobile Menu (Fullscreen Overlay) */}
      <div className={`md:hidden fixed inset-0 backdrop-blur-3xl bg-white/50 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform-none' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-800">
          <Link href="/" aria-label="Company Logo" >
            <Image src='/assests/logo/logo.png' alt="Company Logo" width={50} height={50} />
          </Link>
          <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu" className="text-black cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full -mt-16 gap-8 text-xl text-gray-800 font-medium">
          {navItems.map(item => (
            <Link key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)} className="hover:text-black  transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
