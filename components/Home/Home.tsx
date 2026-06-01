import About from "@/components/Home/About/About";
import DownloadSection from "@/components/Home/DownloadSection/DownloadSection";
import Hero from "@/components/Home/Hero/Hero";
import TeamConnect from "@/components/Home/TeamConnect/TeamConnect";
import WhyChoose from "@/components/Home/WhyChoose/WhyChoose";
import React from "react";

const Home = () => {
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
