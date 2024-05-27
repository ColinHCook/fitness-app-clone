// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home"; // Import the new Home component
import NutrientTrackerPage from "./components/NutrientTrackerPage"; // Import the new page component
import Footer from "./components/Footer";
import "./tailwind.css";
import "./App.css";
import "animate.css/animate.min.css";

const App = () => {
  return (
    <Router>
      <div className="container">
        <main>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              path="/nutrition-tracker"
              element={<NutrientTrackerPage />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
