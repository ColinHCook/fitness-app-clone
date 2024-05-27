// src/components/Home.js
import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import Testimonials from "./Testimonials";
import CallToAction from "./CallToAction";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <div>
      <Fade direction="in" triggerOnce duration={1500}>
        <Hero />
      </Fade>
      <Fade direction="up" triggerOnce duration={2000}>
        <Features />
      </Fade>
      <Fade direction="up" triggerOnce duration={2000} delay={300}>
        <Testimonials />
      </Fade>

      <Fade direction="in" triggerOnce duration={2000} delay={600}>
        <CallToAction />
      </Fade>
    </div>
  );
};

export default Home;
