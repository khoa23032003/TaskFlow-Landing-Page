"use client";
import About from "@/components/Home/About/About";
import DownloadSection from "@/components/Home/DownloadSection/DownloadSection";
import Hero from "@/components/Home/Hero/Hero";
import TeamConnect from "@/components/Home/TeamConnect/TeamConnect";
import WhyChoose from "@/components/Home/WhyChoose/WhyChoose";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");

      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };

    initAOS();
  }, []);
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <WhyChoose />
      <TeamConnect />
      <DownloadSection />
    </div>
  );
};

export default Home;
