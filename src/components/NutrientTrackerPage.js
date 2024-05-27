// src/components/NutrientTrackerPage.js
import React from "react";
import "animate.css/animate.min.css";
import NutritionTracker from "./NutritionTracker";
import { Fade } from "react-awesome-reveal";

const NutrientTrackerPage = () => {
  return (
    <Fade direction="in" triggerOnce duration={1500}>
      <NutritionTracker />
    </Fade>
  );
};

export default NutrientTrackerPage;
