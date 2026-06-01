import About from "@/components/Home/About/About";
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
    </div>
  );
};

export default Home;
