// src/components/Header.js
import React from "react";
import icon from "../assets/healthlogo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-zinc-800  ">
      <div className="flex items-center color-black">
        <img
          src={icon}
          alt="Logo"
          className="w-12 h-auto mr-4 bg-blue-500 rounded-lg"
        />
        <nav className="flex space-x-4">
          <Link to="/" className="text-white font-bold text-lg relative group">
            Home
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </Link>

          <Link
            to="/nutrition-tracker"
            className="text-white font-bold text-lg relative group"
          >
            Nutrition Tracker
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
