import About from "@/components/Home/About/About";
import Hero from "@/components/Home/Hero/Hero";
import React from "react";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
    </div>
  );
};

export default Home;
