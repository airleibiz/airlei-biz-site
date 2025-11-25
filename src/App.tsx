// AIRLEI BIZ™ - AICG Studio Website v4.0
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import WhyUs from "@/pages/WhyUs";import WhatMakesUsSpecial from "@/pages/WhatMakesUsSpecial";
import Portfolio from "@/pages/Portfolio";
import Play from "@/pages/Play";
import AICG101 from "@/pages/AICG101";
import ContactUs from "@/pages/ContactUs";
import Pricing from "@/pages/Pricing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1d1d1f]">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/what-makes-us-special" element={<WhatMakesUsSpecial />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/play" element={<Play />} />
          <Route path="/aicg-101" element={<AICG101 />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}