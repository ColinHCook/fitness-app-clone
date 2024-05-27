// src/components/Hero.js
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="text-center py-10">
      <div className="hero-content">
        <h1 className="text-6xl font-bold">Track Your Nutrition Intake</h1>
        <p className="mt-4 text-lg font-bold">
          Start your journey to a healthier lifestyle with our calorie tracker
          app.
        </p>
        <div className="mt-12">
          <Link
            to="/nutrition-tracker"
            className="bg-white text-blue-500 font-bold text-lg border-4 px-12 py-4 rounded-full mt-4 mr-4 hover:bg-gray-300 hover:border-3 hover:border-blue-500"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
