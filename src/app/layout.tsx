import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/sections/Footer/Footer";
import SmoothScrollWrapper from "@/components/SmoothScroll";




const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "JF Products Website",
  description: "Your one-stop solution for high-quality fencing products.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased overflow-x-hidden`}
      >
        <SmoothScrollWrapper>

          <NavBar />
          {children}
          <Footer />
        </SmoothScrollWrapper>
      </body>
    </html>
  );
}
