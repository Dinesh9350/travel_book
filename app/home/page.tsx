import React, { JSX } from "react";
import Hero from "./_components/Hero";
import Features from "./_components/Features";
import Services from "./_components/Services";
import Footer from "@/components/Footer";
import TrendingSection from "./_components/TrendingSection";
import TrendingSection2 from "./_components/TrendingSection2";
import TestimonialsSection from "./_components/TestimonialsSection";
import FeaturedDestinationsSection from "./_components/FeaturedDestinationsSection";

export default function HomePage(): JSX.Element {
  return (
    <>
      <Hero />
      {/* <Services /> */}
      <TrendingSection />
      <FeaturedDestinationsSection />
      <TestimonialsSection />
      <TrendingSection2 />


      {/* <Features /> */}

      <Footer />
    </>
  );
}
