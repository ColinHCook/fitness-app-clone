// src/components/Footer.js
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="text-center md:text-left ml-8">
            <h2 className="text-lg font-bold mb-4">Nutrition Tracker</h2>
            <p className="mb-8 ">Find your healthy and happy.</p>
            <Link
              to="/nutrition-tracker"
              className="bg-white text-blue-500 text-lg border-2 px-4 py-3 rounded-full  hover:bg-gray-300 hover:border-2 hover:border-blue-500"
            >
              Get Started{" "}
            </Link>
          </div>
          <div className="mt-8 md:mt-0 flex flex-wrap justify-center md:justify-start">
            <div className="md:mr-16 mb-8 md:mb-0">
              <h3 className="text-lg font-bold mb-2">Products</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Food
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Exercise
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Apps
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Premium
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:mr-16 mb-8 md:mb-0">
              <h3 className="text-lg font-bold mb-2">Resources</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Community
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Support Center
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:mr-16 mb-8 md:mb-0">
              <h3 className="text-lg font-bold mb-2">Company</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Press
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>2024 Nutrition Tracker Clone made by Colin Cook.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
