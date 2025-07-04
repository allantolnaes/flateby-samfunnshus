"use client";

import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import Arrangementer from "./Arrangementer/Arrangementer";
import AOS from "aos";
import "aos/dist/aos.css";
import Kontakt from "./Contact/Kontakt";

const Home = () => {
  useEffect(() => {
    const initAos = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };

    initAos();
  }, []);
  return (
    <div className="overflow-hidden">
      <Hero />
      <Arrangementer />
      <Kontakt />
    </div>
  );
};

export default Home;
