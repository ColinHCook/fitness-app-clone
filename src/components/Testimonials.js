// src/components/Testimonials.js
import React from "react";
import personSample from "../assets/testimonialSample.svg";

const Testimonials = () => {
  return (
    <section className="text-center py-16">
      <h2 className="text-4xl font-bold mb-8">What Our Users Say</h2>
      <div className="flex justify-center flex-wrap">
        {[
          {
            name: "User 1",
            feedback:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            img: personSample,
          },
          {
            name: "User 2",
            feedback:
              "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            img: personSample,
          },
          {
            name: "User 3",
            feedback:
              "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            img: personSample,
          },
        ].map((user, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md mx-4 mb-4 w-72 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              src={user.img}
              alt={user.name}
              className="mx-auto mb-4 rounded-full"
            />
            <p className="font-bold text-black">{user.name}</p>
            <p className="text-black">"{user.feedback}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
