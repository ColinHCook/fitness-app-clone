// src/components/Features.js
import React from "react";
import f1 from "../assets/feature1.svg";
import f2 from "../assets/feature2.svg";
import f3 from "../assets/feature3.svg";

const Features = () => {
  return (
    <section className="text-center py-16">
      <h2 className="text-4xl font-bold mb-8">Features</h2>
      <div className="flex justify-center flex-wrap">
        {[
          {
            title: "Track Calories",
            description: "Monitor your daily calorie intake with ease.",
            img: f2,
          },
          {
            title: "Macronutrient Breakdown",
            description: "Keeps track of your macronutrients.",
            img: f1,
          },
          {
            title: "Daily Reports",
            description: "View detailed reports of your daily food intake.",
            img: f3,
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md mx-4 mb-4 w-72 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              src={feature.img}
              alt={feature.title}
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-bold text-black mb-2">
              {feature.title}
            </h3>
            <p className="text-black">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
