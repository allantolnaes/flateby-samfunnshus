"use client";

import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Reviews from "./Reviews/Reviews";
import Blog from "./Blog/Blog";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
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
      <About />
      <Blog />
      <Reviews />
      <Kontakt />
    </div>
  );
};

export default Home;
