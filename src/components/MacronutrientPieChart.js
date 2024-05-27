// src/components/MacronutrientPieChart.js
import React, { useEffect, useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { motion } from "framer-motion";

const MacronutrientPieChart = ({ proteins, carbs, fats }) => {
  const [animatedProteins, setAnimatedProteins] = useState(proteins);
  const [animatedCarbs, setAnimatedCarbs] = useState(carbs);
  const [animatedFats, setAnimatedFats] = useState(fats);

  useEffect(() => {
    setAnimatedProteins(proteins);
    setAnimatedCarbs(carbs);
    setAnimatedFats(fats);
  }, [proteins, carbs, fats]);

  const totalNutrients = animatedProteins + animatedCarbs + animatedFats;

  if (totalNutrients === 0) {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-white">
          Add foods to see the macronutrient breakdown
        </p>
      </div>
    );
  }

  const data = [
    { title: "Proteins", value: animatedProteins, color: "#60a5fa" },
    { title: "Carbs", value: animatedCarbs, color: "#1d4ed8" },
    { title: "Fats", value: animatedFats, color: "#fff" },
  ];

  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <PieChart data={data} radius={50} />
      </motion.div>
      <div className="mt-4 text-lg font-bold">
        <div className="flex justify-between space-x-10">
          <span className="text-blue-500">Carbs</span>
          <span>{Math.round((carbs / totalNutrients) * 100)}%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-blue-300">Proteins</span>
          <span>{Math.round((proteins / totalNutrients) * 100)}%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white">Fats</span>
          <span>{Math.round((fats / totalNutrients) * 100)}%</span>
        </div>
      </div>
    </div>
  );
};

export default MacronutrientPieChart;
