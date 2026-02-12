import React, { JSX } from "react";
import Hero from "./_components/Hero";
import Features from "./_components/Features";
import Services from "./_components/Services";
import Footer from "@/components/Footer";

export default function HomePage(): JSX.Element {
  return (
    <>
      <Hero />
      <Services />

      {/* <Features /> */}

      <Footer />
    </>
  );
}
