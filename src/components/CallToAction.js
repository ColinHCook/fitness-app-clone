// src/components/CallToAction.js
import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="text-center py-16">
      <p className="text-4xl text-blue-600 font-bold mb-8">
        Ready to take control of your nutrition?
      </p>
      <Link
        to="/nutrition-tracker"
        className="bg-white text-blue-500 text-lg border-2 px-6 py-4 rounded-full hover:bg-gray-300 hover:border-2 hover:border-blue-500"
      >
        Start Now{" "}
      </Link>
    </section>
  );
};

export default CallToAction;
