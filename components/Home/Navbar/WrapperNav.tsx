"use client";
import MobileNav from "@/components/Home/Navbar/MobileNav";
import Nav from "@/components/Home/Navbar/Nav";
import React, { useState } from "react";

const WrapperNav = () => {
  const [showNav, setShowNav] = useState(false);

  const openNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);
  return (
    <div>
      <Nav openNav={openNavHandler} />
      <MobileNav showNav={showNav} closeNav={closeNavHandler} />
    </div>
  );
};

export default WrapperNav;
